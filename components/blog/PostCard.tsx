import { useLocale, useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { ArrowRightIcon } from '@/components/ui/Icons'
import { formatDate } from '@/lib/blog'
import type { PostMeta } from '@/lib/blog'
import type { Locale } from '@/i18n/routing'

interface PostCardProps {
  post: PostMeta
  featured?: boolean
}

export function PostCard({ post, featured = false }: PostCardProps) {
  const t = useTranslations('Blog')
  const locale = useLocale() as Locale

  if (featured) {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className="group block overflow-hidden rounded-2xl border border-[var(--color-border-primary)] bg-white transition-all duration-300 hover:shadow-brand-md"
      >
        <article className="grid gap-8 p-8 md:grid-cols-[1fr_2fr] md:gap-12 md:p-12">
          <div className="flex items-center justify-center rounded-xl bg-navy p-12">
            <span className="font-display text-sm font-semibold uppercase tracking-widest text-coral">
              {t('cardFeatured')}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-[11px] uppercase tracking-widest text-coral">
              {post.category}
            </span>
            <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-[var(--color-text-primary)] transition-colors group-hover:text-ocean md:text-3xl">
              {post.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-text-secondary)]">
              {post.excerpt}
            </p>
            <div className="mt-auto flex items-center justify-between border-t border-[var(--color-border-primary)] pt-5">
              <span className="font-mono text-xs text-[var(--color-text-tertiary)]">
                {formatDate(post.date, locale)} · {post.readTime}
              </span>
              <span className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-ocean transition-colors group-hover:text-coral">
                {t('readMore')}
                <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </div>
        </article>
      </Link>
    )
  }

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-[var(--color-border-primary)] bg-white p-8 transition-all duration-300 hover:shadow-brand-md"
    >
      <span className="font-mono text-[11px] uppercase tracking-widest text-coral">
        {post.category}
      </span>
      <h3 className="mt-3 font-display text-lg font-semibold leading-tight text-[var(--color-text-primary)] transition-colors group-hover:text-ocean">
        {post.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">
        {post.excerpt}
      </p>
      <div className="mt-6 flex items-center justify-between border-t border-[var(--color-border-primary)] pt-4">
        <span className="font-mono text-[11px] text-[var(--color-text-tertiary)]">
          {formatDate(post.date, locale)}
        </span>
        <span className="font-mono text-[11px] text-[var(--color-text-tertiary)]">
          {post.readTime}
        </span>
      </div>
    </Link>
  )
}
