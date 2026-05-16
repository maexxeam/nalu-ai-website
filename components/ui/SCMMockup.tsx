import { BrowserFrame } from './BrowserFrame'

const ALERTS = [
  {
    severity: 'critical',
    sku: '4711-Salami',
    name: 'Salami Mailand 80g',
    stock: 54,
    rop: 238,
    coverage: '2 T',
  },
  {
    severity: 'critical',
    sku: '6812-Cola',
    name: 'Cola Classic 1L',
    stock: 112,
    rop: 420,
    coverage: '3 T',
  },
  {
    severity: 'warning',
    sku: '9023-IPA',
    name: 'IPA Craft Series 0.33L',
    stock: 287,
    rop: 360,
    coverage: '6 T',
  },
  {
    severity: 'warning',
    sku: '3401-Müsli',
    name: 'Bio Müsli 500g',
    stock: 198,
    rop: 240,
    coverage: '8 T',
  },
  {
    severity: 'info',
    sku: '7765-Tomaten',
    name: 'Tomaten passiert 400g',
    stock: 642,
    rop: 580,
    coverage: '14 T',
  },
]

const SEVERITY_STYLES = {
  critical: { bg: 'bg-red-50', dot: 'bg-red-500', text: 'text-red-700', label: 'kritisch' },
  warning: { bg: 'bg-amber-50', dot: 'bg-amber-500', text: 'text-amber-700', label: 'Warnung' },
  info: { bg: 'bg-emerald-50', dot: 'bg-emerald-500', text: 'text-emerald-700', label: 'auf Soll' },
} as const

export function SCMMockup() {
  return (
    <BrowserFrame url="app.nalu-ai.com/scm/alerts">
      <div className="bg-[#FAFBFC] p-5">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="font-display text-base font-bold text-[var(--color-text-primary)]">
              Reorder Alerts
            </p>
            <p className="text-xs text-[var(--color-text-tertiary)]">heute · 14:32</p>
          </div>
          <div className="flex gap-2 text-[10px]">
            <span className="rounded-full bg-red-100 px-2.5 py-1 font-mono font-semibold text-red-700">
              2 kritisch
            </span>
            <span className="rounded-full bg-amber-100 px-2.5 py-1 font-mono font-semibold text-amber-700">
              2 Warnung
            </span>
          </div>
        </div>

        {/* Table header */}
        <div className="grid grid-cols-[28px_1fr_70px_70px_56px_44px] items-center gap-3 border-b border-[var(--color-border-primary)] px-3 pb-2 font-mono text-[9px] font-semibold uppercase tracking-wider text-[var(--color-text-tertiary)]">
          <span />
          <span>Artikel</span>
          <span className="text-right">Bestand</span>
          <span className="text-right">ROP</span>
          <span className="text-right">Reicht</span>
          <span />
        </div>

        {/* Rows */}
        <div className="divide-y divide-[var(--color-border-primary)] bg-white">
          {ALERTS.map((alert) => {
            const style = SEVERITY_STYLES[alert.severity as keyof typeof SEVERITY_STYLES]
            return (
              <div
                key={alert.sku}
                className="grid grid-cols-[28px_1fr_70px_70px_56px_44px] items-center gap-3 px-3 py-3"
              >
                <span className={`h-2.5 w-2.5 rounded-full ${style.dot}`} />
                <div>
                  <p className="text-xs font-semibold text-[var(--color-text-primary)]">
                    {alert.name}
                  </p>
                  <p className="font-mono text-[10px] text-[var(--color-text-tertiary)]">
                    {alert.sku}
                  </p>
                </div>
                <p className="text-right font-mono text-xs font-semibold text-[var(--color-text-primary)]">
                  {alert.stock}
                </p>
                <p className="text-right font-mono text-xs text-[var(--color-text-secondary)]">
                  {alert.rop}
                </p>
                <p className={`text-right font-mono text-xs font-semibold ${style.text}`}>
                  {alert.coverage}
                </p>
                <span className={`inline-flex justify-center rounded-md ${style.bg} px-1.5 py-0.5 font-mono text-[9px] font-semibold ${style.text}`}>
                  {style.label}
                </span>
              </div>
            )
          })}
        </div>

        {/* Footer */}
        <div className="mt-3 flex items-center justify-between rounded-md bg-white px-3 py-2 font-mono text-[10px] text-[var(--color-text-tertiary)]">
          <span>5 von 894 Artikel · gefiltert: nicht-OK</span>
          <span>↻ Push: Slack · Teams · E-Mail</span>
        </div>
      </div>
    </BrowserFrame>
  )
}
