'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { clsx } from 'clsx'
import { Logo } from '@/components/ui/Logo'
import type { Lang, NavContent } from '../_content/types'

export function Navbar({ lang, content }: { lang: Lang; content: NavContent }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const overlay = !scrolled && !mobileOpen

  const navLinks = [
    { href: '#projekte', label: content.projekte },
    { href: '#stack', label: content.stack },
  ]

  const basePath = lang === 'de' ? '/' : '/en'
  const otherLangPath = lang === 'de' ? '/en' : '/'

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        overlay
          ? 'bg-transparent'
          : 'border-b border-white/10 bg-navy/80 backdrop-blur-md',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href={basePath} aria-label={content.logoAria}>
          <Logo variant="reversed" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/75 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LangToggle lang={lang} otherLangPath={otherLangPath} label={content.langLabel} />
          <a
            href="#footer"
            className="text-sm font-medium text-white/75 transition-colors hover:text-coral"
          >
            {content.kontakt}
          </a>
        </div>

        <button
          type="button"
          aria-label={content.menuLabel}
          aria-expanded={mobileOpen}
          className="p-2 text-white md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-navy md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-2 py-3 text-base font-medium text-white/85 hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}
            <div className="my-2 border-t border-white/10" />
            <a
              href="#footer"
              onClick={() => setMobileOpen(false)}
              className="rounded-md px-2 py-3 text-base font-medium text-white/85 hover:bg-white/5"
            >
              {content.kontakt}
            </a>
            <div className="mt-3 px-2 pt-1">
              <LangToggle
                lang={lang}
                otherLangPath={otherLangPath}
                label={content.langLabel}
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

function LangToggle({
  lang,
  otherLangPath,
  label,
}: {
  lang: Lang
  otherLangPath: string
  label: string
}) {
  return (
    <div
      role="group"
      aria-label={label}
      className="flex items-center overflow-hidden rounded-full border border-white/30 font-mono text-[11px] uppercase tracking-widest text-white/70"
    >
      <LangButton
        href={lang === 'de' ? '#' : otherLangPath}
        code="de"
        active={lang === 'de'}
      />
      <LangButton
        href={lang === 'en' ? '#' : otherLangPath}
        code="en"
        active={lang === 'en'}
      />
    </div>
  )
}

function LangButton({
  href,
  code,
  active,
}: {
  href: string
  code: string
  active: boolean
}) {
  if (active) {
    return (
      <span
        aria-current="true"
        className="bg-white px-2.5 py-1 text-navy"
      >
        {code}
      </span>
    )
  }
  return (
    <Link href={href} className="px-2.5 py-1 transition-colors hover:text-white">
      {code}
    </Link>
  )
}
