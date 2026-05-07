import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/Button'
import { WaveAnimation } from '@/components/ui/WaveAnimation'

export function CTA() {
  const t = useTranslations('CTA')
  return (
    <section className="relative overflow-hidden bg-navy">
      <WaveAnimation
        className="absolute inset-x-0 top-0 h-40 w-full"
        color="#1E7AC2"
        opacity={0.10}
        flip
      />

      <div className="container-wide relative z-10 py-24 text-center md:py-32">
        <h2 className="mx-auto max-w-3xl font-display text-[32px] font-bold leading-[1.1] text-white md:text-[44px]">
          {t('title')}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base text-white/70 md:text-lg">
          {t('subtitle')}
        </p>
        <div className="mt-10">
          <Button href="/demo" size="lg" className="animate-pulse-subtle">
            {t('cta')}
          </Button>
        </div>
      </div>

      <WaveAnimation
        className="absolute inset-x-0 bottom-0 h-40 w-full"
        color="#1E7AC2"
        opacity={0.10}
      />
    </section>
  )
}
