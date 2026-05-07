import { UsersIcon, BrainIcon, ChartLineIcon } from '@/components/ui/Icons'
import { Reveal } from '@/components/ui/Reveal'

const steps = [
  {
    Icon: UsersIcon,
    label: '01',
    title: 'Kunden-ID aktivieren',
    body: 'Wenn Ihre ERP-Daten bereits eine Kunden-ID enthalten, ist das Add-on sofort aktivierbar — keine neue Datenquelle, nur eine Spalte mehr.',
  },
  {
    Icon: BrainIcon,
    label: '02',
    title: 'Modelle trainieren',
    body: 'Nalu AI Sales lernt das Kaufmuster Ihrer Kunden in wenigen Stunden — RFM, Frequency, Recency, Saisonalität.',
  },
  {
    Icon: ChartLineIcon,
    label: '03',
    title: 'Vertrieb steuern',
    body: 'Täglich aktuell: Kaufwahrscheinlichkeit, Churn-Alerts, Next-Best-Product-Empfehlungen — direkt im Nalu AI Dashboard.',
  },
]

export function SalesHowItWorks() {
  return (
    <section className="bg-horizon py-24 md:py-32">
      <div className="container-wide">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-coral">
            So funktioniert es
          </p>
          <h2 className="mt-4 font-display text-[32px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[40px]">
            Keine neue Datenquelle.
            <br />
            Nur eine Spalte mehr.
          </h2>
        </Reveal>

        <div className="relative mt-20">
          <div
            aria-hidden="true"
            className="absolute left-[10%] right-[10%] top-7 hidden h-px bg-gradient-to-r from-transparent via-coral/30 to-transparent md:block"
          />

          <div className="relative grid gap-12 md:grid-cols-3 md:gap-8">
            {steps.map(({ Icon, label, title, body }, i) => (
              <Reveal key={label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="relative mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-white">
                    <span className="absolute inset-0 rounded-full border-2 border-coral" />
                    <Icon className="h-6 w-6 text-coral" />
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
      </div>
    </section>
  )
}
