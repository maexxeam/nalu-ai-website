import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { IconMeat, IconBread, IconBottle, IconArrowRight } from '@tabler/icons-react'
import { Reveal, LabelReveal } from '@/components/ui/Reveal'

const ITEMS = [
  { key: 'fleisch', Icon: IconMeat },
  { key: 'baeckerei', Icon: IconBread },
  { key: 'getraenke', Icon: IconBottle },
] as const

export function BranchenTeaser() {
  const t = useTranslations('BranchenTeaser')
  const locale = useLocale()

  return (
    <section className="border-t border-[var(--color-border-primary)] bg-[#F8FAFB] py-20">
      <div className="container-wide">
        <LabelReveal className="font-mono text-[11px] uppercase tracking-widest text-coral">
          {t('sectionLabel')}
        </LabelReveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 max-w-2xl font-display text-[28px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[36px]">
            {t('headline')}
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {ITEMS.map(({ key, Icon }, i) => (
            <Reveal key={key} delay={0.2 + i * 0.1}>
              <div className="flex h-full items-start gap-4 rounded-xl border border-[var(--color-border-primary)] bg-white p-5">
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[var(--color-bg-secondary)] text-coral">
                  <Icon size={22} stroke={1.75} />
                </div>
                <div>
                  <p className="font-display text-base font-semibold text-[var(--color-text-primary)]">
                    {t(`${key}Title`)}
                  </p>
                  <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                    {t(`${key}Note`)}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.5}>
          <Link
            href={`/${locale}/leistungen#branchen`}
            className="mt-8 inline-flex items-center gap-2 font-display text-base font-semibold text-coral hover:underline"
          >
            {t('cta')}
            <IconArrowRight size={18} stroke={2} />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
