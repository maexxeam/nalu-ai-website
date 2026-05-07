import { ClockIcon } from '@/components/ui/Icons'
import { Reveal } from '@/components/ui/Reveal'
import type { SVGProps } from 'react'

const baseSvg = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const

function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseSvg} {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  )
}

function ChartDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseSvg} {...props}>
      <path d="M3 3v18h18" />
      <path d="M7 10l4 4 4-4 5 6" />
    </svg>
  )
}

const problems = [
  {
    Icon: PhoneIcon,
    title: 'Anrufe ohne Plan',
    body: 'Sie rufen Kunden an, ohne zu wissen, ob sie gerade kaufbereit sind — oder ob jemand anderes gerade dringender wäre.',
  },
  {
    Icon: ChartDownIcon,
    title: 'Churn zu spät erkannt',
    body: 'Sie merken erst nach Wochen, dass ein Kunde abwandert. Bis dahin ist er meist beim Wettbewerb.',
  },
  {
    Icon: ClockIcon,
    title: 'Reihenfolge unklar',
    body: 'Welcher Kunde meldet sich als nächstes? Welcher braucht jetzt einen Anruf? Bauchgefühl statt Daten.',
  },
]

export function SalesProblem() {
  return (
    <section className="bg-horizon py-24 md:py-32">
      <div className="container-wide">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-ocean">
            Das Problem
          </p>
          <h2 className="mt-4 font-display text-[32px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[40px]">
            Ihr Vertrieb arbeitet
            <br />
            mit Bauchgefühl.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {problems.map(({ Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 0.1}>
              <article className="group h-full rounded-xl border border-[var(--color-border-primary)] border-l-4 border-l-coral bg-white p-8 shadow-brand-sm transition-all duration-300 hover:shadow-brand-md">
                <div className="text-coral">
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
