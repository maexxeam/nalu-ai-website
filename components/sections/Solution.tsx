import { ChartLineIcon, PackageIcon, BrainIcon } from '@/components/ui/Icons'
import { Reveal } from '@/components/ui/Reveal'

const pillars = [
  {
    Icon: BrainIcon,
    title: 'Forecasting',
    body: 'ML-Modelle, die Ihre SAP-Daten verstehen — nicht generische Templates.',
  },
  {
    Icon: ChartLineIcon,
    title: 'Analytics',
    body: 'Absatz, Umsatz, ABC/XYZ — alles in einem Dashboard.',
  },
  {
    Icon: PackageIcon,
    title: 'SCM',
    body: 'Safety Stock, Reorder Points, Bestandsabdeckung — automatisch.',
  },
]

const history = [50, 55, 48, 60, 58, 65, 62, 70, 68, 72, 75, 78]
const forecast = [78, 80, 82, 85, 88, 90, 92, 95]
const upper = [78, 84, 88, 92, 96, 100, 105, 110]
const lower = [78, 76, 76, 78, 80, 80, 79, 80]

const X0 = 60
const Y0 = 30
const W = 1040
const H = 220
const TOTAL_WEEKS = 19

const xAt = (w: number) => X0 + (w / TOTAL_WEEKS) * W
const yAt = (v: number) => Y0 + H - ((v - 40) / 70) * H

const historyPath =
  'M ' +
  history.map((v, i) => `${xAt(i)},${yAt(v)}`).join(' L ')

const forecastPath =
  'M ' +
  forecast.map((v, i) => `${xAt(11 + i)},${yAt(v)}`).join(' L ')

const bandPath =
  'M ' +
  upper.map((v, i) => `${xAt(11 + i)},${yAt(v)}`).join(' L ') +
  ' L ' +
  lower
    .map((v, i) => `${xAt(11 + lower.length - 1 - i)},${yAt(lower[lower.length - 1 - i])}`)
    .join(' L ') +
  ' Z'

const todayX = xAt(11)

function ForecastChart() {
  return (
    <svg
      viewBox={`0 0 ${X0 + W + 20} ${Y0 + H + 50}`}
      className="w-full"
      role="img"
      aria-label="Forecast Chart Mockup"
    >
      {[40, 60, 80, 100].map((v) => (
        <g key={v}>
          <line
            x1={X0}
            x2={X0 + W}
            y1={yAt(v)}
            y2={yAt(v)}
            stroke="#E2E8F0"
            strokeDasharray="2 4"
          />
          <text
            x={X0 - 12}
            y={yAt(v) + 4}
            fontSize="11"
            fontFamily="var(--font-jetbrains), monospace"
            fill="#94A3B8"
            textAnchor="end"
          >
            {v}
          </text>
        </g>
      ))}

      <line
        x1={todayX}
        x2={todayX}
        y1={Y0}
        y2={Y0 + H}
        stroke="#FF6B4A"
        strokeWidth="1"
        strokeDasharray="3 3"
      />
      <text
        x={todayX + 6}
        y={Y0 + 14}
        fontSize="10"
        fontFamily="var(--font-jetbrains), monospace"
        fill="#FF6B4A"
        letterSpacing="0.1em"
      >
        HEUTE
      </text>

      <path d={bandPath} fill="#0A4F7F" fillOpacity="0.10" />

      <path d={historyPath} stroke="#0A4F7F" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {history.map((v, i) => (
        <circle key={i} cx={xAt(i)} cy={yAt(v)} r="3" fill="#0A4F7F" />
      ))}

      <path
        d={forecastPath}
        stroke="#4ABFB0"
        strokeWidth="2.5"
        strokeDasharray="5 4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {forecast.map((v, i) => (
        <circle key={i} cx={xAt(11 + i)} cy={yAt(v)} r="3" fill="#4ABFB0" />
      ))}

      {[0, 4, 8, 12, 16, 19].map((w) => (
        <text
          key={w}
          x={xAt(w)}
          y={Y0 + H + 20}
          fontSize="11"
          fontFamily="var(--font-jetbrains), monospace"
          fill="#94A3B8"
          textAnchor="middle"
        >
          KW {w + 10}
        </text>
      ))}
    </svg>
  )
}

