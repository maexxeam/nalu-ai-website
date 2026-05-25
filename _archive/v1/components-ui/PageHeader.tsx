import type { ReactNode } from 'react'

interface PageHeaderProps {
  eyebrow?: string
  title: ReactNode
  subtitle?: ReactNode
  children?: ReactNode
}

export function PageHeader({ eyebrow, title, subtitle, children }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="container-wide relative z-10 pb-16 pt-32 text-center md:pb-24 md:pt-44">
        {eyebrow && (
          <span className="inline-block rounded-full border border-coral/40 bg-coral/10 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-coral">
            {eyebrow}
          </span>
        )}
        <h1 className="mx-auto mt-6 max-w-3xl font-display text-[34px] font-bold leading-[1.1] text-white md:text-[44px]">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/70 md:text-lg">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  )
}
