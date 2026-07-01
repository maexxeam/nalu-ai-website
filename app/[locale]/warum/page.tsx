import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import { IconPackages, IconArrowsSplit, IconServer2, IconBolt } from '@tabler/icons-react'
import { WaveBackground } from '@/components/ui/WaveBackground'
import { Reveal, LabelReveal, MockupReveal } from '@/components/ui/Reveal'
import { ComparisonMatrix } from '@/components/ui/ComparisonMatrix'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Warum' })
  return { title: t('metaTitle'), description: t('metaDescription') }
}

function WarumBody() {
  const t = useTranslations('Warum')

  const vorteile = [
    { Icon: IconPackages, key: 'v1' },
    { Icon: IconArrowsSplit, key: 'v2' },
    { Icon: IconServer2, key: 'v3' },
    { Icon: IconBolt, key: 'v4' },
  ]

  return (
    <>
      {/* Header */}
      <section className="bg-white pt-32 pb-20">
        <div className="container-wide">
          <LabelReveal className="font-mono text-[11px] uppercase tracking-widest text-coral">
            {t('headerLabel')}
          </LabelReveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 max-w-3xl font-display text-[40px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[48px]">
              {t('headerTitle')}
            </h1>
            <p className="mt-6 max-w-2xl text-base text-[var(--color-text-secondary)] md:text-lg">
              {t('headerSubtitle')}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-[#F8FAFB] py-20">
        <div className="container-wide">
          <LabelReveal className="font-mono text-[11px] uppercase tracking-widest text-coral">
            {t('matrixLabel')}
          </LabelReveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display text-[28px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[36px]">
              {t('matrixTitle')}
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-[var(--color-text-secondary)]">
              {t('matrixIntro')}
            </p>
          </Reveal>
          <MockupReveal delay={0.15} className="mt-10">
            <ComparisonMatrix />
          </MockupReveal>
          <p className="mt-4 max-w-2xl font-mono text-xs text-[var(--color-text-tertiary)]">
            {t('matrixCaption')}
          </p>
        </div>
      </section>

      {/* Differentiators */}
      <section className="bg-white py-20">
        <div className="container-wide">
          <LabelReveal className="font-mono text-[11px] uppercase tracking-widest text-coral">
            {t('vorteileLabel')}
          </LabelReveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display text-[28px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[36px]">
              {t('vorteileTitle')}
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {vorteile.map(({ Icon, key }, i) => (
              <Reveal key={key} delay={0.15 + i * 0.1}>
                <div className="h-full rounded-xl border border-[var(--color-border-primary)] bg-white p-6">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--color-bg-secondary)] text-coral">
                    <Icon size={22} stroke={1.75} />
                  </div>
                  <p className="mt-5 font-display text-lg font-semibold text-[var(--color-text-primary)]">
                    {t(`${key}Title`)}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {t(`${key}Body`)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Fair closing note */}
          <Reveal delay={0.2}>
            <div className="mt-12 rounded-2xl border-l-4 border-coral bg-[#F8FAFB] p-8">
              <p className="font-display text-lg font-semibold leading-snug text-[var(--color-text-primary)]">
                {t('closing')}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Kontakt */}
      <section className="relative overflow-hidden bg-navy py-32">
        <WaveBackground className="absolute inset-0 h-full w-full opacity-50" />
        <div className="container-wide relative z-10 text-center">
          <Reveal>
            <h2 className="font-display text-[36px] font-bold text-white md:text-[44px]">
              {t('kontaktTitle')}
            </h2>
            <p className="mt-4 text-base text-white/60">{t('kontaktSubline')}</p>
            <a
              href={`mailto:${t('kontaktEmail')}`}
              className="mt-8 inline-block font-display text-[22px] font-semibold text-coral hover:underline md:text-[28px]"
            >
              {t('kontaktEmail')}
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default async function WarumPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  return <WarumBody />
}
