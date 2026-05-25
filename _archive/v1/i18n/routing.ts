import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['de', 'en'],
  defaultLocale: 'de',
  localeDetection: true,
  localePrefix: 'as-needed',
})

export type Locale = (typeof routing.locales)[number]
