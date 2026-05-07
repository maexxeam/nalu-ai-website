import { CheckIcon } from '@/components/ui/Icons'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { clsx } from 'clsx'

interface Plan {
  label: string
  title: string
  price: string
  unit: string
  setup: string
  description: string
  bullets: string[]
  cta: string
  highlighted?: boolean
}

const plans: Plan[] = [
  {
    label: 'Nalu AI Core',
    title: 'Demand Intelligence',
    price: 'ab 4.500 €',
    unit: 'pro Monat',
    setup: '+ ab 50.000 € Implementation einmalig',
    description: 'Forecasting, Analytics & Supply Chain.',
    bullets: [
      'ML-Forecasting',
      'Analytics & Trend-Analysen',
      'ABC / XYZ Segmentierung',
      'Supply Chain & Reorder',
      'Wöchentliche AI-Berichte',
    ],
    cta: 'Angebot anfragen',
  },
  {
    label: 'Nalu AI Bundle',
    title: 'Core + Sales',
    price: 'ab 7.000 €',
    unit: 'pro Monat',
    setup: '+ ab 50.000 € Implementation einmalig',
    description: 'Alles aus Core, plus Sales Intelligence.',
    bullets: [
      'Alles aus Nalu AI Core',
      'Kaufwahrscheinlichkeit pro Kunde',
      'Churn Detection & Alerts',
      'Next Best Product Empfehlungen',
      'Sales Revenue Forecast',
      'Revenue Intelligence Dashboards',
    ],
    cta: 'Bundle anfragen →',
    highlighted: true,
  },
]

export function SalesPricing() {
  return (
    <section id="preise" className="bg-horizon py-24 md:py-32">
      <div className="container-wide">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-coral">
            Preise
          </p>
          <h2 className="mt-4 font-display text-[32px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[40px]">
            Sales Add-on — nur mit Core.
            <br />
            Im Bundle aus einer Hand.
          </h2>
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2">
          {plans.map((plan, i) => (
            <Reveal key={plan.label} delay={i * 0.1}>
              <div
                className={clsx(
                  'flex h-full flex-col rounded-2xl border p-8 md:p-10',
                  plan.highlighted
                    ? 'border-coral bg-white shadow-brand-lg ring-1 ring-coral/40'
                    : 'border-[var(--color-border-primary)] bg-white',
                )}
              >
                <div className="flex items-center justify-between">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-coral">
                    {plan.label}
                  </p>
                  {plan.highlighted && (
                    <span className="rounded-full bg-coral/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-coral">
                      Empfohlen
                    </span>
                  )}
                </div>
                <h3 className="mt-3 font-display text-xl font-semibold text-[var(--color-text-primary)]">
                  {plan.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                  {plan.description}
                </p>

                <div className="mt-6 border-t border-[var(--color-border-primary)] pt-6">
                  <p className="font-display text-3xl font-bold text-[var(--color-text-primary)]">
                    {plan.price}
                  </p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-widest text-[var(--color-text-tertiary)]">
                    {plan.unit}
                  </p>
                  <p className="mt-3 text-xs text-[var(--color-text-secondary)]">
                    {plan.setup}
                  </p>
                </div>

                <ul className="mt-8 flex-1 space-y-3">
                  {plan.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 text-sm text-[var(--color-text-primary)]"
                    >
                      <CheckIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-coral" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button
                    href="/demo"
                    size="lg"
                    variant={plan.highlighted ? 'primary' : 'secondary'}
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mx-auto mt-12 max-w-2xl text-center">
          <p className="text-sm text-[var(--color-text-secondary)]">
            Sales Add-on ist nur in Kombination mit Nalu AI Core verfügbar.
            Vollständige Preisübersicht unter{' '}
            <a href="/pricing" className="text-coral underline-offset-4 hover:underline">
              /pricing
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  )
}
