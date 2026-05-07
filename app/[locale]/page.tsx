import { setRequestLocale } from 'next-intl/server'
import { Hero } from '@/components/sections/Hero'
import { Problem } from '@/components/sections/Problem'
import { Solution } from '@/components/sections/Solution'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Features } from '@/components/sections/Features'
import { SocialProof } from '@/components/sections/SocialProof'
import { Pricing } from '@/components/sections/Pricing'
import { CTA } from '@/components/sections/CTA'
import { SITE_URL } from '@/lib/metadata'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Nalu AI',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web · On-premise',
  description:
    'On-premise ML forecasting, ABC/XYZ analysis and supply-chain optimization for mid-market companies. Deployable in 4 weeks.',
  url: SITE_URL,
  publisher: {
    '@type': 'Organization',
    name: 'Nalu AI',
    url: SITE_URL,
  },
  offers: [
    {
      '@type': 'Offer',
      name: 'Implementation (one-time)',
      price: '50000',
      priceCurrency: 'EUR',
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: '50000',
        priceCurrency: 'EUR',
        valueAddedTaxIncluded: false,
      },
      category: 'OneTime',
    },
    {
      '@type': 'Offer',
      name: 'License & support (monthly)',
      price: '4500',
      priceCurrency: 'EUR',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '4500',
        priceCurrency: 'EUR',
        valueAddedTaxIncluded: false,
        billingDuration: 'P1M',
      },
      category: 'Subscription',
    },
  ],
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
      <Problem />
      <Solution />
      <HowItWorks />
      <Features />
      <SocialProof />
      <Pricing />
      <CTA />
    </>
  )
}