interface KpiProps {
  label: string
  value: string
  delta: string
  positive?: boolean
}

function Kpi({ label, value, delta, positive = true }: KpiProps) {
  return (
    <div className="rounded-lg border border-[var(--color-border-primary)] bg-white p-4">
      <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-text-tertiary)]">
        {label}
      </p>
      <p className="mt-2 font-display text-2xl font-semibold text-[var(--color-text-primary)]">
        {value}
      </p>
      <p
        className={
          'mt-1 font-mono text-[11px] ' +
          (positive ? 'text-[#30A46C]' : 'text-[#E5484D]')
        }
      >
        {delta}
      </p>
    </div>
  )
}

function DashboardMockup() {
  return (
    <div className="relative mx-auto max-w-6xl">
      <div className="overflow-hidden rounded-2xl border border-[var(--color-border-primary)] bg-white shadow-brand-lg">
        <div className="flex items-center gap-2 border-b border-[var(--color-border-primary)] bg-[var(--color-bg-tertiary)] px-5 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B4A]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#F7B731]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#4ABFB0]" />
          <span className="ml-3 font-mono text-[11px] uppercase tracking-wider text-[var(--color-text-tertiary)]">
            nalu-ai · forecasting · 1.2.30024
          </span>
        </div>

        <div className="p-6 md:p-8">
          <div className="flex items-end justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-text-tertiary)]">
                Übersicht
              </p>
              <h3 className="mt-1 font-display text-xl font-semibold text-[var(--color-text-primary)]">
                Demand Forecast · 8 Wochen
              </h3>
            </div>
            <div className="hidden items-center gap-2 md:flex">
              <span className="rounded-md bg-[var(--color-bg-secondary)] px-2.5 py-1 font-mono text-[11px] text-[var(--color-text-secondary)]">
                Modell · LightGBM
              </span>
              <span className="rounded-md bg-[var(--color-bg-secondary)] px-2.5 py-1 font-mono text-[11px] text-[var(--color-text-secondary)]">
                MAPE · 7.6 %
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
            <Kpi label="Forecast Accuracy" value="92.4 %" delta="+ 2.1 %" />
            <Kpi label="Service Level" value="98.1 %" delta="+ 0.4 %" />
            <Kpi label="Stock Coverage" value="38 d" delta="− 3 d" positive={false} />
            <Kpi label="Active Forecasts" value="894" delta="+ 12" />
          </div>

          <div className="mt-6 rounded-xl border border-[var(--color-border-primary)] bg-white p-4">
            <ForecastChart />
            <div className="mt-3 flex flex-wrap items-center gap-4 border-t border-[var(--color-border-primary)] pt-3">
              <span className="flex items-center gap-2 text-xs text-[var(--color-text-secondary)]">
                <span className="h-[2px] w-6 bg-ocean" />
                Historie
              </span>
              <span className="flex items-center gap-2 text-xs text-[var(--color-text-secondary)]">
                <span className="h-[2px] w-6 border-t-2 border-dashed border-seaglass" />
                Forecast
              </span>
              <span className="flex items-center gap-2 text-xs text-[var(--color-text-secondary)]">
                <span className="h-3 w-6 rounded-sm bg-ocean/10" />
                95 % Konfidenz
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Solution() {
  return (
    <section className="bg-horizon py-24 md:py-32">
      <div className="container-wide">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-ocean">
            Die Lösung
          </p>
          <h2 className="mt-4 font-display text-[32px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[40px]">
            Demand Intelligence.
            <br />
            On your terms.
          </h2>
          <p className="mt-6 text-base text-[var(--color-text-secondary)] md:text-lg">
            Eine Plattform für Forecasting, Analytics und Supply Chain — auf
            Ihrem Server, in Ihrer Sprache, für Ihre Daten.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-16">
          <DashboardMockup />
        </Reveal>

        <div className="mx-auto mt-20 grid max-w-5xl gap-8 md:grid-cols-3">
          {pillars.map(({ Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 0.1}>
              <div className="text-center md:text-left">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-ocean/10 text-ocean">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-[var(--color-text-primary)]">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
