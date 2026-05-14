import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { setRequestLocale } from 'next-intl/server'
import { PageHeader } from '@/components/ui/PageHeader'
import type { Locale } from '@/i18n/routing'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return {
    title: locale === 'en' ? 'Privacy' : 'Datenschutz',
    robots: { index: false, follow: true },
  }
}

interface Section {
  title: string
  body: ReactNode
}

const deSections: Section[] = [
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
    title: '4. Cookies',
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
    title: '5. Speicherdauer',
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
    title: '6. Ihre Rechte als betroffene Person',
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
    title: '7. Beschwerderecht bei der Aufsichtsbehörde',
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
    title: '8. Änderungen dieser Datenschutzerklärung',
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

const enSections: Section[] = [
  {
    title: '1. Controller',
    body: (
      <>
        Controller for data processing on this website within the meaning
        of the General Data Protection Regulation (GDPR):
        <br />
        <br />
        Maximilian Fischer
        <br />
        Liebenzeller Straße 50
        <br />
        75339 Höfen an der Enz
        <br />
        Germany
        <br />
        <br />
        Phone:{' '}
        <a href="tel:+4915111637402" className="text-ocean underline">
          +49 151 11637402
        </a>
        <br />
        Email:{' '}
        <a href="mailto:hello@nalu-ai.com" className="text-ocean underline">
          hello@nalu-ai.com
        </a>
      </>
    ),
  },
  {
    title: '2. Hosting and server log files',
    body: (
      <>
        This website is hosted by Vercel Inc. (340 S Lemon Ave #4133,
        Walnut, CA 91789, USA). On every request, technically necessary
        data (date/time of the request, IP address, user agent, referrer,
        URL accessed) is automatically processed by our hosting provider in
        server log files.
        <br />
        <br />
        Processing serves to provide and secure the service on the basis of
        Art. 6 (1) (f) GDPR (legitimate interest in stable, secure
        operation). A data processing agreement (Art. 28 GDPR) is in place
        with Vercel. Data transfer to the USA takes place on the basis of
        the EU-US Data Privacy Framework or, supplementarily, on Standard
        Contractual Clauses (Art. 46 (2) (c) GDPR).
        <br />
        <br />
        Log file data is stored for a maximum of 30 days and then deleted
        automatically.
      </>
    ),
  },
  {
    title: '3. Web analytics with Plausible',
    body: (
      <>
        We use Plausible Analytics to statistically evaluate visits.
        Plausible does not use cookies and does not collect personal data.
        IP addresses are not stored; they are only used briefly to compute
        an anonymized daily hash.
        <br />
        <br />
        Only aggregated statistics are recorded — page views, dwell time,
        country of origin and referrer. There is no recognition across
        devices or sessions.
        <br />
        <br />
        Legal basis is Art. 6 (1) (f) GDPR. As no cookies are set and no
        personal data is processed, no consent is required. Provider:
        Plausible Insights OÜ, Västriku tn 2, 50403 Tartu, Estonia.
      </>
    ),
  },
  {
    title: '4. Cookies',
    body: (
      <>
        This website does not set any tracking or marketing cookies. Only
        technically necessary storage mechanisms required to operate the
        website are used. Consent via a cookie banner is therefore not
        required.
      </>
    ),
  },
  {
    title: '5. Retention periods',
    body: (
      <>
        Personal data is only stored for as long as necessary for the
        respective purpose or as required by statutory retention periods.
        Specifically:
        <br />
        <br />
        • Server log files: 30 days
        <br />
        • Inquiry data without follow-up business: up to 6 months
        <br />
        • Business correspondence: 6 years (§ 257 HGB)
        <br />
        • Tax-relevant documents: 10 years (§ 147 AO)
      </>
    ),
  },
  {
    title: '6. Your rights as a data subject',
    body: (
      <>
        You have the right at any time to:
        <br />
        <br />
        • Access information about the data stored about you (Art. 15 GDPR)
        <br />
        • Rectification of inaccurate data (Art. 16 GDPR)
        <br />
        • Erasure of your data (Art. 17 GDPR)
        <br />
        • Restriction of processing (Art. 18 GDPR)
        <br />
        • Data portability (Art. 20 GDPR)
        <br />
        • Objection to processing (Art. 21 GDPR)
        <br />
        • Withdrawal of consent with effect for the future (Art. 7 (3)
        GDPR)
        <br />
        <br />
        An informal notice to the contact details given in the imprint is
        sufficient to exercise your rights.
      </>
    ),
  },
  {
    title: '7. Right to lodge a complaint',
    body: (
      <>
        You have the right to lodge a complaint with a data-protection
        supervisory authority about the processing of your personal data.
        The competent authority is:
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
    title: '8. Changes to this policy',
    body: (
      <>
        We reserve the right to adjust this privacy policy so that it
        always meets current legal requirements or to reflect changes in
        our processing operations. The version current at the time of your
        next visit applies.
      </>
    ),
  },
]

export default async function DatenschutzPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const isEn = locale === 'en'
  const sections = isEn ? enSections : deSections

  const dateTag = isEn ? 'en-US' : 'de-DE'
  const stand = new Date().toLocaleDateString(dateTag, {
    month: 'long',
    year: 'numeric',
  })

  return (
    <>
      <PageHeader title={isEn ? 'Privacy' : 'Datenschutz'} />

      <section className="bg-white py-20 md:py-24">
        <div className="container-wide">
          <article className="mx-auto max-w-prose space-y-8 text-[var(--color-text-primary)]">
            <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
              {isEn
                ? "This privacy policy explains the nature, scope and purpose of personal-data processing on this website. We take privacy seriously — and not just because the GDPR requires us to."
                : 'Diese Datenschutzerklärung erläutert Art, Umfang und Zweck der Verarbeitung von personenbezogenen Daten innerhalb dieser Website. Wir nehmen Datenschutz ernst — und zwar nicht nur, weil die DSGVO uns dazu verpflichtet.'}
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
              {isEn ? `As of: ${stand}` : `Stand: ${stand}`}
            </p>
          </article>
        </div>
      </section>
    </>
  )
}
