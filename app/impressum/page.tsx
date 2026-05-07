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
                Angaben gemäß § 5 DDG
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                Maximilian Fischer
                <br />
                Liebenzeller Straße 50
                <br />
                75339 Höfen an der Enz
                <br />
                Deutschland
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold">Kontakt</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                Telefon:{' '}
                <a href="tel:+4915111637402" className="text-ocean underline">
                  +49 151 11637402
                </a>
                <br />
                E-Mail:{' '}
                <a href="mailto:hello@nalu-ai.com" className="text-ocean underline">
                  hello@nalu-ai.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold">Umsatzsteuer</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                Es wird gemäß § 19 UStG (Kleinunternehmerregelung) keine
                Umsatzsteuer ausgewiesen.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold">
                Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                Maximilian Fischer
                <br />
                Liebenzeller Straße 50
                <br />
                75339 Höfen an der Enz
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold">
                Streitschlichtung
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{' '}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ocean underline"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                . Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold">
                Haftung für Inhalte
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                Die Inhalte dieser Seiten wurden mit größtmöglicher Sorgfalt
                erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität
                der Inhalte kann jedoch keine Gewähr übernommen werden. Als
                Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 DDG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold">
                Haftung für Links
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                Unser Angebot enthält Links zu externen Websites Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Deshalb können wir
                für diese fremden Inhalte auch keine Gewähr übernehmen. Für
                die Inhalte der verlinkten Seiten ist stets der jeweilige
                Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold">
                Urheberrecht
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                Die durch den Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht.
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechts bedürfen
                der schriftlichen Zustimmung des jeweiligen Autors bzw.
                Erstellers.
              </p>
            </div>

            <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--color-text-tertiary)]">
              Stand:{' '}
              {new Date().toLocaleDateString('de-DE', {
                month: 'long',
                year: 'numeric',
              })}
            </p>
          </article>
        </div>
      </section>
    </>
  )
}
