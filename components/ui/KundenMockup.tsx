import { BrowserFrame } from './BrowserFrame'

const CUSTOMERS = [
  {
    name: 'REWE Group',
    id: 'KD-001 · Champion',
    pct: 92,
    termin: 'KW 20',
    status: 'Kaufbereit' as const,
  },
  {
    name: 'Edeka Südbayern',
    id: 'KD-002 · Loyal',
    pct: 78,
    termin: 'KW 21',
    status: 'Kaufbereit' as const,
  },
  {
    name: 'Gastro Service Nord',
    id: 'KD-047 · At Risk',
    pct: 34,
    termin: '—',
    status: 'Churn-Risiko' as const,
  },
  {
    name: 'Metzgerei Huber',
    id: 'KD-089 · Loyal',
    pct: 61,
    termin: 'KW 22',
    status: 'Bald kont.' as const,
  },
]

const BAR_COLOR: Record<string, string> = {
  Kaufbereit: '#0A4F7F',
  'Bald kont.': '#F59E0B',
  'Churn-Risiko': '#E24B4A',
}

const BADGE: Record<string, { bg: string; text: string }> = {
  Kaufbereit: { bg: 'bg-emerald-50', text: 'text-emerald-700' },
  'Bald kont.': { bg: 'bg-amber-50', text: 'text-amber-700' },
  'Churn-Risiko': { bg: 'bg-red-50', text: 'text-red-700' },
}

export function KundenMockup() {
  return (
    <BrowserFrame url="app.nalu-ai.com/kunden">
      <div className="bg-[#FAFBFC] p-5">
        {/* Header */}
        <div className="mb-4">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-tertiary)]">
            KUNDEN-INTELLIGENZ
          </p>
          <p className="font-display text-base font-bold text-[var(--color-text-primary)]">
            Wer kauft wann — und was.
          </p>
        </div>

        {/* KPI cards */}
        <div className="mb-4 grid grid-cols-3 gap-2">
          <div className="rounded-lg border border-[var(--color-border-primary)] bg-white p-3">
            <p className="font-mono text-[9px] uppercase tracking-wide text-[var(--color-text-tertiary)]">
              Kaufbereit (30T)
            </p>
            <p className="mt-1 font-display text-xl font-bold text-[#0A4F7F]">143</p>
          </div>
          <div className="rounded-lg border border-[var(--color-border-primary)] bg-white p-3">
            <p className="font-mono text-[9px] uppercase tracking-wide text-[var(--color-text-tertiary)]">
              Erw. Umsatz
            </p>
            <p className="mt-1 font-display text-xl font-bold text-[#0A4F7F]">€184k</p>
          </div>
          <div className="rounded-lg border border-[var(--color-border-primary)] bg-white p-3">
            <p className="font-mono text-[9px] uppercase tracking-wide text-[var(--color-text-tertiary)]">
              Churn-Risiko
            </p>
            <p className="mt-1 font-display text-xl font-bold text-red-600">12</p>
          </div>
        </div>

        {/* Table header */}
        <div className="grid grid-cols-[1fr_80px_52px_72px] items-center gap-2 border-b border-[var(--color-border-primary)] pb-2 font-mono text-[9px] font-semibold uppercase tracking-wider text-[var(--color-text-tertiary)]">
          <span>Kunde</span>
          <span>Kaufwahrsch.</span>
          <span className="text-center">Termin</span>
          <span className="text-center">Status</span>
        </div>

        {/* Rows */}
        <div className="divide-y divide-[var(--color-border-primary)] bg-white">
          {CUSTOMERS.map((c) => {
            const barColor = BAR_COLOR[c.status]
            const badge = BADGE[c.status]
            return (
              <div
                key={c.id}
                className="grid grid-cols-[1fr_80px_52px_72px] items-center gap-2 px-0 py-3"
              >
                <div>
                  <p className="text-xs font-semibold text-[var(--color-text-primary)]">
                    {c.name}
                  </p>
                  <p className="font-mono text-[9px] text-[var(--color-text-tertiary)]">
                    {c.id}
                  </p>
                </div>
                <div className="flex flex-col gap-0.5">
                  <div className="h-2 w-full overflow-hidden rounded-full bg-[var(--color-bg-secondary)]">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${c.pct}%`, backgroundColor: barColor }}
                    />
                  </div>
                  <p className="font-mono text-[9px] font-semibold" style={{ color: barColor }}>
                    {c.pct}%
                  </p>
                </div>
                <p className="text-center font-mono text-[10px] text-[var(--color-text-secondary)]">
                  {c.termin}
                </p>
                <div className={`inline-flex justify-center rounded-md ${badge.bg} px-1.5 py-0.5 font-mono text-[9px] font-semibold ${badge.text}`}>
                  {c.status}
                </div>
              </div>
            )
          })}
        </div>

        {/* Footer */}
        <div className="mt-3 font-mono text-[9px] text-[var(--color-text-tertiary)]">
          770 Kunden · aktualisiert täglich 06:00 · Modell: Survival Analysis
        </div>
      </div>
    </BrowserFrame>
  )
}
