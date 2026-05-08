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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Leistungen' })
  return { title: t('metaTitle'), description: t('metaDescription') }
}

const STACK = [
  'Python', 'FastAPI', 'LightGBM', 'PyTorch/TFT',
  'DuckDB', 'PostgreSQL', 'React', 'TypeScript',
  'Docker', 'SAP R/3', 'MLflow', 'Celery',
  'Nginx', 'Redis', 'Ollama', 'SHAP',
]

function LeistungenBody() {
  const t = useTranslations('Leistungen')

  const cards = [
    { Icon: IconDatabase, title: t('card1Title'), body: t('card1Body') },
    { Icon: IconBrain, title: t('card2Title'), body: t('card2Body') },
    { Icon: IconCode, title: t('card3Title'), body: t('card3Body') },
    { Icon: IconServer, title: t('card4Title'), body: t('card4Body') },
  ]

  const refPills = [t('refPill1'), t('refPill2'), t('refPill3'), t('refPill4')]

  return (
    <>
      {/* Section 1: Header */}
      <section className="bg-white pt-32 pb-20">
        <div className="container-wide">
          <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--color-text-tertiary)]">
            {t('headerLabel')}
          </p>
          <h1 className="mt-4 font-display text-[40px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[48px]">
            {t('headerTitle')}
          </h1>
          <p className="mt-6 max-w-2xl text-base text-[var(--color-text-secondary)] md:text-lg">
            {t('headerSubtitle')}
          </p>
        </div>
      </section>

      {/* Section 2: Hauptprodukt */}
      <section className="bg-[#F8FAFB] py-20">
        <div className="container-wide">
          <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--color-text-tertiary)]">
            {t('hauptLabel')}
          </p>

          <div className="mt-6 rounded-2xl border border-[var(--color-border-primary)] bg-white p-10 md:p-14">
            <p className="font-display text-3xl font-bold text-[var(--color-text-primary)] md:text-4xl">
              {t('hauptName')}
            </p>
            <p className="mt-2 font-mono text-sm uppercase tracking-widest text-coral">
              {t('hauptTagline')}
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--color-text-secondary)]">
              {t('hauptBody')}
            </p>
            <a
              href="https://naluai.com"
              className="mt-8 inline-block font-display text-base font-semibold text-coral hover:underline"
            >
              → {t('hauptLink')}
            </a>
          </div>
        </div>
      </section>

      {/* Section 3: Referenzprojekt */}
      <section className="bg-white py-20">
        <div className="container-wide">
          <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--color-text-tertiary)]">
            {t('refLabel')}
          </p>
          <h2 className="mt-4 font-display text-[32px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[40px]">
            {t('refTitle')}
          </h2>

          <div className="mt-12 grid gap-10 md:grid-cols-2 md:items-stretch">
            <div>
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
              <p className="mt-8 font-mono text-xs text-[var(--color-text-tertiary)]">
                {t('refStack')}
              </p>
            </div>

            <div className="rounded-2xl bg-navy p-10 text-white">
              <blockquote className="font-display text-xl font-semibold leading-snug md:text-2xl">
                {t('refQuote')}
              </blockquote>
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="font-semibold">{t('refAuthor')}</p>
                <p className="mt-1 text-sm text-white/60">{t('refRole')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Weitere Leistungen */}
      <section className="bg-[#F8FAFB] py-20">
        <div className="container-wide">
          <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--color-text-tertiary)]">
            {t('weiteresLabel')}
          </p>
          <h2 className="mt-4 font-display text-[32px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[40px]">
            {t('weiteresTitle')}
          </h2>
          <p className="mt-3 text-base text-[var(--color-text-secondary)]">
            {t('weiteresSubline')}
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {cards.map(({ Icon, title, body }) => (
              <div
                key={title}
                className="group rounded-xl border border-[var(--color-border-primary)] bg-white p-6"
              >
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
            ))}
          </div>

          <p className="mt-8 text-sm italic text-[var(--color-text-tertiary)]">
            {t('preisNote')}
          </p>
        </div>
      </section>

      {/* Section 5: Stack */}
      <section className="bg-white py-20">
        <div className="container-wide">
          <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--color-text-tertiary)]">
            {t('stackLabel')}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {STACK.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[var(--color-border-primary)] px-4 py-1.5 font-mono text-xs text-[var(--color-text-secondary)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Kontakt */}
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
          <p className="mt-4 text-sm text-white/40">{t('kontaktLinkedin')}</p>
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
