import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import { PageHeader } from '@/components/ui/PageHeader'
import type { Locale } from '@/i18n/routing'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Impressum' })
  return { title: t('metaTitle'), robots: { index: false, follow: true } }
}

function ImpressumBody({ locale }: { locale: Locale }) {
  const t = useTranslations('Impressum')
  const dateTag = locale === 'en' ? 'en-US' : 'de-DE'
  const stand = new Date().toLocaleDateString(dateTag, {
    month: 'long',
    year: 'numeric',
  })

  return (
    <>
      <PageHeader title={t('headerTitle')} />

      <section className="bg-white py-20 md:py-24">
        <div className="container-wide">
          <article className="mx-auto max-w-prose space-y-10 text-[var(--color-text-primary)]">
            <div>
              <h2 className="font-display text-xl font-semibold">{t('h1')}</h2>
              <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {t('h1Body')}
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold">
                {t('contactHeading')}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {t('contactPhone')}{' '}
                <a href="tel:+4915111637402" className="text-ocean underline">
                  +49 151 11637402
                </a>
                <br />
                {t('contactEmail')}{' '}
                <a href="mailto:aloha@nalu-ai.com" className="text-ocean underline">
                  aloha@nalu-ai.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold">
                {t('vatHeading')}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {t('vatBody')}
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold">
                {t('responsibleHeading')}
              </h2>
              <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {t('h1Body')}
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold">
                {t('disputeHeading')}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {t('disputeBodyPre')}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ocean underline"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                {t('disputeBodyPost')}
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold">
                {t('liabilityContentHeading')}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {t('liabilityContentBody')}
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold">
                {t('liabilityLinksHeading')}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {t('liabilityLinksBody')}
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold">
                {t('copyrightHeading')}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {t('copyrightBody')}
              </p>
            </div>

            <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--color-text-tertiary)]">
              {t('asOf', { date: stand })}
            </p>
          </article>
        </div>
      </section>
    </>
  )
}

export default async function ImpressumPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  return <ImpressumBody locale={locale as Locale} />
}
