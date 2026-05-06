import fs from 'node:fs/promises'
import path from 'node:path'
import matter from 'gray-matter'

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

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

async function readEntry(file: string): Promise<Post> {
  const slug = file.replace(/\.mdx$/, '')
  const raw = await fs.readFile(path.join(BLOG_DIR, file), 'utf8')
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

export async function getAllPosts(): Promise<PostMeta[]> {
  const files = await fs.readdir(BLOG_DIR)
  const posts = await Promise.all(
    files.filter((f) => f.endsWith('.mdx')).map(readEntry),
  )
  return posts
    .map(({ content: _c, ...meta }) => meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getPost(slug: string): Promise<Post | null> {
  try {
    return await readEntry(`${slug}.mdx`)
  } catch {
    return null
  }
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('de-DE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
