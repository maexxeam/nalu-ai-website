import { setRequestLocale } from 'next-intl/server'
import { Hero } from '@/components/sections/Hero'
import { ProofStrip } from '@/components/sections/ProofStrip'
import { WasNaluIst } from '@/components/sections/WasNaluIst'
import { Massgeschneidert } from '@/components/sections/Massgeschneidert'
import { Referenz } from '@/components/sections/Referenz'
import { Module } from '@/components/sections/Module'
import { KontaktCTA } from '@/components/sections/KontaktCTA'
import { SITE_URL } from '@/lib/metadata'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Nalu AI',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'On-premise',
  description:
    'On-premise ML demand planning and sales intelligence for mid-market companies. Built for your data, your ERP, your infrastructure.',
  url: SITE_URL,
  publisher: {
    '@type': 'Person',
    name: 'Maximilian Fischer',
    url: SITE_URL,
  },
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

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
      <KontaktCTA />
    </>
  )
}
