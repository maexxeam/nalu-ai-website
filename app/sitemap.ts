import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'
import { SITE_URL } from '@/lib/metadata'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date().toISOString()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, priority: 1.0, changeFrequency: 'monthly' },
    { url: `${SITE_URL}/about`, lastModified: now, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${SITE_URL}/blog`, lastModified: now, priority: 0.8, changeFrequency: 'weekly' },
    { url: `${SITE_URL}/demo`, lastModified: now, priority: 0.9, changeFrequency: 'monthly' },
  ]

  const posts = await getAllPosts()
  const postRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.date).toISOString(),
    priority: 0.6,
    changeFrequency: 'monthly',
  }))

  return [...staticRoutes, ...postRoutes]
}
