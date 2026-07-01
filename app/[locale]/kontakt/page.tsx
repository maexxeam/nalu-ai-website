import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { PageHeader } from '@/components/ui/PageHeader'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Kontakt' })
  return { title: t('metaTitle'), description: t('metaDescription') }
}

export default async function KontaktPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <PageHeader title="Kontakt" />
      <section className="bg-white py-20 md:py-24">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl space-y-6 text-center">
            <a
              href="mailto:aloha@nalu-ai.com"
              className="block font-display text-3xl font-semibold text-coral hover:underline md:text-5xl"
            >
              aloha@nalu-ai.com
            </a>
            <a
              href="https://www.linkedin.com/in/maximilian-fischer-naluai/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-base text-[var(--color-text-secondary)] hover:underline md:text-lg"
            >
              linkedin.com/in/maximilian-fischer-naluai
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
