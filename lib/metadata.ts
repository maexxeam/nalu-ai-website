import type { Metadata } from 'next'

export const SITE_URL = 'https://nalu-ai.com'

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Nalu AI – Demand Intelligence für den Mittelstand',
    template: '%s | Nalu AI',
  },
  description:
    'ML-Forecasting, ABC/XYZ-Analyse und SCM-Optimierung — on-premise, deploybar in 4 Wochen. Ihre Daten bleiben bei Ihnen.',
  keywords: [
    'Demand Planning Software',
    'Absatzplanung Mittelstand',
    'ML Forecasting SAP',
    'Supply Chain Optimierung',
    'ABC XYZ Analyse',
    'Bestandsoptimierung Software',
  ],
  authors: [{ name: 'Nalu AI' }],
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: SITE_URL,
    siteName: 'Nalu AI',
    title: 'Nalu AI – Demand Intelligence für den Mittelstand',
    description:
      'ML-Forecasting, ABC/XYZ-Analyse und SCM-Optimierung — on-premise, deploybar in 4 Wochen.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nalu AI – Demand Intelligence für den Mittelstand',
    description: 'On-premise ML-Forecasting für den Mittelstand.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
}
