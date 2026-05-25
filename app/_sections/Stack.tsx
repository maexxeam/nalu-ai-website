'use client'

import { motion } from 'framer-motion'
import type { StackContent, StackGroup } from '../_content/types'

export function Stack({ content }: { content: StackContent }) {
  return (
    <section id="stack" className="scroll-mt-20 bg-navy px-6 py-28 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionLabel>{content.sectionLabel}</SectionLabel>

        <div className="mt-12 flex flex-col gap-8">
          {content.groups.map((group, i) => (
            <StackRow key={group.label} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StackRow({ group, index }: { group: StackGroup; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
      className="grid gap-3 border-b border-white/[0.06] pb-6 md:grid-cols-[220px_1fr] md:gap-8"
    >
      <p className="font-mono text-[11px] uppercase tracking-widest text-white/40 md:pt-1.5">
        {group.label}
      </p>
      <div className="flex flex-wrap gap-2">
        {group.items.map((tech) => (
          <span
            key={tech}
            className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-[12.5px] text-white/80 transition-colors hover:border-coral/40 hover:text-coral"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="font-display text-[32px] font-bold leading-tight tracking-tight text-white md:text-[44px]"
    >
      {children}
    </motion.h2>
  )
}
