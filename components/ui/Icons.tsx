import type { SVGProps } from 'react'

const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const

type IconProps = SVGProps<SVGSVGElement>

export function AlertTriangleIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 9v4" />
      <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636-2.87l-8.106-13.536a1.914 1.914 0 0 0-3.274 0Z" />
      <path d="M12 16h.01" />
    </svg>
  )
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  )
}

export function BrainIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3 3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3Z" />
      <path d="M15 4.5a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3 3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3Z" />
      <path d="M6 9h3M15 9h3M6 15h3M15 15h3" />
    </svg>
  )
}

export function PlugIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9 2v4M15 2v4" />
      <path d="M5 8h14v3a5 5 0 0 1-5 5h-4a5 5 0 0 1-5-5V8Z" />
      <path d="M12 16v6" />
    </svg>
  )
}

export function SettingsIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" />
    </svg>
  )
}

export function ChartLineIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 3v18h18" />
      <path d="M7 14l4-4 4 4 5-6" />
    </svg>
  )
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  )
}

export function SparklesIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
    </svg>
  )
}

export function PackageIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M21 8l-9-5-9 5v8l9 5 9-5V8Z" />
      <path d="M3 8l9 5 9-5M12 13v9" />
    </svg>
  )
}

export function FileTextIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Z" />
      <path d="M14 3v6h6" />
      <path d="M9 13h6M9 17h6" />
    </svg>
  )
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12l5 5 9-9" />
    </svg>
  )
}

export function CloudOffIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 3l18 18" />
      <path d="M18.6 18.6A4 4 0 0 1 16 19H7a4 4 0 0 1-1.5-7.7" />
      <path d="M9.5 4.6A6 6 0 0 1 18 9.5a4 4 0 0 1 2.5 6.7" />
    </svg>
  )
}

export function UsersIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.9" />
      <path d="M16 3.1A4 4 0 0 1 16 11" />
    </svg>
  )
}

export function ZapIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8Z" />
    </svg>
  )
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  )
}
