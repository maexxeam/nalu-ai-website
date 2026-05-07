import { CheckIcon } from '@/components/ui/Icons'
import { Reveal } from '@/components/ui/Reveal'

const features = [
  'Kaufwahrscheinlichkeit 14 d / 30 d pro Kunde',
  'Erwartetes Bestellvolumen (Einheiten + €)',
  'Churn-Risiko Klassifizierung (low / medium / high / lost)',
  'RFM-Segmentierung (Champion, Loyal, At Risk, New, Lost)',
  'Next Best Product Empfehlungen pro Kunde',
  'Sales Revenue Forecast (30 / 60 / 90 Tage)',
  'Automatische Churn-Alerts per E-Mail',
  'Customer Detail mit vollständiger Bestellhistorie',
  'Export: Kundenliste + Predictions als Excel',
  'Nahtlose Integration in Nalu AI Dashboard',
]

export function SalesFeatures() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-wide">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-coral">
            Funktionsumfang
          </p>
          <h2 className="mt-4 font-display text-[32px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[40px]">
            Alles, was Vertriebsteams brauchen.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-16 max-w-4xl">
          <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 rounded-lg border border-[var(--color-border-primary)] bg-white p-4"
              >
                <CheckIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-coral" />
                <span className="text-sm text-[var(--color-text-primary)]">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
