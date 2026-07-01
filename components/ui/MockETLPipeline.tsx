import { BrowserFrame } from './BrowserFrame'

const SOURCES = ['SAP R/3', 'SQL Server', 'CSV / Excel']
const STAGES = [
  { name: 'Sync', sub: 'Rohdaten → Parquet' },
  { name: 'Transform', sub: 'bereinigt · validiert' },
  { name: 'Load', sub: 'DuckDB' },
]
const LOG = [
  { t: '02:00', msg: 'sync · SAP R/3', rows: '1,24 M', ok: true },
  { t: '02:18', msg: 'transform · Regeln', rows: '1,24 M', ok: true },
  { t: '02:31', msg: 'load · DuckDB', rows: '1,24 M', ok: true },
  { t: '02:33', msg: 'quality-check', rows: '3 Lücken gefüllt', ok: true },
]

export function MockETLPipeline() {
  return (
    <BrowserFrame url="app.nalu-ai.com/pipeline">
      <div className="bg-[#FAFBFC] p-5">
        <div className="mb-4">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-tertiary)]">
            DATENPIPELINE · NÄCHTLICH
          </p>
          <p className="font-display text-base font-bold text-[var(--color-text-primary)]">
            Von der Quelle bis zur Analyse
          </p>
        </div>

        {/* Sources → stages */}
        <div className="flex items-center gap-1.5">
          <div className="flex flex-col gap-1">
            {SOURCES.map((s) => (
              <span
                key={s}
                className="rounded-md border border-[var(--color-border-primary)] bg-white px-2 py-1 font-mono text-[9px] text-[var(--color-text-secondary)]"
              >
                {s}
              </span>
            ))}
          </div>
          <span className="font-mono text-xs text-[var(--color-text-tertiary)]">→</span>
          <div className="flex flex-1 items-stretch gap-1.5">
            {STAGES.map((st, i) => (
              <div key={st.name} className="flex flex-1 items-stretch gap-1.5">
                <div className="flex-1 rounded-lg border border-[var(--color-border-primary)] bg-white p-2 text-center">
                  <p className="font-display text-xs font-bold text-[var(--color-text-primary)]">{st.name}</p>
                  <p className="font-mono text-[8px] text-[var(--color-text-tertiary)]">{st.sub}</p>
                </div>
                {i < STAGES.length - 1 && (
                  <span className="flex items-center font-mono text-xs text-[var(--color-text-tertiary)]">→</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Run log */}
        <div className="mt-3 rounded-lg border border-[var(--color-border-primary)] bg-white p-3">
          <p className="mb-2 text-[11px] font-semibold text-[var(--color-text-primary)]">Letzter Lauf · heute</p>
          <div className="space-y-1.5">
            {LOG.map((l) => (
              <div key={l.t} className="flex items-center gap-2 font-mono text-[10px]">
                <span className="text-[var(--color-text-tertiary)]">{l.t}</span>
                <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-emerald-100 text-[8px] text-emerald-700">✓</span>
                <span className="flex-1 truncate text-[var(--color-text-secondary)]">{l.msg}</span>
                <span className="text-[var(--color-text-tertiary)]">{l.rows}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between font-mono text-[9px] text-[var(--color-text-tertiary)]">
          <span>Read-only · keine Änderung am Quellsystem</span>
          <span>Dagster · orchestriert</span>
        </div>
      </div>
    </BrowserFrame>
  )
}
