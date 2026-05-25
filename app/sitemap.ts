import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/metadata'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date().toISOString()
  return [
    {
      url: SITE_URL,
      lastModified: now,
      priority: 1.0,
      changeFrequency: 'monthly',
    },
    {
      url: `${SITE_URL}/en`,
      lastModified: now,
      priority: 0.9,
      changeFrequency: 'monthly',
    },
  ]
}
