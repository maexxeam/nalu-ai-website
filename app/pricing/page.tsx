import type { Metadata } from 'next'
import { PageHeader } from '@/components/ui/PageHeader'
import { Button } from '@/components/ui/Button'
import { CheckIcon } from '@/components/ui/Icons'
import { SITE_URL } from '@/lib/metadata'

export const metadata: Metadata = {
  title: 'Preise – Core, Sales Add-on & Bundle',
  description:
    'Transparente Preise für Nalu AI Core, das Sales Add-on und das Bundle. ' +
    'Phase 1 Implementation einmalig, Phase 2 Wartung & Support monatlich.',
  alternates: {
    canonical: `${SITE_URL}/pricing`,
  },
}

interface ImplementationCard {
  key: 'core' | 'sales' | 'bundle'
  label: string
  price: string
  unit: string
  delta?: string
  bullets: string[]
  primary: boolean
}

const implementationCards: ImplementationCard[] = [
  {
    key: 'core',
    label: 'Core',
    price: 'ab 30.000 €',
    unit: 'einmalig',
    bullets: [
      'Connector-Entwicklung (SAP R/3, S/4HANA, REST, CSV)',
      'Modell-Training auf Ihren Daten',
      'Go-Live in 4 Wochen',
      'Schulung Ihres Teams (max. 2 Tage)',
    ],
    primary: false,
  },
  {
    key: 'sales',
    label: 'Sales Add-on',
    price: 'ab 8.000 €',
    unit: 'einmalig · zusätzlich zu Core',
    bullets: [
      'Customer-Datenmodell aktivieren',
      'RFM- und Churn-Modelle trainieren',
      'Next-Best-Product-Empfehlungen kalibrieren',
      'Sales-Dashboards einrichten',
    ],
    primary: false,
  },
  {
    key: 'bundle',
    label: 'Bundle',
    price: 'ab 35.000 €',
    unit: 'einmalig · statt 38.000 €',
    delta: '− 3.000 € Bundle-Vorteil',
    bullets: [
      'Alles aus Core-Implementation',
      'Alles aus Sales-Add-on-Implementation',
      'Gemeinsamer Discovery-Workshop',
      'Ein Go-Live für beide Module',
    ],
    primary: true,
  },
]

type Cell = boolean | string

interface Row {
  label: string
  core: Cell
  sales: Cell
  bundle: Cell
}

const priceRow: Row = {
  label: 'Preis pro Monat',
  core: '2.500 €',
  sales: '+1.500 €',
  bundle: '3.800 €',
}

const featureRows: Row[] = [
  { label: 'Forecasting', core: true, sales: false, bundle: true },
  { label: 'Analytics', core: true, sales: false, bundle: true },
  { label: 'ABC / XYZ Segmentierung', core: true, sales: false, bundle: true },
  { label: 'Supply Chain & Reorder', core: true, sales: false, bundle: true },
  { label: 'AI-Berichte (PDF)', core: true, sales: false, bundle: true },
  { label: 'Kaufwahrscheinlichkeit', core: false, sales: true, bundle: true },
  { label: 'Churn Detection', core: false, sales: true, bundle: true },
  { label: 'Next Best Product', core: false, sales: true, bundle: true },
  { label: 'Sales Revenue Forecast', core: false, sales: true, bundle: true },
]

const includedRows: Row[] = [
  { label: 'Wartung & Updates', core: 'inkl.', sales: 'inkl.', bundle: 'inkl.' },
  { label: 'Support (Standard SLA)', core: 'inkl.', sales: 'inkl.', bundle: 'inkl.' },
  { label: 'Wöchentliche AI-Berichte', core: 'inkl.', sales: 'inkl.', bundle: 'inkl.' },
]

interface Tier {
  key: 'core' | 'sales' | 'bundle'
  label: string
  cta: string
  href: string
  primary: boolean
  note?: string
}

const tiers: Tier[] = [
  {
    key: 'core',
    label: 'Core',
    cta: 'Demo anfragen',
    href: '/demo',
    primary: false,
  },
  {
    key: 'sales',
    label: 'Sales Add-on',
    cta: 'Add-on anfragen',
    href: '/demo',
    primary: false,
    note: 'nur mit Core',
  },
  {
    key: 'bundle',
    label: 'Bundle',
    cta: 'Bundle anfragen →',
    href: '/demo',
    primary: true,
  },
]

