import { useTranslations } from 'next-intl'
import { AlertTriangleIcon, ClockIcon, BrainIcon } from '@/components/ui/Icons'
import { Reveal } from '@/components/ui/Reveal'

export function Problem() {
  const t = useTranslations('Problem')

  const problems = [
    {
      Icon: AlertTriangleIcon,
      title: t('items.erp.title'),
      body: t('items.erp.body'),
    },
    {
      Icon: ClockIcon,
      title: t('items.excel.title'),
      body: t('items.excel.body'),
    },
    {
      Icon: BrainIcon,
      title: t('items.ml.title'),
      body: t('items.ml.body'),
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

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {problems.map(({ Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 0.1}>
              <article className="group h-full rounded-xl border border-[var(--color-border-primary)] border-l-4 border-l-ocean bg-white p-8 shadow-brand-sm transition-all duration-300 hover:shadow-brand-md">
                <div className="text-ocean">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-[var(--color-text-primary)]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
