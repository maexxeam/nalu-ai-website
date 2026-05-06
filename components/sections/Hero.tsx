import { Button } from '@/components/ui/Button'
import { WaveBackground } from '@/components/ui/WaveBackground'

const trustSignals = [
  'Lebensmittelproduktion',
  'Maschinenbau',
  'Pharma & Kosmetik',
]

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-navy">
      <WaveBackground className="absolute inset-0 h-full w-full" />

      <div className="container-wide relative z-10 flex min-h-screen flex-col items-center justify-center py-32 text-center md:py-40">
        <span className="inline-block rounded-full border border-coral/40 bg-coral/10 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-coral">
          ~ Demand Intelligence Platform
        </span>

        <h1 className="mx-auto mt-8 max-w-4xl font-display text-[40px] font-bold leading-[1.05] text-white md:text-[48px] xl:text-[56px]">
          Ride the wave of demand.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base text-white/70 md:text-lg">
          Nalu AI verbindet Ihre ERP-Daten mit ML-Forecasting — deploybar in
          Wochen, ohne Cloud-Risiko.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/demo" size="lg">
            Demo anfragen →
          </Button>
          <Button href="#produkt" variant="ghost" size="lg">
            Produkt entdecken
          </Button>
        </div>

        <div className="mt-20 w-full max-w-3xl border-t border-white/10 pt-8">
          <p className="font-mono text-[11px] uppercase tracking-widest text-white/40">
            Vertrauen von Mittelständlern in DACH
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {trustSignals.map((signal) => (
              <span
                key={signal}
                className="text-sm font-medium text-white/40"
              >
                {signal}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
