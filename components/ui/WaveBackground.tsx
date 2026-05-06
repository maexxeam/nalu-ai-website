'use client'

import { useRef } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from 'framer-motion'

const wavePaths = {
  a: [
    'M0,150 C240,200 480,100 720,150 C960,200 1200,100 1440,150 L1440,300 L0,300 Z',
    'M0,150 C240,100 480,200 720,150 C960,100 1200,200 1440,150 L1440,300 L0,300 Z',
    'M0,150 C240,200 480,100 720,150 C960,200 1200,100 1440,150 L1440,300 L0,300 Z',
  ],
  b: [
    'M0,170 C200,130 420,210 640,170 C860,130 1080,210 1300,170 C1380,150 1440,170 1440,170 L1440,300 L0,300 Z',
    'M0,170 C200,210 420,130 640,170 C860,210 1080,130 1300,170 C1380,190 1440,170 1440,170 L1440,300 L0,300 Z',
    'M0,170 C200,130 420,210 640,170 C860,130 1080,210 1300,170 C1380,150 1440,170 1440,170 L1440,300 L0,300 Z',
  ],
} as const

interface Layer {
  pathSet: keyof typeof wavePaths
  topPercent: number
  heightPercent: number
  opacity: number
  duration: number
  parallaxRange: number
  color: string
}

const layers: Layer[] = [
  {
    pathSet: 'a',
    topPercent: 28,
    heightPercent: 50,
    opacity: 0.06,
    duration: 17,
    parallaxRange: 30,
    color: '#1E7AC2',
  },
  {
    pathSet: 'b',
    topPercent: 42,
    heightPercent: 50,
    opacity: 0.10,
    duration: 13,
    parallaxRange: 70,
    color: '#1E7AC2',
  },
  {
    pathSet: 'a',
    topPercent: 56,
    heightPercent: 50,
    opacity: 0.16,
    duration: 10,
    parallaxRange: 130,
    color: '#1E7AC2',
  },
  {
    pathSet: 'b',
    topPercent: 70,
    heightPercent: 50,
    opacity: 0.22,
    duration: 8,
    parallaxRange: 200,
    color: '#1E7AC2',
  },
]

interface WaveBackgroundProps {
  className?: string
  /** Top fade overlay so the headline area stays clean */
  fadeTop?: boolean
}

export function WaveBackground({
  className,
  fadeTop = true,
}: WaveBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  return (
    <div ref={ref} className={className} aria-hidden="true">
      {layers.map((layer, i) => (
        <WaveLayer key={i} layer={layer} progress={scrollYProgress} />
      ))}
      {fadeTop && (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-navy via-navy/60 to-transparent" />
      )}
    </div>
  )
}

function WaveLayer({
  layer,
  progress,
}: {
  layer: Layer
  progress: MotionValue<number>
}) {
  const reduce = useReducedMotion()
  const y = useTransform(progress, [0, 1], [0, reduce ? 0 : layer.parallaxRange])
  const paths = wavePaths[layer.pathSet]

  return (
    <motion.svg
      viewBox="0 0 1440 300"
      preserveAspectRatio="none"
      className="absolute inset-x-0 w-full"
      style={{
        top: `${layer.topPercent}%`,
        height: `${layer.heightPercent}%`,
        y,
      }}
    >
      <motion.path
        animate={
          reduce
            ? { d: paths[0] }
            : { d: [paths[0], paths[1], paths[2]] }
        }
        transition={{
          duration: layer.duration,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        fill={layer.color}
        fillOpacity={layer.opacity}
      />
    </motion.svg>
  )
}
