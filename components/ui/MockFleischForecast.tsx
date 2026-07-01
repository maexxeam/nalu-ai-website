import { BrowserFrame } from './BrowserFrame'

// MeatMind-nahe Ansicht: Absatz-Forecast → Schlacht-/Einkaufsbedarf (End-to-End)
const HISTORY = [128, 142, 133, 150]
const FORECAST = [146, 152, 139, 149, 156]
const ALL = [...HISTORY, ...FORECAST]
const MAX = Math.max(...ALL)
const TOTAL = ALL.length

const bw = 300 / TOTAL
const barY = (v: number) => 110 - (v / MAX) * 90

const WEEKS_HISTORY = ['KW 24', 'KW 25', 'KW 26', 'KW 27']
const WEEKS_FORECAST = ['KW 28', 'KW 29', 'KW 30', 'KW 31', 'KW 32']
const HEUTE_X = HISTORY.length * bw

export function MockFleischForecast() {
  return (
    <BrowserFrame url="app.nalu-ai.com/forecast">
      <div className="bg-[#FAFBFC] p-5">
        {/* Article header */}
        <div className="mb-4">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-tertiary)]">
            PRODUKTGRUPPE · RIND
          </p>
          <p className="font-display text-base font-bold text-[var(--color-text-primary)]">
            Rinderhack 5 % · Frischtheke
          </p>
          <p className="font-mono text-[10px] text-[var(--color-text-tertiary)]">
            PG1-42 · 12-Wochen-Forecast · Top-Down
          </p>
        </div>

        {/* Metric pills */}
        <div className="mb-4 flex flex-wrap gap-2">
          {[
            { label: 'Modell', value: 'LightGBM' },
            { label: 'WMAPE', value: '8,1 %' },
            { label: 'Genauigkeit', value: '91,9 %' },
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
              Absatz-Forecast · KW 24 – KW 32
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
            {[0, 30, 60, 90].map((y) => (
              <line key={y} x1="0" y1={y + 15} x2="300" y2={y + 15} stroke="#E2E8F0" strokeWidth="0.5" strokeDasharray="2 2" />
            ))}

            {/* Confidence band (P10–P90) */}
            <path
              d={`M ${HEUTE_X} ${barY(FORECAST[0]) - 10}
                  L ${TOTAL * bw} ${barY(FORECAST[FORECAST.length - 1]) - 14}
                  L ${TOTAL * bw} ${barY(FORECAST[FORECAST.length - 1]) + 14}
                  L ${HEUTE_X} ${barY(FORECAST[0]) + 10} Z`}
              fill="#0A4F7F"
              opacity="0.07"
            />

            {HISTORY.map((v, i) => (
              <rect key={`h${i}`} x={i * bw + 2} y={barY(v)} width={bw - 4} height={110 - barY(v)} fill="#0A4F7F" opacity="0.85" rx="1.5" />
            ))}
            {FORECAST.map((v, i) => (
              <rect key={`f${i}`} x={(HISTORY.length + i) * bw + 2} y={barY(v)} width={bw - 4} height={110 - barY(v)} fill="#FF6B4A" opacity="0.8" rx="1.5" />
            ))}

            <line x1={HEUTE_X} y1="10" x2={HEUTE_X} y2="115" stroke="#94A3B8" strokeWidth="0.8" strokeDasharray="4 4" />
            <text x={HEUTE_X + 3} y="14" fontSize="6" fill="#94A3B8" fontFamily="monospace">HEUTE</text>

            {WEEKS_HISTORY.map((w, i) => (
              <text key={w} x={(i + 0.5) * bw} y="125" fontSize="5.5" fill="#94A3B8" fontFamily="monospace" textAnchor="middle">{w}</text>
            ))}
            {WEEKS_FORECAST.map((w, i) => (
              <text key={w} x={(HISTORY.length + i + 0.5) * bw} y="125" fontSize="5.5" fill="#94A3B8" fontFamily="monospace" textAnchor="middle">{w}</text>
            ))}
          </svg>
        </div>

        {/* End-to-End: Forecast → Schlachtung → Einkauf */}
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[
            { label: 'Schlachtbedarf', value: '142', unit: 'Rinder/Wo' },
            { label: 'Einkauf (Rest)', value: '+38', unit: 'Rinder' },
            { label: 'Control Tower', value: '2', unit: 'Engpässe' },
          ].map((p) => (
            <div key={p.label} className="rounded-lg border border-[var(--color-border-primary)] bg-white p-2.5 text-center">
              <p className="font-display text-base font-bold text-[var(--color-text-primary)]">{p.value}</p>
              <p className="font-mono text-[9px] text-[var(--color-text-tertiary)]">{p.label}</p>
              <p className="font-mono text-[8px] text-[var(--color-text-tertiary)]">{p.unit}</p>
            </div>
          ))}
        </div>

        {/* Produktionsboard · Linien-Auslastung */}
        <div className="mt-3 rounded-lg border border-[var(--color-border-primary)] bg-white p-3">
          <p className="mb-2 text-[11px] font-semibold text-[var(--color-text-primary)]">
            Produktionsboard · Linien-Auslastung
          </p>
          <div className="space-y-2">
            {[
              { line: 'Zerlegung', pct: 82, color: '#FBBF24' },
              { line: 'Verpackung', pct: 68, color: '#34D399' },
              { line: 'Kutter', pct: 96, color: '#F87171' },
            ].map((l) => (
              <div key={l.line} className="flex items-center gap-2">
                <span className="w-20 shrink-0 font-mono text-[9px] text-[var(--color-text-secondary)]">
                  {l.line}
                </span>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-[var(--color-bg-secondary)]">
                  <div className="h-full rounded-full" style={{ width: `${l.pct}%`, background: l.color }} />
                </div>
                <span className="w-8 text-right font-mono text-[9px] font-semibold" style={{ color: l.color }}>
                  {l.pct}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Anomaly / recommendation strip */}
        <div className="mt-3 rounded-r-lg border-l-2 border-coral bg-coral/5 px-3 py-2.5">
          <p className="font-mono text-[10px] font-semibold text-[var(--color-text-primary)]">
            ⚡ Hinweis: Grillsaison-Peak KW 29 · Schlachtplan angepasst
          </p>
        </div>

        {/* Footer */}
        <div className="mt-3 flex items-center justify-between font-mono text-[9px] text-[var(--color-text-tertiary)]">
          <span>Standorte: Werk A · Werk B</span>
          <span>Retraining: Fr 03:00 Uhr</span>
        </div>
      </div>
    </BrowserFrame>
  )
}
