import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { syne, dmSans, jetbrains } from '@/lib/fonts'
import { defaultMetadata, localizedMetadata, SITE_URL } from '@/lib/metadata'
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
  const isEn = locale === 'en'
  const localized = isEn ? localizedMetadata.en : localizedMetadata.de
  const canonical = isEn ? `${SITE_URL}/en` : SITE_URL

  return {
    ...defaultMetadata,
    title: {
      default: localized.title,
      template: '%s | Nalu AI',
    },
    description: localized.description,
    openGraph: {
      ...defaultMetadata.openGraph,
      locale: isEn ? 'en_US' : 'de_DE',
      alternateLocale: isEn ? ['de_DE'] : ['en_US'],
      url: canonical,
      title: localized.title,
      description: localized.description,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: localized.title,
      description: localized.description,
    },
    alternates: {
      canonical,
      languages: {
        'de-DE': SITE_URL,
        'en-US': `${SITE_URL}/en`,
        'x-default': SITE_URL,
      },
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

  const organizationLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Nalu AI',
    legalName: 'Nalu AI – Maximilian Fischer',
    url: SITE_URL,
    logo: `${SITE_URL}/opengraph-image`,
    email: 'aloha@nalu-ai.com',
    description:
      locale === 'en'
        ? 'Tailored AI and ML systems for demand planning and supply chain intelligence — built for mid-market manufacturers.'
        : 'Maßgeschneiderte KI- und ML-Systeme für Demand Planning und Supply Chain Intelligence — gebaut für den deutschen Mittelstand.',
    founder: {
      '@type': 'Person',
      name: 'Maximilian Fischer',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'DE',
    },
    areaServed: ['DE', 'AT', 'CH'],
    knowsAbout: [
      'Demand Planning',
      'Absatzprognose',
      'Machine Learning',
      'Supply Chain Management',
      'SAP Integration',
      'On-Premise AI',
      'Mittelstand',
    ],
    sameAs: ['https://www.linkedin.com/in/maximilian-fischer-naluai/'],
  }

  return (
    <html
      lang={locale}
      className={`${syne.variable} ${dmSans.variable} ${jetbrains.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
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
