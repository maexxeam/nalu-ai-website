'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

function parse(s: string) {
  const suffix = s.endsWith('+') ? '+' : ''
  const num = parseInt(s.replace(/\./g, '').replace(/\+/g, ''), 10)
  return { num, suffix }
}

export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [display, setDisplay] = useState('0')
  const { num, suffix } = parse(value)

  useEffect(() => {
    if (!isInView) return
    const start = Date.now()
    const duration = 1500
    let raf: number
    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(eased * num)
      setDisplay(current.toLocaleString('de-DE') + suffix)
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [isInView, num, suffix])

  return <span ref={ref} className={className}>{display}</span>
}
