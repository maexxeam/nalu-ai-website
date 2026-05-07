import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { syne, dmSans, jetbrains } from '@/lib/fonts'
import { defaultMetadata } from '@/lib/metadata'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { routing } from '@/i18n/routing'
import '@/styles/globals.css'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return {
    ...defaultMetadata,
    title:
      locale === 'en'
        ? {
            default: 'Nalu AI – Demand Intelligence for the Mid-Market',
            template: '%s | Nalu AI',
          }
        : defaultMetadata.title,
    description:
      locale === 'en'
        ? 'ML forecasting, ABC/XYZ analysis and SCM optimization — on-premise, deployable in 4 weeks. Your data stays with you.'
        : defaultMetadata.description,
    openGraph: {
      ...defaultMetadata.openGraph,
      locale: locale === 'en' ? 'en_US' : 'de_DE',
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }
  setRequestLocale(locale)

  return (
    <html
      lang={locale}
      className={`${syne.variable} ${dmSans.variable} ${jetbrains.variable}`}
    >
      <body>
        <Script
          defer
          data-domain="nalu-ai.com"
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
        <Script id="plausible-shim" strategy="afterInteractive">
          {`window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }`}
        </Script>
        <NextIntlClientProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
