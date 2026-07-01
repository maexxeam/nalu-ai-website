import { BrowserFrame } from './BrowserFrame'

const INSIGHTS = [
  { dot: 'bg-emerald-500', text: 'Rind · KW 29: +12 % über Forecast — Grillsaison-Peak erkannt.' },
  { dot: 'bg-amber-500', text: 'Einkauf · Rind: 38 Tiere Zukauf nötig — Engpass in KW 30.' },
  { dot: 'bg-red-500', text: '3 Kunden mit Churn-Risiko — erwarteter Umsatz ~€38k gefährdet.' },
]

export function MockGenAIPanel() {
  return (
    <BrowserFrame url="app.nalu-ai.com/insights">
      <div className="bg-[#FAFBFC] p-5">
        {/* Header + model toggle */}
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-tertiary)]">
              KI-BRIEFING · AUTOMATISCH
            </p>
            <p className="font-display text-base font-bold text-[var(--color-text-primary)]">
              Was fällt diese Woche auf?
            </p>
          </div>
          <div className="flex shrink-0 flex-col items-end gap-1">
            <span className="rounded-full bg-coral/10 px-2.5 py-1 font-mono text-[9px] font-semibold text-coral">
              ● Lokal · Ollama
            </span>
            <span className="rounded-full border border-[var(--color-border-primary)] bg-white px-2.5 py-1 font-mono text-[9px] text-[var(--color-text-tertiary)]">
              ○ Cloud · GPT / Claude
            </span>
          </div>
        </div>

        {/* AI narrative */}
        <div className="rounded-lg border border-[var(--color-border-primary)] bg-white p-4">
          <p className="text-xs leading-relaxed text-[var(--color-text-secondary)]">
            Der Absatz liegt diese Woche <span className="font-semibold text-[var(--color-text-primary)]">4 % über Plan</span>,
            getrieben von der Grillsaison. Drei Punkte brauchen Aufmerksamkeit:
          </p>
          <div className="mt-3 space-y-2.5">
            {INSIGHTS.map((it) => (
              <div key={it.text} className="flex items-start gap-2.5">
                <span className={`mt-1 h-2 w-2 shrink-0 rounded-full ${it.dot}`} />
                <p className="text-xs leading-snug text-[var(--color-text-secondary)]">{it.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Chat prompt */}
        <div className="mt-3 flex items-center gap-2 rounded-lg border border-[var(--color-border-primary)] bg-white px-3 py-2.5">
          <span className="font-mono text-[10px] text-[var(--color-text-tertiary)]">Frag&nbsp;Nalu:</span>
          <span className="flex-1 truncate font-mono text-[10px] text-[var(--color-text-secondary)]">
            Warum ist der Absatz in KW 29 gestiegen?
          </span>
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-coral text-white">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </div>

        {/* Footer */}
        <div className="mt-3 flex items-center justify-between font-mono text-[9px] text-[var(--color-text-tertiary)]">
          <span>Lokales Sprachmodell · keine Daten verlassen den Server</span>
          <span>Cloud optional</span>
        </div>
      </div>
    </BrowserFrame>
  )
}
