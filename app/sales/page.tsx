import type { Metadata } from 'next'
import { SalesHero } from '@/components/sections/SalesHero'
import { SalesProblem } from '@/components/sections/SalesProblem'
import { SalesSolution } from '@/components/sections/SalesSolution'
import { SalesHowItWorks } from '@/components/sections/SalesHowItWorks'
import { SalesFeatures } from '@/components/sections/SalesFeatures'
import { SalesPricing } from '@/components/sections/SalesPricing'
import { SalesCTA } from '@/components/sections/SalesCTA'
import { SITE_URL } from '@/lib/metadata'

export const metadata: Metadata = {
  title: 'Nalu AI Sales – Kaufwahrscheinlichkeit & Churn Detection',
  description:
    'Wissen Sie, welcher Kunde morgen bestellt. Nalu AI Sales analysiert ' +
    'Kaufmuster, erkennt Churn-Risiken und empfiehlt Next Best Products — automatisch.',
  keywords: [
    'Kaufwahrscheinlichkeit B2B',
    'Churn Detection Mittelstand',
    'Customer Intelligence Software',
    'Vertriebssteuerung KI',
    'Next Best Product Empfehlung',
    'B2B Sales Forecasting',
  ],
  alternates: {
    canonical: `${SITE_URL}/sales`,
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: `${SITE_URL}/sales`,
    siteName: 'Nalu AI',
    title: 'Nalu AI Sales – Kaufwahrscheinlichkeit & Churn Detection',
    description:
      'Kaufwahrscheinlichkeit, Churn Detection und Next Best Product — ' +
      'als Add-on zu Nalu AI Core.',
  },
}

export default function SalesPage() {
  return (
    <>
      <SalesHero />
      <SalesProblem />
      <SalesSolution />
      <SalesHowItWorks />
      <SalesFeatures />
      <SalesPricing />
      <SalesCTA />
    </>
  )
}
