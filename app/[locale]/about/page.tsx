import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import { PageHeader } from '@/components/ui/PageHeader'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { ShieldIcon, ZapIcon, UsersIcon } from '@/components/ui/Icons'

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

  const values = [
    { Icon: ShieldIcon, title: t('values.data.title'), body: t('values.data.body') },
    { Icon: ZapIcon, title: t('values.noHype.title'), body: t('values.noHype.body') },
    { Icon: UsersIcon, title: t('values.mittelstand.title'), body: t('values.mittelstand.body') },
  ]

  const stats = [
    { value: '770', label: t('stats.customers') },
    { value: '900', label: t('stats.articles') },
    { value: '450k+', label: t('stats.series') },
  ]

  return (
    <>
      <PageHeader
        eyebrow={t('headerEyebrow')}
        title={t('headerTitle')}
        subtitle={t('headerSubtitle')}
      />

      <section className="bg-white py-20 md:py-28">
        <div className="container-wide">
          <Reveal className="mx-auto max-w-3xl">
            <div className="space-y-6 text-base leading-relaxed text-[var(--color-text-primary)] md:text-lg">
              <p>{t('story1')}</p>
              <p>{t('story2')}</p>
              <p>{t('story3')}</p>
              <p>
                {t('story4Pre')}
                <code className="rounded bg-[var(--color-bg-secondary)] px-1.5 py-0.5 text-[13px]">
                  config.yaml
                </code>
                {t('story4Post')}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mx-auto mt-16 max-w-3xl">
            <div className="grid gap-6 rounded-2xl border border-[var(--color-border-primary)] bg-horizon p-8 sm:grid-cols-3">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-display text-3xl font-bold text-ocean">
                    {s.value}
                  </p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-[var(--color-text-tertiary)]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-horizon py-20 md:py-28">
        <div className="container-wide">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-ocean">
              {t('valuesEyebrow')}
            </p>
            <h2 className="mt-4 font-display text-[28px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[36px]">
              {t('valuesTitle')}
              <br />
              {t('valuesTitleSecond')}
            </h2>
          </Reveal>

          <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
            {values.map(({ Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 0.1}>
                <div className="h-full rounded-xl border border-[var(--color-border-primary)] bg-white p-8">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-ocean/10 text-ocean">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-[var(--color-text-primary)]">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="container-wide">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-[28px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[36px]">
              {t('talkTitle')}
            </h2>
            <p className="mt-4 text-base text-[var(--color-text-secondary)] md:text-lg">
              {t('talkSubtitle')}
            </p>
            <div className="mt-8">
              <Button href="/demo" size="lg">
                {t('talkCta')}
              </Button>
            </div>
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
