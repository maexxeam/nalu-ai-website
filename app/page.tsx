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
    'On-premise ML-Forecasting, ABC/XYZ-Analyse und Supply-Chain-Optimierung für den Mittelstand. Deploybar in 4 Wochen.',
  url: SITE_URL,
  publisher: {
    '@type': 'Organization',
    name: 'Nalu AI',
    url: SITE_URL,
  },
  offers: [
    {
      '@type': 'Offer',
      name: 'Implementation (Phase 1)',
      price: '30000',
      priceCurrency: 'EUR',
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: '30000',
        priceCurrency: 'EUR',
        valueAddedTaxIncluded: false,
      },
      category: 'OneTime',
    },
    {
      '@type': 'Offer',
      name: 'Wartung & Support (Phase 2)',
      price: '2500',
      priceCurrency: 'EUR',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '2500',
        priceCurrency: 'EUR',
        valueAddedTaxIncluded: false,
        billingDuration: 'P1M',
      },
      category: 'Subscription',
    },
  ],
}

export default function Home() {
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
