import type { Metadata } from 'next'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { syne, dmSans, jetbrains } from '@/lib/fonts'
import { defaultMetadata, SITE_URL } from '@/lib/metadata'
import '@/styles/globals.css'

export const metadata: Metadata = defaultMetadata

const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Nalu AI',
  legalName: 'Nalu AI – Maximilian Fischer',
  url: SITE_URL,
  logo: `${SITE_URL}/opengraph-image`,
  email: 'aloha@nalu-ai.com',
  description:
    'Maßgeschneiderte KI- und ML-Systeme für Demand Planning und Supply Chain Intelligence — gebaut für den deutschen Mittelstand.',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="de"
      className={`${syne.variable} ${dmSans.variable} ${jetbrains.variable}`}
    >
      <body className="bg-navy text-white antialiased">
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
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
