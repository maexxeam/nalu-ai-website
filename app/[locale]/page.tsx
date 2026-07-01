import { setRequestLocale } from 'next-intl/server'
import { Hero } from '@/components/sections/Hero'
import { ProofStrip } from '@/components/sections/ProofStrip'
import { WasNaluIst } from '@/components/sections/WasNaluIst'
import { Massgeschneidert } from '@/components/sections/Massgeschneidert'
import { Referenz } from '@/components/sections/Referenz'
import { Module } from '@/components/sections/Module'
import { BranchenTeaser } from '@/components/sections/BranchenTeaser'
import { KontaktCTA } from '@/components/sections/KontaktCTA'
import { SITE_URL } from '@/lib/metadata'

function buildJsonLd(locale: string) {
  const isEn = locale === 'en'
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Nalu AI',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Demand Planning & Forecasting',
    operatingSystem: 'On-premise (Linux, Docker)',
    inLanguage: isEn ? 'en' : 'de',
    description: isEn
      ? 'On-premise ML platform for demand planning, sales forecasting and supply chain intelligence — tailored for mid-market manufacturers and integrated with SAP and other ERP systems.'
      : 'On-Premise ML-Plattform für Demand Planning, Absatzprognose und Supply Chain Intelligence — maßgeschneidert für den Mittelstand und integriert in SAP und andere ERP-Systeme.',
    keywords: isEn
      ? 'demand planning, sales forecasting, supply chain, on-premise ML, SAP integration, mid-market AI'
      : 'Demand Planning, Absatzprognose, Bedarfsplanung, KI Mittelstand, On-Premise Machine Learning, SAP Forecasting, ERP Integration, Vertriebsintelligenz',
    audience: {
      '@type': 'BusinessAudience',
      audienceType: isEn
        ? 'Mid-market manufacturers and distributors'
        : 'Mittelständische Hersteller und Großhändler',
    },
    url: SITE_URL,
    publisher: {
      '@type': 'Person',
      name: 'Maximilian Fischer',
      url: SITE_URL,
    },
  }
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const jsonLd = buildJsonLd(locale)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <ProofStrip />
      <WasNaluIst />
      <Massgeschneidert />
      <Referenz />
      <Module />
      <BranchenTeaser />
      <KontaktCTA />
    </>
  )
}
