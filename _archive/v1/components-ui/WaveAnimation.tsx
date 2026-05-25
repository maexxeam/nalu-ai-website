'use client'

import { motion } from 'framer-motion'
import { clsx } from 'clsx'

const wavePrimary = [
  'M0,100 C240,140 480,60 720,100 C960,140 1200,60 1440,100 L1440,200 L0,200 Z',
  'M0,100 C240,60 480,140 720,100 C960,60 1200,140 1440,100 L1440,200 L0,200 Z',
  'M0,100 C240,140 480,60 720,100 C960,140 1200,60 1440,100 L1440,200 L0,200 Z',
]

const waveSecondary = [
  'M0,120 C240,80 480,160 720,120 C960,80 1200,160 1440,120 L1440,200 L0,200 Z',
  'M0,120 C240,160 480,80 720,120 C960,160 1200,80 1440,120 L1440,200 L0,200 Z',
  'M0,120 C240,80 480,160 720,120 C960,80 1200,160 1440,120 L1440,200 L0,200 Z',
]

interface WaveAnimationProps {
  className?: string
  color?: string
  opacity?: number
  flip?: boolean
}

export function WaveAnimation({
  className,
  color = '#0A4F7F',
  opacity = 0.08,
  flip = false,
}: WaveAnimationProps) {
  return (
    <svg
      className={clsx('pointer-events-none', flip && 'rotate-180', className)}
      viewBox="0 0 1440 200"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <motion.path
        animate={{ d: wavePrimary }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        fill={color}
        fillOpacity={opacity}
      />
      <motion.path
        animate={{ d: waveSecondary }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        fill={color}
        fillOpacity={opacity * 0.6}
      />
    </svg>
  )
}
