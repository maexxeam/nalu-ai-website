import { useTranslations } from 'next-intl'
import { WaveBackground } from '@/components/ui/WaveBackground'

export function KontaktCTA() {
  const t = useTranslations('KontaktCTA')

  return (
    <section className="relative overflow-hidden bg-navy py-32">
      <WaveBackground className="absolute inset-0 h-full w-full opacity-50" />
      <div className="container-wide relative z-10 text-center">
        <h2 className="font-display text-[36px] font-bold text-white md:text-[44px]">
          {t('headline')}
        </h2>
        <p className="mt-4 text-base text-white/60">
          {t('subline')}
        </p>
        <a
          href={`mailto:${t('email')}`}
          className="mt-8 inline-block font-display text-[22px] font-semibold text-coral hover:underline md:text-[28px]"
        >
          {t('email')}
        </a>
      </div>
    </section>
  )
}
