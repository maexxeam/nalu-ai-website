import { useTranslations } from 'next-intl'

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
        <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--color-text-tertiary)]">
          {t('sectionLabel')}
        </p>

        <h2 className="mt-4 font-display text-[32px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[40px]">
          {t('headline')}
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {cols.map((col) => (
            <div key={col.title}>
              <p className="font-display text-lg font-semibold text-[var(--color-text-primary)]">
                {col.title}
              </p>
              <div className="mt-2 h-px w-8 bg-coral" />
              <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {col.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
