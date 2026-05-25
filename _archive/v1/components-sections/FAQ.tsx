'use client'

import { useState } from 'react'
import { clsx } from 'clsx'

export interface FAQItem {
  q: string
  a: string
}

interface FAQProps {
  items: FAQItem[]
}

export function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <ul className="divide-y divide-[var(--color-border-primary)] border-y border-[var(--color-border-primary)]">
      {items.map((item, i) => {
        const open = openIndex === i
        const id = `faq-panel-${i}`
        return (
          <li key={item.q}>
            <button
              type="button"
              aria-expanded={open}
              aria-controls={id}
              onClick={() => setOpenIndex(open ? null : i)}
              className="flex w-full items-center justify-between gap-6 py-5 text-left transition-colors hover:text-coral"
            >
              <span className="font-display text-base font-semibold text-[var(--color-text-primary)]">
                {item.q}
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                className={clsx(
                  'flex-shrink-0 text-[var(--color-text-tertiary)] transition-transform',
                  open && 'rotate-180 text-coral',
                )}
                aria-hidden="true"
              >
                <path d="M5 7.5l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div
              id={id}
              role="region"
              hidden={!open}
              className="pb-5 text-sm leading-relaxed text-[var(--color-text-secondary)]"
            >
              {item.a}
            </div>
          </li>
        )
      })}
    </ul>
  )
}
