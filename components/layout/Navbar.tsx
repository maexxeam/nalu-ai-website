'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { clsx } from 'clsx'
import { Logo } from '@/components/ui/Logo'
import { Button } from '@/components/ui/Button'

const navItems = [
  { href: '/#produkt', label: 'Produkt' },
  { href: '/#preise', label: 'Preise' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'Über uns' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const overlay = !scrolled && !mobileOpen

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
          {navItems.map((item) => (
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
            {navItems.map((item) => (
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
