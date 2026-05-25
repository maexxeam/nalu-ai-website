import type { SVGProps } from 'react'
import { clsx } from 'clsx'

type ERPIconType =
  | 'sap'
  | 'microsoft'
  | 'erp'
  | 'file'
  | 'api'
  | 'database'
  | 'server'

const iconBase = {
  width: 14,
  height: 14,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const

function ERPIcon({ type, ...props }: { type: ERPIconType } & SVGProps<SVGSVGElement>) {
  switch (type) {
    case 'sap':
      return (
        <svg {...iconBase} {...props}>
          <path d="M3 21V8l9-5 9 5v13" />
          <path d="M9 21v-7h6v7" />
          <path d="M3 21h18" />
        </svg>
      )
    case 'microsoft':
      return (
        <svg {...iconBase} {...props}>
          <rect x="3" y="3" width="8" height="8" />
          <rect x="13" y="3" width="8" height="8" />
          <rect x="3" y="13" width="8" height="8" />
          <rect x="13" y="13" width="8" height="8" />
        </svg>
      )
    case 'erp':
      return (
        <svg {...iconBase} {...props}>
          <path d="M4 21V7l8-4 8 4v14" />
          <path d="M9 21v-6h6v6" />
          <path d="M9 11h.01M12 11h.01M15 11h.01" />
        </svg>
      )
    case 'file':
      return (
        <svg {...iconBase} {...props}>
          <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
          <path d="M14 3v6h6" />
          <path d="M8 13h8M8 17h8" />
        </svg>
      )
    case 'api':
      return (
        <svg {...iconBase} {...props}>
          <path d="M4 12h4M16 12h4" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 4v4M12 16v4" />
        </svg>
      )
    case 'database':
      return (
        <svg {...iconBase} {...props}>
          <ellipse cx="12" cy="5" rx="8" ry="3" />
          <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
          <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
        </svg>
      )
    case 'server':
      return (
        <svg {...iconBase} {...props}>
          <rect x="3" y="4" width="18" height="7" rx="1.5" />
          <rect x="3" y="13" width="18" height="7" rx="1.5" />
          <path d="M7 7.5h.01M7 16.5h.01" />
        </svg>
      )
  }
}

interface ERPBadgeProps {
  name: string
  icon: ERPIconType
  variant?: 'tier1' | 'default' | 'highlight'
}

export function ERPBadge({ name, icon, variant = 'default' }: ERPBadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 font-mono text-[11px] font-medium',
        variant === 'tier1' &&
          'border-ocean/30 bg-ocean/5 text-ocean',
        variant === 'highlight' &&
          'border-coral/30 bg-coral/5 text-coral',
        variant === 'default' &&
          'border-[var(--color-border-primary)] bg-white text-[var(--color-text-secondary)]',
      )}
    >
      <ERPIcon type={icon} className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
      {name}
    </span>
  )
}
