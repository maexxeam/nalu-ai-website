import { Button } from '@/components/ui/Button'
import { WaveAnimation } from '@/components/ui/WaveAnimation'

export function SalesCTA() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <WaveAnimation
        className="absolute inset-x-0 top-0 h-40 w-full"
        color="#FF6B4A"
        opacity={0.08}
        flip
      />

      <div className="container-wide relative z-10 py-24 text-center md:py-32">
        <h2 className="mx-auto max-w-3xl font-display text-[32px] font-bold leading-[1.1] text-white md:text-[44px]">
          Mehr Umsatz. Weniger Blindflug.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base text-white/70 md:text-lg">
          30 Minuten Demo. Wir zeigen Ihnen Ihr Kaufmuster mit echten
          Beispieldaten — nicht mit Slideshow-Kunden.
        </p>
        <div className="mt-10">
          <Button href="/demo" size="lg" className="animate-pulse-subtle">
            Demo anfragen →
          </Button>
        </div>
      </div>

      <WaveAnimation
        className="absolute inset-x-0 bottom-0 h-40 w-full"
        color="#FF6B4A"
        opacity={0.08}
      />
    </section>
  )
}
