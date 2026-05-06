import type { Metadata } from 'next'
import { PageHeader } from '@/components/ui/PageHeader'

export const metadata: Metadata = {
  title: 'Impressum',
  robots: { index: false, follow: true },
}

export default function ImpressumPage() {
  return (
    <>
      <PageHeader title="Impressum" />

      <section className="bg-white py-20 md:py-24">
        <div className="container-wide">
          <article className="mx-auto max-w-prose space-y-10 text-[var(--color-text-primary)]">
            <div>
              <h2 className="font-display text-xl font-semibold">
                Angaben gemäß § 5 TMG
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                [Vor- und Nachname]
                <br />
                [Straße und Hausnummer]
                <br />
                [PLZ Ort]
                <br />
                Deutschland
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold">Kontakt</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                E-Mail:{' '}
                <a href="mailto:hello@nalu-ai.com" className="text-ocean underline">
                  hello@nalu-ai.com
                </a>
                <br />
                Telefon: [Telefonnummer]
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold">
                Umsatzsteuer-ID
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
                <br />
                [USt-IdNr. — sobald vergeben]
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                [Vor- und Nachname]
                <br />
                [Straße und Hausnummer]
                <br />
                [PLZ Ort]
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold">Haftungsausschluss</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                Die Inhalte dieser Seiten wurden mit größtmöglicher Sorgfalt erstellt.
                Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann
                jedoch keine Gewähr übernommen werden. Als Diensteanbieter sind wir
                gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
                allgemeinen Gesetzen verantwortlich.
              </p>
            </div>

            <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--color-text-tertiary)]">
              Stand: {new Date().toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })} · Platzhalter — final durch Rechtsberatung freizugeben
            </p>
          </article>
        </div>
      </section>
    </>
  )
}
