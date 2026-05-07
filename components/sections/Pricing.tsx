import { CheckIcon } from '@/components/ui/Icons'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'

interface Box {
  label: string
  title: string
  price: string
  bullets: string[]
}

const boxes: Box[] = [
  {
    label: 'Einmalig',
    title: 'Implementation',
    price: 'ab 50.000 €',
    bullets: [
      'Connector-Aufbau',
      'Datensäuberung',
      'Modell-Training',
      'Go-Live in Wochen',
    ],
  },
  {
    label: 'Laufend',
    title: 'Lizenz + Support',
    price: 'ab 4.500 € / Monat',
    bullets: [
      'Software-Updates',
      'Neue Features',
      'Wartung',
      'Automatische Berichte',
    ],
  },
]

export function Pricing() {
  return (
    <section id="preise" className="bg-horizon py-24 md:py-32">
      <div className="container-wide">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-ocean">
            Preise
          </p>
          <h2 className="mt-4 font-display text-[32px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[40px]">
            Transparente Preise.
          </h2>
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-4xl gap-6 md:grid-cols-2">
          {boxes.map((box, i) => (
            <Reveal key={box.label} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-2xl border border-[var(--color-border-primary)] bg-white p-8 md:p-10">
                <p className="font-mono text-[11px] uppercase tracking-widest text-coral">
                  {box.label}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold text-[var(--color-text-primary)]">
                  {box.title}
                </h3>

                <div className="mt-6 border-t border-[var(--color-border-primary)] pt-6">
                  <p className="font-display text-3xl font-bold text-[var(--color-text-primary)]">
                    {box.price}
                  </p>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {box.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-sm text-[var(--color-text-primary)]"
                    >
                      <CheckIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-coral" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mx-auto mt-12 max-w-2xl text-center">
          <p className="text-sm text-[var(--color-text-secondary)]">
            Der genaue Preis hängt von Ihrer Situation ab — Artikelanzahl,
            ERP-System, Standorte.
          </p>
          <div className="mt-8">
            <Button href="/demo" size="lg">
              Kostenloses Erstgespräch →
            </Button>
          </div>
          <p className="mt-6 text-xs text-[var(--color-text-tertiary)]">
            Kein Abo-Modell. Keine Cloud-Gebühren. Ihre Daten bleiben bei Ihnen.
          </p>
          <p className="mt-4 text-xs text-[var(--color-text-tertiary)]">
            Volle Preisübersicht unter{' '}
            <a href="/pricing" className="text-coral underline-offset-4 hover:underline">
              /pricing
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  )
}
