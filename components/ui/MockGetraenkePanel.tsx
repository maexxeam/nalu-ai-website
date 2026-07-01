import { BrowserFrame } from './BrowserFrame'

// Nalu-AI-nahe Ansicht: Saisonalität über das Jahr + B2B-Kundenintelligenz
const MONTHS = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
const VALUES = [40, 38, 44, 50, 63, 78, 82, 80, 90, 74, 66, 96] // Sommer · Oktoberfest · Q4
const MAX = 100
const px = (i: number) => (i / (MONTHS.length - 1)) * 300
const py = (v: number) => 110 - (v / MAX) * 90
const LINE = VALUES.map((v, i) => `${px(i)},${py(v)}`).join(' ')
const AREA = `M ${px(0)} 110 L ${VALUES.map((v, i) => `${px(i)} ${py(v)}`).join(' L ')} L ${px(MONTHS.length - 1)} 110 Z`

export function MockGetraenkePanel() {
  return (
    <BrowserFrame url="app.nalu-ai.com/analytics">
      <div className="bg-[#FAFBFC] p-5">
        {/* Header */}
        <div className="mb-3">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-tertiary)]">
            SAISONALITÄT · ABSATZ ÜBER DAS JAHR
          </p>
          <p className="font-display text-base font-bold text-[var(--color-text-primary)]">
            Sommer · Oktoberfest · Q4
          </p>
        </div>

        {/* Category chips */}
        <div className="mb-3 flex flex-wrap gap-1.5">
          {['Bier', 'Limo', 'Wein', 'Sekt', 'Wasser'].map((c, i) => (
            <span
              key={c}
              className={
                i === 0
                  ? 'rounded-full bg-coral/10 px-2.5 py-1 font-mono text-[10px] font-semibold text-coral'
                  : 'rounded-full border border-[var(--color-border-primary)] bg-white px-2.5 py-1 font-mono text-[10px] text-[var(--color-text-secondary)]'
              }
            >
              {c}
            </span>
          ))}
        </div>

        {/* KPI pills */}
        <div className="mb-4 flex flex-wrap gap-2">
          {[
            { label: 'Artikel', value: '94 SKUs' },
            { label: 'Kategorien', value: '9' },
            { label: 'Horizont', value: '4 Wochen' },
          ].map((m) => (
            <div
              key={m.label}
              className="rounded-md border border-[var(--color-border-primary)] bg-white px-2.5 py-1 font-mono text-[10px] text-[var(--color-text-secondary)]"
            >
              {m.label} · <span className="font-semibold text-[var(--color-text-primary)]">{m.value}</span>
            </div>
          ))}
        </div>

        {/* Seasonal area chart */}
        <div className="rounded-lg border border-[var(--color-border-primary)] bg-white p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-semibold text-[var(--color-text-primary)]">Absatzindex · 12 Monate</p>
            <span className="font-mono text-[10px] text-coral">Peaks: Sep · Dez</span>
          </div>
          <svg viewBox="0 0 300 130" className="h-32 w-full" preserveAspectRatio="none">
            {[0, 30, 60, 90].map((y) => (
              <line key={y} x1="0" y1={y + 15} x2="300" y2={y + 15} stroke="#E2E8F0" strokeWidth="0.5" strokeDasharray="2 2" />
            ))}
            <path d={AREA} fill="#FF6B4A" opacity="0.08" />
            <polyline points={LINE} fill="none" stroke="#FF6B4A" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" />
            {VALUES.map((v, i) => (
              <circle key={i} cx={px(i)} cy={py(v)} r={i === 8 || i === 11 ? 2.2 : 1.2} fill={i === 8 || i === 11 ? '#FF6B4A' : '#0A4F7F'} />
            ))}
            {MONTHS.map((m, i) => (
              <text key={i} x={px(i)} y="125" fontSize="5.5" fill="#94A3B8" fontFamily="monospace" textAnchor="middle">{m}</text>
            ))}
          </svg>
        </div>

        {/* B2B customer intelligence strip */}
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[
            { label: 'B2B-Kunden', value: '~100' },
            { label: 'Churn-Risiko', value: '12', accent: true },
            { label: 'Lieferanten-OTIF', value: '96 %' },
          ].map((p) => (
            <div key={p.label} className="rounded-lg border border-[var(--color-border-primary)] bg-white p-2.5 text-center">
              <p className={`font-display text-base font-bold ${p.accent ? 'text-red-600' : 'text-[var(--color-text-primary)]'}`}>
                {p.value}
              </p>
              <p className="font-mono text-[9px] text-[var(--color-text-tertiary)]">{p.label}</p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-3 flex items-center justify-between font-mono text-[9px] text-[var(--color-text-tertiary)]">
          <span>Lifecycle: 3 Neu · 1 Auslauf</span>
          <span>Aktualisiert täglich 06:00</span>
        </div>
      </div>
    </BrowserFrame>
  )
}
