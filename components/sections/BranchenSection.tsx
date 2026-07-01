import { useTranslations } from 'next-intl'
import { Reveal, LabelReveal, MockupReveal } from '@/components/ui/Reveal'
import { MockFleischForecast } from '@/components/ui/MockFleischForecast'
import { MockBackereiPanel } from '@/components/ui/MockBackereiPanel'
import { MockGetraenkePanel } from '@/components/ui/MockGetraenkePanel'

const INDUSTRIES = [
  { key: 'fleisch', Mock: MockFleischForecast, mockLeft: true },
  { key: 'baeckerei', Mock: MockBackereiPanel, mockLeft: false },
  { key: 'getraenke', Mock: MockGetraenkePanel, mockLeft: true },
] as const

export function BranchenSection() {
  const t = useTranslations('Branchen')

  return (
    <section id="branchen" className="scroll-mt-24 bg-white py-24">
      <div className="container-wide">
        <LabelReveal className="font-mono text-[11px] uppercase tracking-widest text-coral">
          {t('sectionLabel')}
        </LabelReveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 max-w-3xl font-display text-[32px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[40px]">
            {t('headline')}
          </h2>
          <p className="mt-4 max-w-2xl text-base text-[var(--color-text-secondary)]">
            {t('subline')}
          </p>
        </Reveal>

        <div className="mt-16 space-y-20">
          {INDUSTRIES.map(({ key, Mock, mockLeft }) => {
            const text = (
              <Reveal delay={0.15} className="md:col-span-2">
                <p className="font-mono text-[11px] uppercase tracking-widest text-coral">
                  {t(`${key}Badge`)}
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold text-[var(--color-text-primary)] md:text-3xl">
                  {t(`${key}Title`)}
                </h3>
                <p className="mt-1 font-mono text-sm text-[var(--color-text-tertiary)]">
                  {t(`${key}Tagline`)}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {t(`${key}Body`)}
                </p>
                <ul className="mt-5 space-y-2">
                  {[1, 2, 3, 4].map((n) => (
                    <li
                      key={n}
                      className="flex gap-2.5 text-sm text-[var(--color-text-secondary)]"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                      {t(`${key}F${n}`)}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )
            const mock = (
              <MockupReveal delay={0.2} className="md:col-span-3">
                <Mock />
              </MockupReveal>
            )
            return (
              <div key={key} className="grid gap-10 md:grid-cols-5 md:items-center">
                {mockLeft ? (
                  <>
                    {mock}
                    {text}
                  </>
                ) : (
                  <>
                    {text}
                    {mock}
                  </>
                )}
              </div>
            )
          })}
        </div>

        <p className="mt-16 max-w-2xl font-mono text-xs text-[var(--color-text-tertiary)]">
          {t('footnote')}
        </p>
      </div>
    </section>
  )
}
