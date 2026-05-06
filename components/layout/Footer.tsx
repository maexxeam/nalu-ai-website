import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'

const navLinks = [
  { href: '/#produkt', label: 'Produkt' },
  { href: '/#preise', label: 'Preise' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'Über uns' },
  { href: '/demo', label: 'Demo' },
]

const legalLinks = [
  { href: '/impressum', label: 'Impressum' },
  { href: '/datenschutz', label: 'Datenschutz' },
]

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-wide py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Logo variant="reversed" />
            <p className="mt-4 max-w-xs text-sm text-white/70">
              Ride the wave of demand.
            </p>
            <p className="mt-8 text-xs text-white/40">
              © {new Date().getFullYear()} Nalu AI. Alle Rechte vorbehalten.
            </p>
          </div>

          <div className="md:text-center">
            <h3 className="font-display text-xs font-semibold uppercase tracking-wider text-white/60">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 transition-colors hover:text-coral"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:text-right">
            <h3 className="font-display text-xs font-semibold uppercase tracking-wider text-white/60">
              Legal
            </h3>
            <ul className="mt-4 space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 transition-colors hover:text-coral"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center">
          <p className="text-xs text-white/40">Made with 🤙 in Germany</p>
        </div>
      </div>
    </footer>
  )
}
