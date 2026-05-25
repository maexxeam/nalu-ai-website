'use client'

import { motion } from 'framer-motion'
import { Logo } from '@/components/ui/Logo'
import type { FooterContent } from '../_content/types'

export function Footer({ content }: { content: FooterContent }) {
  return (
    <footer id="footer" className="scroll-mt-20 bg-navy px-6 pb-16 pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mx-auto flex max-w-4xl flex-col gap-10 border-t border-white/10 pt-12"
      >
        <Logo variant="reversed" />

        <a
          href={`mailto:${content.email}`}
          className="font-display text-[24px] font-medium text-coral transition-opacity hover:opacity-80 md:text-[32px]"
        >
          {content.email}
        </a>

        <p className="font-display text-[15px] text-white/55 md:text-[17px]">
          {content.tagline}
        </p>

        <p className="font-mono text-[11px] text-white/35">
          {content.copyright}
        </p>
      </motion.div>
    </footer>
  )
}
