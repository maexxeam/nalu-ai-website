import { BrowserFrame } from './BrowserFrame'

// Nalu-AI-nahe Ansicht: tägliche Backwaren-Nachfrage je Filiale, Wochenend-Peak
const DAYS = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So']
const DEMAND = [72, 68, 70, 74, 88, 100, 34] // Wochenend-Peak, So reduziert
const MAX = Math.max(...DEMAND)
const bw = 300 / DAYS.length
const barY = (v: number) => 110 - (v / MAX) * 90

export function MockBackereiPanel() {
  return (
    <BrowserFrame url="app.nalu-ai.com/filialen">
      <div className="bg-[#FAFBFC] p-5">
        {/* Header */}
        <div className="mb-3">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-tertiary)]">
            FILIALE · TÄGLICHE PROGNOSE
          </p>
          <p className="font-display text-base font-bold text-[var(--color-text-primary)]">
            Backwaren-Bedarf je Tag
          </p>
        </div>

        {/* Filiale switcher */}
        <div className="mb-3 flex flex-wrap gap-1.5">
          {[
            { name: 'Innenstadt', active: true },
            { name: 'Bahnhof', active: false },
            { name: 'Wohngebiet', active: false },
          ].map((f) => (
            <span
              key={f.name}
              className={
                f.active
                  ? 'rounded-full bg-coral/10 px-2.5 py-1 font-mono text-[10px] font-semibold text-coral'
                  : 'rounded-full border border-[var(--color-border-primary)] bg-white px-2.5 py-1 font-mono text-[10px] text-[var(--color-text-secondary)]'
              }
            >
              {f.name}
            </span>
          ))}
        </div>

        {/* KPI pills */}
        <div className="mb-4 flex flex-wrap gap-2">
          {[
            { label: 'Horizont', value: '14 Tage' },
            { label: 'Vorlauf', value: '1 Tag' },
            { label: 'Frische', value: 'same-day' },
          ].map((m) => (
            <div
              key={m.label}
              className="rounded-md border border-[var(--color-border-primary)] bg-white px-2.5 py-1 font-mono text-[10px] text-[var(--color-text-secondary)]"
            >
              {m.label} · <span className="font-semibold text-[var(--color-text-primary)]">{m.value}</span>
            </div>
          ))}
        </div>

        {/* Weekday bar chart */}
        <div className="rounded-lg border border-[var(--color-border-primary)] bg-white p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-semibold text-[var(--color-text-primary)]">Absatz je Wochentag</p>
            <span className="font-mono text-[10px] text-coral">Wochenend-Peak</span>
          </div>
          <svg viewBox="0 0 300 130" className="h-32 w-full" preserveAspectRatio="none">
            {[0, 30, 60, 90].map((y) => (
              <line key={y} x1="0" y1={y + 15} x2="300" y2={y + 15} stroke="#E2E8F0" strokeWidth="0.5" strokeDasharray="2 2" />
            ))}
            {DEMAND.map((v, i) => (
              <rect
                key={i}
                x={i * bw + 4}
                y={barY(v)}
                width={bw - 8}
                height={110 - barY(v)}
                fill={i >= 5 ? '#FF6B4A' : '#0A4F7F'}
                opacity={i === 6 ? 0.45 : 0.85}
                rx="1.5"
              />
            ))}
            {DAYS.map((d, i) => (
              <text key={d} x={(i + 0.5) * bw} y="125" fontSize="6" fill="#94A3B8" fontFamily="monospace" textAnchor="middle">{d}</text>
            ))}
          </svg>
        </div>

        {/* Material warning (Procurement / Control Tower) */}
        <div className="mt-3 rounded-r-lg border-l-2 border-amber-500 bg-amber-50 px-3 py-2.5">
          <p className="font-mono text-[10px] font-semibold text-amber-800">
            ⚠ Mehl Type 550 · Reichweite 1 Tag · Bestellvorschlag offen
          </p>
        </div>

        {/* Footer */}
        <div className="mt-3 flex items-center justify-between font-mono text-[9px] text-[var(--color-text-tertiary)]">
          <span>Rezept-Explosion (BOM) aktiv</span>
          <span>Ofen-Auslastung 86 %</span>
        </div>
      </div>
    </BrowserFrame>
  )
}
