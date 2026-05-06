import type { Metadata } from 'next'
import { PageHeader } from '@/components/ui/PageHeader'

export const metadata: Metadata = {
  title: 'Datenschutz',
  robots: { index: false, follow: true },
}

const sections = [
  {
    title: '1. Verantwortlicher',
    body: (
      <>
        Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der DSGVO:
        <br />
        [Vor- und Nachname]
        <br />
        [Adresse]
        <br />
        E-Mail:{' '}
        <a href="mailto:hello@nalu-ai.com" className="text-ocean underline">
          hello@nalu-ai.com
        </a>
      </>
    ),
  },
  {
    title: '2. Zugriffsdaten',
    body: 'Beim Aufruf dieser Website werden technisch notwendige Daten (Datum/Uhrzeit, IP-Adresse, User-Agent, Referrer) durch unseren Hosting-Provider Vercel verarbeitet. Diese Verarbeitung erfolgt zur Bereitstellung und Sicherstellung des Dienstes auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.',
  },
  {
    title: '3. Analyse mit Plausible Analytics',
    body: 'Wir nutzen Plausible Analytics zur statistischen Auswertung von Zugriffen. Plausible verzichtet auf Cookies und erfasst keine personenbezogenen Daten. IP-Adressen werden nicht gespeichert. Es werden lediglich aggregierte Statistiken erhoben (z. B. Seitenaufrufe, Verweildauer, Herkunftsland). Eine Auswertung über Geräte-Sessions hinweg findet nicht statt. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.',
  },
  {
    title: '4. Kontaktformular',
    body: 'Wenn Sie das Demo-Anfrageformular nutzen, werden Ihre Angaben (Name, E-Mail, Unternehmen, Position, Artikelanzahl, ERP-System, optionale Beschreibung) zur Bearbeitung Ihrer Anfrage verarbeitet. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO. Die Daten werden nicht ohne Ihre ausdrückliche Einwilligung an Dritte weitergegeben und insbesondere nicht für Werbezwecke verwendet.',
  },
  {
    title: '5. E-Mail-Versand mit Resend',
    body: 'Zum Versand der Bestätigungs- und Benachrichtigungs-E-Mails nutzen wir Resend (Resend Inc., USA) als Auftragsverarbeiter. Es besteht ein Auftragsverarbeitungsvertrag. Die Datenübermittlung in die USA erfolgt auf Grundlage von Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO).',
  },
  {
    title: '6. Speicherdauer',
    body: 'Anfragedaten werden gelöscht, sobald sie für die Bearbeitung nicht mehr erforderlich sind, spätestens jedoch nach Ablauf gesetzlicher Aufbewahrungsfristen.',
  },
  {
    title: '7. Ihre Rechte',
    body: 'Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21). Beschwerden können Sie bei der zuständigen Aufsichtsbehörde einreichen.',
  },
  {
    title: '8. Änderungen',
    body: 'Wir behalten uns vor, diese Datenschutzerklärung anzupassen, sobald sich die Rechtslage oder unsere Verarbeitungsprozesse ändern.',
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
              Diese Datenschutzerklärung erläutert Art, Umfang und Zweck der Verarbeitung
              von personenbezogenen Daten innerhalb dieser Website. Wir nehmen Datenschutz
              ernst — und zwar nicht nur, weil die DSGVO uns dazu verpflichtet.
            </p>

            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="font-display text-lg font-semibold">{s.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {s.body}
                </p>
              </div>
            ))}

            <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--color-text-tertiary)]">
              Stand: {new Date().toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })} · Platzhalter — final durch Rechtsberatung freizugeben
            </p>
          </article>
        </div>
      </section>
    </>
  )
}
