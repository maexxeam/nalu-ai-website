import { Button } from '@/components/ui/Button'

export function SalesHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,107,74,0.08),transparent_60%)]"
      />

      <div className="container-wide relative z-10 flex min-h-[80vh] flex-col items-center justify-center py-32 text-center md:py-40">
        <span className="inline-block rounded-full border border-coral/40 bg-coral/10 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-coral">
          ~ Nalu AI Sales · Add-on
        </span>

        <h1 className="mx-auto mt-8 max-w-4xl font-display text-[40px] font-bold leading-[1.05] text-[var(--color-text-primary)] md:text-[48px] xl:text-[52px]">
          Wissen Sie, wer morgen
          <br />
          bestellt — bevor er anruft.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base text-[var(--color-text-secondary)] md:text-lg">
          Nalu AI Sales analysiert das Kaufverhalten Ihrer Kunden und zeigt
          Ihnen Kaufwahrscheinlichkeit, erwartetes Volumen und Churn-Risiko —
          automatisch, täglich.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/demo" size="lg">
            Demo anfragen →
          </Button>
        </div>

        <p className="mt-6 font-mono text-[11px] uppercase tracking-widest text-[var(--color-text-tertiary)]">
          Erfordert Nalu AI Core
        </p>
      </div>
    </section>
  )
}
