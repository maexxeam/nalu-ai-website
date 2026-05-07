import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { PageHeader } from '@/components/ui/PageHeader'
import { Button } from '@/components/ui/Button'
import { CheckIcon, ArrowRightIcon } from '@/components/ui/Icons'
import { Reveal } from '@/components/ui/Reveal'
import { SITE_URL } from '@/lib/metadata'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Produkt' })
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: { canonical: `${SITE_URL}/${locale === 'de' ? '' : locale + '/'}produkt` },
  }
}

function ProduktBody() {
  const t = useTranslations('Produkt')

  const planungBullets = [
    t('split.planung1'),
    t('split.planung2'),
    t('split.planung3'),
    t('split.planung4'),
    t('split.planung5'),
    t('split.planung6'),
  ]

  const vertriebBullets = [
    t('split.vertrieb1'),
    t('split.vertrieb2'),
    t('split.vertrieb3'),
    t('split.vertrieb4'),
    t('split.vertrieb5'),
  ]

  const featureGroups = [
    {
      title: t('features.groups.forecasting.title'),
      items: [
        t('features.groups.forecasting.item1'),
        t('features.groups.forecasting.item2'),
        t('features.groups.forecasting.item3'),
        t('features.groups.forecasting.item4'),
        t('features.groups.forecasting.item5'),
        t('features.groups.forecasting.item6'),
      ],
    },
    {
      title: t('features.groups.scm.title'),
      items: [
        t('features.groups.scm.item1'),
        t('features.groups.scm.item2'),
        t('features.groups.scm.item3'),
        t('features.groups.scm.item4'),
        t('features.groups.scm.item5'),
      ],
    },
    {
      title: t('features.groups.analytics.title'),
      items: [
        t('features.groups.analytics.item1'),
        t('features.groups.analytics.item2'),
        t('features.groups.analytics.item3'),
        t('features.groups.analytics.item4'),
        t('features.groups.analytics.item5'),
      ],
    },
    {
      title: t('features.groups.sales.title'),
      items: [
        t('features.groups.sales.item1'),
        t('features.groups.sales.item2'),
        t('features.groups.sales.item3'),
        t('features.groups.sales.item4'),
        t('features.groups.sales.item5'),
      ],
    },
    {
      title: t('features.groups.ai.title'),
      items: [
        t('features.groups.ai.item1'),
        t('features.groups.ai.item2'),
        t('features.groups.ai.item3'),
        t('features.groups.ai.item4'),
        t('features.groups.ai.item5'),
      ],
    },
    {
      title: t('features.groups.platform.title'),
      items: [
        t('features.groups.platform.item1'),
        t('features.groups.platform.item2'),
        t('features.groups.platform.item3'),
        t('features.groups.platform.item4'),
        t('features.groups.platform.item5'),
      ],
    },
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
              {t('split.eyebrow')}
            </p>
            <h2 className="mt-3 font-display text-[28px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[36px]">
              {t('split.title')}
            </h2>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2">
            <Reveal>
              <div className="flex h-full flex-col rounded-2xl border border-[var(--color-border-primary)] bg-white p-8 shadow-brand-sm">
                <p className="font-mono text-[11px] uppercase tracking-widest text-coral">
                  {t('split.planungEyebrow')}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold text-[var(--color-text-primary)]">
                  {t('split.planungTitle')}
                </h3>
                <p className="mt-3 text-sm text-[var(--color-text-secondary)]">
                  {t('split.planungBody')}
                </p>
                <ul className="mt-6 flex-1 space-y-3 border-t border-[var(--color-border-primary)] pt-6">
                  {planungBullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-sm text-[var(--color-text-primary)]"
                    >
                      <CheckIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-coral" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex h-full flex-col rounded-2xl border border-[var(--color-border-primary)] bg-white p-8 shadow-brand-sm">
                <p className="font-mono text-[11px] uppercase tracking-widest text-coral">
                  {t('split.vertriebEyebrow')}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold text-[var(--color-text-primary)]">
                  {t('split.vertriebTitle')}
                </h3>
                <p className="mt-3 text-sm text-[var(--color-text-secondary)]">
                  {t('split.vertriebBody')}
                </p>
                <ul className="mt-6 flex-1 space-y-3 border-t border-[var(--color-border-primary)] pt-6">
                  {vertriebBullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-sm text-[var(--color-text-primary)]"
                    >
                      <CheckIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-coral" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 rounded-md border-l-4 border-coral bg-horizon px-4 py-3 text-xs leading-relaxed text-[var(--color-text-secondary)]">
                  {t('split.vertriebNote')}
                </p>
              </div>
            </Reveal>
          </div>

          <div className="mx-auto mt-12 max-w-2xl text-center text-sm text-[var(--color-text-secondary)]">
            {t('split.footer')}
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

          <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featureGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-[var(--color-border-primary)] bg-white p-6 shadow-brand-sm"
              >
                <h3 className="font-display text-base font-semibold text-[var(--color-text-primary)]">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-2 border-t border-[var(--color-border-primary)] pt-4">
                  {group.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-start gap-3 text-sm text-[var(--color-text-primary)]"
                    >
                      <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-coral" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-[var(--color-text-tertiary)]">
            {t('features.footnote')}
          </p>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-[11px] uppercase tracking-widest text-coral">
              {t('rollout.eyebrow')}
            </p>
            <h2 className="mt-3 font-display text-[28px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[36px]">
              {t('rollout.title')}
            </h2>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
            {[
              { step: '01', title: t('rollout.step1Title'), body: t('rollout.step1Body') },
              { step: '02', title: t('rollout.step2Title'), body: t('rollout.step2Body') },
              { step: '03', title: t('rollout.step3Title'), body: t('rollout.step3Body') },
            ].map((s) => (
              <div
                key={s.step}
                className="rounded-2xl border border-[var(--color-border-primary)] bg-white p-8 shadow-brand-sm"
              >
                <p className="font-mono text-[11px] uppercase tracking-widest text-coral">
                  {s.step}
                </p>
                <h3 className="mt-3 font-display text-lg font-semibold text-[var(--color-text-primary)]">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-horizon py-20 md:py-24">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-[11px] uppercase tracking-widest text-coral">
              {t('pricing.eyebrow')}
            </p>
            <h2 className="mt-3 font-display text-[28px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[36px]">
              {t('pricing.title')}
            </h2>
            <p className="mt-4 text-base text-[var(--color-text-secondary)]">
              {t('pricing.subtitle')}
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
            {[
              { label: t('pricing.starterLabel'), size: t('pricing.starterSize'), price: t('pricing.starterPrice') },
              { label: t('pricing.growthLabel'), size: t('pricing.growthSize'), price: t('pricing.growthPrice') },
              { label: t('pricing.scaleLabel'), size: t('pricing.scaleSize'), price: t('pricing.scalePrice') },
            ].map((tier) => (
              <div
                key={tier.label}
                className="rounded-2xl border border-[var(--color-border-primary)] bg-white p-6 text-center shadow-brand-sm"
              >
                <p className="font-mono text-[11px] uppercase tracking-widest text-coral">
                  {tier.label}
                </p>
                <p className="mt-2 text-xs text-[var(--color-text-tertiary)]">
                  {tier.size}
                </p>
                <p className="mt-3 font-display text-lg font-bold text-[var(--color-text-primary)]">
                  {tier.price}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 font-display text-sm font-semibold text-coral transition-colors hover:text-coral/80"
            >
              {t('pricing.moreLink')}
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 text-center">
            <Button href="/demo" size="lg">
              {t('pricing.demoCta')}
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default async function ProduktPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  return <ProduktBody />
}
