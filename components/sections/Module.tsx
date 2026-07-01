import { useTranslations } from 'next-intl'
import {
  IconChartLine,
  IconChartBar,
  IconCategory,
  IconPackage,
  IconFileText,
  IconUsers,
} from '@tabler/icons-react'
import { SCMMockup } from '@/components/ui/SCMMockup'
import { ForecastingMockup } from '@/components/ui/ForecastingMockup'
import { MockGenAIPanel } from '@/components/ui/MockGenAIPanel'
import { Reveal, LabelReveal, MockupReveal } from '@/components/ui/Reveal'

export function Module() {
  const t = useTranslations('Module')

  const cards = [
    { Icon: IconChartLine, title: t('card1Title'), body: t('card1Body') },
    { Icon: IconChartBar, title: t('card2Title'), body: t('card2Body') },
    { Icon: IconCategory, title: t('card3Title'), body: t('card3Body') },
    { Icon: IconPackage, title: t('card4Title'), body: t('card4Body') },
    { Icon: IconFileText, title: t('card5Title'), body: t('card5Body') },
    { Icon: IconUsers, title: t('card6Title'), body: t('card6Body') },
  ]

  return (
    <section className="bg-white py-24">
      <div className="container-wide">
        <LabelReveal className="font-mono text-[11px] uppercase tracking-widest text-[var(--color-text-tertiary)]">
          {t('sectionLabel')}
        </LabelReveal>

        <Reveal delay={0.1}>
          <h2 className="mt-4 font-display text-[32px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[40px]">
            {t('headline')}
          </h2>
        </Reveal>

        {/* Feature cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {cards.map(({ Icon, title, body }, i) => (
            <Reveal key={title} delay={0.2 + i * 0.1}>
              <div className="group rounded-xl border border-[var(--color-border-primary)] p-6 transition-shadow hover:shadow-brand">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--color-bg-secondary)] text-coral transition-colors group-hover:bg-coral/10">
                  <Icon size={22} stroke={1.75} />
                </div>
                <p className="mt-5 font-display text-base font-semibold text-[var(--color-text-primary)]">
                  {title}
                </p>
                <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-xs text-[var(--color-text-tertiary)]">{t('footnote')}</p>

        {/* Forecasting Detail — mockup left, text right */}
        <div className="mt-24 grid gap-12 md:grid-cols-5 md:items-center">
          <MockupReveal delay={0} className="md:col-span-3">
            <ForecastingMockup />
          </MockupReveal>
          <Reveal delay={0.2} className="md:col-span-2">
            <p className="font-mono text-[11px] uppercase tracking-widest text-coral">
              {t('forecastingLabel')}
            </p>
            <h3 className="mt-3 font-display text-2xl font-bold text-[var(--color-text-primary)] md:text-3xl">
              {t('forecastingTitle')}
            </h3>
            <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-[var(--color-text-secondary)]">
              {t('forecastingBody')}
            </p>
          </Reveal>
        </div>

        {/* Reorder Alerts — text left, mockup right */}
        <div className="mt-20 grid gap-12 md:grid-cols-5 md:items-center">
          <Reveal delay={0} className="md:col-span-2">
            <p className="font-mono text-[11px] uppercase tracking-widest text-coral">
              {t('scmLabel')}
            </p>
            <h3 className="mt-3 font-display text-2xl font-bold text-[var(--color-text-primary)] md:text-3xl">
              {t('scmTitle')}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">
              {t('scmBody')}
            </p>
          </Reveal>
          <MockupReveal delay={0.2} className="md:col-span-3">
            <div
              className="transform-gpu"
              style={{ transform: 'perspective(1400px) rotateY(4deg) rotateX(2deg)' }}
            >
              <SCMMockup />
            </div>
          </MockupReveal>
        </div>

        {/* Generative AI — mockup left, text right */}
        <div className="mt-20 grid gap-12 md:grid-cols-5 md:items-center">
          <MockupReveal delay={0} className="md:col-span-3">
            <MockGenAIPanel />
          </MockupReveal>
          <Reveal delay={0.2} className="md:col-span-2">
            <p className="font-mono text-[11px] uppercase tracking-widest text-coral">
              {t('genaiLabel')}
            </p>
            <h3 className="mt-3 font-display text-2xl font-bold text-[var(--color-text-primary)] md:text-3xl">
              {t('genaiTitle')}
            </h3>
            <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-[var(--color-text-secondary)]">
              {t('genaiBody')}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
