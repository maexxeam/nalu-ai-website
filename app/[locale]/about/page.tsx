import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { useTranslations } from 'next-intl'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'About' })
  return { title: t('metaTitle'), description: t('metaDescription') }
}

function AboutBody() {
  const t = useTranslations('About')

  return (
    <>
      <section className="bg-navy py-32">
        <div className="container-wide">
          <h1 className="font-display text-[40px] font-bold text-white md:text-[52px]">
            {t('headerTitle')}
          </h1>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-wide max-w-3xl">
          <p className="text-lg font-medium text-[var(--color-text-primary)]">{t('intro')}</p>
          <p className="mt-2 text-lg text-[var(--color-text-secondary)]">{t('introSecond')}</p>

          <p className="mt-10 text-base leading-relaxed text-[var(--color-text-secondary)]">
            {t('naluSection')}
          </p>
        </div>
      </section>

      <section className="bg-[#F8FAFB] py-20">
        <div className="container-wide max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-[var(--color-text-primary)]">
            {t('meatmindTitle')}
          </h2>
          <p className="mt-4 whitespace-pre-line text-base leading-relaxed text-[var(--color-text-secondary)]">
            {t('meatmindBody')}
          </p>
          <p className="mt-4 font-semibold text-[var(--color-text-primary)]">{t('meatmindStats')}</p>
          <p className="mt-1 font-mono text-xs text-[var(--color-text-tertiary)]">{t('meatmindTech')}</p>

          <blockquote className="mt-10 border-l-4 border-coral pl-6">
            <p className="font-display text-lg font-semibold italic text-[var(--color-text-primary)]">
              {t('quote')}
            </p>
            <p className="mt-3 text-sm text-[var(--color-text-secondary)]">{t('quoteAuthor')}</p>
          </blockquote>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-wide max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-[var(--color-text-primary)]">
            {t('hintergrundTitle')}
          </h2>
          <p className="mt-4 whitespace-pre-line text-base leading-relaxed text-[var(--color-text-secondary)]">
            {t('hintergrundBody')}
          </p>
        </div>
      </section>

      <section className="bg-navy py-20">
        <div className="container-wide max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-white">{t('kontaktTitle')}</h2>
          <a
            href={`mailto:${t('email')}`}
            className="mt-4 inline-block font-display text-[22px] font-semibold text-coral hover:underline"
          >
            {t('email')}
          </a>
        </div>
      </section>
    </>
  )
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  return <AboutBody />
}
