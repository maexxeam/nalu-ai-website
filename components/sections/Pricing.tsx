import { CheckIcon } from '@/components/ui/Icons'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'

interface Plan {
  label: string
  title: string
  price: string
  unit: string
  description: string
  bullets: string[]
}

const plans: Plan[] = [
  {
    label: 'Phase 1 · Implementation',
    title: 'Einmalig',
    price: 'ab 30.000 €',
    unit: 'einmalig',
    description: 'Setup, Connector, Modell-Training, Go-Live.',
    bullets: [
      'Connector-Entwicklung (SAP R/3, S/4HANA, REST, CSV)',
      'Modell-Training auf Ihren Daten',
      'Go-Live in 4 Wochen',
      'Schulung Ihres Teams (max. 2 Tage)',
    ],
  },
  {
    label: 'Phase 2 · Laufend',
    title: 'Monatlich',
    price: 'ab 2.500 €',
    unit: 'pro Monat',
    description: 'Wartung, Support, neue Features.',
    bullets: [
      'Wartung & Updates · Watchtower auto-deploy',
      'Support mit wählbarem SLA',
      'Neue Features automatisch enthalten',
      'Wöchentliche Berichte automatisch',
    ],
  },
]

export function Pricing() {
  return (
    <section id="preise" className="bg-horizon py-24 md:py-32">
      <div className="container-wide">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-ocean">
            Preise
          </p>
          <h2 className="mt-4 font-display text-[32px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[40px]">
            Transparent.
            <br />
            Kein Abo-Modell versteckt.
          </h2>
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2">
          {plans.map((plan, i) => (
            <Reveal key={plan.label} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-2xl border border-[var(--color-border-primary)] bg-white p-8 md:p-10">
                <p className="font-mono text-[11px] uppercase tracking-widest text-coral">
                  {plan.label}
                </p>
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
                </div>

                <ul className="mt-8 flex-1 space-y-3">
                  {plan.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 text-sm text-[var(--color-text-primary)]"
                    >
                      <CheckIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-seaglass" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mx-auto mt-12 max-w-2xl text-center">
          <p className="text-sm text-[var(--color-text-secondary)]">
            Jedes Projekt ist individuell — Preise variieren je nach Datenkomplexität,
            Connector-Aufwand und Anzahl Artikel.
          </p>
          <div className="mt-8">
            <Button href="/demo" size="lg">
              Angebot anfragen →
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
