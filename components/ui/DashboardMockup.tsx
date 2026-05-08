import { Fragment } from 'react'
import { BrowserFrame } from './BrowserFrame'

const KPIS = [
  { label: 'Gesamtabsatz', value: '€ 2.4 M', delta: '+8.2 %', positive: true },
  { label: 'Forecast-Genauigkeit', value: '96.2 %', delta: 'MAPE 7.6 %', positive: true },
  { label: 'Service Level', value: '98.1 %', delta: '+1.4 %', positive: true },
  { label: 'Aktive Forecasts', value: '894', delta: '12 neue', positive: true },
]

const HISTORY = [62, 70, 58, 75, 72, 84, 78, 82]
const FORECAST = [85, 88, 80, 92]

const ABC_MATRIX: Array<{ x: 'A' | 'B' | 'C'; y: 'X' | 'Y' | 'Z'; count: number; color: string }> = [
  { x: 'A', y: 'X', count: 142, color: 'bg-coral' },
  { x: 'A', y: 'Y', count: 78, color: 'bg-coral/70' },
  { x: 'A', y: 'Z', count: 22, color: 'bg-coral/40' },
  { x: 'B', y: 'X', count: 96, color: 'bg-ocean/70' },
  { x: 'B', y: 'Y', count: 134, color: 'bg-ocean' },
  { x: 'B', y: 'Z', count: 64, color: 'bg-ocean/50' },
  { x: 'C', y: 'X', count: 48, color: 'bg-slate-300' },
  { x: 'C', y: 'Y', count: 112, color: 'bg-slate-400' },
  { x: 'C', y: 'Z', count: 198, color: 'bg-slate-500' },
]

