import type { Metadata } from 'next'
import { PageHeader } from '@/components/ui/PageHeader'
import { Button } from '@/components/ui/Button'
import { CheckIcon } from '@/components/ui/Icons'
import { FAQ } from '@/components/sections/FAQ'
import { SITE_URL } from '@/lib/metadata'
import { WaveAnimation } from '@/components/ui/WaveAnimation'

export const metadata: Metadata = {
  title: 'Preise – Core, Sales Add-on & Bundle',
  description:
    'Transparente Preise für Nalu AI: einmalige Implementation ab 50.000 €, ' +
    'monatliche Lizenz ab 4.500 €. Keine Cloud-Gebühren, keine versteckten Kosten.',
  alternates: {
    canonical: `${SITE_URL}/pricing`,
  },
}

// Two-phase explanation cards (Section 1)
const phases = [
  {
    eyebrow: 'Einmalig',
    title: 'Implementation',
    price: 'ab 50.000 €',
    bullets: [
      'Connector-Aufbau',
      'Datensäuberung',
      'Modell-Training',
      'Go-Live',
      'Schulung',
    ],
  },
  {
    eyebrow: 'Laufend',
    title: 'Monatliche Lizenz',
    price: 'ab 4.500 € / Monat',
    bullets: [
      'Wartung & Updates',
      'Support nach SLA',
      'Neue Features',
      'Automatische Berichte',
    ],
  },
]

// Section 2 — Comparison table
type Cell = boolean | string

interface Row {
  label: string
  core: Cell
  sales: Cell
  bundle: Cell
}

const featureRows: Row[] = [
  { label: 'Forecasting', core: true, sales: false, bundle: true },
  { label: 'Analytics', core: true, sales: false, bundle: true },
  { label: 'ABC / XYZ Segmentierung', core: true, sales: false, bundle: true },
  { label: 'Supply Chain & Reorder', core: true, sales: false, bundle: true },
  { label: 'Wöchentliche PDF-Berichte', core: true, sales: false, bundle: true },
  { label: 'Datenqualität', core: true, sales: false, bundle: true },
  { label: 'KI-Narrativ (Ollama)', core: true, sales: false, bundle: true },
  { label: 'Multi-Standort (optional)', core: true, sales: false, bundle: true },
  { label: 'Kaufwahrscheinlichkeit', core: false, sales: true, bundle: true },
  { label: 'Churn Detection', core: false, sales: true, bundle: true },
  { label: 'Next Best Product', core: false, sales: true, bundle: true },
  { label: 'Sales Revenue Forecast', core: false, sales: true, bundle: true },
  { label: 'Kunden-Detail mit Historie', core: false, sales: true, bundle: true },
]

interface Tier {
  key: 'core' | 'sales' | 'bundle'
  label: string
  monthly: string
  setup?: string
  note?: string
  cta: string
  href: string
  primary: boolean
}

const tiers: Tier[] = [
  {
    key: 'core',
    label: 'Core',
    monthly: 'ab 4.500 € / Monat',
    setup: '+ ab 50.000 € Implementation',
    cta: 'Angebot anfragen',
    href: '/demo',
    primary: false,
  },
  {
    key: 'sales',
    label: 'Sales Add-on',
    monthly: 'ab 2.500 € / Monat',
    setup: '+ ab 8.000 € Implementation',
    note: 'nur mit Core',
    cta: 'Angebot anfragen',
    href: '/demo',
    primary: false,
  },
  {
    key: 'bundle',
    label: 'Bundle',
    monthly: 'ab 7.000 € / Monat',
    setup: '+ ab 50.000 € Implementation',
    cta: 'Angebot anfragen →',
    href: '/demo',
    primary: true,
  },
]

