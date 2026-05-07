import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'
import { SITE_URL } from '@/lib/metadata'
import { routing } from '@/i18n/routing'

const STATIC_PATHS = ['/', '/produkt', '/pricing', '/about', '/blog', '/demo']

function urlFor(locale: string, path: string): string {
  if (locale === routing.defaultLocale) {
    return `${SITE_URL}${path === '/' ? '/' : path}`
  }
  return `${SITE_URL}/${locale}${path === '/' ? '' : path}`
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date().toISOString()

  const staticRoutes: MetadataRoute.Sitemap = routing.locales.flatMap((locale) =>
    STATIC_PATHS.map((path) => ({
      url: urlFor(locale, path),
      lastModified: now,
      priority: path === '/' ? 1.0 : path === '/about' ? 0.7 : 0.9,
      changeFrequency:
        path === '/blog' ? ('weekly' as const) : ('monthly' as const),
    })),
  )

  const postRoutes: MetadataRoute.Sitemap = (
    await Promise.all(
      routing.locales.map(async (locale) => {
        const posts = await getAllPosts(locale)
        return posts.map((p) => ({
          url: urlFor(locale, `/blog/${p.slug}`),
          lastModified: new Date(p.date).toISOString(),
          priority: 0.6,
          changeFrequency: 'monthly' as const,
        }))
      }),
    )
  ).flat()

  return [...staticRoutes, ...postRoutes]
}
