'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'

export function KontaktForm() {
  const t = useTranslations('Kontakt')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(t('emailInvalid'))
      return
    }
    setSubmitting(true)
    try {
      const res = await fetch('/api/kontakt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })
      if (!res.ok) throw new Error('failed')
      setSuccess(true)
    } catch {
      setError(t('submitError'))
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <section className="bg-navy py-32">
        <div className="container-wide">
          <h1 className="font-display text-[40px] font-bold text-white md:text-[52px]">
            {t('headline')}
          </h1>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-wide max-w-2xl">
          <p className="text-lg text-[var(--color-text-secondary)]">{t('body')}</p>

          <a
            href={`mailto:${t('email')}`}
            className="mt-6 inline-block font-display text-[26px] font-semibold text-coral hover:underline md:text-[32px]"
          >
            {t('email')}
          </a>

          <p className="mt-3 text-sm text-[var(--color-text-tertiary)]">{t('linkedin')}</p>

          <div className="mt-16">
            <p className="font-display text-lg font-semibold text-[var(--color-text-primary)]">
              {t('formTitle')}
            </p>

            {success ? (
              <div className="mt-6 rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-secondary)] p-8">
                <p className="font-display text-xl font-bold text-[var(--color-text-primary)]">
                  {t('successTitle')}
                </p>
                <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{t('successBody')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text-primary)]">
                    {t('name')}
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1.5 w-full rounded-lg border border-[var(--color-border-primary)] px-4 py-2.5 text-sm outline-none focus:border-coral focus:ring-1 focus:ring-coral"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--color-text-primary)]">
                    {t('emailLabel')}
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1.5 w-full rounded-lg border border-[var(--color-border-primary)] px-4 py-2.5 text-sm outline-none focus:border-coral focus:ring-1 focus:ring-coral"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--color-text-primary)]">
                    {t('message')}
                  </label>
                  <textarea
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="mt-1.5 w-full resize-none rounded-lg border border-[var(--color-border-primary)] px-4 py-2.5 text-sm outline-none focus:border-coral focus:ring-1 focus:ring-coral"
                  />
                </div>

                {error && <p className="text-sm text-red-600">{error}</p>}

                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded-lg bg-navy px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-80 disabled:opacity-50"
                >
                  {submitting ? t('submitting') : t('submit')}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
