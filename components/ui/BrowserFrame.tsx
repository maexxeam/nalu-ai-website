import { clsx } from 'clsx'

interface BrowserFrameProps {
  url?: string
  children: React.ReactNode
  className?: string
}

export function BrowserFrame({ url = 'app.naluai.com', children, className }: BrowserFrameProps) {
  return (
    <div
      className={clsx(
        'overflow-hidden rounded-xl border border-[var(--color-border-primary)] bg-white shadow-2xl',
        className,
      )}
    >
      <div className="flex items-center gap-3 border-b border-[var(--color-border-primary)] bg-[#F1F5F9] px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
          <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
          <span className="h-3 w-3 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1">
          <div className="mx-auto max-w-xs rounded-md bg-white px-3 py-1 text-center font-mono text-[11px] text-[var(--color-text-tertiary)]">
            {url}
          </div>
        </div>
        <div className="w-12" />
      </div>
      {children}
    </div>
  )
}
