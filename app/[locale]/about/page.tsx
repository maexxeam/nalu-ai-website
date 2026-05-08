import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import {
  IconShieldLock,
  IconBolt,
  IconTool,
  IconBuildings,
} from '@tabler/icons-react'
import { WaveBackground } from '@/components/ui/WaveBackground'

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

  const principles = [
    { Icon: IconShieldLock, title: t('p1Title'), body: t('p1Body') },
    { Icon: IconBolt, title: t('p2Title'), body: t('p2Body') },
    { Icon: IconTool, title: t('p3Title'), body: t('p3Body') },
    { Icon: IconBuildings, title: t('p4Title'), body: t('p4Body') },
  ]

  const steps = [
    { num: t('step1Num'), title: t('step1Title'), body: t('step1Body') },
    { num: t('step2Num'), title: t('step2Title'), body: t('step2Body') },
    { num: t('step3Num'), title: t('step3Title'), body: t('step3Body') },
    { num: t('step4Num'), title: t('step4Title'), body: t('step4Body') },
    { num: t('step5Num'), title: t('step5Title'), body: t('step5Body') },
  ]

  const wasNot = [
    { title: t('wasNot1Title'), body: t('wasNot1Body') },
    { title: t('wasNot2Title'), body: t('wasNot2Body') },
    { title: t('wasNot3Title'), body: t('wasNot3Body') },
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-32 pb-20">
        <div className="container-wide">
          <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--color-text-tertiary)]">
            {t('headerLabel')}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-[40px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[52px]">
            {t('headerTitle')}
            <br />
            <span className="text-coral">{t('headerTitleSecond')}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-[var(--color-text-secondary)] md:text-lg">
            {t('headerSubtitle')}
          </p>
        </div>
      </section>

      {/* Was Nalu AI ist */}
      <section className="bg-[#F8FAFB] py-20">
        <div className="container-wide">
          <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--color-text-tertiary)]">
            {t('wasLabel')}
          </p>
          <h2 className="mt-4 font-display text-[32px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[40px]">
            {t('wasTitle')}
          </h2>

          <p className="mt-8 max-w-3xl whitespace-pre-line text-base leading-relaxed text-[var(--color-text-secondary)]">
            {t('wasBody')}
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {wasNot.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-[var(--color-border-primary)] bg-white p-6"
              >
                <p className="font-display text-base font-semibold text-[var(--color-text-primary)]">
                  {item.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodik */}
      <section className="bg-white py-20">
        <div className="container-wide">
          <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--color-text-tertiary)]">
            {t('methodikLabel')}
          </p>
          <h2 className="mt-4 font-display text-[32px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[40px]">
            {t('methodikTitle')}
          </h2>
          <p className="mt-3 text-base text-[var(--color-text-secondary)]">
            {t('methodikSubline')}
          </p>

          <ol className="mt-12 space-y-6">
            {steps.map((step) => (
              <li
                key={step.num}
                className="grid gap-4 rounded-xl border border-[var(--color-border-primary)] p-6 md:grid-cols-[80px_1fr] md:gap-8 md:p-8"
              >
                <div className="font-display text-3xl font-bold text-coral md:text-4xl">
                  {step.num}
                </div>
                <div>
                  <p className="font-display text-lg font-semibold text-[var(--color-text-primary)]">
                    {step.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Prinzipien */}
      <section className="bg-[#F8FAFB] py-20">
        <div className="container-wide">
          <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--color-text-tertiary)]">
            {t('prinzipienLabel')}
          </p>
          <h2 className="mt-4 font-display text-[32px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[40px]">
            {t('prinzipienTitle')}
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {principles.map(({ Icon, title, body }) => (
              <div
                key={title}
                className="rounded-xl border border-[var(--color-border-primary)] bg-white p-8"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-bg-secondary)] text-coral">
                  <Icon size={24} stroke={1.75} />
                </div>
                <p className="mt-5 font-display text-lg font-semibold text-[var(--color-text-primary)]">
                  {title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section className="relative overflow-hidden bg-navy py-32">
        <WaveBackground className="absolute inset-0 h-full w-full opacity-50" />
        <div className="container-wide relative z-10 text-center">
          <h2 className="font-display text-[36px] font-bold text-white md:text-[44px]">
            {t('kontaktTitle')}
          </h2>
          <p className="mt-4 text-base text-white/60">{t('kontaktSubline')}</p>
          <a
            href={`mailto:${t('kontaktEmail')}`}
            className="mt-8 inline-block font-display text-[22px] font-semibold text-coral hover:underline md:text-[28px]"
          >
            {t('kontaktEmail')}
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
