import type { Metadata } from 'next'

export const SITE_URL = 'https://nalu-ai.com'

const TITLE_DE = 'Nalu AI – KI & Demand Planning für den Mittelstand'
const TITLE_EN = 'Nalu AI – AI-powered Demand Intelligence for mid-market'

const DESCRIPTION_DE =
  'Maßgeschneiderte KI- und ML-Systeme für Demand Planning, Absatzprognose und Vertriebsintelligenz im Mittelstand — on-premise, auf Ihrer Infrastruktur, integriert in SAP & ERP.'
const DESCRIPTION_EN =
  'Tailored AI and ML systems for demand planning, sales forecasting and supply chain intelligence for mid-market manufacturers — on-premise, on your infrastructure, integrated with SAP and ERP.'

const KEYWORDS_DE = [
  'KI für den Mittelstand',
  'Künstliche Intelligenz Mittelstand',
  'Machine Learning Mittelstand',
  'Demand Planning',
  'Absatzplanung',
  'Absatzprognose',
  'Bedarfsplanung',
  'ML Forecasting',
  'KI Forecasting',
  'Vertriebsintelligenz',
  'Sales Forecasting',
  'Supply Chain Management Mittelstand',
  'SCM Optimierung',
  'SAP Forecasting',
  'SAP Integration',
  'S/4HANA Anbindung',
  'ERP Integration',
  'ETL SAP',
  'On-Premise Machine Learning',
  'On-Premise KI',
  'Custom ML',
  'KI-Beratung Mittelstand',
  'Data Science Mittelstand',
  'KI Lebensmittelindustrie',
  'Forecasting Lebensmittelproduzent',
  'Demand Intelligence Platform',
  'Maximilian Fischer',
  'Nalu AI',
]

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE_DE,
    template: '%s | Nalu AI',
  },
  description: DESCRIPTION_DE,
  keywords: KEYWORDS_DE,
  applicationName: 'Nalu AI',
  authors: [{ name: 'Maximilian Fischer', url: SITE_URL }],
  creator: 'Maximilian Fischer',
  publisher: 'Nalu AI',
  category: 'technology',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    alternateLocale: ['en_US'],
    url: SITE_URL,
    siteName: 'Nalu AI',
    title: TITLE_DE,
    description: DESCRIPTION_DE,
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE_DE,
    description: DESCRIPTION_DE,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      'de-DE': SITE_URL,
      'en-US': `${SITE_URL}/en`,
      'x-default': SITE_URL,
    },
  },
}

export const localizedMetadata = {
  de: {
    title: TITLE_DE,
    description: DESCRIPTION_DE,
  },
  en: {
    title: TITLE_EN,
    description: DESCRIPTION_EN,
  },
} as const
