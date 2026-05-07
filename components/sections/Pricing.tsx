import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { CheckIcon } from '@/components/ui/Icons'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'

export function Pricing() {
  const t = useTranslations('Pricing')

  const boxes = [
    {
      label: t('boxes.implementation.label'),
      title: t('boxes.implementation.title'),
      price: t('boxes.implementation.price'),
      bullets: [
        t('boxes.implementation.bullet1'),
        t('boxes.implementation.bullet2'),
        t('boxes.implementation.bullet3'),
        t('boxes.implementation.bullet4'),
      ],
    },
    {
      label: t('boxes.license.label'),
      title: t('boxes.license.title'),
      price: t('boxes.license.price'),
      bullets: [
        t('boxes.license.bullet1'),
        t('boxes.license.bullet2'),
        t('boxes.license.bullet3'),
        t('boxes.license.bullet4'),
      ],
    },
  ]

  return (
    <section id="preise" className="bg-horizon py-24 md:py-32">
      <div className="container-wide">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-ocean">
            {t('eyebrow')}
          </p>
          <h2 className="mt-4 font-display text-[32px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[40px]">
            {t('title')}
          </h2>
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-4xl gap-6 md:grid-cols-2">
          {boxes.map((box, i) => (
            <Reveal key={box.label} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-2xl border border-[var(--color-border-primary)] bg-white p-8 md:p-10">
                <p className="font-mono text-[11px] uppercase tracking-widest text-coral">
                  {box.label}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold text-[var(--color-text-primary)]">
                  {box.title}
                </h3>

                <div className="mt-6 border-t border-[var(--color-border-primary)] pt-6">
                  <p className="font-display text-3xl font-bold text-[var(--color-text-primary)]">
                    {box.price}
                  </p>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {box.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-sm text-[var(--color-text-primary)]"
                    >
                      <CheckIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-coral" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mx-auto mt-12 max-w-2xl text-center">
          <p className="text-sm text-[var(--color-text-secondary)]">{t('note')}</p>
          <div className="mt-8">
            <Button href="/demo" size="lg">
              {t('cta')}
            </Button>
          </div>
          <p className="mt-6 text-xs text-[var(--color-text-tertiary)]">
            {t('footer1')}
          </p>
          <p className="mt-4 text-xs text-[var(--color-text-tertiary)]">
            {t('footerLink')}{' '}
            <Link href="/pricing" className="text-coral underline-offset-4 hover:underline">
              /pricing
            </Link>
            .
          </p>
        </Reveal>
      </div>
    </section>
  )
}