function CellContent({ value }: { value: Cell }) {
  if (value === true) {
    return <CheckIcon className="mx-auto h-5 w-5 text-seaglass" />
  }
  if (value === false) {
    return (
      <span className="text-[var(--color-text-tertiary)]" aria-label="nicht enthalten">
        —
      </span>
    )
  }
  return (
    <span className="font-mono text-sm text-[var(--color-text-primary)]">
      {value}
    </span>
  )
}

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="~ Preise"
        title="Transparent. In zwei Phasen."
        subtitle="Einmalige Implementation, dann monatliche Wartung. Keine versteckten Abo-Stufen, keine User-Lizenzen."
      />

      {/* Phase 1 — Implementation (einmalig) */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-[11px] uppercase tracking-widest text-coral">
              Phase 1
            </p>
            <h2 className="mt-3 font-display text-[28px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[36px]">
              Implementation — einmalig
            </h2>
            <p className="mt-4 text-base text-[var(--color-text-secondary)]">
              Setup, Connector-Entwicklung, Modell-Training, Schulung. Go-Live in
              vier Wochen.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-3">
            {implementationCards.map((card) => (
              <div
                key={card.key}
                className={
                  'flex h-full flex-col rounded-2xl border p-8 ' +
                  (card.primary
                    ? 'border-coral bg-white shadow-brand-lg ring-1 ring-coral/40'
                    : 'border-[var(--color-border-primary)] bg-white')
                }
              >
                <div className="flex items-center justify-between">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-coral">
                    {card.label}
                  </p>
                  {card.primary && (
                    <span className="rounded-full bg-coral/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-coral">
                      Empfohlen
                    </span>
                  )}
                </div>

                <div className="mt-6 border-t border-[var(--color-border-primary)] pt-6">
                  <p className="font-display text-3xl font-bold text-[var(--color-text-primary)]">
                    {card.price}
                  </p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-widest text-[var(--color-text-tertiary)]">
                    {card.unit}
                  </p>
                  {card.delta && (
                    <p className="mt-2 font-mono text-[11px] text-coral">
                      {card.delta}
                    </p>
                  )}
                </div>

                <ul className="mt-8 flex-1 space-y-3">
                  {card.bullets.map((bullet) => (
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
            ))}
          </div>
        </div>
      </section>

      {/* Phase 2 — Laufend (Vergleichstabelle) */}
      <section className="bg-horizon py-20 md:py-24">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-[11px] uppercase tracking-widest text-coral">
              Phase 2
            </p>
            <h2 className="mt-3 font-display text-[28px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[36px]">
              Laufend — pro Monat
            </h2>
            <p className="mt-4 text-base text-[var(--color-text-secondary)]">
              Wartung, Support, neue Features. Wöchentliche AI-Berichte
              automatisch.
            </p>
          </div>

          <div className="mt-14 overflow-x-auto">
            <table className="mx-auto w-full max-w-5xl border-separate border-spacing-0">
              <thead>
                <tr>
                  <th className="w-[34%] py-4 pl-4 pr-2 text-left align-bottom" />
                  {tiers.map((tier) => (
                    <th
                      key={tier.key}
                      className="w-[22%] py-4 px-2 align-bottom"
                    >
                      <div
                        className={
                          tier.primary
                            ? 'rounded-t-lg bg-coral/5 px-4 py-4 ring-1 ring-coral/40'
                            : 'px-4 py-4'
                        }
                      >
                        <p
                          className={
                            'font-mono text-[11px] uppercase tracking-widest ' +
                            (tier.primary ? 'text-coral' : 'text-[var(--color-text-tertiary)]')
                          }
                        >
                          {tier.label}
                        </p>
                        {tier.note && (
                          <p className="mt-1 text-[11px] text-[var(--color-text-tertiary)]">
                            ({tier.note})
                          </p>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
                <tr>
                  <th className="border-y border-[var(--color-border-primary)] py-4 pl-4 pr-2 text-left text-sm font-medium text-[var(--color-text-primary)]">
                    {priceRow.label}
                  </th>
                  {(['core', 'sales', 'bundle'] as const).map((k) => (
                    <th
                      key={k}
                      className={
                        'border-y border-[var(--color-border-primary)] py-4 px-2 text-center font-display text-base font-semibold text-[var(--color-text-primary)] ' +
                        (k === 'bundle' ? 'bg-coral/5' : '')
                      }
                    >
                      {priceRow[k]}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {featureRows.map((row) => (
                  <tr key={row.label}>
                    <td className="border-b border-[var(--color-border-primary)] py-4 pl-4 pr-2 text-sm text-[var(--color-text-primary)]">
                      {row.label}
                    </td>
                    {(['core', 'sales', 'bundle'] as const).map((k) => (
                      <td
                        key={k}
                        className={
                          'border-b border-[var(--color-border-primary)] py-4 px-2 text-center ' +
                          (k === 'bundle' ? 'bg-coral/5' : '')
                        }
                      >
                        <CellContent value={row[k]} />
                      </td>
                    ))}
                  </tr>
                ))}

                {includedRows.map((row) => (
                  <tr key={row.label}>
                    <td className="border-b border-[var(--color-border-primary)] py-4 pl-4 pr-2 text-sm text-[var(--color-text-secondary)]">
                      {row.label}
                    </td>
                    {(['core', 'sales', 'bundle'] as const).map((k) => (
                      <td
                        key={k}
                        className={
                          'border-b border-[var(--color-border-primary)] py-4 px-2 text-center font-mono text-xs text-[var(--color-text-secondary)] ' +
                          (k === 'bundle' ? 'bg-coral/5' : '')
                        }
                      >
                        {row[k]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>

              <tfoot>
                <tr>
                  <td className="py-6 pl-4 pr-2" />
                  {tiers.map((tier) => (
                    <td
                      key={tier.key}
                      className={
                        'py-6 px-2 text-center ' +
                        (tier.primary ? 'rounded-b-lg bg-coral/5' : '')
                      }
                    >
                      <Button
                        href={tier.href}
                        size="md"
                        variant={tier.primary ? 'primary' : 'secondary'}
                        className="w-full max-w-[200px]"
                      >
                        {tier.cta}
                      </Button>
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>

          <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-[var(--color-text-secondary)]">
            Jedes Projekt ist individuell — Preise variieren je nach
            Datenkomplexität, Connector-Aufwand und Anzahl Artikel/Kunden.
            Genaues Angebot nach 30-Minuten-Demo.
          </p>
        </div>
      </section>
    </>
  )
}
