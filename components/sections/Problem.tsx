import { AlertTriangleIcon, ClockIcon, BrainIcon } from '@/components/ui/Icons'
import { Reveal } from '@/components/ui/Reveal'

const problems = [
  {
    Icon: AlertTriangleIcon,
    title: 'Fehlbuchungen in SAP R/3',
    body: 'Falsche Wareneingänge, Phantombestände, inkonsistente Artikelstammdaten — die Realität jedes ERP-Systems im Mittelstand.',
  },
  {
    Icon: ClockIcon,
    title: 'Excel-Forecasts veralten in Stunden',
    body: 'Manuelle Pflege, kopierte Formeln, Versionschaos. Was Montag stimmt, ist Dienstag falsch.',
  },
  {
    Icon: BrainIcon,
    title: 'Keine ML-Expertise intern',
    body: 'Enterprise-Tools kosten 200k€+ pro Jahr oder brauchen ein eigenes Data Team. Beides selten realistisch.',
  },
]

export function Problem() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-wide">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-ocean">
            Das Problem
          </p>
          <h2 className="mt-4 font-display text-[32px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[40px]">
            Ihr ERP hat die Daten.
            <br />
            Niemand kann sie nutzen.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {problems.map(({ Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 0.1}>
              <article className="group h-full rounded-xl border border-[var(--color-border-primary)] border-l-4 border-l-ocean bg-white p-8 shadow-brand-sm transition-all duration-300 hover:shadow-brand-md">
                <div className="text-ocean">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-[var(--color-text-primary)]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
