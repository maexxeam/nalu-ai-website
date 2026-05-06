import Link from 'next/link'
import { clsx } from 'clsx'
import type { ComponentProps, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg font-sans font-medium transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

const sizes: Record<Size, string> = {
  md: 'h-10 px-5 text-sm',
  lg: 'h-12 px-7 text-[15px]',
}

const variants: Record<Variant, string> = {
  primary: 'bg-coral text-white shadow-brand-md hover:scale-[1.02] hover:shadow-brand-lg',
  secondary: 'bg-ocean text-white hover:bg-ocean/90 hover:shadow-brand-md',
  ghost: 'border border-white/20 text-white hover:bg-white/5 hover:border-white/40',
}

interface BaseProps {
  variant?: Variant
  size?: Size
  className?: string
  children: ReactNode
}

type ButtonProps = BaseProps &
  (
    | ({ href: string; external?: boolean } & Omit<ComponentProps<'a'>, 'href' | 'className' | 'children'>)
    | ({ href?: undefined } & Omit<ComponentProps<'button'>, 'className' | 'children'>)
  )

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className, children } = props
  const classes = clsx(base, sizes[size], variants[variant], className)

  if ('href' in props && props.href) {
    const { href, external, ...rest } = props as BaseProps & { href: string; external?: boolean }
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          {...(rest as Omit<ComponentProps<'a'>, 'href' | 'className' | 'children'>)}
        >
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } =
    props as BaseProps & ComponentProps<'button'>
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}
