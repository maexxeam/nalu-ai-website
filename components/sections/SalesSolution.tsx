import { Reveal } from '@/components/ui/Reveal'

interface PillarProps {
  eyebrow: string
  title: string
  body: string
  reverse?: boolean
  visual: React.ReactNode
}

function Pillar({ eyebrow, title, body, reverse, visual }: PillarProps) {
  return (
    <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
      <Reveal className={reverse ? 'md:order-2' : ''}>
        <p className="font-display text-sm font-semibold uppercase tracking-widest text-coral">
          {eyebrow}
        </p>
        <h3 className="mt-3 font-display text-[26px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[32px]">
          {title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-[var(--color-text-secondary)]">
          {body}
        </p>
      </Reveal>
      <Reveal delay={0.1} className={reverse ? 'md:order-1' : ''}>
        {visual}
      </Reveal>
    </div>
  )
}

function ProbabilityVisual() {
  const customers = [
    { name: 'Müller Großhandel', prob: 0.86, days: '12 d' },
    { name: 'Bäckerei Schmidt', prob: 0.74, days: '18 d' },
    { name: 'Fleischerei Wagner', prob: 0.61, days: '23 d' },
    { name: 'Café Sonne GmbH', prob: 0.42, days: '34 d' },
    { name: 'Hotel Adler', prob: 0.28, days: '> 30 d' },
  ]
  return (
    <div className="rounded-2xl border border-[var(--color-border-primary)] bg-white p-6 shadow-brand-md">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-text-tertiary)]">
          Kunden · Kaufwahrscheinlichkeit 30 d
        </p>
        <span className="rounded-full bg-coral/10 px-2.5 py-1 font-mono text-[11px] text-coral">
          5 von 247
        </span>
      </div>
      <div className="mt-5 divide-y divide-[var(--color-border-primary)]">
        {customers.map((c) => (
          <div key={c.name} className="py-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-[var(--color-text-primary)]">
                {c.name}
              </span>
              <span className="font-mono text-xs text-[var(--color-text-secondary)]">
                {(c.prob * 100).toFixed(0)} %
              </span>
            </div>
            <div className="mt-2 flex items-center gap-3">
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[var(--color-bg-secondary)]">
                <div
                  className="h-full rounded-full bg-coral"
                  style={{ width: `${c.prob * 100}%` }}
                />
              </div>
              <span className="font-mono text-[10px] text-[var(--color-text-tertiary)]">
                Ø {c.days}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ChurnVisual() {
  const alerts = [
    {
      name: 'Bäckerei Hofmann',
      severity: 'high',
      label: 'High Risk',
      detail: '47 Tage ohne Bestellung · Ø 14',
    },
    {
      name: 'Restaurant Lindenhof',
      severity: 'medium',
      label: 'Medium Risk',
      detail: '28 Tage ohne Bestellung · Ø 18',
    },
    {
      name: 'Imbiss Stern',
      severity: 'low',
      label: 'Frühwarnung',
      detail: 'Volumen − 35 % vs. Q-Schnitt',
    },
  ]
  const colors = {
    high: '#E5484D',
    medium: '#F76B15',
    low: '#F7B731',
  } as const

  return (
    <div className="rounded-2xl border border-[var(--color-border-primary)] bg-white p-6 shadow-brand-md">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-text-tertiary)]">
          Churn Alerts · 8:00 Uhr
        </p>
        <span className="rounded-full bg-[#E5484D]/10 px-2.5 py-1 font-mono text-[11px] text-[#E5484D]">
          3 neu
        </span>
      </div>
      <div className="mt-5 divide-y divide-[var(--color-border-primary)]">
        {alerts.map((a) => (
          <div key={a.name} className="flex items-start gap-3 py-3">
            <span
              className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full"
              style={{ background: colors[a.severity as keyof typeof colors] }}
            />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-[var(--color-text-primary)]">
                  {a.name}
                </p>
                <span
                  className="rounded-md px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider"
                  style={{
                    background: `${colors[a.severity as keyof typeof colors]}1A`,
                    color: colors[a.severity as keyof typeof colors],
                  }}
                >
                  {a.label}
                </span>
              </div>
              <p className="mt-1 text-[11px] text-[var(--color-text-tertiary)]">
                {a.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function NextBestVisual() {
  const recommendations = [
    { sku: 'Olivenöl Premium 1 L', score: 0.91, hint: '78 % ähnlicher Kunden kaufen' },
    { sku: 'Balsamico Riserva 0,5 L', score: 0.74, hint: '62 % ähnlicher Kunden kaufen' },
    { sku: 'Parmigiano 24 Mt. 1 kg', score: 0.58, hint: '49 % ähnlicher Kunden kaufen' },
  ]
  return (
    <div className="rounded-2xl border border-[var(--color-border-primary)] bg-white p-6 shadow-brand-md">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-text-tertiary)]">
            Kunde · Müller Großhandel
          </p>
          <p className="mt-1 font-display text-base font-semibold text-[var(--color-text-primary)]">
            Next Best Product
          </p>
        </div>
        <span className="rounded-full bg-ocean/10 px-2.5 py-1 font-mono text-[11px] text-ocean">
          + 3 Empfehlungen
        </span>
      </div>
      <ul className="mt-5 space-y-3">
        {recommendations.map((r) => (
          <li
            key={r.sku}
            className="rounded-lg border border-[var(--color-border-primary)] p-3"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-[var(--color-text-primary)]">
                {r.sku}
              </span>
              <span className="font-mono text-xs text-coral">
                {(r.score * 100).toFixed(0)} %
              </span>
            </div>
            <p className="mt-1 text-[11px] text-[var(--color-text-tertiary)]">
              {r.hint}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

const pillars: PillarProps[] = [
  {
    eyebrow: 'Kaufwahrscheinlichkeit',
    title: 'Wer kauft in den nächsten 30 Tagen?',
    body:
      'Sehen Sie auf einen Blick, welche Kunden in den nächsten 14 oder 30 Tagen kaufbereit sind — sortiert nach Wahrscheinlichkeit. Ihr Vertrieb ruft die richtigen Kunden zur richtigen Zeit an.',
    visual: <ProbabilityVisual />,
  },
  {
    eyebrow: 'Churn Detection',
    title: 'Bevor der Kunde abwandert.',
    body:
      'Kunden, die ungewöhnlich lange nicht bestellt haben, werden automatisch markiert. Ihr Key Account Manager bekommt den Alert um 8 Uhr — nicht wenn die Konkurrenz schon liefert.',
    reverse: true,
    visual: <ChurnVisual />,
  },
  {
    eyebrow: 'Next Best Product',
    title: 'Welcher Artikel fehlt im Warenkorb?',
    body:
      'Welche Produkte kauft dieser Kunde noch nicht — aber ähnliche Kunden längst? Nalu AI Sales zeigt das Cross-Sell-Potenzial pro Kunde, mit Wahrscheinlichkeit und Begründung.',
    visual: <NextBestVisual />,
  },
]

export function SalesSolution() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-wide">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-coral">
            Die Lösung
          </p>
          <h2 className="mt-4 font-display text-[32px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[40px]">
            Nalu AI Sales bringt Intelligenz
            <br />
            in Ihren Vertrieb.
          </h2>
        </Reveal>

        <div className="mt-20 space-y-24 md:space-y-32">
          {pillars.map((p) => (
            <Pillar key={p.eyebrow} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
