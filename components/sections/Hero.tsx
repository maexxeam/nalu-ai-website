import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { WaveBackground } from '@/components/ui/WaveBackground'

export function Hero() {
  const t = useTranslations('Hero')

  return (
    <section className="relative min-h-screen overflow-hidden bg-navy">
      <WaveBackground className="absolute inset-0 h-full w-full" />

      <div className="container-wide relative z-10 flex min-h-screen flex-col items-center justify-center py-32 text-center md:py-40">
        <span className="inline-block rounded-full border border-coral/40 bg-coral/10 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-coral">
          {t('eyebrow')}
        </span>

        <h1 className="mx-auto mt-8 max-w-3xl font-display text-[52px] font-bold leading-[1.05] text-white md:text-[60px] xl:text-[72px]">
          {t('title')}
          <br />
          {t('titleSecond')}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base text-white/70 md:text-lg">
          {t('subtitle')}
        </p>

        <div className="mt-10">
          <Link
            href="/kontakt"
            className="inline-block rounded-lg border border-white/40 px-8 py-3 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/10"
          >
            {t('cta')}
          </Link>
        </div>
      </div>
    </section>
  )
}
