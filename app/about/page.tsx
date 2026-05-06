import type { Metadata } from 'next'
import { PageHeader } from '@/components/ui/PageHeader'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { ShieldIcon, ZapIcon, UsersIcon } from '@/components/ui/Icons'

export const metadata: Metadata = {
  title: 'Über uns',
  description:
    'Nalu AI entstand aus echter Produktionserfahrung — nicht aus einem Hackathon.',
}

const values = [
  {
    Icon: ShieldIcon,
    title: 'Daten bleiben bei Ihnen',
    body: 'Keine Cloud-Abhängigkeit, keine Subprocessor-Kette. Wir bauen Software für Ihre Infrastruktur, nicht für unsere.',
  },
  {
    Icon: ZapIcon,
    title: 'Kein Hype, nur Ergebnisse',
    body: 'Wir reden nicht von "AI-powered Synergien". Wir liefern Forecasts, Alerts und Berichte, die Ihr Team morgen nutzen kann.',
  },
  {
    Icon: UsersIcon,
    title: 'Mittelstand versteht Mittelstand',
    body: 'Wir kennen die Realität: knappe Ressourcen, gewachsene Systeme, pragmatische Entscheidungen. Daran orientiert sich das Produkt.',
  },
]

const stats = [
  { value: '770', label: 'Kunden im Ursprungsprojekt' },
  { value: '900', label: 'aktive Artikel' },
  { value: '450k+', label: 'Zeitreihen forecastet' },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="~ Über uns"
        title="Gebaut von jemandem, der das Problem kennt."
        subtitle="Nalu AI entstand aus echter Produktionserfahrung — nicht aus einem Hackathon."
      />

      <section className="bg-white py-20 md:py-28">
        <div className="container-wide">
          <Reveal className="mx-auto max-w-3xl">
            <div className="space-y-6 text-base leading-relaxed text-[var(--color-text-primary)] md:text-lg">
              <p>
                Bevor es Nalu AI gab, habe ich eine ML-Forecasting-Plattform für einen
                mittelständischen Lebensmittelproduzenten gebaut — drei Jahre Entwicklung,
                Produktion, Iteration. Kein Lab, keine Demo: tägliche Forecasts, die
                Bestellmengen und Service Levels beeinflusst haben.
              </p>
              <p>
                In dieser Zeit habe ich gelernt, wo Standardlösungen versagen. SAP-R/3-Buchungen,
                die nicht stimmen. Cold-Start-Probleme bei neu gelisteten Artikeln. Excel-Forecasts,
                die um Mitternacht veralten, wenn Wareneingänge eintrudeln. ML-Modelle, die im Lab
                glänzen und in Produktion zerbröseln, weil niemand auf Datenqualität geachtet hat.
              </p>
              <p>
                Nalu AI ist die Antwort auf diese Erfahrung — keine Neuerfindung. Was funktioniert,
                bleibt: LightGBM, Temporal Fusion Transformer, SHAP-Erklärungen, Konfidenzintervalle.
                Was im Mittelstand wirklich zählt, kommt dazu: On-Premise-Deployment, deterministische
                Pipelines, Schulung statt Black Box, Wartung als integraler Teil — nicht als Aufpreis.
              </p>
              <p>
                Die Plattform ist konfigurationsgetrieben. Ein neuer Kunde bedeutet eine{' '}
                <code className="rounded bg-[var(--color-bg-secondary)] px-1.5 py-0.5 text-[13px]">
                  config.yaml
                </code>{' '}
                und einen Connector. Keine Anpassung am Kern. Genau so wurde es entworfen, weil genau
                so der Mittelstand bedient werden muss: ohne dass Sie zu jemandem werden müssen, der
                Sie nicht sind.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mx-auto mt-16 max-w-3xl">
            <div className="grid gap-6 rounded-2xl border border-[var(--color-border-primary)] bg-horizon p-8 sm:grid-cols-3">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-display text-3xl font-bold text-ocean">
                    {s.value}
                  </p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-[var(--color-text-tertiary)]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-horizon py-20 md:py-28">
        <div className="container-wide">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-ocean">
              Werte
            </p>
            <h2 className="mt-4 font-display text-[28px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[36px]">
              Drei Prinzipien.
              <br />
              Daran wird gemessen.
            </h2>
          </Reveal>

          <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
            {values.map(({ Icon, title, body }, i) => (
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
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="container-wide">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-[28px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[36px]">
              Sprechen wir.
            </h2>
            <p className="mt-4 text-base text-[var(--color-text-secondary)] md:text-lg">
              30 Minuten Demo auf Ihrem Use Case. Keine Verpflichtung,
              keine Vorbereitung nötig.
            </p>
            <div className="mt-8">
              <Button href="/demo" size="lg">
                Demo anfragen →
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
