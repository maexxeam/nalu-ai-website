import { useTranslations } from 'next-intl'
import { Reveal, LabelReveal } from '@/components/ui/Reveal'
import { CountUp } from '@/components/ui/CountUp'

export function Referenz() {
  const t = useTranslations('Referenz')

  const stats = [
    { value: t('stat1Value'), label: t('stat1Label') },
    { value: t('stat2Value'), label: t('stat2Label') },
    { value: t('stat3Value'), label: t('stat3Label') },
    { value: t('stat4Value'), label: t('stat4Label') },
  ]

  return (
    <section className="bg-navy py-24">
      <div className="container-wide">
        <LabelReveal className="font-mono text-[11px] uppercase tracking-widest text-white/40">
          {t('sectionLabel')}
        </LabelReveal>

        <Reveal delay={0.1}>
          <h2 className="mt-4 max-w-3xl font-display text-[28px] font-bold leading-tight text-white md:text-[36px]">
            {t('headline')}
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <blockquote className="mt-10 max-w-3xl font-display text-[20px] font-medium leading-snug text-white/80 md:text-[24px]">
            {t('quote')}
          </blockquote>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-6">
            <p className="font-semibold text-white">{t('author')}</p>
            <p className="mt-1 text-sm text-white/60">{t('authorRole')}</p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={0.4 + i * 0.1}>
              <div>
                <p className="font-display text-[36px] font-bold text-coral md:text-[44px]">
                  <CountUp value={stat.value} />
                </p>
                <p className="mt-1 text-sm text-white/60">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.8}>
          <p className="mt-10 font-mono text-xs text-white/30">{t('techStack')}</p>
        </Reveal>
      </div>
    </section>
  )
}
