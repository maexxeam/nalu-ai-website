'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Reveal, LabelReveal } from '@/components/ui/Reveal'
import { DashboardMockup } from '@/components/ui/DashboardMockup'
import { ForecastingMockup } from '@/components/ui/ForecastingMockup'
import { MockSteuerungstool } from '@/components/ui/MockSteuerungstool'
import { KundenMockup } from '@/components/ui/KundenMockup'
import { MockGenAIPanel } from '@/components/ui/MockGenAIPanel'
import { SCMMockup } from '@/components/ui/SCMMockup'

const SCREENS = [
  { key: 'tabUebersicht', Comp: DashboardMockup },
  { key: 'tabForecast', Comp: ForecastingMockup },
  { key: 'tabSteuerung', Comp: MockSteuerungstool },
  { key: 'tabKunden', Comp: KundenMockup },
  { key: 'tabKi', Comp: MockGenAIPanel },
  { key: 'tabAlerts', Comp: SCMMockup },
] as const

const INTERVAL = 4500

export function ProductTour() {
  const t = useTranslations('Tour')
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActive((v) => (v + 1) % SCREENS.length)
    }, INTERVAL)
    return () => clearInterval(id)
  }, [active])

  const ActiveMockup = SCREENS[active].Comp

  return (
    <section className="bg-white py-24">
      <div className="container-wide">
        <LabelReveal className="font-mono text-[11px] uppercase tracking-widest text-coral">
          {t('sectionLabel')}
        </LabelReveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 font-display text-[32px] font-bold leading-tight text-[var(--color-text-primary)] md:text-[40px]">
            {t('headline')}
          </h2>
          <p className="mt-3 max-w-2xl text-base text-[var(--color-text-secondary)]">
            {t('subline')}
          </p>
        </Reveal>

        {/* Tabs */}
        <div className="mt-8 flex flex-wrap gap-2">
          {SCREENS.map((s, idx) => (
            <button
              key={s.key}
              type="button"
              onClick={() => setActive(idx)}
              className={
                idx === active
                  ? 'rounded-full bg-coral px-4 py-1.5 font-mono text-xs font-semibold text-white'
                  : 'rounded-full border border-[var(--color-border-primary)] bg-white px-4 py-1.5 font-mono text-xs text-[var(--color-text-secondary)] transition-colors hover:border-coral/40 hover:text-[var(--color-text-primary)]'
              }
            >
              {t(s.key)}
            </button>
          ))}
        </div>

        {/* Auto-progress bar */}
        <div className="mt-4 h-0.5 w-full overflow-hidden rounded-full bg-[var(--color-border-primary)]">
          <motion.div
            key={active}
            className="h-full bg-coral"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: INTERVAL / 1000, ease: 'linear' }}
          />
        </div>

        {/* Stage */}
        <div className="relative mx-auto mt-6 min-h-[460px] max-w-3xl md:min-h-[520px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <ActiveMockup />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
