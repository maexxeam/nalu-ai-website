import { useTranslations } from 'next-intl'
import { Reveal } from '@/components/ui/Reveal'

export function ProofStrip() {
  const t = useTranslations('Referenz')

  const items = [
    `${t('stat1Value')} ${t('stat1Label')}`,
    `${t('stat2Value')} ${t('stat2Label')}`,
    `${t('stat3Value')} ${t('stat3Label')}`,
    'Live in 6 Wochen',
  ]

  return (
    <section className="border-y border-[var(--color-border-primary)] bg-white py-5">
      <div className="container-wide">
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center font-mono text-[11px] text-[var(--color-text-secondary)] md:text-xs">
            {items.map((item, i) => (
              <span key={item} className="flex items-center gap-x-3">
                <span>{item}</span>
                {i < items.length - 1 && <span className="text-[var(--color-border-primary)]">·</span>}
              </span>
            ))}
            <span className="hidden text-[var(--color-border-primary)] md:inline">—</span>
            <span className="font-semibold text-[var(--color-text-primary)]">{t('authorRole')}</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
