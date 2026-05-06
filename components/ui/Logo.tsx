import { clsx } from 'clsx'

interface LogoProps {
  variant?: 'default' | 'reversed'
  size?: number
  showWordmark?: boolean
  className?: string
}

export function Logo({
  variant = 'default',
  size = 32,
  showWordmark = true,
  className,
}: LogoProps) {
  const wave = variant === 'reversed' ? '#FFFFFF' : '#0A4F7F'
  const wordmark = variant === 'reversed' ? '#FFFFFF' : '#0A4F7F'
  const accent = '#FF6B4A'

  return (
    <div className={clsx('flex items-center gap-2.5', className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M2 21 Q 6.5 11.5, 11 16 T 19 14 L 27 6"
          stroke={wave}
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="27" cy="6" r="2.6" fill={accent} />
      </svg>
      {showWordmark && (
        <span className="font-display text-lg font-semibold tracking-tight">
          <span style={{ color: wordmark }}>Nalu</span>{' '}
          <span style={{ color: accent }}>AI</span>
        </span>
      )}
    </div>
  )
}
