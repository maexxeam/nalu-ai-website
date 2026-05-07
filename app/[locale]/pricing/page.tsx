import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import { PageHeader } from '@/components/ui/PageHeader'
import { Button } from '@/components/ui/Button'
import { CheckIcon } from '@/components/ui/Icons'
import { FAQ, type FAQItem } from '@/components/sections/FAQ'
import { SITE_URL } from '@/lib/metadata'
import { WaveAnimation } from '@/components/ui/WaveAnimation'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Pricing_Page' })
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: { canonical: `${SITE_URL}/${locale === 'de' ? '' : locale + '/'}pricing` },
  }
}

function PricingBody() {
  const t = useTranslations('Pricing_Page')

  type Tier = {
    key: string
    label: string
    size: string
    monthly: string
    highlights: string[]
    cta: string
    primary: boolean
  }

  const tiers: Tier[] = [
    {
      key: 'starter',
      label: t('tiers.starter.label'),
      size: t('tiers.starter.size'),
      monthly: t('tiers.starter.monthly'),
      highlights: [t('tiers.starter.h1'), t('tiers.starter.h2'), t('tiers.starter.h3')],
      cta: t('tiers.starter.cta'),
      primary: false,
    },
    {
      key: 'growth',
      label: t('tiers.growth.label'),
      size: t('tiers.growth.size'),
      monthly: t('tiers.growth.monthly'),
      highlights: [t('tiers.growth.h1'), t('tiers.growth.h2'), t('tiers.growth.h3')],
      cta: t('tiers.growth.cta'),
      primary: true,
    },
    {
      key: 'scale',
      label: t('tiers.scale.label'),
      size: t('tiers.scale.size'),
      monthly: t('tiers.scale.monthly'),
      highlights: [t('tiers.scale.h1'), t('tiers.scale.h2'), t('tiers.scale.h3')],
      cta: t('tiers.scale.cta'),
      primary: false,
    },
    {
      key: 'enterprise',
      label: t('tiers.enterprise.label'),
      size: t('tiers.enterprise.size'),
      monthly: t('tiers.enterprise.monthly'),
      highlights: [t('tiers.enterprise.h1'), t('tiers.enterprise.h2'), t('tiers.enterprise.h3')],
      cta: t('tiers.enterprise.cta'),
      primary: false,
    },
  ]

  const allFeatures = t.raw('features.list') as string[]

  type ImplPackage = {
    label: string
    price: string
    forWhom: string
    bullets: string[]
    cta: string
    primary: boolean
  }

  const implementationPackages: ImplPackage[] = [
    {
      label: t('implementation.standard.label'),
      price: t('implementation.standard.price'),
      forWhom: t('implementation.standard.forWhom'),
      bullets: [
        t('implementation.standard.b1'),
        t('implementation.standard.b2'),
        t('implementation.standard.b3'),
        t('implementation.standard.b4'),
        t('implementation.standard.b5'),
      ],
      cta: t('implementation.standard.cta'),
      primary: false,
    },
    {
      label: t('implementation.professional.label'),
      price: t('implementation.professional.price'),
      forWhom: t('implementation.professional.forWhom'),
      bullets: [
        t('implementation.professional.b1'),
        t('implementation.professional.b2'),
        t('implementation.professional.b3'),
        t('implementation.professional.b4'),
        t('implementation.professional.b5'),
        t('implementation.professional.b6'),
      ],
      cta: t('implementation.professional.cta'),
      primary: true,
    },
    {
      label: t('implementation.enterprise.label'),
      price: t('implementation.enterprise.price'),
      forWhom: t('implementation.enterprise.forWhom'),
      bullets: [
        t('implementation.enterprise.b1'),
        t('implementation.enterprise.b2'),
        t('implementation.enterprise.b3'),
        t('implementation.enterprise.b4'),
        t('implementation.enterprise.b5'),
      ],
      cta: t('implementation.enterprise.cta'),
      primary: false,
    },
  ]

  const priceFactors = [
    { label: t('individual.factor1.label'), detail: t('individual.factor1.detail') },
    { label: t('individual.factor2.label'), detail: t('individual.factor2.detail') },
    { label: t('individual.factor3.label'), detail: t('individual.factor3.detail') },
    { label: t('individual.factor4.label'), detail: t('individual.factor4.detail') },
    { label: t('individual.factor5.label'), detail: t('individual.factor5.detail') },
    { label: t('individual.factor6.label'), detail: t('individual.factor6.detail') },
    { label: t('individual.factor7.label'), detail: t('individual.factor7.detail') },
    { label: t('individual.factor8.label'), detail: t('individual.factor8.detail') },
  ]

  const socialProofStats = [
    { value: t('social.stat1.value'), label: t('social.stat1.label') },
    { value: t('social.stat2.value'), label: t('social.stat2.label') },
    { value: t('social.stat3.value'), label: t('social.stat3.label') },
  ]

  const faqs = t.raw('faq.items') as FAQItem[]

  const customItems = [
    { title: t('custom.items.erp.title'), body: t('custom.items.erp.body') },
    { title: t('custom.items.bi.title'), body: t('custom.items.bi.body') },
    { title: t('custom.items.dashboard.title'), body: t('custom.items.dashboard.body') },
    { title: t('custom.items.whiteLabel.title'), body: t('custom.items.whiteLabel.body') },
    { title: t('custom.items.mobile.title'), body: t('custom.items.mobile.body') },
    { title: t('custom.items.api.title'), body: t('custom.items.api.body') },
  ]

  const customSizes = [
    { label: t('custom.small.label'), range: t('custom.small.range'), price: t('custom.small.price') },
    { label: t('custom.medium.label'), range: t('custom.medium.range'), price: t('custom.medium.price') },
    { label: t('custom.large.label'), range: t('custom.large.range'), price: t('custom.large.price') },
  ]

  return (
    <>
      <PageHeader
        eyebrow={t('headerEyebrow')}
        title={
          <>
            {t('headerTitle')}
            <br />
            {t('headerTitleSecond')}
          </>
        }
        subtitle={t('headerSubtitle')}
      />

      <section className="bg-white py-20 md:py-24">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-[11px] uppercase tracking-widest text-coral">
              {t('tiers.eyebrow')}
            </p>
            <h2 className="mt-3 font-display text-[28px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[36px]">
              {t('tiers.title')}
            </h2>
            <p className="mt-4 text-base text-[var(--color-text-secondary)]">
              {t('tiers.subtitle')}
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            {tiers.map((tier) => (
              <div
                key={tier.key}
                className={
                  'flex h-full flex-col rounded-2xl border p-8 ' +
                  (tier.primary
                    ? 'border-coral bg-white shadow-brand-lg ring-1 ring-coral/40'
                    : 'border-[var(--color-border-primary)] bg-white shadow-brand-sm')
                }
              >
                <div className="flex items-center justify-between">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-coral">
                    {tier.label}
                  </p>
                  {tier.primary && (
                    <span className="rounded-full bg-coral/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-coral">
                      {t('tiers.recommended')}
                    </span>
                  )}
                </div>

                <p className="mt-2 text-xs text-[var(--color-text-secondary)]">
                  {tier.size}
                </p>

                <p className="mt-6 font-display text-2xl font-bold text-[var(--color-text-primary)]">
                  {tier.monthly}
                </p>
                <p className="mt-1 font-mono text-[11px] text-[var(--color-text-tertiary)]">
                  {t('tiers.implNote')}
                </p>

                <ul className="mt-6 flex-1 space-y-2 border-t border-[var(--color-border-primary)] pt-6">
                  {tier.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-3 text-sm text-[var(--color-text-primary)]"
                    >
                      <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-coral" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button
                    href="/demo"
                    size="md"
                    variant={tier.primary ? 'primary' : 'secondary'}
                    className="w-full"
                  >
                    {tier.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-coral/30 bg-coral/5 p-6 text-center md:p-8">
            <p className="text-sm leading-relaxed text-[var(--color-text-primary)]">
              <span className="font-semibold">{t('tiers.calloutListPrices')}</span>{' '}
              {t('tiers.calloutBody')}
            </p>
            <div className="mt-6">
              <Button href="/demo" size="md">
                {t('tiers.calloutCta')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-horizon py-20 md:py-24">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-[11px] uppercase tracking-widest text-coral">
              {t('features.eyebrow')}
            </p>
            <h2 className="mt-3 font-display text-[28px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[36px]">
              {t('features.title')}
            </h2>
            <p className="mt-4 text-base text-[var(--color-text-secondary)]">
              {t('features.subtitle')}
            </p>
          </div>

          <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-[var(--color-border-primary)] bg-white p-8 shadow-brand-sm md:p-10">
            <ul className="space-y-3">
              {allFeatures.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 text-sm text-[var(--color-text-primary)]"
                >
                  <CheckIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-coral" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-2 border-t border-[var(--color-border-primary)] pt-6 text-xs leading-relaxed text-[var(--color-text-tertiary)]">
              <p>{t('features.footnote1')}</p>
              <p>{t('features.footnote2')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-[11px] uppercase tracking-widest text-coral">
              {t('implementation.eyebrow')}
            </p>
            <h2 className="mt-3 font-display text-[28px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[36px]">
              {t('implementation.title')}
            </h2>
            <p className="mt-4 text-base text-[var(--color-text-secondary)]">
              {t('implementation.subtitle')}
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-3">
            {implementationPackages.map((pkg) => (
              <div
                key={pkg.label}
                className={
                  'flex h-full flex-col rounded-2xl border p-8 ' +
                  (pkg.primary
                    ? 'border-coral bg-white shadow-brand-lg ring-1 ring-coral/40'
                    : 'border-[var(--color-border-primary)] bg-white')
                }
              >
                <div className="flex items-center justify-between">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-coral">
                    {pkg.label}
                  </p>
                  {pkg.primary && (
                    <span className="rounded-full bg-coral/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-coral">
                      {t('implementation.recommended')}
                    </span>
                  )}
                </div>

                <div className="mt-6 border-t border-[var(--color-border-primary)] pt-6">
                  <p className="font-display text-3xl font-bold text-[var(--color-text-primary)]">
                    {pkg.price}
                  </p>
                  <p className="mt-2 text-xs text-[var(--color-text-secondary)]">
                    {t('implementation.forWhom', { who: pkg.forWhom })}
                  </p>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {pkg.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-sm text-[var(--color-text-primary)]"
                    >
                      <CheckIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-coral" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button
                    href="/demo"
                    size="md"
                    variant={pkg.primary ? 'primary' : 'secondary'}
                    className="w-full"
                  >
                    {pkg.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="agent" className="bg-horizon py-20 md:py-24">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-[11px] uppercase tracking-widest text-coral">
              {t('agent.eyebrow')}
            </p>
            <h2 className="mt-3 font-display text-[28px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[36px]">
              {t('agent.title')}
            </h2>
            <p className="mt-4 text-base text-[var(--color-text-secondary)]">
              {t('agent.subtitle')}
            </p>
          </div>

          <div className="mx-auto mt-14 max-w-4xl space-y-4">
            {[
              { q: t('agent.ex1Q'), a: t('agent.ex1A') },
              { q: t('agent.ex2Q'), a: t('agent.ex2A') },
              { q: t('agent.ex3Q'), a: t('agent.ex3A') },
            ].map((ex) => (
              <div
                key={ex.q}
                className="rounded-2xl border border-[var(--color-border-primary)] bg-white p-6 shadow-brand-sm md:p-8"
              >
                <p className="font-mono text-xs text-[var(--color-text-tertiary)]">
                  &gt; {ex.q}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-primary)]">
                  {ex.a}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-2xl rounded-xl border-l-4 border-coral bg-white p-5 text-sm leading-relaxed text-[var(--color-text-primary)] shadow-brand-sm">
            <span className="font-semibold">{t('agent.calloutInclusive')}</span>
            {t('agent.calloutBody')}
          </div>

          <div className="mt-10 text-center">
            <Button href="/demo" size="md">
              {t('agent.cta')}
            </Button>
          </div>
        </div>
      </section>

      <section id="custom" className="bg-white py-20 md:py-24">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-[11px] uppercase tracking-widest text-coral">
              {t('custom.eyebrow')}
            </p>
            <h2 className="mt-3 font-display text-[28px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[36px]">
              {t('custom.title')}
            </h2>
            <p className="mt-4 text-base text-[var(--color-text-secondary)]">
              {t('custom.subtitle')}
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-2 lg:grid-cols-3">
            {customItems.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[var(--color-border-primary)] bg-white p-6 shadow-brand-sm"
              >
                <CheckIcon className="h-5 w-5 text-coral" />
                <h3 className="mt-3 font-display text-base font-semibold text-[var(--color-text-primary)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-3">
            {customSizes.map((tier) => (
              <div
                key={tier.label}
                className="rounded-2xl border border-[var(--color-border-primary)] bg-white p-6 text-center shadow-brand-sm"
              >
                <p className="font-mono text-[11px] uppercase tracking-widest text-coral">
                  {tier.label}
                </p>
                <p className="mt-2 text-xs text-[var(--color-text-tertiary)]">
                  {tier.range}
                </p>
                <p className="mt-3 font-display text-xl font-bold text-[var(--color-text-primary)]">
                  {tier.price}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-2xl text-center text-sm text-[var(--color-text-secondary)]">
            {t('custom.footer')}
          </div>

          <div className="mt-10 text-center">
            <Button href="/demo" size="md">
              {t('custom.cta')}
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-horizon py-20 md:py-24">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-[11px] uppercase tracking-widest text-coral">
              {t('social.eyebrow')}
            </p>
            <h2 className="mt-3 font-display text-[28px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[36px]">
              {t('social.title')}
            </h2>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
            {socialProofStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-[var(--color-border-primary)] bg-white p-8 text-center shadow-brand-sm"
              >
                <p className="font-display text-3xl font-bold text-coral md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm text-[var(--color-text-secondary)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-2xl text-center">
            <p className="text-sm text-[var(--color-text-secondary)]">
              {t('social.note')}
            </p>
            <div className="mt-8">
              <Button href="/demo" size="lg">
                {t('social.cta')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="container-wide">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <h2 className="font-display text-[28px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[36px]">
                {t('individual.title')}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-[var(--color-text-secondary)]">
                {t('individual.subtitle')}
              </p>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--color-border-primary)] bg-white p-8 md:p-10">
              <p className="font-display text-sm font-semibold uppercase tracking-widest text-ocean">
                {t('individual.factorsHeading')}
              </p>
              <div className="mt-6 grid gap-x-10 gap-y-5 sm:grid-cols-2">
                {priceFactors.map((f) => (
                  <div key={f.label} className="flex items-start gap-3">
                    <CheckIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-coral" />
                    <div>
                      <p className="text-sm font-medium text-[var(--color-text-primary)]">
                        {f.label}
                      </p>
                      <p className="mt-0.5 font-mono text-[11px] text-[var(--color-text-tertiary)]">
                        {f.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 border-t border-[var(--color-border-primary)] pt-8 text-center">
                <Button href="/demo" size="lg">
                  {t('individual.ctaButton')}
                </Button>
                <ul className="mx-auto mt-6 max-w-md space-y-1.5 text-left text-sm text-[var(--color-text-secondary)]">
                  {[
                    t('individual.checklist1'),
                    t('individual.checklist2'),
                    t('individual.checklist3'),
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-coral" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-horizon py-20 md:py-24">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <p className="font-mono text-[11px] uppercase tracking-widest text-coral">
                {t('faq.eyebrow')}
              </p>
              <h2 className="mt-3 font-display text-[28px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[36px]">
                {t('faq.title')}
              </h2>
            </div>
            <div className="mt-12">
              <FAQ items={faqs} />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy">
        <WaveAnimation
          className="absolute inset-x-0 top-0 h-40 w-full"
          color="#1E7AC2"
          opacity={0.1}
          flip
        />

        <div className="container-wide relative z-10 py-24 text-center md:py-32">
          <h2 className="mx-auto max-w-3xl font-display text-[32px] font-bold leading-[1.1] text-white md:text-[44px]">
            {t('finalCta.title')}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-white/70 md:text-lg">
            {t('finalCta.subtitle')}
          </p>
          <div className="mt-10">
            <Button href="/demo" size="lg" className="animate-pulse-subtle">
              {t('finalCta.cta')}
            </Button>
          </div>
          <p className="mx-auto mt-8 max-w-md text-xs text-white/50">
            {t('finalCta.note')}
          </p>
        </div>

        <WaveAnimation
          className="absolute inset-x-0 bottom-0 h-40 w-full"
          color="#1E7AC2"
          opacity={0.1}
        />
      </section>
    </>
  )
}

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  return <PricingBody />
}
