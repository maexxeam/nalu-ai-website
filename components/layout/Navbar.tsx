'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { clsx } from 'clsx'
import { Logo } from '@/components/ui/Logo'
import { Button } from '@/components/ui/Button'

// Routes whose first section has a dark (navy) background, so the
// navbar can sit transparently on top with white text/logo.
const DARK_HERO_ROUTES = new Set<string>([
  '/',
  '/demo',
  '/about',
  '/blog',
  '/datenschutz',
  '/impressum',
])

function hasDarkHero(pathname: string | null) {
  if (!pathname) return false
  if (DARK_HERO_ROUTES.has(pathname)) return true
  // Blog post pages also use the dark PageHeader.
  if (pathname.startsWith('/blog/')) return true
  return false
}

interface NavLink {
  href: string
  label: string
}

interface NavDropdown {
  label: string
  items: { href: string; label: string; description?: string }[]
}

const productDropdown: NavDropdown = {
  label: 'Produkt',
  items: [
    {
      href: '/#produkt',
      label: 'Core Platform',
      description: 'Forecasting · Analytics · SCM',
    },
    {
      href: '/sales',
      label: 'Sales Add-on',
      description: 'Kaufwahrscheinlichkeit · Churn',
    },
  ],
}

const navLinks: NavLink[] = [
  { href: '/pricing', label: 'Preise' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'Über uns' },
]

export function Navbar() {
  const pathname = usePathname()
  const darkHero = hasDarkHero(pathname)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [productOpen, setProductOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!productOpen) return
    const onClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductOpen(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [productOpen])

  const overlay = darkHero && !scrolled && !mobileOpen

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        overlay
          ? 'bg-transparent'
          : 'border-b border-[var(--color-border-primary)] bg-white/85 backdrop-blur-md',
      )}
    >
      <div className="container-wide flex h-16 items-center justify-between">
        <Link href="/" aria-label="Nalu AI – Startseite">
          <Logo variant={overlay ? 'reversed' : 'default'} />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <div ref={dropdownRef} className="relative">
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={productOpen}
              onClick={() => setProductOpen((v) => !v)}
              className={clsx(
                'flex items-center gap-1.5 text-sm font-medium transition-colors',
                overlay
                  ? 'text-white/80 hover:text-white'
                  : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]',
              )}
            >
              {productDropdown.label}
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                className={clsx(
                  'transition-transform',
                  productOpen && 'rotate-180',
                )}
              >
                <path d="M3 4.5l3 3 3-3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {productOpen && (
              <div
                role="menu"
                className="absolute left-1/2 top-full mt-3 w-72 -translate-x-1/2 overflow-hidden rounded-xl border border-[var(--color-border-primary)] bg-white shadow-brand-lg"
              >
                {productDropdown.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    role="menuitem"
                    onClick={() => setProductOpen(false)}
                    className="block px-4 py-3 transition-colors hover:bg-[var(--color-bg-secondary)]"
                  >
                    <p className="font-display text-sm font-semibold text-[var(--color-text-primary)]">
                      {item.label}
                    </p>
                    {item.description && (
                      <p className="mt-0.5 text-xs text-[var(--color-text-secondary)]">
                        {item.description}
                      </p>
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                'text-sm font-medium transition-colors',
                overlay
                  ? 'text-white/80 hover:text-white'
                  : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]',
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/demo" size="md">
            Demo anfragen →
          </Button>
        </div>

        <button
          type="button"
          aria-label="Menü"
          aria-expanded={mobileOpen}
          className={clsx(
            'p-2 md:hidden',
            overlay ? 'text-white' : 'text-[var(--color-text-primary)]',
          )}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-[var(--color-border-primary)] bg-white md:hidden">
          <nav className="container-wide flex flex-col gap-1 py-4">
            <p className="px-2 pt-2 font-mono text-[11px] uppercase tracking-widest text-[var(--color-text-tertiary)]">
              {productDropdown.label}
            </p>
            {productDropdown.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-2 py-2 text-base font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)]"
              >
                {item.label}
                {item.description && (
                  <span className="block text-xs font-normal text-[var(--color-text-secondary)]">
                    {item.description}
                  </span>
                )}
              </Link>
            ))}

            <div className="my-2 border-t border-[var(--color-border-primary)]" />

            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-2 py-3 text-base font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)]"
              >
                {item.label}
              </Link>
            ))}
            <Button href="/demo" size="lg" className="mt-2">
              Demo anfragen →
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
