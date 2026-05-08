import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/metadata'
import { routing } from '@/i18n/routing'

const STATIC_PATHS = ['/', '/leistungen', '/about', '/kontakt']

function urlFor(locale: string, path: string): string {
  if (locale === routing.defaultLocale) {
    return `${SITE_URL}${path === '/' ? '/' : path}`
  }
  return `${SITE_URL}/${locale}${path === '/' ? '' : path}`
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date().toISOString()

  return routing.locales.flatMap((locale) =>
    STATIC_PATHS.map((path) => ({
      url: urlFor(locale, path),
      lastModified: now,
      priority: path === '/' ? 1.0 : 0.7,
      changeFrequency: 'monthly' as const,
    })),
  )
}
