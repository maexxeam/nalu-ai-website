import fs from 'node:fs/promises'
import path from 'node:path'
import matter from 'gray-matter'
import type { Locale } from '@/i18n/routing'

export interface PostMeta {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  readTime: string
}

export interface Post extends PostMeta {
  content: string
}

const BLOG_ROOT = path.join(process.cwd(), 'content/blog')

function blogDir(locale: Locale): string {
  return path.join(BLOG_ROOT, locale)
}

async function readEntry(locale: Locale, file: string): Promise<Post> {
  const slug = file.replace(/\.mdx$/, '')
  const raw = await fs.readFile(path.join(blogDir(locale), file), 'utf8')
  const { data, content } = matter(raw)
  return {
    slug,
    content,
    title: String(data.title ?? slug),
    excerpt: String(data.excerpt ?? ''),
    date: String(data.date ?? ''),
    category: String(data.category ?? 'Insight'),
    readTime: String(data.readTime ?? '5 min'),
  }
}

export async function getAllPosts(locale: Locale): Promise<PostMeta[]> {
  let files: string[]
  try {
    files = await fs.readdir(blogDir(locale))
  } catch {
    return []
  }
  const posts = await Promise.all(
    files.filter((f) => f.endsWith('.mdx')).map((f) => readEntry(locale, f)),
  )
  return posts
    .map(({ content: _c, ...meta }) => meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getPost(
  locale: Locale,
  slug: string,
): Promise<Post | null> {
  try {
    return await readEntry(locale, `${slug}.mdx`)
  } catch {
    return null
  }
}

export function formatDate(date: string, locale: Locale = 'de'): string {
  const tag = locale === 'en' ? 'en-US' : 'de-DE'
  return new Date(date).toLocaleDateString(tag, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
