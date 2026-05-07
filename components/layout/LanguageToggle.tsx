'use client'

import { useLocale, useTranslations } from 'next-intl'
import { useTransition } from 'react'
import { clsx } from 'clsx'
import { useRouter, usePathname } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'

interface LanguageToggleProps {
  overlay?: boolean
}

export function LanguageToggle({ overlay = false }: LanguageToggleProps) {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations('Navbar')
  const [isPending, startTransition] = useTransition()

  const switchTo = (next: string) => {
    if (next === locale || isPending) return
    startTransition(() => {
      router.replace(pathname, { locale: next as 'de' | 'en' })
    })
  }

  return (
    <div
      role="group"
      aria-label={t('languageLabel')}
      className={clsx(
        'flex items-center overflow-hidden rounded-full border text-[11px] font-mono uppercase tracking-widest',
        overlay
          ? 'border-white/30 text-white/70'
          : 'border-[var(--color-border-primary)] text-[var(--color-text-secondary)]',
      )}
    >
      {routing.locales.map((l) => {
        const active = l === locale
        return (
          <button
            key={l}
            type="button"
            onClick={() => switchTo(l)}
            aria-pressed={active}
            disabled={isPending}
            className={clsx(
              'px-2.5 py-1 transition-colors',
              active
                ? overlay
                  ? 'bg-white text-navy'
                  : 'bg-[var(--color-text-primary)] text-white'
                : overlay
                  ? 'hover:text-white'
                  : 'hover:text-[var(--color-text-primary)]',
            )}
          >
            {l}
          </button>
        )
      })}
    </div>
  )
}
