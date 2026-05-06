import Link from 'next/link'
import type { ComponentPropsWithoutRef } from 'react'

function isInternal(href: string | undefined): boolean {
  if (!href) return false
  return href.startsWith('/') || href.startsWith('#')
}

export const mdxComponents = {
  h1: () => null,
  h2: (props: ComponentPropsWithoutRef<'h2'>) => (
    <h2
      className="mt-14 font-display text-[24px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[28px]"
      {...props}
    />
  ),
  h3: (props: ComponentPropsWithoutRef<'h3'>) => (
    <h3
      className="mt-10 font-display text-lg font-semibold text-[var(--color-text-primary)]"
      {...props}
    />
  ),
  p: (props: ComponentPropsWithoutRef<'p'>) => (
    <p
      className="mt-5 text-base leading-[1.75] text-[var(--color-text-primary)]"
      {...props}
    />
  ),
  ul: (props: ComponentPropsWithoutRef<'ul'>) => (
    <ul
      className="mt-5 space-y-2 pl-6 text-base leading-[1.75] text-[var(--color-text-primary)] [&>li]:list-disc [&>li]:marker:text-ocean"
      {...props}
    />
  ),
  ol: (props: ComponentPropsWithoutRef<'ol'>) => (
    <ol
      className="mt-5 space-y-2 pl-6 text-base leading-[1.75] text-[var(--color-text-primary)] [&>li]:list-decimal [&>li]:marker:font-mono [&>li]:marker:text-ocean"
      {...props}
    />
  ),
  blockquote: (props: ComponentPropsWithoutRef<'blockquote'>) => (
    <blockquote
      className="mt-8 border-l-4 border-coral bg-horizon px-6 py-5 font-display text-lg italic leading-relaxed text-[var(--color-text-primary)]"
      {...props}
    />
  ),
  code: (props: ComponentPropsWithoutRef<'code'>) => (
    <code
      className="rounded bg-[var(--color-bg-secondary)] px-1.5 py-0.5 font-mono text-[0.9em] text-ocean"
      {...props}
    />
  ),
  pre: (props: ComponentPropsWithoutRef<'pre'>) => (
    <pre
      className="mt-6 overflow-x-auto rounded-xl bg-navy p-5 font-mono text-sm leading-relaxed text-white"
      {...props}
    />
  ),
  a: ({ href, children, ...rest }: ComponentPropsWithoutRef<'a'>) => {
    if (isInternal(href)) {
      return (
        <Link
          href={href as string}
          className="text-ocean underline decoration-ocean/30 underline-offset-2 transition-colors hover:text-coral hover:decoration-coral"
          {...rest}
        >
          {children}
        </Link>
      )
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-ocean underline decoration-ocean/30 underline-offset-2 transition-colors hover:text-coral hover:decoration-coral"
        {...rest}
      >
        {children}
      </a>
    )
  },
  hr: () => <hr className="my-12 border-[var(--color-border-primary)]" />,
  strong: (props: ComponentPropsWithoutRef<'strong'>) => (
    <strong className="font-semibold text-[var(--color-text-primary)]" {...props} />
  ),
  table: (props: ComponentPropsWithoutRef<'table'>) => (
    <div className="mt-6 overflow-x-auto rounded-xl border border-[var(--color-border-primary)]">
      <table className="w-full border-collapse text-sm" {...props} />
    </div>
  ),
  th: (props: ComponentPropsWithoutRef<'th'>) => (
    <th
      className="border-b border-[var(--color-border-primary)] bg-[var(--color-bg-tertiary)] px-4 py-3 text-left font-display text-xs font-semibold uppercase tracking-wider text-[var(--color-text-secondary)]"
      {...props}
    />
  ),
  td: (props: ComponentPropsWithoutRef<'td'>) => (
    <td
      className="border-b border-[var(--color-border-primary)] px-4 py-3 align-top text-[var(--color-text-primary)]"
      {...props}
    />
  ),
}
