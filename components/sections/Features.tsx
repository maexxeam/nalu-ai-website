import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { CheckIcon, FileTextIcon, ArrowRightIcon, SparklesIcon, UsersIcon } from '@/components/ui/Icons'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'

interface FeatureProps {
  eyebrow: string
  title: string
  body: string
  bullets: string[]
  reverse?: boolean
  visual: React.ReactNode
}

function Feature({ eyebrow, title, body, bullets, reverse, visual }: FeatureProps) {
  return (
    <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
      <Reveal className={reverse ? 'md:order-2' : ''}>
        <p className="font-display text-sm font-semibold uppercase tracking-widest text-ocean">
          {eyebrow}
        </p>
        <h3 className="mt-3 font-display text-[26px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[32px]">
          {title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-[var(--color-text-secondary)]">
          {body}
        </p>
        <ul className="mt-6 space-y-3">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3 text-sm text-[var(--color-text-primary)]">
              <CheckIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-coral" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </Reveal>
      <Reveal delay={0.1} className={reverse ? 'md:order-1' : ''}>
        {visual}
      </Reveal>
    </div>
  )
}

function ForecastingVisual() {
  const t = useTranslations('Features.forecasting')
  return (
    <div className="rounded-2xl border border-[var(--color-border-primary)] bg-white p-6 shadow-brand-md">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-text-tertiary)]">
            {t('visualEyebrow')}
          </p>
          <p className="mt-1 font-display text-base font-semibold text-[var(--color-text-primary)]">
            {t('visualTitle')}
          </p>
        </div>
        <span className="rounded-full bg-ocean/10 px-2.5 py-1 font-mono text-[11px] text-ocean">
          MAPE 6.2 %
        </span>
      </div>
      <svg viewBox="0 0 320 140" className="mt-4 w-full" aria-hidden="true">
        <path d="M0 110 L 0 80 L 40 70 L 80 75 L 120 60 L 160 50 L 200 45 L 240 35 L 280 30 L 320 25 L 320 110 Z" fill="#0A4F7F" fillOpacity="0.08" />
        <path d="M0 95 L 40 88 L 80 90 L 120 78 L 160 72" stroke="#0A4F7F" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M160 72 L 200 65 L 240 55 L 280 50 L 320 45" stroke="#FF6B4A" strokeWidth="2.5" strokeDasharray="5 4" fill="none" strokeLinecap="round" />
        <line x1="160" y1="20" x2="160" y2="120" stroke="#FF6B4A" strokeWidth="1" strokeDasharray="3 3" />
      </svg>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {['p10', 'forecast', 'p90'].map((label, i) => (
          <div key={label} className="rounded-md bg-[var(--color-bg-tertiary)] p-2 text-center">
            <p className="font-mono text-[10px] uppercase text-[var(--color-text-tertiary)]">{label}</p>
            <p className="mt-0.5 font-mono text-xs font-medium text-[var(--color-text-primary)]">
              {[42, 50, 58][i]}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

function SegmentationVisual() {
  const t = useTranslations('Features.segmentation')
  const segments = [
    { label: 'A', share: 0.62, color: '#0A4F7F', count: 142 },
    { label: 'B', share: 0.28, color: '#1E7AC2', count: 318 },
    { label: 'C', share: 0.10, color: '#94A3B8', count: 434 },
  ]
  return (
    <div className="rounded-2xl border border-[var(--color-border-primary)] bg-white p-6 shadow-brand-md">
      <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-text-tertiary)]">
        {t('visualEyebrow')}
      </p>
      <h4 className="mt-1 font-display text-base font-semibold text-[var(--color-text-primary)]">
        {t('visualTitle')}
      </h4>

      <div className="mt-5 flex h-3 w-full overflow-hidden rounded-full bg-[var(--color-bg-secondary)]">
        {segments.map((s) => (
          <div
            key={s.label}
            style={{ width: `${s.share * 100}%`, background: s.color }}
          />
        ))}
      </div>

      <div className="mt-5 space-y-3">
        {segments.map((s) => (
          <div key={s.label} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span
                className="flex h-7 w-7 items-center justify-center rounded-md font-mono text-xs font-medium text-white"
                style={{ background: s.color }}
              >
                {s.label}
              </span>
              <span className="text-sm text-[var(--color-text-primary)]">
                {t('visualArticles', { count: s.count })}
              </span>
            </div>
            <span className="font-mono text-xs text-[var(--color-text-secondary)]">
              {t('visualRevenue', { share: (s.share * 100).toFixed(0) })}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ScmVisual() {
  const t = useTranslations('Features.scm')
  const alerts = [
    { id: '4711-Salami', severity: 'critical', coverage: '4 d', label: t('alertCritical') },
    { id: '8203-Olivenöl', severity: 'warning', coverage: '11 d', label: t('alertWarning') },
    { id: '5519-Mehl 405', severity: 'info', coverage: '24 d', label: t('alertInfo') },
  ]
  const colors = {
    critical: '#E5484D',
    warning: '#F76B15',
    info: '#30A46C',
  } as const

  return (
    <div className="rounded-2xl border border-[var(--color-border-primary)] bg-white p-6 shadow-brand-md">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-text-tertiary)]">
          {t('visualEyebrow')}
        </p>
        <span className="rounded-full bg-coral/10 px-2.5 py-1 font-mono text-[11px] text-coral">
          {t('visualOpen')}
        </span>
      </div>
      <div className="mt-5 divide-y divide-[var(--color-border-primary)]">
        {alerts.map((a) => (
          <div key={a.id} className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <span
                className="h-2 w-2 rounded-full"
                style={{ background: colors[a.severity as keyof typeof colors] }}
              />
              <div>
                <p className="font-mono text-xs font-medium text-[var(--color-text-primary)]">
                  {a.id}
                </p>
                <p className="text-[11px] text-[var(--color-text-tertiary)]">
                  {a.label}
                </p>
              </div>
            </div>
            <span className="font-mono text-xs text-[var(--color-text-secondary)]">
              {a.coverage}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function SalesVisual() {
  const t = useTranslations('Features.sales')
  const customers: [string, number][] = [
    ['Müller Großhandel', 86],
    ['Bäckerei Schmidt', 74],
    ['Fleischerei Wagner', 61],
    ['Hotel Seestern', 48],
  ]
  return (
    <div className="rounded-2xl border border-[var(--color-border-primary)] bg-white p-6 shadow-brand-md">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-text-tertiary)]">
          {t('visualEyebrow')}
        </p>
        <span className="rounded-full bg-coral/10 px-2.5 py-1 font-mono text-[11px] text-coral">
          {t('visualTop')}
        </span>
      </div>
      <div className="mt-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-ocean/10 text-ocean">
          <UsersIcon className="h-5 w-5" />
        </div>
        <div>
          <p className="font-display text-base font-semibold text-[var(--color-text-primary)]">
            {t('visualReady')}
          </p>
          <p className="text-[11px] text-[var(--color-text-tertiary)]">
            {t('visualScore')}
          </p>
        </div>
      </div>
      <div className="mt-5 space-y-3 border-t border-[var(--color-border-primary)] pt-5">
        {customers.map(([name, prob]) => (
          <div key={name} className="flex items-center justify-between gap-3">
            <span className="text-xs text-[var(--color-text-primary)]">
              {name}
            </span>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-20 overflow-hidden rounded-full bg-[var(--color-bg-secondary)]">
                <div
                  className="h-full rounded-full bg-coral"
                  style={{ width: `${prob}%` }}
                />
              </div>
              <span className="font-mono text-[11px] text-[var(--color-text-secondary)]">
                {prob}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Features() {
  const t = useTranslations('Features')

  const features: FeatureProps[] = [
    {
      eyebrow: t('forecasting.eyebrow'),
      title: t('forecasting.title'),
      body: t('forecasting.body'),
      bullets: [
        t('forecasting.bullet1'),
        t('forecasting.bullet2'),
        t('forecasting.bullet3'),
        t('forecasting.bullet4'),
      ],
      visual: <ForecastingVisual />,
    },
    {
      eyebrow: t('segmentation.eyebrow'),
      title: t('segmentation.title'),
      body: t('segmentation.body'),
      bullets: [
        t('segmentation.bullet1'),
        t('segmentation.bullet2'),
        t('segmentation.bullet3'),
        t('segmentation.bullet4'),
      ],
      reverse: true,
      visual: <SegmentationVisual />,
    },
    {
      eyebrow: t('scm.eyebrow'),
      title: t('scm.title'),
      body: t('scm.body'),
      bullets: [
        t('scm.bullet1'),
        t('scm.bullet2'),
        t('scm.bullet3'),
        t('scm.bullet4'),
      ],
      visual: <ScmVisual />,
    },
    {
      eyebrow: t('sales.eyebrow'),
      title: t('sales.title'),
      body: t('sales.body'),
      bullets: [
        t('sales.bullet1'),
        t('sales.bullet2'),
        t('sales.bullet3'),
        t('sales.bullet4'),
      ],
      reverse: true,
      visual: <SalesVisual />,
    },
  ]

  return (
    <section id="produkt" className="bg-horizon py-24 md:py-32">
      <div className="container-wide">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-ocean">
            {t('eyebrow')}
          </p>
          <h2 className="mt-4 font-display text-[32px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[40px]">
            {t('title')}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[var(--color-text-secondary)]">
            {t('subtitle')}
          </p>
        </Reveal>

        <div className="mt-20 space-y-24 md:space-y-32">
          {features.map((f) => (
            <Feature key={f.eyebrow} {...f} />
          ))}
        </div>

        <Reveal delay={0.1} className="mt-24">
          <div className="overflow-hidden rounded-2xl bg-navy p-10 text-white md:p-16">
            <div className="grid items-center gap-10 md:grid-cols-[2fr_1fr]">
              <div>
                <p className="font-display text-sm font-semibold uppercase tracking-widest text-coral">
                  {t('reportsCallout.eyebrow')}
                </p>
                <h3 className="mt-3 font-display text-[28px] font-bold leading-tight text-white md:text-[36px]">
                  {t('reportsCallout.title')}
                  <br />
                  {t('reportsCallout.titleSecond')}
                </h3>
                <p className="mt-5 max-w-xl text-base text-white/70">
                  {t('reportsCallout.body')}
                </p>
                <div className="mt-8">
                  <Button href="/demo" size="lg">
                    {t('reportsCallout.cta')}
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-xl bg-white/5 p-6 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-coral/20 text-coral">
                      <FileTextIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-widest text-white/50">
                        {t('reportsCallout.cardEyebrow')}
                      </p>
                      <p className="font-display text-sm font-semibold text-white">
                        {t('reportsCallout.cardTitle')}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2 border-t border-white/10 pt-4">
                    {[
                      t('reportsCallout.line1'),
                      t('reportsCallout.line2'),
                      t('reportsCallout.line3'),
                    ].map((line) => (
                      <p key={line} className="text-xs text-white/70">
                        — {line}
                      </p>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-4">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                      {t('reportsCallout.footer')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <div className="overflow-hidden rounded-2xl bg-navy p-10 text-white md:p-16">
            <div className="grid items-center gap-10 md:grid-cols-[2fr_1fr]">
              <div>
                <p className="font-display text-sm font-semibold uppercase tracking-widest text-coral">
                  {t('askNaluCallout.eyebrow')}
                </p>
                <h3 className="mt-3 font-display text-[28px] font-bold leading-tight text-white md:text-[36px]">
                  {t('askNaluCallout.title')}
                  <br />
                  {t('askNaluCallout.titleSecond')}
                </h3>
                <p className="mt-5 max-w-xl text-base text-white/70">
                  {t('askNaluCallout.body')}
                </p>
                <div className="mt-8">
                  <Link
                    href="/pricing#agent"
                    className="inline-flex items-center gap-2 font-display text-sm font-semibold text-coral transition-colors hover:text-coral/80"
                  >
                    {t('askNaluCallout.cta')}
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-xl bg-white/5 p-6 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-coral/20 text-coral">
                      <SparklesIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-widest text-white/50">
                        {t('askNaluCallout.cardEyebrow')}
                      </p>
                      <p className="font-display text-sm font-semibold text-white">
                        {t('askNaluCallout.cardTitle')}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 space-y-3 border-t border-white/10 pt-4">
                    <p className="text-xs text-white/50">
                      {t('askNaluCallout.question')}
                    </p>
                    <p className="text-xs leading-relaxed text-white/80">
                      {t('askNaluCallout.answer')}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-4">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                      {t('askNaluCallout.footer')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
