import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import { PageHeader } from '@/components/ui/PageHeader'
import { DemoForm } from '@/components/ui/DemoForm'
import { CheckIcon } from '@/components/ui/Icons'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Demo' })
  return { title: t('metaTitle'), description: t('metaDescription') }
}

function DemoBody() {
  const t = useTranslations('Demo')

  const expectations = [
    t('expectation1'),
    t('expectation2'),
    t('expectation3'),
    t('expectation4'),
  ]

  const agenda = [
    { time: t('agenda1Time'), label: t('agenda1Label') },
    { time: t('agenda2Time'), label: t('agenda2Label') },
    { time: t('agenda3Time'), label: t('agenda3Label') },
  ]

  return (
    <>
      <PageHeader
        eyebrow={t('headerEyebrow')}
        title={t('headerTitle')}
        subtitle={t('headerSubtitle')}
      />

      <section className="bg-white py-20 md:py-24">
        <div className="container-wide">
          <div className="grid gap-16 lg:grid-cols-[3fr_2fr] lg:gap-20">
            <div>
              <DemoForm />
            </div>

            <aside className="space-y-12">
              <div>
                <h2 className="font-display text-xl font-semibold text-[var(--color-text-primary)]">
                  {t('expectationsTitle')}
                </h2>
                <ul className="mt-6 space-y-3">
                  {expectations.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[var(--color-text-primary)]">
                      <CheckIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-coral" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-display text-xl font-semibold text-[var(--color-text-primary)]">
                  {t('agendaTitle')}
                </h2>
                <ul className="mt-6 divide-y divide-[var(--color-border-primary)] rounded-xl border border-[var(--color-border-primary)] bg-white">
                  {agenda.map((item) => (
                    <li
                      key={item.label}
                      className="flex items-center justify-between px-4 py-3"
                    >
                      <span className="text-sm text-[var(--color-text-primary)]">
                        {item.label}
                      </span>
                      <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-tertiary)]">
                        {item.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl bg-[var(--color-bg-tertiary)] p-6">
                <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--color-text-tertiary)]">
                  {t('directLabel')}
                </p>
                <a
                  href="mailto:hello@nalu-ai.com"
                  className="mt-2 block font-display text-lg font-semibold text-ocean hover:text-coral"
                >
                  hello@nalu-ai.com
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}

export default async function DemoPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  return <DemoBody />
}
