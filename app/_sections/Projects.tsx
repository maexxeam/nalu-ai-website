'use client'

import { motion } from 'framer-motion'
import { DashboardMockup } from '@/components/ui/DashboardMockup'
import { ForecastingMockup } from '@/components/ui/ForecastingMockup'
import { SCMMockup } from '@/components/ui/SCMMockup'
import { KundenMockup } from '@/components/ui/KundenMockup'
import { CountUp } from '@/components/ui/CountUp'
import type {
  HeroStat,
  MockupType,
  ProjectBlock,
  ProjectItem,
  ProjectShowcase,
  ProjectsContent,
} from '../_content/types'

const MOCKUPS: Record<MockupType, React.ComponentType> = {
  dashboard: DashboardMockup,
  forecasting: ForecastingMockup,
  scm: SCMMockup,
  kunden: KundenMockup,
}

export function Projects({ content }: { content: ProjectsContent }) {
  return (
    <div id="projekte" className="scroll-mt-20">
      {content.projects.map((project, i) => (
        <ProjectSection
          key={project.id}
          project={project}
          background={i % 2 === 0 ? 'dark' : 'darker'}
        />
      ))}
    </div>
  )
}

function ProjectSection({
  project,
  background,
}: {
  project: ProjectShowcase
  background: 'dark' | 'darker'
}) {
  const bgClass = background === 'dark' ? 'bg-navy' : 'bg-[#0B1426]'

  return (
    <section
      id={project.id}
      className={`relative scroll-mt-20 overflow-hidden ${bgClass} px-6 py-24 md:py-32`}
    >
      <div className="mx-auto max-w-5xl">
        <ProjectHeader project={project} />

        <div className="mt-10 max-w-3xl space-y-4">
          {project.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
              className="text-[15px] leading-relaxed text-white/75 md:text-[17px]"
            >
              {p}
            </motion.p>
          ))}
        </div>

        <div className="mt-16 space-y-16 md:space-y-20">
          {project.blocks.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectHeader({ project }: { project: ProjectShowcase }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-[11px] uppercase tracking-widest text-white/40">
          PROJEKT · {project.number}
        </span>
      </div>
      <h2 className="mt-4 font-display text-[36px] font-bold leading-tight text-white md:text-[52px]">
        {project.title}
      </h2>
      <p className="mt-3 font-mono text-[13px] uppercase tracking-widest text-ocean-light">
        {project.subtitle}
      </p>
      <p className="mt-2 font-mono text-[11px] uppercase tracking-widest text-white/40">
        {project.attribution}
      </p>
    </motion.header>
  )
}

function Block({ block }: { block: ProjectBlock }) {
  switch (block.type) {
    case 'mockup':
      return <MockupBlock block={block} />
    case 'modules':
      return <ItemsGrid heading={block.heading} items={block.items} />
    case 'challenges':
      return <ItemsGrid heading={block.heading} items={block.items} />
    case 'highlights':
      return <ItemsGrid heading={block.heading} items={block.items} />
    case 'quote':
      return (
        <Quote label={block.label} quote={block.quote} author={block.author} />
      )
    case 'stats':
      return <StatsBlock heading={block.heading} items={block.items} />
    case 'stack':
      return <StackBlock heading={block.heading} items={block.items} />
    case 'beforeAfter':
      return (
        <BeforeAfter
          vorherLabel={block.vorherLabel}
          vorher={block.vorher}
          nachherLabel={block.nachherLabel}
          nachher={block.nachher}
        />
      )
  }
}

function MockupBlock({
  block,
}: {
  block: Extract<ProjectBlock, { type: 'mockup' }>
}) {
  const Mockup = MOCKUPS[block.mockup]
  const transform =
    block.rotate === 'left'
      ? 'perspective(1400px) rotateY(-4deg) rotateX(2deg)'
      : block.rotate === 'right'
        ? 'perspective(1400px) rotateY(4deg) rotateX(2deg)'
        : undefined

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="transform-gpu" style={transform ? { transform } : undefined}>
        <Mockup />
      </div>
      {block.caption && (
        <p className="mt-4 text-center font-mono text-[11px] text-white/40">
          {block.caption}
        </p>
      )}
    </motion.div>
  )
}

function ItemsGrid({ heading, items }: { heading: string; items: ProjectItem[] }) {
  return (
    <div>
      <SubsectionLabel>{heading}</SubsectionLabel>
      <div className="mt-5 grid gap-3 md:grid-cols-2">
        {items.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4, delay: i * 0.04, ease: 'easeOut' }}
            className="group rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 transition-colors hover:border-white/15 hover:bg-white/[0.04]"
          >
            <p className="font-display text-[15px] font-semibold text-white">
              {item.name}
            </p>
            <p className="mt-2 text-[13.5px] leading-relaxed text-white/65">
              {item.body}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function Quote({
  label,
  quote,
  author,
}: {
  label: string
  quote: string
  author: string
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="rounded-2xl border-l-2 border-coral bg-white/[0.02] p-8 md:p-10"
    >
      <p className="font-mono text-[11px] uppercase tracking-widest text-coral">
        {label}
      </p>
      <blockquote className="mt-5 font-display text-[20px] font-medium leading-snug text-white/85 md:text-[26px]">
        {quote}
      </blockquote>
      <figcaption className="mt-5 font-mono text-[12px] text-white/55">
        {author}
      </figcaption>
    </motion.figure>
  )
}

function StatsBlock({
  heading,
  items,
}: {
  heading: string
  items: HeroStat[]
}) {
  return (
    <div>
      <SubsectionLabel>{heading}</SubsectionLabel>
      <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-4">
        {items.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: i * 0.08, ease: 'easeOut' }}
          >
            <p className="font-display text-[36px] font-bold leading-none text-coral md:text-[44px]">
              <CountUp value={stat.value} />
            </p>
            <p className="mt-2 text-[13px] text-white/60">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function StackBlock({ heading, items }: { heading: string; items: string[] }) {
  return (
    <div>
      <SubsectionLabel>{heading}</SubsectionLabel>
      <div className="mt-5 flex flex-wrap gap-2">
        {items.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-[12px] text-white/75 transition-colors hover:border-coral/40 hover:text-coral"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

function BeforeAfter({
  vorherLabel,
  vorher,
  nachherLabel,
  nachher,
}: {
  vorherLabel: string
  vorher: string
  nachherLabel: string
  nachher: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="grid gap-3 md:grid-cols-2"
    >
      <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
        <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">
          {vorherLabel}
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-white/70">{vorher}</p>
      </div>
      <div className="rounded-xl border border-coral/25 bg-coral/[0.05] p-6">
        <p className="font-mono text-[10px] uppercase tracking-widest text-coral">
          {nachherLabel}
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-white/85">{nachher}</p>
      </div>
    </motion.div>
  )
}

function SubsectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-widest text-white/40">
      {children}
    </p>
  )
}