function CellContent({ value }: { value: Cell }) {
  if (value === true) {
    return <CheckIcon className="mx-auto h-5 w-5 text-coral" />
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

// Section 3 — Implementation packages
interface ImplPackage {
  label: string
  price: string
  forWhom: string
  bullets: string[]
  cta: string
  primary: boolean
}

const implementationPackages: ImplPackage[] = [
  {
    label: 'Standard',
    price: 'ab 50.000 €',
    forWhom: '1 Standort, bestehende ERP-Daten',
    bullets: [
      'Connector-Entwicklung',
      'Datensäuberung',
      'Modell-Training',
      'Go-Live in 4 – 6 Wochen',
      'Schulung (0,5 Tage)',
    ],
    cta: 'Angebot anfragen',
    primary: false,
  },
  {
    label: 'Professional',
    price: 'ab 65.000 €',
    forWhom: 'mehrere Standorte oder komplexe ERP-Umgebung',
    bullets: [
      'Alles aus Standard',
      'Multi-Standort Support',
      'DWH-Aufbau (falls nötig)',
      'Erweiterte Datensäuberung',
      'Go-Live in 6 – 10 Wochen',
      'Schulung (1 Tag)',
    ],
    cta: 'Angebot anfragen →',
    primary: true,
  },
  {
    label: 'Enterprise',
    price: 'Individuelles Angebot',
    forWhom: 'Konzerne, internationale Standorte, Legacy-Systeme',
    bullets: [
      'Alles aus Professional',
      'Unbegrenzte Datenquellen',
      'Historische Migration (10+ Jahre)',
      'IT-Team Schulung (2 Tage)',
      '3 Monate Post-Launch Support',
    ],
    cta: 'Gespräch vereinbaren',
    primary: false,
  },
]

// Section 5 — Individual factors
const priceFactors = [
  { label: 'Anzahl Artikel', detail: '< 500 / 500 – 2.000 / 2.000+' },
  { label: 'Vertragslaufzeit', detail: 'monatlich / 1 Jahr / 2 Jahre' },
  { label: 'Anzahl Standorte', detail: '1 / 2 – 10 / 10+' },
  { label: 'Gewünschte Module', detail: 'Core / Sales / Connect' },
  { label: 'ERP-System', detail: 'CSV / Standard-ERP / SAP R/3' },
  { label: 'Support-Level', detail: 'Standard / Professional / Enterprise' },
  { label: 'Datenkomplexität', detail: 'gering / mittel / hoch' },
  { label: 'Referenzbereitschaft', detail: 'ja / nein' },
]

// Section 3b — Add-on implementation: simultaneously with Core vs. retrofitted
interface AddonImplRow {
  label: string
  simultaneous: string
  retrofit: string
}

const coreImplRows: AddonImplRow[] = [
  { label: 'Core Standard', simultaneous: 'ab 50.000 €', retrofit: '—' },
  { label: 'Core Professional', simultaneous: 'ab 65.000 €', retrofit: '—' },
  { label: 'Core Enterprise', simultaneous: 'Individuell', retrofit: '—' },
]

const addonImplRows: AddonImplRow[] = [
  { label: '+ Sales Add-on', simultaneous: '+ 8.000 – 12.000 €', retrofit: '18.000 €' },
  { label: '+ Connect Add-on', simultaneous: '+ 5.000 €', retrofit: '10.000 €' },
  { label: '+ DWH Starter', simultaneous: '+ 15.000 €', retrofit: '25.000 €' },
  { label: '+ Multi-Standort', simultaneous: '+ 10.000 – 20.000 €', retrofit: '20.000 – 35.000 €' },
]

// Section 4 — Social proof outcome stats
const socialProofStats = [
  {
    value: 'bis zu 60 %',
    label: 'Fehlbestände reduziert',
  },
  {
    value: 'halbiert',
    label: 'Planungszeit',
  },
  {
    value: '< 12 Monate',
    label: 'ROI-Amortisation typisch',
  },
]

// Section 6 — FAQ
const faqs = [
  {
    q: 'Warum gibt es keinen genauen Preis?',
    a: 'Jede Implementierung ist individuell — die Komplexität Ihrer ERP-Daten, die Anzahl Ihrer Artikel und Standorte bestimmen den Aufwand. Wir möchten Ihnen keinen Pauschalpreis nennen, der an Ihrer Realität vorbeigeht.',
  },
  {
    q: 'Was ist in der monatlichen Lizenz enthalten?',
    a: 'Software-Updates, neue Features, Wartung und Support nach vereinbartem SLA. Hosting zahlen Sie nicht — Nalu AI läuft auf Ihrer eigenen Infrastruktur.',
  },
  {
    q: 'Kann ich mit einem kleineren Paket starten und später erweitern?',
    a: 'Ja. Die meisten Kunden starten mit Core und fügen das Sales Add-on nach 3 – 6 Monaten hinzu. Die Implementierung ist modular aufgebaut.',
  },
  {
    q: 'Gibt es eine Mindestvertragslaufzeit?',
    a: 'Unsere Empfehlung sind 12 Monate — bei kürzeren Laufzeiten amortisiert sich die Implementation kaum. Bei 12 oder 24 Monaten Laufzeit bieten wir attraktive Konditionen. Monatliche Verträge sind möglich, dann gilt der Listenpreis.',
  },
  {
    q: 'Was kostet der Aufbau eines Data Warehouses?',
    a: 'Falls Sie noch keine konsolidierte Datenbasis haben, bauen wir diese vor der Nalu AI Implementierung auf. Kosten ab 15.000 € für eine Datenquelle, ab 35.000 € für mehrere. Sprechen Sie uns an.',
  },
  {
    q: 'Gibt es eine Testphase?',
    a: 'Wir bieten einen 30-Tage-Pilot zu reduzierten Konditionen an — mit echten Daten, echtem Modell, echten Ergebnissen. Kein Blindkauf.',
  },
  {
    q: 'Was kostet das Sales Add-on in der Implementation?',
    a: 'Wenn Sie das Sales Add-on zusammen mit Core implementieren, kostet die zusätzliche Einrichtung ab 8.000 € — wir nutzen den bereits aufgebauten Connector und die bereinigten Daten. Nachträglich liegt der Aufwand bei ca. 18.000 €, da wir einen separaten Deployment-Prozess durchlaufen.',
  },
  {
    q: 'Kann ich Add-ons später noch dazubuchen?',
    a: 'Ja, jederzeit. Wir empfehlen jedoch, bereits beim Erstgespräch zu überlegen, welche Module mittelfristig relevant sind — die gleichzeitige Implementierung ist für Sie deutlich günstiger.',
  },
]

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="~ Preise"
        title={
          <>
            Transparent.
            <br />
            Ohne versteckte Kosten.
          </>
        }
        subtitle="Nalu AI wird einmalig implementiert und läuft dann auf Ihrer Infrastruktur. Keine Cloud-Gebühren, keine Überraschungen."
      />

      {/* Section 1 — Two-phase intro */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-wide">
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {phases.map((p) => (
              <div
                key={p.title}
                className="flex h-full flex-col rounded-2xl border border-[var(--color-border-primary)] bg-white p-8 shadow-brand-sm"
              >
                <p className="font-mono text-[11px] uppercase tracking-widest text-coral">
                  {p.eyebrow}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold text-[var(--color-text-primary)]">
                  {p.title}
                </h3>
                <p className="mt-4 font-display text-2xl font-bold text-[var(--color-text-primary)]">
                  {p.price}
                </p>

                <ul className="mt-6 flex-1 space-y-2 border-t border-[var(--color-border-primary)] pt-6">
                  {p.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-sm text-[var(--color-text-primary)]"
                    >
                      <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-coral" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — Comparison Table */}
      <section className="bg-horizon py-20 md:py-24">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-[11px] uppercase tracking-widest text-coral">
              Module im Vergleich
            </p>
            <h2 className="mt-3 font-display text-[28px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[36px]">
              Core, Sales Add-on oder Bundle.
            </h2>
            <p className="mt-4 text-base text-[var(--color-text-secondary)]">
              Sales Add-on ist nur in Kombination mit Core verfügbar — das
              Bundle gibt Ihnen alles zum reduzierten Preis.
            </p>
          </div>

          <div className="mt-14 overflow-x-auto">
            <table className="mx-auto w-full max-w-5xl border-separate border-spacing-0">
              <thead>
                <tr>
                  <th className="w-[34%] py-4 pl-4 pr-2 text-left align-bottom" />
                  {tiers.map((tier) => (
                    <th key={tier.key} className="w-[22%] py-4 px-2 align-bottom">
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
                            (tier.primary
                              ? 'text-coral'
                              : 'text-[var(--color-text-tertiary)]')
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
                    Lizenz
                  </th>
                  {tiers.map((tier) => (
                    <th
                      key={tier.key}
                      className={
                        'border-y border-[var(--color-border-primary)] px-2 py-4 text-center align-top ' +
                        (tier.primary ? 'bg-coral/5' : '')
                      }
                    >
                      <p className="font-display text-base font-semibold text-[var(--color-text-primary)]">
                        {tier.monthly}
                      </p>
                      {tier.setup && (
                        <p className="mt-1 font-mono text-[11px] text-[var(--color-text-tertiary)]">
                          {tier.setup}
                        </p>
                      )}
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

          {/* Discount hint below table */}
          <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-coral/30 bg-coral/5 p-6 text-center md:p-8">
            <p className="text-sm leading-relaxed text-[var(--color-text-primary)]">
              <span className="font-semibold">Listenpreise.</span> Im
              persönlichen Gespräch erstellen wir ein individuelles Angebot —
              abgestimmt auf Ihre Unternehmensgröße und Vertragslaufzeit. Bei
              12+ Monaten Laufzeit bieten wir attraktive Konditionen.
            </p>
            <div className="mt-6">
              <Button href="/demo" size="md">
                Kostenloses Erstgespräch anfragen →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Implementation packages */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-[11px] uppercase tracking-widest text-coral">
              Implementation
            </p>
            <h2 className="mt-3 font-display text-[28px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[36px]">
              Implementation — einmalig
            </h2>
            <p className="mt-4 text-base text-[var(--color-text-secondary)]">
              Jede Implementierung ist individuell. Diese Pakete geben eine
              Orientierung.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-3">
            {implementationPackages.map((pkg) => (
              <div
                key={pkg.label}
                className={
                  'flex h-full flex-col rounded-2xl border p-8 ' +
                  (pkg.primary
                    ? 'border-coral bg-white shadow-brand-lg ring-1 ring-coral/40'
                    : 'border-[var(--color-border-primary)] bg-white')
                }
              >
                <div className="flex items-center justify-between">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-coral">
                    {pkg.label}
                  </p>
                  {pkg.primary && (
                    <span className="rounded-full bg-coral/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-coral">
                      Empfohlen
                    </span>
                  )}
                </div>

                <div className="mt-6 border-t border-[var(--color-border-primary)] pt-6">
                  <p className="font-display text-3xl font-bold text-[var(--color-text-primary)]">
                    {pkg.price}
                  </p>
                  <p className="mt-2 text-xs text-[var(--color-text-secondary)]">
                    Für: {pkg.forWhom}
                  </p>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {pkg.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-sm text-[var(--color-text-primary)]"
                    >
                      <CheckIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-coral" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button
                    href="/demo"
                    size="md"
                    variant={pkg.primary ? 'primary' : 'secondary'}
                    className="w-full"
                  >
                    {pkg.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Add-on implementation: gleichzeitig vs. nachträglich */}
          <div className="mx-auto mt-20 max-w-5xl">
            <div className="text-center">
              <p className="font-mono text-[11px] uppercase tracking-widest text-coral">
                Add-on Implementation
              </p>
              <h3 className="mt-3 font-display text-[22px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[28px]">
                Gleichzeitig oder nachträglich?
              </h3>
              <p className="mx-auto mt-4 max-w-2xl text-base text-[var(--color-text-secondary)]">
                Add-ons, die zusammen mit der Core-Implementation gebucht
                werden, sind deutlich günstiger — wir nutzen die bestehende
                Infrastruktur.
              </p>
            </div>

            <div className="mt-10 overflow-x-auto">
              <table className="w-full border-separate border-spacing-0">
                <thead>
                  <tr>
                    <th className="w-[34%] py-4 pl-4 pr-2 text-left" />
                    <th className="w-[33%] py-4 px-2 text-center align-bottom">
                      <div className="rounded-t-lg bg-coral/5 px-4 py-3 ring-1 ring-coral/40">
                        <p className="font-mono text-[11px] uppercase tracking-widest text-coral">
                          Gleichzeitig mit Core
                        </p>
                        <p className="mt-1 text-[11px] text-[var(--color-text-secondary)]">
                          empfohlen
                        </p>
                      </div>
                    </th>
                    <th className="w-[33%] py-4 px-2 text-center align-bottom">
                      <div className="px-4 py-3">
                        <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--color-text-tertiary)]">
                          Nachträglich
                        </p>
                        <p className="mt-1 text-[11px] text-[var(--color-text-tertiary)]">
                          nach Go-Live
                        </p>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {coreImplRows.map((row) => (
                    <tr key={row.label}>
                      <td className="border-b border-[var(--color-border-primary)] py-4 pl-4 pr-2 text-sm font-medium text-[var(--color-text-primary)]">
                        {row.label}
                      </td>
                      <td className="border-b border-[var(--color-border-primary)] bg-coral/5 py-4 px-2 text-center font-mono text-sm text-[var(--color-text-primary)]">
                        {row.simultaneous}
                      </td>
                      <td className="border-b border-[var(--color-border-primary)] py-4 px-2 text-center font-mono text-sm text-[var(--color-text-tertiary)]">
                        {row.retrofit}
                      </td>
                    </tr>
                  ))}

                  {addonImplRows.map((row, i) => (
                    <tr key={row.label}>
                      <td
                        className={
                          'border-b border-[var(--color-border-primary)] py-4 pl-4 pr-2 text-sm text-[var(--color-text-primary)] ' +
                          (i === 0 ? 'pt-6' : '')
                        }
                      >
                        {row.label}
                      </td>
                      <td className="border-b border-[var(--color-border-primary)] bg-coral/5 py-4 px-2 text-center font-mono text-sm text-[var(--color-text-primary)]">
                        {row.simultaneous}
                      </td>
                      <td className="border-b border-[var(--color-border-primary)] py-4 px-2 text-center font-mono text-sm text-[var(--color-text-secondary)]">
                        {row.retrofit}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Tip note */}
            <div className="mt-8 flex items-start gap-3 rounded-xl border-l-4 border-coral bg-white p-5 shadow-brand-sm">
              <span
                aria-hidden="true"
                className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-coral/10 font-display text-xs font-bold text-coral"
              >
                !
              </span>
              <p className="text-sm leading-relaxed text-[var(--color-text-primary)]">
                <span className="font-semibold">Tipp:</span> Add-ons, die
                gleichzeitig mit der Core-Implementation gebucht werden, sind
                deutlich günstiger — wir nutzen die bestehende Infrastruktur
                und sparen Aufwand. Nachträgliche Ergänzungen sind möglich,
                aber teurer.
              </p>
            </div>

            {/* Discount hint */}
            <div className="mx-auto mt-10 max-w-2xl text-center">
              <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                Listenpreise. Im persönlichen Gespräch erstellen wir ein
                individuelles Angebot — abgestimmt auf Ihre Unternehmensgröße
                und Vertragslaufzeit.
              </p>
              <div className="mt-6">
                <Button href="/demo" size="md">
                  Kostenloses Erstgespräch anfragen →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Social proof */}
      <section className="bg-horizon py-20 md:py-24">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-[11px] uppercase tracking-widest text-coral">
              Wirkung
            </p>
            <h2 className="mt-3 font-display text-[28px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[36px]">
              Was unsere Kunden berichten.
            </h2>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
            {socialProofStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-[var(--color-border-primary)] bg-white p-8 text-center shadow-brand-sm"
              >
                <p className="font-display text-3xl font-bold text-coral md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm text-[var(--color-text-secondary)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-2xl text-center">
            <p className="text-sm text-[var(--color-text-secondary)]">
              Ihr Einsparpotenzial hängt von Ihrer Situation ab —
              Artikelanzahl, ERP-Komplexität, Absatzvolumen. Wir berechnen es
              mit Ihnen gemeinsam.
            </p>
            <div className="mt-8">
              <Button href="/demo" size="lg">
                Kostenloses Erstgespräch anfragen →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Individual packages */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-wide">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <h2 className="font-display text-[28px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[36px]">
                Kein Paket passt?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-[var(--color-text-secondary)]">
                Nalu AI ist vollständig konfigurierbar. Wir erstellen Ihnen ein
                Angebot, das genau zu Ihren Anforderungen und Ihrem Budget passt.
              </p>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--color-border-primary)] bg-white p-8 md:p-10">
              <p className="font-display text-sm font-semibold uppercase tracking-widest text-ocean">
                Was Ihren Preis bestimmt
              </p>
              <div className="mt-6 grid gap-x-10 gap-y-5 sm:grid-cols-2">
                {priceFactors.map((f) => (
                  <div key={f.label} className="flex items-start gap-3">
                    <CheckIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-coral" />
                    <div>
                      <p className="text-sm font-medium text-[var(--color-text-primary)]">
                        {f.label}
                      </p>
                      <p className="mt-0.5 font-mono text-[11px] text-[var(--color-text-tertiary)]">
                        {f.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 border-t border-[var(--color-border-primary)] pt-8 text-center">
                <Button href="/demo" size="lg">
                  Demo anfragen — kostenloses Erstgespräch →
                </Button>
                <ul className="mx-auto mt-6 max-w-md space-y-1.5 text-left text-sm text-[var(--color-text-secondary)]">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-coral" />
                    <span>Welche Module Sie wirklich brauchen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-coral" />
                    <span>Was Ihre Implementierung kostet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-coral" />
                    <span>Wann Sie live gehen können</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 — FAQ */}
      <section className="bg-horizon py-20 md:py-24">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <p className="font-mono text-[11px] uppercase tracking-widest text-coral">
                FAQ
              </p>
              <h2 className="mt-3 font-display text-[28px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[36px]">
                Häufige Fragen
              </h2>
            </div>
            <div className="mt-12">
              <FAQ items={faqs} />
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 — Final CTA */}
      <section className="relative overflow-hidden bg-navy">
        <WaveAnimation
          className="absolute inset-x-0 top-0 h-40 w-full"
          color="#1E7AC2"
          opacity={0.1}
          flip
        />

        <div className="container-wide relative z-10 py-24 text-center md:py-32">
          <h2 className="mx-auto max-w-3xl font-display text-[32px] font-bold leading-[1.1] text-white md:text-[44px]">
            Lassen Sie uns über Ihr Projekt sprechen.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-white/70 md:text-lg">
            30 Minuten. Kostenlos. Kein Verkaufsgespräch — wir hören zuerst zu.
          </p>
          <div className="mt-10">
            <Button href="/demo" size="lg" className="animate-pulse-subtle">
              Demo anfragen →
            </Button>
          </div>
          <p className="mx-auto mt-8 max-w-md text-xs text-white/50">
            Typische Antwortzeit: &lt; 24 Stunden · Kein Angebot ohne Ihr
            Einverständnis
          </p>
        </div>

        <WaveAnimation
          className="absolute inset-x-0 bottom-0 h-40 w-full"
          color="#1E7AC2"
          opacity={0.1}
        />
      </section>
    </>
  )
}
