import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import {
  IconMeat,
  IconBread,
  IconBottle,
  IconBuildingFactory,
  IconArrowRight,
} from '@tabler/icons-react'
import { Reveal, LabelReveal } from '@/components/ui/Reveal'

const ITEMS = [
  { key: 'fleisch', Icon: IconMeat, dashed: false },
  { key: 'baeckerei', Icon: IconBread, dashed: false },
  { key: 'getraenke', Icon: IconBottle, dashed: false },
  { key: 'weitere', Icon: IconBuildingFactory, dashed: true },
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
          <p className="mt-4 max-w-2xl text-base text-[var(--color-text-secondary)]">
            {t('subline')}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map(({ key, Icon, dashed }, i) => (
            <Reveal key={key} delay={0.2 + i * 0.08}>
              <div
                className={`flex h-full items-start gap-4 rounded-xl border p-5 ${
                  dashed
                    ? 'border-dashed border-coral/40 bg-coral/[0.03]'
                    : 'border-[var(--color-border-primary)] bg-white'
                }`}
              >
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

        <Reveal delay={0.55}>
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
