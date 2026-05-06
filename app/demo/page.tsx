import type { Metadata } from 'next'
import { PageHeader } from '@/components/ui/PageHeader'
import { DemoForm } from '@/components/ui/DemoForm'
import { CheckIcon } from '@/components/ui/Icons'

export const metadata: Metadata = {
  title: 'Demo anfragen',
  description:
    '30 Minuten Demo. Live-Forecasts auf Ihren Use Cases. Keine Verpflichtung.',
}

const expectations = [
  '30-Minuten Live-Demo auf Ihren Use Cases',
  'Echte Forecasts, keine Slideshow',
  'Ehrliche Einschätzung, ob Nalu AI zu Ihnen passt',
  'Auf Wunsch: technisches Deep Dive',
]

const agenda = [
  { time: '10 min', label: 'Ihre Situation verstehen' },
  { time: '15 min', label: 'Live-Demo relevanter Module' },
  { time: '5 min', label: 'Nächste Schritte' },
]

export default function DemoPage() {
  return (
    <>
      <PageHeader
        eyebrow="~ Demo"
        title="Demo anfragen."
        subtitle="30 Minuten. Keine Verpflichtung. Ihre Daten bleiben bei Ihnen."
      />

      <section className="bg-white py-20 md:py-24">
        <div className="container-wide">
          <div className="grid gap-16 lg:grid-cols-[3fr_2fr] lg:gap-20">
            <div>
              <DemoForm />
            </div>

            <aside className="space-y-12">
              <div>
                <h2 className="font-display text-xl font-semibold text-[var(--color-text-primary)]">
                  Was Sie erwartet
                </h2>
                <ul className="mt-6 space-y-3">
                  {expectations.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[var(--color-text-primary)]">
                      <CheckIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-seaglass" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-display text-xl font-semibold text-[var(--color-text-primary)]">
                  Typische Demo-Agenda
                </h2>
                <ul className="mt-6 divide-y divide-[var(--color-border-primary)] rounded-xl border border-[var(--color-border-primary)] bg-white">
                  {agenda.map((item) => (
                    <li
                      key={item.label}
                      className="flex items-center justify-between px-4 py-3"
                    >
                      <span className="text-sm text-[var(--color-text-primary)]">
                        {item.label}
                      </span>
                      <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-tertiary)]">
                        {item.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl bg-[var(--color-bg-tertiary)] p-6">
                <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--color-text-tertiary)]">
                  Lieber direkt schreiben?
                </p>
                <a
                  href="mailto:hello@nalu-ai.com"
                  className="mt-2 block font-display text-lg font-semibold text-ocean hover:text-coral"
                >
                  hello@nalu-ai.com
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
