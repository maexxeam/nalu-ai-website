'use client'

import { motion } from 'framer-motion'
import type { NameContent } from '../_content/types'

export function Name({ content }: { content: NameContent }) {
  return (
    <section className="bg-navy px-6 pb-20 pt-4 md:pb-28 md:pt-8">
      <div className="mx-auto max-w-2xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="font-display text-[17px] font-medium text-white/75 md:text-[19px]"
        >
          Nalu{' '}
          <span className="font-mono text-[14px] text-white/45 md:text-[15px]">
            {content.pronunciation}
          </span>{' '}
          — {content.metaText}.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="mt-6 text-[14px] leading-relaxed text-white/55 md:text-[15px]"
        >
          {content.paragraph1}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="mt-4 text-[14px] leading-relaxed text-white/55 md:text-[15px]"
        >
          {content.paragraph2}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="mt-12"
        >
          <p className="font-mono text-[11px] uppercase tracking-widest text-white/45">
            {content.authorLine1}
          </p>
          <p className="mt-2 text-[12.5px] text-white/40 md:text-[13px]">
            {content.authorLine2}
          </p>
          <p className="mt-2 text-[12.5px] text-white/40 md:text-[13px]">
            {content.authorLine3}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
