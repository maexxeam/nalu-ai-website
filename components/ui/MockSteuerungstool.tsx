import { BrowserFrame } from './BrowserFrame'

// MeatMind-Kern: Steuerungstool — von der Prognose bis zur Produktion
const STAGES = [
  { step: '01', label: 'Bedarf', value: '142 t', sub: 'Absatz-Forecast' },
  { step: '02', label: 'Einkauf', value: '38', sub: 'Bestellvorschläge' },
  { step: '03', label: 'Produktion', value: '86 %', sub: 'Kapazität' },
  { step: '04', label: 'Control Tower', value: '2', sub: 'Engpässe', accent: true },
]

const WORKCENTERS = ['Zerlegung', 'Wolf', 'Verpackung', 'Kutter']
const DAYS = ['Mo', 'Di', 'Mi', 'Do', 'Fr']
// Auslastung in % je Arbeitsplatz/Tag
const LOAD = [
  [72, 80, 68, 91, 60],
  [88, 96, 84, 78, 70],
  [64, 74, 82, 70, 58],
  [90, 98, 76, 88, 64],
]

function cellColor(u: number) {
  if (u >= 95) return '#F87171' // rot — Überlast
  if (u >= 82) return '#FBBF24' // gelb — eng
  return '#34D399' // grün — ok
}

export function MockSteuerungstool() {
  return (
    <BrowserFrame url="app.nalu-ai.com/steuerung">
      <div className="bg-[#FAFBFC] p-5">
        {/* Header */}
        <div className="mb-4">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-tertiary)]">
            STEUERUNGSTOOL · S&amp;OP-COCKPIT
          </p>
          <p className="font-display text-base font-bold text-[var(--color-text-primary)]">
            Von der Prognose bis zur Produktion
          </p>
        </div>

        {/* Pipeline */}
        <div className="flex items-stretch gap-1.5">
          {STAGES.map((s, i) => (
            <div key={s.step} className="flex flex-1 items-stretch gap-1.5">
              <div
                className={`flex-1 rounded-lg border p-2.5 ${
                  s.accent
                    ? 'border-coral/40 bg-coral/5'
                    : 'border-[var(--color-border-primary)] bg-white'
                }`}
              >
                <p className="font-mono text-[8px] text-[var(--color-text-tertiary)]">{s.step}</p>
                <p className={`font-display text-sm font-bold ${s.accent ? 'text-coral' : 'text-[var(--color-text-primary)]'}`}>
                  {s.value}
                </p>
                <p className="font-mono text-[8px] font-semibold uppercase text-[var(--color-text-secondary)]">
                  {s.label}
                </p>
                <p className="font-mono text-[8px] text-[var(--color-text-tertiary)]">{s.sub}</p>
              </div>
              {i < STAGES.length - 1 && (
                <span className="flex items-center font-mono text-xs text-[var(--color-text-tertiary)]">→</span>
              )}
            </div>
          ))}
        </div>

        {/* Capacity heatmap */}
        <div className="mt-3 rounded-lg border border-[var(--color-border-primary)] bg-white p-3">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-[11px] font-semibold text-[var(--color-text-primary)]">Kapazitäts-Auslastung · Linien</p>
            <div className="flex gap-2 font-mono text-[8px] text-[var(--color-text-tertiary)]">
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-sm" style={{ background: '#34D399' }} />ok</span>
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-sm" style={{ background: '#FBBF24' }} />eng</span>
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-sm" style={{ background: '#F87171' }} />Überlast</span>
            </div>
          </div>
          <div className="space-y-1">
            {WORKCENTERS.map((wc, r) => (
              <div key={wc} className="grid grid-cols-[74px_repeat(5,1fr)] items-center gap-1">
                <span className="font-mono text-[9px] text-[var(--color-text-secondary)]">{wc}</span>
                {DAYS.map((d, c) => (
                  <span
                    key={d}
                    className="flex h-5 items-center justify-center rounded-sm font-mono text-[8px] font-semibold text-white/90"
                    style={{ background: cellColor(LOAD[r][c]) }}
                  >
                    {LOAD[r][c]}
                  </span>
                ))}
              </div>
            ))}
            <div className="grid grid-cols-[74px_repeat(5,1fr)] gap-1 pt-0.5">
              <span />
              {DAYS.map((d) => (
                <span key={d} className="text-center font-mono text-[8px] text-[var(--color-text-tertiary)]">{d}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Balance / exception */}
        <div className="mt-3 rounded-r-lg border-l-2 border-amber-500 bg-amber-50 px-3 py-2.5">
          <p className="font-mono text-[10px] font-semibold text-amber-800">
            ⚠ Bedarf 142 t · Eigenproduktion 128 t · Engpass KW 30 — Zukauf 38 empfohlen
          </p>
        </div>

        {/* Footer */}
        <div className="mt-3 flex items-center justify-between font-mono text-[9px] text-[var(--color-text-tertiary)]">
          <span>Bedarf − Eigenproduktion − Zukauf = Restbedarf</span>
          <span>rollierend · 21 Tage</span>
        </div>
      </div>
    </BrowserFrame>
  )
}
