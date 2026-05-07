'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslations } from 'next-intl'
import { clsx } from 'clsx'
import { Button } from '@/components/ui/Button'
import { CheckIcon } from '@/components/ui/Icons'

type FormData = {
  name: string
  email: string
  company: string
  position?: string
  articles: string
  erp: string
  challenge?: string
  consent: boolean
}

declare global {
  interface Window {
    plausible?: (
      event: string,
      opts?: { props?: Record<string, string> },
    ) => void
  }
}

const labelClasses =
  'block font-display text-sm font-medium text-[var(--color-text-primary)]'

const inputClasses =
  'mt-2 w-full rounded-lg border border-[var(--color-border-primary)] bg-white px-4 py-3 font-sans text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)] transition-colors focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/20'

const errorClasses = 'mt-1.5 font-mono text-[11px] text-[#E5484D]'

export function DemoForm() {
  const t = useTranslations('DemoForm')
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>()
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const articleOptions = [
    { value: '', label: t('articlesPlaceholder') },
    { value: '<100', label: t('articleLt100') },
    { value: '100-500', label: t('article100to500') },
    { value: '500-2000', label: t('article500to2000') },
    { value: '2000+', label: t('articleGt2000') },
  ]

  const erpOptions = [
    { value: '', label: t('erpPlaceholder') },
    { value: 'sap-r3', label: t('erpSapR3') },
    { value: 'sap-s4', label: t('erpSapS4') },
    { value: 'dynamics', label: t('erpDynamics') },
    { value: 'other', label: t('erpOther') },
    { value: 'none', label: t('erpNone') },
  ]

  const onSubmit = async (data: FormData) => {
    setSubmitError(null)
    try {
      const res = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const payload = await res.json().catch(() => null)
        throw new Error(payload?.error ?? 'Request failed')
      }
      window.plausible?.('Demo Request', { props: { erp: data.erp } })
      setSubmitted(true)
    } catch (e) {
      setSubmitError(t('submitError'))
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border-l-4 border-seaglass bg-horizon p-8 md:p-10">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-seaglass/15 text-coral">
          <CheckIcon className="h-6 w-6" />
        </div>
        <h3 className="mt-5 font-display text-2xl font-semibold text-[var(--color-text-primary)]">
          {t('successTitle')}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
          {t('successPre')}
          <a href="/blog" className="text-ocean underline">
            {t('successLink')}
          </a>
          {t('successPost')}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClasses}>
            {t('name')} <span className="text-coral">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            className={clsx(inputClasses, errors.name && 'border-[#E5484D]')}
            {...register('name', { required: t('nameRequired') })}
          />
          {errors.name && <p className={errorClasses}>{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className={labelClasses}>
            {t('email')} <span className="text-coral">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className={clsx(inputClasses, errors.email && 'border-[#E5484D]')}
            {...register('email', {
              required: t('emailRequired'),
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: t('emailInvalid'),
              },
            })}
          />
          {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className={labelClasses}>
            {t('company')} <span className="text-coral">*</span>
          </label>
          <input
            id="company"
            type="text"
            autoComplete="organization"
            className={clsx(inputClasses, errors.company && 'border-[#E5484D]')}
            {...register('company', { required: t('companyRequired') })}
          />
          {errors.company && (
            <p className={errorClasses}>{errors.company.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="position" className={labelClasses}>
            {t('position')}
            <span className="ml-1 font-mono text-[11px] uppercase text-[var(--color-text-tertiary)]">
              {t('optional')}
            </span>
          </label>
          <input
            id="position"
            type="text"
            autoComplete="organization-title"
            className={inputClasses}
            {...register('position')}
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="articles" className={labelClasses}>
            {t('articles')} <span className="text-coral">*</span>
          </label>
          <select
            id="articles"
            className={clsx(inputClasses, errors.articles && 'border-[#E5484D]')}
            defaultValue=""
            {...register('articles', { required: t('articlesRequired') })}
          >
            {articleOptions.map((o) => (
              <option key={o.value} value={o.value} disabled={o.value === ''}>
                {o.label}
              </option>
            ))}
          </select>
          {errors.articles && (
            <p className={errorClasses}>{errors.articles.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="erp" className={labelClasses}>
            {t('erp')} <span className="text-coral">*</span>
          </label>
          <select
            id="erp"
            className={clsx(inputClasses, errors.erp && 'border-[#E5484D]')}
            defaultValue=""
            {...register('erp', { required: t('erpRequired') })}
          >
            {erpOptions.map((o) => (
              <option key={o.value} value={o.value} disabled={o.value === ''}>
                {o.label}
              </option>
            ))}
          </select>
          {errors.erp && <p className={errorClasses}>{errors.erp.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="challenge" className={labelClasses}>
          {t('challenge')}
          <span className="ml-1 font-mono text-[11px] uppercase text-[var(--color-text-tertiary)]">
            {t('optional')}
          </span>
        </label>
        <textarea
          id="challenge"
          rows={4}
          className={clsx(inputClasses, 'resize-none')}
          placeholder={t('challengePlaceholder')}
          {...register('challenge')}
        />
      </div>

      <div className="rounded-lg bg-[var(--color-bg-tertiary)] p-4">
        <label className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]">
          <input
            type="checkbox"
            className="mt-0.5 h-4 w-4 flex-shrink-0 rounded border-[var(--color-border-secondary)] text-ocean focus:ring-ocean"
            {...register('consent', { required: t('consentRequired') })}
          />
          <span>
            {t('consentPre')}
            <a href="/datenschutz" className="text-ocean underline">
              {t('consentLink')}
            </a>
            {t('consentPost')}
          </span>
        </label>
        {errors.consent && (
          <p className={clsx(errorClasses, 'pl-7')}>{errors.consent.message}</p>
        )}
      </div>

      {submitError && (
        <p className="rounded-lg border border-[#E5484D]/30 bg-[#E5484D]/5 p-3 text-sm text-[#E5484D]">
          {submitError}
        </p>
      )}

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="w-full sm:w-auto"
        >
          {isSubmitting ? t('submitting') : t('submit')}
        </Button>
        <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--color-text-tertiary)]">
          {t('responseTime')}
        </p>
      </div>
    </form>
  )
}
