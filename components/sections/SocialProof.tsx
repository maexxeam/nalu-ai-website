import { CloudOffIcon, ZapIcon, UsersIcon } from '@/components/ui/Icons'
import { Reveal } from '@/components/ui/Reveal'

const points = [
  {
    Icon: CloudOffIcon,
    title: 'Keine Cloud-Abhängigkeit',
    body: 'Ihre Daten auf Ihrem Server. Punkt. Kein Lock-in, keine Subprocessor-Kette, keine versteckten APIs.',
  },
  {
    Icon: ZapIcon,
    title: 'Deploy in 4 Wochen',
    body: 'Nicht Monate. Wochen. Wir haben es schon mehrfach gemacht — die Lernkurve gehört uns, nicht Ihnen.',
  },
  {
    Icon: UsersIcon,
    title: 'Kein Data Team nötig',
    body: 'Wir bringen die ML-Expertise. Sie bekommen die Forecasts. Ihr Team behält den Fokus auf das eigene Geschäft.',
  },
]

export function SocialProof() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-wide">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-ocean">
            Warum Nalu AI?
          </p>
          <h2 className="mt-4 font-display text-[32px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[40px]">
            Drei Gründe.
            <br />
            Keine Buzzwords.
          </h2>
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
          {points.map(({ Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 0.1}>
              <div className="h-full rounded-xl border border-[var(--color-border-primary)] bg-white p-8">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-ocean/10 text-ocean">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-[var(--color-text-primary)]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mx-auto mt-20 max-w-3xl">
          <figure className="rounded-2xl border-l-4 border-coral bg-horizon p-8 md:p-10">
            <blockquote className="font-display text-lg font-medium leading-relaxed text-[var(--color-text-primary)] md:text-xl">
              „Das erste Forecasting-Tool, das unsere SAP-Daten wirklich versteht —
              und nicht versucht, uns ein generisches Template überzustülpen."
            </blockquote>
            <figcaption className="mt-6 font-mono text-[11px] uppercase tracking-widest text-[var(--color-text-tertiary)]">
              — Head of Supply Chain · Lebensmittelproduzent · Bayern
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
