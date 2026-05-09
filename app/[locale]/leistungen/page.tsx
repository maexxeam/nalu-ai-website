import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import {
  IconDatabase,
  IconBrain,
  IconCode,
  IconServer,
} from '@tabler/icons-react'
import { WaveBackground } from '@/components/ui/WaveBackground'
import { Reveal, LabelReveal, MockupReveal } from '@/components/ui/Reveal'
import { CountUp } from '@/components/ui/CountUp'
import { KundenMockup } from '@/components/ui/KundenMockup'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Leistungen' })
  return { title: t('metaTitle'), description: t('metaDescription') }
}

function LeistungenBody() {
  const t = useTranslations('Leistungen')
  const tRef = useTranslations('Referenz')

  const cards = [
    { Icon: IconDatabase, title: t('card1Title'), body: t('card1Body') },
    { Icon: IconBrain, title: t('card2Title'), body: t('card2Body') },
    { Icon: IconCode, title: t('card3Title'), body: t('card3Body') },
    { Icon: IconServer, title: t('card4Title'), body: t('card4Body') },
  ]

  const refPills = [t('refPill1'), t('refPill2'), t('refPill3'), t('refPill4')]

  const stats = [
    { value: tRef('stat1Value'), label: tRef('stat1Label') },
    { value: tRef('stat2Value'), label: tRef('stat2Label') },
    { value: tRef('stat3Value'), label: tRef('stat3Label') },
    { value: tRef('stat4Value'), label: tRef('stat4Label') },
  ]

  return (
    <>
      {/* Section 1: Header */}
      <section className="bg-white pt-32 pb-20">
        <div className="container-wide">
          <LabelReveal className="font-mono text-[11px] uppercase tracking-widest text-coral">
            {t('headerLabel')}
          </LabelReveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 font-display text-[40px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[48px]">
              {t('headerTitle')}
            </h1>
            <p className="mt-6 max-w-2xl text-base text-[var(--color-text-secondary)] md:text-lg">
              {t('headerSubtitle')}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Section 2: Hauptprodukt — navy dark, breathing, with proof stats */}
      <section className="bg-[#0F172A] py-[120px]">
        <div className="container-wide">
          <LabelReveal className="font-mono text-[11px] uppercase tracking-widest text-coral">
            {t('hauptLabel')}
          </LabelReveal>

          <Reveal delay={0.1}>
            <p className="mt-6 font-display text-3xl font-bold text-white md:text-4xl">
              {t('hauptName')}
            </p>
            <p className="mt-2 font-mono text-sm uppercase tracking-widest text-coral">
              {t('hauptTagline')}
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70">
              {t('hauptBody')}
            </p>
            <a
              href="https://naluai.com"
              className="mt-8 inline-block font-display text-base font-semibold text-coral hover:underline"
            >
              → {t('hauptLink')}
            </a>
          </Reveal>

          {/* Proof numbers from MeatMind deployment */}
          <div className="mt-16 grid grid-cols-2 gap-8 border-t border-white/10 pt-16 md:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={0.3 + i * 0.1}>
                <div>
                  <p className="font-display text-[40px] font-bold text-coral md:text-[48px]">
                    <CountUp value={stat.value} />
                  </p>
                  <p className="mt-1 text-sm text-white/50">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: MeatMind Referenzprojekt — white, no duplicate stats */}
      <section className="bg-white py-20">
        <div className="container-wide">
          <LabelReveal className="font-mono text-[11px] uppercase tracking-widest text-coral">
            {t('refLabel')}
          </LabelReveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display text-[32px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[40px]">
              {t('refTitle')}
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-10 md:grid-cols-2 md:items-start">
            {/* Left: description + pills + stack + quote */}
            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed text-[var(--color-text-secondary)]">
                {t('refBody')}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {refPills.map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full border border-coral/40 bg-coral/5 px-3 py-1.5 text-sm font-medium text-coral"
                  >
                    {pill}
                  </span>
                ))}
              </div>
              <p className="mt-6 font-mono text-xs text-[var(--color-text-tertiary)]">
                {t('refStack')}
              </p>
              <div className="mt-8 rounded-2xl border-l-4 border-coral bg-[#F8FAFB] p-8">
                <blockquote className="font-display text-lg font-semibold leading-snug text-[var(--color-text-primary)]">
                  {t('refQuote')}
                </blockquote>
                <div className="mt-5 border-t border-[var(--color-border-primary)] pt-4">
                  <p className="font-semibold text-[var(--color-text-primary)]">{t('refAuthor')}</p>
                  <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{t('refRole')}</p>
                </div>
              </div>
            </Reveal>

            {/* Right: Kunden-Intelligenz mockup */}
            <MockupReveal delay={0.2}>
              <KundenMockup />
            </MockupReveal>
          </div>
        </div>
      </section>

      {/* Section 4: Weitere Leistungen — light gray */}
      <section className="bg-[#F8FAFB] py-20">
        <div className="container-wide">
          <LabelReveal className="font-mono text-[11px] uppercase tracking-widest text-coral">
            {t('weiteresLabel')}
          </LabelReveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display text-[32px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[40px]">
              {t('weiteresTitle')}
            </h2>
            <p className="mt-3 text-base text-[var(--color-text-secondary)]">
              {t('weiteresSubline')}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {cards.map(({ Icon, title, body }, i) => (
              <Reveal key={title} delay={0.2 + i * 0.1}>
                <div className="group rounded-xl border border-[var(--color-border-primary)] bg-white p-6">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--color-bg-secondary)] text-coral transition-colors group-hover:bg-coral/10">
                    <Icon size={22} stroke={1.75} />
                  </div>
                  <p className="mt-5 font-display text-base font-semibold text-[var(--color-text-primary)]">
                    {title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-8 text-sm italic text-[var(--color-text-tertiary)]">
            {t('preisNote')}
          </p>
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
            <p className="mt-4 text-sm text-white/40">{t('kontaktLinkedin')}</p>
            <p className="mx-auto mt-10 max-w-md font-mono text-xs text-white/40">
              {t('kontaktInvestment')}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default async function LeistungenPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  return <LeistungenBody />
}
