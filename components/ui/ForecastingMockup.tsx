import { BrowserFrame } from './BrowserFrame'

const HISTORY = [340, 410, 370, 395]
const FORECAST = [387, 420, 350, 390, 430]
const ALL = [...HISTORY, ...FORECAST]
const MAX = Math.max(...ALL)
const TOTAL = ALL.length

const bw = 300 / TOTAL
const lineY = (v: number) => 110 - (v / MAX) * 90

const WEEKS_HISTORY = ['KW 38', 'KW 39', 'KW 40', 'KW 41']
const WEEKS_FORECAST = ['KW 42', 'KW 43', 'KW 44', 'KW 45', 'KW 46']
const HEUTE_X = HISTORY.length * bw

export function ForecastingMockup() {
  return (
    <BrowserFrame url="app.nalu-ai.com/forecasting">
      <div className="bg-[#FAFBFC] p-5">
        {/* Article header */}
        <div className="mb-4">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-tertiary)]">
            ARTIKEL
          </p>
          <p className="font-display text-base font-bold text-[var(--color-text-primary)]">
            Nordpils Premium 20×0,5L
          </p>
          <p className="font-mono text-[10px] text-[var(--color-text-tertiary)]">
            BIE-001 · 8-Wochen Forecast
          </p>
        </div>

        {/* Metric pills */}
        <div className="mb-4 flex flex-wrap gap-2">
          {[
            { label: 'Modell', value: 'LightGBM' },
            { label: 'MAPE', value: '8,4 %' },
            { label: 'Accuracy', value: '91,6 %' },
          ].map((m) => (
            <div
              key={m.label}
              className="rounded-md border border-[var(--color-border-primary)] bg-white px-2.5 py-1 font-mono text-[10px] text-[var(--color-text-secondary)]"
            >
              {m.label} · <span className="font-semibold text-[var(--color-text-primary)]">{m.value}</span>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="rounded-lg border border-[var(--color-border-primary)] bg-white p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-semibold text-[var(--color-text-primary)]">
              Absatz-Forecast · KW 38 – KW 46
            </p>
            <div className="flex gap-3 text-[10px]">
              <span className="flex items-center gap-1 text-[var(--color-text-secondary)]">
                <span className="h-2 w-2 rounded-sm bg-[#0A4F7F]" /> Historie
              </span>
              <span className="flex items-center gap-1 text-[var(--color-text-secondary)]">
                <span className="h-2 w-2 rounded-sm bg-coral opacity-80" /> Forecast
              </span>
            </div>
          </div>

          <svg viewBox="0 0 300 130" className="h-36 w-full" preserveAspectRatio="none">
            {/* Grid lines */}
            {[0, 30, 60, 90].map((y) => (
              <line key={y} x1="0" y1={y + 15} x2="300" y2={y + 15} stroke="#E2E8F0" strokeWidth="0.5" strokeDasharray="2 2" />
            ))}

            {/* Confidence band (behind forecast bars) */}
            <path
              d={`M ${HEUTE_X} ${lineY(FORECAST[0]) - 10}
                  L ${TOTAL * bw} ${lineY(FORECAST[FORECAST.length - 1]) - 14}
                  L ${TOTAL * bw} ${lineY(FORECAST[FORECAST.length - 1]) + 14}
                  L ${HEUTE_X} ${lineY(FORECAST[0]) + 10} Z`}
              fill="#0A4F7F"
              opacity="0.07"
            />

            {/* History bars */}
            {HISTORY.map((v, i) => (
              <rect
                key={`h${i}`}
                x={i * bw + 2}
                y={lineY(v)}
                width={bw - 4}
                height={110 - lineY(v)}
                fill="#0A4F7F"
                opacity="0.85"
                rx="1.5"
              />
            ))}

            {/* Forecast bars */}
            {FORECAST.map((v, i) => (
              <rect
                key={`f${i}`}
                x={(HISTORY.length + i) * bw + 2}
                y={lineY(v)}
                width={bw - 4}
                height={110 - lineY(v)}
                fill="#FF6B4A"
                opacity="0.80"
                rx="1.5"
              />
            ))}

            {/* HEUTE line */}
            <line
              x1={HEUTE_X}
              y1="10"
              x2={HEUTE_X}
              y2="115"
              stroke="#94A3B8"
              strokeWidth="0.8"
              strokeDasharray="4 4"
            />
            <text x={HEUTE_X + 3} y="14" fontSize="6" fill="#94A3B8" fontFamily="monospace">
              HEUTE
            </text>

            {/* X-axis week labels */}
            {WEEKS_HISTORY.map((w, i) => (
              <text
                key={w}
                x={(i + 0.5) * bw}
                y="125"
                fontSize="5.5"
                fill="#94A3B8"
                fontFamily="monospace"
                textAnchor="middle"
              >
                {w}
              </text>
            ))}
            {WEEKS_FORECAST.map((w, i) => (
              <text
                key={w}
                x={(HISTORY.length + i + 0.5) * bw}
                y="125"
                fontSize="5.5"
                fill="#94A3B8"
                fontFamily="monospace"
                textAnchor="middle"
              >
                {w}
              </text>
            ))}
          </svg>
        </div>

        {/* P10/P50/P90 */}
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[
            { label: 'P10 · pessimistisch', value: '312' },
            { label: 'P50 · erwartet', value: '387' },
            { label: 'P90 · optimistisch', value: '463' },
          ].map((p) => (
            <div
              key={p.label}
              className="rounded-lg border border-[var(--color-border-primary)] bg-white p-2.5 text-center"
            >
              <p className="font-display text-base font-bold text-[var(--color-text-primary)]">
                {p.value}
              </p>
              <p className="font-mono text-[9px] text-[var(--color-text-tertiary)]">
                {p.label}
              </p>
            </div>
          ))}
        </div>

        {/* Recommended order alert */}
        <div className="mt-3 border-l-2 border-coral bg-coral/5 px-3 py-2.5 rounded-r-lg">
          <p className="font-mono text-[10px] font-semibold text-[var(--color-text-primary)]">
            ⚡ Empfohlene Bestellung: KW 41 · Menge: ~1.550 Einheiten
          </p>
        </div>

        {/* Footer */}
        <div className="mt-3 flex items-center justify-between font-mono text-[9px] text-[var(--color-text-tertiary)]">
          <span>Letztes Training: heute 04:12 Uhr</span>
          <span>Nächstes Retraining: Mo 04:00 Uhr</span>
        </div>
      </div>
    </BrowserFrame>
  )
}
