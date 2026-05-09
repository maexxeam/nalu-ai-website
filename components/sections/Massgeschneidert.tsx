import { useTranslations } from 'next-intl'
import { Reveal, LabelReveal } from '@/components/ui/Reveal'

export function Massgeschneidert() {
  const t = useTranslations('Massgeschneidert')

  const cols = [
    { title: t('col1Title'), body: t('col1Body') },
    { title: t('col2Title'), body: t('col2Body') },
    { title: t('col3Title'), body: t('col3Body') },
  ]

  return (
    <section className="bg-[#F8FAFB] py-24">
      <div className="container-wide">
        <LabelReveal className="font-mono text-[11px] uppercase tracking-widest text-[var(--color-text-tertiary)]">
          {t('sectionLabel')}
        </LabelReveal>

        <Reveal delay={0.1}>
          <h2 className="mt-4 font-display text-[32px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[40px]">
            {t('headline')}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {cols.map((col, i) => (
            <Reveal key={col.title} delay={0.2 + i * 0.1}>
              <div>
                <p className="font-display text-lg font-semibold text-[var(--color-text-primary)]">
                  {col.title}
                </p>
                <div className="mt-2 h-px w-8 bg-coral" />
                <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {col.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
