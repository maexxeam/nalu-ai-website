import type { Metadata } from 'next'

export const SITE_URL = 'https://nalu-ai.com'

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Nalu AI – Demand Intelligence, maßgeschneidert',
    template: '%s | Nalu AI',
  },
  description:
    'Maßgeschneiderte ML-Systeme für Demand Planning und Vertriebsintelligenz — auf Ihrer Infrastruktur, gebaut für Ihre Daten.',
  keywords: [
    'Demand Planning',
    'ML Forecasting',
    'Custom ML',
    'ETL SAP',
    'On-Premise Machine Learning',
    'Maximilian Fischer',
  ],
  authors: [{ name: 'Maximilian Fischer' }],
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: SITE_URL,
    siteName: 'Nalu AI',
    title: 'Nalu AI – Demand Intelligence, maßgeschneidert',
    description:
      'Maßgeschneiderte ML-Systeme für Demand Planning und Vertriebsintelligenz — auf Ihrer Infrastruktur.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nalu AI – Demand Intelligence, maßgeschneidert',
    description:
      'Maßgeschneiderte ML-Systeme — auf Ihrer Infrastruktur, gebaut für Ihre Daten.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
}
