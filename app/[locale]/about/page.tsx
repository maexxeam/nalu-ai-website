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
import { Reveal, LabelReveal } from '@/components/ui/Reveal'

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
          <LabelReveal className="font-mono text-[11px] uppercase tracking-widest text-coral">
            {t('headerLabel')}
          </LabelReveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 max-w-3xl font-display text-[40px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[52px]">
              {t('headerTitle')}
              <br />
              <span className="text-coral">{t('headerTitleSecond')}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base text-[var(--color-text-secondary)] md:text-lg">
              {t('headerSubtitle')}
            </p>
          </Reveal>
        </div>
      </section>

      {/* "Kein SaaS. Kein Beratungsprojekt." — navy dark */}
      <section className="bg-[#0F172A] py-20">
        <div className="container-wide">
          <LabelReveal className="font-mono text-[11px] uppercase tracking-widest text-coral">
            {t('wasLabel')}
          </LabelReveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display text-[32px] font-bold leading-tight text-white md:text-[40px]">
              {t('wasTitle')}
            </h2>
            <p className="mt-8 max-w-3xl whitespace-pre-line text-base leading-relaxed text-white/70">
              {t('wasBody')}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {wasNot.map((item, i) => (
              <Reveal key={item.title} delay={0.2 + i * 0.1}>
                <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                  <p className="font-display text-base font-semibold text-white">
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Methodik — steps alternating white/gray */}
      <section className="bg-white py-20">
        <div className="container-wide">
          <LabelReveal className="font-mono text-[11px] uppercase tracking-widest text-coral">
            {t('methodikLabel')}
          </LabelReveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display text-[32px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[40px]">
              {t('methodikTitle')}
            </h2>
            <p className="mt-3 text-base text-[var(--color-text-secondary)]">
              {t('methodikSubline')}
            </p>
          </Reveal>

          <ol className="mt-12 space-y-4">
            {steps.map((step, i) => (
              <Reveal key={step.num} delay={0.1 + i * 0.1}>
                <li
                  className={`grid gap-4 rounded-xl border border-[var(--color-border-primary)] p-6 md:grid-cols-[80px_1fr] md:gap-8 md:p-8 ${
                    i % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFB]'
                  }`}
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
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Prinzipien — navy dark */}
      <section className="bg-[#0F172A] py-20">
        <div className="container-wide">
          <LabelReveal className="font-mono text-[11px] uppercase tracking-widest text-coral">
            {t('prinzipienLabel')}
          </LabelReveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display text-[32px] font-bold leading-tight text-white md:text-[40px]">
              {t('prinzipienTitle')}
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {principles.map(({ Icon, title, body }, i) => (
              <Reveal key={title} delay={0.2 + i * 0.1}>
                <div className="rounded-xl border border-white/10 bg-white/5 p-8">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-coral">
                    <Icon size={24} stroke={1.75} />
                  </div>
                  <p className="mt-5 font-display text-lg font-semibold text-white">
                    {title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section className="relative overflow-hidden bg-navy py-32">
        <WaveBackground className="absolute inset-0 h-full w-full opacity-50" />
        <div className="container-wide relative z-10 text-center">
          <Reveal>
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
          </Reveal>
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
