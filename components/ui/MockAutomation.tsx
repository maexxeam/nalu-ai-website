import { BrowserFrame } from './BrowserFrame'

const JOBS = [
  { name: 'Wochenbericht → E-Mail', cron: 'Mo 06:00', last: 'ok', next: 'Mo 06:00', dur: '4 s' },
  { name: 'Forecast-Export → SAP', cron: 'tägl. 05:00', last: 'ok', next: '05:00', dur: '11 s' },
  { name: 'Reorder-Alerts → Teams', cron: 'tägl. 07:30', last: 'ok', next: '07:30', dur: '2 s' },
  { name: 'Stammdaten-Abgleich', cron: 'stündl.', last: 'warn', next: '14:00', dur: '38 s' },
  { name: 'Backup → Off-Site', cron: 'tägl. 23:00', last: 'ok', next: '23:00', dur: '1 min' },
]

const STATUS = {
  ok: { cls: 'bg-emerald-100 text-emerald-700', label: '✓' },
  warn: { cls: 'bg-amber-100 text-amber-700', label: '!' },
} as const

export function MockAutomation() {
  return (
    <BrowserFrame url="app.nalu-ai.com/jobs">
      <div className="bg-[#FAFBFC] p-5">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-tertiary)]">
              AUTOMATISIERUNG · SCHEDULER
            </p>
            <p className="font-display text-base font-bold text-[var(--color-text-primary)]">
              Läuft, ohne dass jemand dran denkt
            </p>
          </div>
          <span className="rounded-full bg-emerald-100 px-2.5 py-1 font-mono text-[9px] font-semibold text-emerald-700">
            5 aktiv
          </span>
        </div>

        {/* Table header */}
        <div className="grid grid-cols-[1fr_70px_60px_44px] items-center gap-2 border-b border-[var(--color-border-primary)] pb-2 font-mono text-[9px] font-semibold uppercase tracking-wider text-[var(--color-text-tertiary)]">
          <span>Job</span>
          <span>Zeitplan</span>
          <span>Nächster</span>
          <span className="text-center">Status</span>
        </div>

        <div className="divide-y divide-[var(--color-border-primary)] bg-white">
          {JOBS.map((j) => {
            const s = STATUS[j.last as keyof typeof STATUS]
            return (
              <div key={j.name} className="grid grid-cols-[1fr_70px_60px_44px] items-center gap-2 py-2.5">
                <div>
                  <p className="text-xs font-semibold text-[var(--color-text-primary)]">{j.name}</p>
                  <p className="font-mono text-[9px] text-[var(--color-text-tertiary)]">Ø {j.dur}</p>
                </div>
                <span className="font-mono text-[10px] text-[var(--color-text-secondary)]">{j.cron}</span>
                <span className="font-mono text-[10px] text-[var(--color-text-tertiary)]">{j.next}</span>
                <span className={`mx-auto flex h-5 w-5 items-center justify-center rounded-full font-mono text-[10px] font-bold ${s.cls}`}>
                  {s.label}
                </span>
              </div>
            )
          })}
        </div>

        <div className="mt-3 flex items-center justify-between font-mono text-[9px] text-[var(--color-text-tertiary)]">
          <span>Retry · Alert bei Fehler</span>
          <span>Windows Task · Cron · Airflow</span>
        </div>
      </div>
    </BrowserFrame>
  )
}
