import { useTranslations } from 'next-intl'
import { DashboardMockup } from '@/components/ui/DashboardMockup'
import { Reveal, LabelReveal, MockupReveal } from '@/components/ui/Reveal'

export function WasNaluIst() {
  const t = useTranslations('WasNaluIst')
  const pills = [t('pill1'), t('pill2'), t('pill3'), t('pill4')]

  return (
    <section id="produkt" className="scroll-mt-20 bg-white py-24">
      <div className="container-wide">
        <LabelReveal className="font-mono text-[11px] uppercase tracking-widest text-[var(--color-text-tertiary)]">
          {t('sectionLabel')}
        </LabelReveal>

        <Reveal delay={0.1}>
          <h2 className="mt-4 max-w-2xl font-display text-[32px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[40px]">
            {t('headline')}
            <br />
            {t('headlineSecond')}
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 md:grid-cols-5 md:items-center">
          <MockupReveal delay={0.2} className="order-2 md:order-1 md:col-span-3">
            <div
              className="transform-gpu transition-transform duration-500 hover:rotate-0"
              style={{ transform: 'perspective(1400px) rotateY(-4deg) rotateX(2deg)' }}
            >
              <DashboardMockup />
            </div>
          </MockupReveal>

          <Reveal delay={0.3} className="order-1 md:order-2 md:col-span-2">
            <p className="whitespace-pre-line text-base leading-relaxed text-[var(--color-text-secondary)]">
              {t('body')}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {pills.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-[var(--color-border-primary)] px-4 py-1.5 text-sm font-medium text-[var(--color-text-primary)]"
                >
                  {pill}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
