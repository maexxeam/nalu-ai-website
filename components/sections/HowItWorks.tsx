import { useTranslations } from 'next-intl'
import { PlugIcon, SettingsIcon, ChartLineIcon, ShieldIcon } from '@/components/ui/Icons'
import { Reveal } from '@/components/ui/Reveal'

export function HowItWorks() {
  const t = useTranslations('HowItWorks')
  const steps = [
    {
      Icon: PlugIcon,
      label: '01',
      title: t('steps.connector.title'),
      body: t('steps.connector.body'),
    },
    {
      Icon: SettingsIcon,
      label: '02',
      title: t('steps.config.title'),
      body: t('steps.config.body'),
    },
    {
      Icon: ChartLineIcon,
      label: '03',
      title: t('steps.live.title'),
      body: t('steps.live.body'),
    },
  ]

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-wide">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-ocean">
            {t('eyebrow')}
          </p>
          <h2 className="mt-4 font-display text-[32px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[40px]">
            {t('title')}
            <br />
            {t('titleSecond')}
          </h2>
        </Reveal>

        <div className="relative mt-20">
          <div
            aria-hidden="true"
            className="absolute left-[10%] right-[10%] top-7 hidden h-px bg-gradient-to-r from-transparent via-ocean/30 to-transparent md:block"
          />

          <div className="relative grid gap-12 md:grid-cols-3 md:gap-8">
            {steps.map(({ Icon, label, title, body }, i) => (
              <Reveal key={label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="relative mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-white">
                    <span className="absolute inset-0 rounded-full border-2 border-ocean" />
                    <Icon className="h-6 w-6 text-ocean" />
                  </div>
                  <p className="mt-4 font-mono text-[11px] uppercase tracking-widest text-coral">
                    {label}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-semibold text-[var(--color-text-primary)]">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.2} className="mx-auto mt-20 max-w-3xl">
          <div className="flex items-start gap-4 rounded-xl border-l-4 border-coral bg-navy p-6 text-white">
            <ShieldIcon className="mt-0.5 h-6 w-6 flex-shrink-0 text-coral" />
            <div>
              <p className="font-display text-base font-semibold">
                {t('callout.title')}
              </p>
              <p className="mt-1 text-sm text-white/70">{t('callout.body')}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
