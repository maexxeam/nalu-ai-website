'use client'

import { motion } from 'framer-motion'
import { WaveBackground } from '@/components/ui/WaveBackground'
import type { HeroContent } from '../_content/types'

export function Hero({ content }: { content: HeroContent }) {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-navy px-6 text-center"
    >
      <WaveBackground className="absolute inset-0 h-full w-full" />

      <div className="relative z-10 mx-auto max-w-4xl pt-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-block rounded-full border border-coral/40 bg-coral/10 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-coral"
        >
          {content.eyebrow}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="mt-8 font-display text-[52px] font-bold leading-[1.05] tracking-tight text-white md:text-[72px] xl:text-[88px]"
        >
          {content.titleLine1}
          <br />
          {content.titleLine2}
        </motion.h1>
      </div>

      <motion.a
        href="#projekte"
        aria-label={content.scrollAria}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-white/40 transition-colors hover:text-coral"
      >
        <motion.svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path d="M6 9l6 6 6-6" />
        </motion.svg>
      </motion.a>
    </section>
  )
}
