import { useTranslations } from 'next-intl'
import { CloudOffIcon, ZapIcon, UsersIcon } from '@/components/ui/Icons'
import { Reveal } from '@/components/ui/Reveal'

export function SocialProof() {
  const t = useTranslations('SocialProof')

  const points = [
    {
      Icon: CloudOffIcon,
      title: t('items.cloud.title'),
      body: t('items.cloud.body'),
    },
    {
      Icon: ZapIcon,
      title: t('items.speed.title'),
      body: t('items.speed.body'),
    },
    {
      Icon: UsersIcon,
      title: t('items.team.title'),
      body: t('items.team.body'),
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

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
          {points.map(({ Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 0.1}>
              <div className="h-full rounded-xl border border-[var(--color-border-primary)] bg-white p-8">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-ocean/10 text-ocean">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-[var(--color-text-primary)]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mx-auto mt-20 max-w-3xl">
          <figure className="rounded-2xl border-l-4 border-coral bg-horizon p-8 md:p-10">
            <blockquote className="font-display text-lg font-medium leading-relaxed text-[var(--color-text-primary)] md:text-xl">
              {t('quote')}
            </blockquote>
            <figcaption className="mt-6 font-mono text-[11px] uppercase tracking-widest text-[var(--color-text-tertiary)]">
              {t('quoteAuthor')}
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
