import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { Logo } from '@/components/ui/Logo'

export function Footer() {
  const t = useTranslations('Footer')
  const year = new Date().getFullYear()

  const navLinks = [
    { href: '/#produkt', label: t('navProdukt') },
    { href: '/leistungen', label: t('navLeistungen') },
    { href: '/about', label: t('navAbout') },
    { href: '/kontakt', label: t('navKontakt') },
  ]

  const legalLinks = [
    { href: '/impressum', label: t('legalImprint') },
    { href: '/datenschutz', label: t('legalPrivacy') },
  ]

  return (
    <footer className="bg-navy text-white">
      <div className="container-wide py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Logo variant="reversed" />
            <p className="mt-4 max-w-xs text-sm text-white/70">{t('tagline')}</p>
            <p className="mt-8 text-xs text-white/40">
              {t('rights', { year })}
            </p>
          </div>

          <div className="md:text-center">
            <h3 className="font-display text-xs font-semibold uppercase tracking-wider text-white/60">
              {t('navHeading')}
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
              {t('legalHeading')}
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
          <p className="text-xs text-white/40">{t('madeIn')}</p>
        </div>
      </div>
    </footer>
  )
}
