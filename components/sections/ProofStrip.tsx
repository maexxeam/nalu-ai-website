import { useTranslations } from 'next-intl'
import { Reveal } from '@/components/ui/Reveal'

export function ProofStrip() {
  const t = useTranslations('ProofStrip')

  const items = [t('item1'), t('item2'), t('item3'), t('item4')]

  return (
    <section className="border-y border-[var(--color-border-primary)] bg-white py-5">
      <div className="container-wide">
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center font-mono text-[11px] uppercase tracking-wider text-[var(--color-text-secondary)] md:text-xs">
            {items.map((item, i) => (
              <span key={item} className="flex items-center gap-x-3">
                <span>{item}</span>
                {i < items.length - 1 && <span className="text-coral">·</span>}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
