import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { PageHeader } from '@/components/ui/PageHeader'

export const metadata: Metadata = {
  title: 'Datenschutz',
  robots: { index: false, follow: true },
}

interface Section {
  title: string
  body: ReactNode
}

const sections: Section[] = [
  {
    title: '1. Verantwortlicher',
    body: (
      <>
        Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne
        der Datenschutz-Grundverordnung (DSGVO):
        <br />
        <br />
        Maximilian Fischer
        <br />
        Liebenzeller Straße 50
        <br />
        75339 Höfen an der Enz
        <br />
        Deutschland
        <br />
        <br />
        Telefon:{' '}
        <a href="tel:+4915111637402" className="text-ocean underline">
          +49 151 11637402
        </a>
        <br />
        E-Mail:{' '}
        <a href="mailto:hello@nalu-ai.com" className="text-ocean underline">
          hello@nalu-ai.com
        </a>
      </>
    ),
  },
  {
    title: '2. Hosting und Server-Logfiles',
    body: (
      <>
        Diese Website wird bei Vercel Inc. (340 S Lemon Ave #4133, Walnut, CA
        91789, USA) gehostet. Beim Aufruf werden technisch notwendige Daten
        (Datum/Uhrzeit der Anfrage, IP-Adresse, User-Agent, Referrer,
        aufgerufene URL) automatisch durch unseren Hosting-Provider in
        Server-Logfiles verarbeitet.
        <br />
        <br />
        Die Verarbeitung erfolgt zur Bereitstellung und Sicherstellung des
        Dienstes auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
        Interesse an einem stabilen, sicheren Betrieb). Mit Vercel besteht
        ein Auftragsverarbeitungsvertrag (Art. 28 DSGVO). Die
        Datenübermittlung in die USA erfolgt auf Grundlage des
        EU-US-Datenschutzrahmens (Data Privacy Framework) bzw. ergänzend auf
        Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO).
        <br />
        <br />
        Logfile-Daten werden für maximal 30 Tage gespeichert und danach
        automatisch gelöscht.
      </>
    ),
  },
  {
    title: '3. Reichweitenmessung mit Plausible Analytics',
    body: (
      <>
        Wir nutzen Plausible Analytics zur statistischen Auswertung von
        Zugriffen. Plausible verzichtet vollständig auf Cookies und erfasst
        keine personenbezogenen Daten. IP-Adressen werden nicht gespeichert,
        sondern nur kurzzeitig zur Berechnung eines anonymisierten
        Tages-Hashes verwendet.
        <br />
        <br />
        Erfasst werden ausschließlich aggregierte Statistiken wie
        Seitenaufrufe, Verweildauer, Herkunftsland und Referrer. Eine
        Wiedererkennung über Geräte oder Sessions hinweg findet nicht statt.
        <br />
        <br />
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Da keine Cookies
        gesetzt und keine personenbezogenen Daten verarbeitet werden, ist
        keine Einwilligung erforderlich. Anbieter: Plausible Insights OÜ,
        Västriku tn 2, 50403 Tartu, Estland.
      </>
    ),
  },
  {
    title: '4. Demo-Anfrageformular',
    body: (
      <>
        Wenn Sie das Demo-Anfrageformular nutzen, verarbeiten wir folgende
        Daten zur Bearbeitung Ihrer Anfrage: Name, E-Mail-Adresse,
        Unternehmen, Position, Artikelanzahl, ERP-System sowie Ihre
        optionale Beschreibung.
        <br />
        <br />
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Anbahnung eines
        Vertragsverhältnisses) sowie Art. 6 Abs. 1 lit. f DSGVO (unser
        berechtigtes Interesse, Anfragen zu beantworten).
        <br />
        <br />
        Ihre Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage
        verwendet, nicht ohne Ihre ausdrückliche Einwilligung an Dritte
        weitergegeben und insbesondere nicht für Werbezwecke verwendet. Die
        Daten werden gelöscht, sobald sie für die Bearbeitung nicht mehr
        erforderlich sind, spätestens nach Ablauf gesetzlicher
        Aufbewahrungsfristen (in der Regel 6 bzw. 10 Jahre nach
        Handels- und Steuerrecht, sofern eine Geschäftsbeziehung entsteht).
      </>
    ),
  },
  {
    title: '5. E-Mail-Versand mit Resend',
    body: (
      <>
        Zum Versand von Bestätigungs- und Benachrichtigungs-E-Mails
        (insbesondere im Zusammenhang mit dem Demo-Anfrageformular) nutzen
        wir Resend (Resend Inc., 2261 Market Street #5039, San Francisco, CA
        94114, USA) als Auftragsverarbeiter.
        <br />
        <br />
        Mit Resend besteht ein Auftragsverarbeitungsvertrag (Art. 28 DSGVO).
        Die Datenübermittlung in die USA erfolgt auf Grundlage des
        EU-US-Datenschutzrahmens (Data Privacy Framework) bzw. ergänzend auf
        Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO).
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. b und f DSGVO.
      </>
    ),
  },
  {
    title: '6. Cookies',
    body: (
      <>
        Diese Website setzt keine Tracking- oder Marketing-Cookies. Es werden
        ausschließlich technisch notwendige Speichermechanismen genutzt, die
        für den Betrieb der Website erforderlich sind. Eine Einwilligung über
        ein Cookie-Banner ist daher nicht erforderlich.
      </>
    ),
  },
  {
    title: '7. Speicherdauer',
    body: (
      <>
        Personenbezogene Daten werden nur so lange gespeichert, wie es für
        den jeweiligen Zweck erforderlich ist oder gesetzliche
        Aufbewahrungsfristen es vorschreiben. Konkret:
        <br />
        <br />
        • Server-Logfiles: 30 Tage
        <br />
        • Anfragedaten ohne Folge-Geschäftsbeziehung: bis zu 6 Monate
        <br />
        • Geschäftsrelevante Korrespondenz: 6 Jahre (§ 257 HGB)
        <br />
        • Steuerrelevante Unterlagen: 10 Jahre (§ 147 AO)
      </>
    ),
  },
  {
    title: '8. Ihre Rechte als betroffene Person',
    body: (
      <>
        Sie haben jederzeit das Recht auf:
        <br />
        <br />
        • Auskunft über die zu Ihrer Person gespeicherten Daten (Art. 15
        DSGVO)
        <br />
        • Berichtigung unrichtiger Daten (Art. 16 DSGVO)
        <br />
        • Löschung Ihrer Daten (Art. 17 DSGVO)
        <br />
        • Einschränkung der Verarbeitung (Art. 18 DSGVO)
        <br />
        • Datenübertragbarkeit (Art. 20 DSGVO)
        <br />
        • Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)
        <br />
        • Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft
        (Art. 7 Abs. 3 DSGVO)
        <br />
        <br />
        Zur Ausübung Ihrer Rechte genügt eine formlose Mitteilung an die im
        Impressum angegebenen Kontaktdaten.
      </>
    ),
  },
  {
    title: '9. Beschwerderecht bei der Aufsichtsbehörde',
    body: (
      <>
        Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde
        über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren.
        Zuständige Aufsichtsbehörde ist:
        <br />
        <br />
        Der Landesbeauftragte für den Datenschutz und die
        Informationsfreiheit Baden-Württemberg
        <br />
        Lautenschlagerstraße 20
        <br />
        70173 Stuttgart
        <br />
        <a
          href="https://www.baden-wuerttemberg.datenschutz.de"
          target="_blank"
          rel="noopener noreferrer"
          className="text-ocean underline"
        >
          www.baden-wuerttemberg.datenschutz.de
        </a>
      </>
    ),
  },
  {
    title: '10. Änderungen dieser Datenschutzerklärung',
    body: (
      <>
        Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit
        sie stets den aktuellen rechtlichen Anforderungen entspricht oder um
        Änderungen unserer Verarbeitungsprozesse abzubilden. Für Ihren
        erneuten Besuch gilt die jeweils aktuelle Fassung.
      </>
    ),
  },
]

export default function DatenschutzPage() {
  return (
    <>
      <PageHeader title="Datenschutz" />

      <section className="bg-white py-20 md:py-24">
        <div className="container-wide">
          <article className="mx-auto max-w-prose space-y-8 text-[var(--color-text-primary)]">
            <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
              Diese Datenschutzerklärung erläutert Art, Umfang und Zweck der
              Verarbeitung von personenbezogenen Daten innerhalb dieser
              Website. Wir nehmen Datenschutz ernst — und zwar nicht nur,
              weil die DSGVO uns dazu verpflichtet.
            </p>

            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="font-display text-lg font-semibold">
                  {s.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {s.body}
                </p>
              </div>
            ))}

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