export function DashboardMockup() {
  const allValues = [...HISTORY, ...FORECAST]
  const max = Math.max(...allValues)
  const total = HISTORY.length + FORECAST.length
  const barWidth = 100 / total
  const lineY = (v: number) => 110 - (v / max) * 90

  return (
    <BrowserFrame url="app.naluai.com/dashboard">
      <div className="bg-[#FAFBFC] p-5">
        {/* Header row */}
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="font-display text-base font-bold text-[var(--color-text-primary)]">
              Übersicht
            </p>
            <p className="text-xs text-[var(--color-text-tertiary)]">KW 18 · Mo, 8. Mai</p>
          </div>
          <div className="flex gap-1.5">
            <span className="rounded-md bg-white px-2.5 py-1 font-mono text-[10px] text-[var(--color-text-secondary)] shadow-sm">7T</span>
            <span className="rounded-md bg-navy px-2.5 py-1 font-mono text-[10px] text-white shadow-sm">30T</span>
            <span className="rounded-md bg-white px-2.5 py-1 font-mono text-[10px] text-[var(--color-text-secondary)] shadow-sm">YTD</span>
          </div>
        </div>

        {/* KPI cards */}
        <div className="grid grid-cols-4 gap-2">
          {KPIS.map((kpi) => (
            <div key={kpi.label} className="rounded-lg border border-[var(--color-border-primary)] bg-white p-3">
              <p className="text-[10px] font-medium uppercase tracking-wide text-[var(--color-text-tertiary)]">
                {kpi.label}
              </p>
              <p className="mt-1.5 font-display text-lg font-bold text-[var(--color-text-primary)]">
                {kpi.value}
              </p>
              <p className="mt-0.5 font-mono text-[9px] text-emerald-600">{kpi.delta}</p>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="mt-4 rounded-lg border border-[var(--color-border-primary)] bg-white p-4">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-[var(--color-text-primary)]">
                Absatz vs. Forecast · 12 Wochen
              </p>
              <p className="font-mono text-[10px] text-[var(--color-text-tertiary)]">LightGBM · MAPE 7.6 %</p>
            </div>
            <div className="flex gap-3 text-[10px]">
              <span className="flex items-center gap-1 text-[var(--color-text-secondary)]">
                <span className="h-2 w-2 rounded-sm bg-ocean" /> Historie
              </span>
              <span className="flex items-center gap-1 text-[var(--color-text-secondary)]">
                <span className="h-2 w-2 rounded-sm bg-coral" /> Forecast
              </span>
            </div>
          </div>

          <svg viewBox="0 0 300 120" className="h-32 w-full" preserveAspectRatio="none">
            {[0, 30, 60, 90].map((y) => (
              <line key={y} x1="0" y1={y + 15} x2="300" y2={y + 15} stroke="#E2E8F0" strokeWidth="0.5" strokeDasharray="2 2" />
            ))}

            {HISTORY.map((v, i) => (
              <rect
                key={`h${i}`}
                x={i * barWidth * 3 + 1}
                y={lineY(v)}
                width={barWidth * 3 - 2}
                height={110 - lineY(v)}
                fill="#1E7AC2"
                opacity="0.85"
                rx="1"
              />
            ))}
            {FORECAST.map((v, i) => (
              <rect
                key={`f${i}`}
                x={(HISTORY.length + i) * barWidth * 3 + 1}
                y={lineY(v)}
                width={barWidth * 3 - 2}
                height={110 - lineY(v)}
                fill="#FF6B4A"
                opacity="0.85"
                rx="1"
              />
            ))}

            {/* Confidence band on forecast */}
            <path
              d={`M ${HISTORY.length * barWidth * 3} ${lineY(FORECAST[0]) - 6}
                  L ${total * barWidth * 3} ${lineY(FORECAST[FORECAST.length - 1]) - 8}
                  L ${total * barWidth * 3} ${lineY(FORECAST[FORECAST.length - 1]) + 8}
                  L ${HISTORY.length * barWidth * 3} ${lineY(FORECAST[0]) + 6} Z`}
              fill="#FF6B4A"
              opacity="0.12"
            />

            {/* Vertical separator: today */}
            <line
              x1={HISTORY.length * barWidth * 3}
              y1="10"
              x2={HISTORY.length * barWidth * 3}
              y2="115"
              stroke="#94A3B8"
              strokeWidth="0.6"
              strokeDasharray="3 3"
            />
            <text
              x={HISTORY.length * barWidth * 3 + 3}
              y="14"
              fontSize="6"
              fill="#94A3B8"
              fontFamily="monospace"
            >
              HEUTE
            </text>
          </svg>
        </div>

        {/* ABC/XYZ matrix */}
        <div className="mt-3 rounded-lg border border-[var(--color-border-primary)] bg-white p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-semibold text-[var(--color-text-primary)]">
              ABC/XYZ-Matrix · 894 Artikel
            </p>
            <p className="font-mono text-[10px] text-[var(--color-text-tertiary)]">automatisch klassifiziert</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="grid w-fit grid-cols-[auto_repeat(3,1fr)] gap-1.5">
              <div />
              {(['A', 'B', 'C'] as const).map((x) => (
                <div key={x} className="text-center font-mono text-[10px] font-bold text-[var(--color-text-tertiary)]">
                  {x}
                </div>
              ))}
              {(['X', 'Y', 'Z'] as const).map((y) => (
                <Fragment key={y}>
                  <div className="flex items-center font-mono text-[10px] font-bold text-[var(--color-text-tertiary)]">
                    {y}
                  </div>
                  {(['A', 'B', 'C'] as const).map((x) => {
                    const cell = ABC_MATRIX.find((c) => c.x === x && c.y === y)!
                    return (
                      <div
                        key={`${x}-${y}`}
                        className={`flex h-9 w-12 items-center justify-center rounded-md ${cell.color} font-display text-[11px] font-bold text-white`}
                      >
                        {cell.count}
                      </div>
                    )
                  })}
                </Fragment>
              ))}
            </div>

            <div className="flex-1 space-y-1.5 pl-2">
              <div className="flex items-center gap-2 text-[10px]">
                <span className="h-2 w-2 rounded-sm bg-coral" />
                <span className="text-[var(--color-text-secondary)]">A · Hoher Umsatzanteil</span>
              </div>
              <div className="flex items-center gap-2 text-[10px]">
                <span className="h-2 w-2 rounded-sm bg-ocean" />
                <span className="text-[var(--color-text-secondary)]">B · Mittelwert</span>
              </div>
              <div className="flex items-center gap-2 text-[10px]">
                <span className="h-2 w-2 rounded-sm bg-slate-400" />
                <span className="text-[var(--color-text-secondary)]">C · Geringer Umsatz</span>
              </div>
              <div className="mt-2 border-t border-[var(--color-border-primary)] pt-1.5 font-mono text-[9px] text-[var(--color-text-tertiary)]">
                XYZ = Variabilität · niedrig → hoch
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  )
}
