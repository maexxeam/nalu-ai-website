import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { PageHeader } from '@/components/ui/PageHeader'
import { PostBody } from '@/components/blog/PostBody'
import { Button } from '@/components/ui/Button'
import { ArrowRightIcon } from '@/components/ui/Icons'
import { getAllPosts, getPost, formatDate } from '@/lib/blog'
import { routing, type Locale } from '@/i18n/routing'

interface Params {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateStaticParams() {
  const params = await Promise.all(
    routing.locales.map(async (locale) => {
      const posts = await getAllPosts(locale)
      return posts.map((p) => ({ locale, slug: p.slug }))
    }),
  )
  return params.flat()
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, slug } = await params
  const post = await getPost(locale as Locale, slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

export default async function PostPage({ params }: Params) {
  const { locale, slug } = await params
  setRequestLocale(locale)
  const post = await getPost(locale as Locale, slug)
  if (!post) notFound()

  const t = await getTranslations({ locale, namespace: 'Blog' })

  const all = await getAllPosts(locale as Locale)
  const others = all.filter((p) => p.slug !== post.slug).slice(0, 2)

  return (
    <>
      <PageHeader
        eyebrow={`~ ${post.category}`}
        title={post.title}
        subtitle={post.excerpt}
      >
        <p className="mt-8 font-mono text-[11px] uppercase tracking-widest text-white/50">
          {formatDate(post.date, locale as Locale)} · {post.readTime}
        </p>
      </PageHeader>

      <section className="bg-white py-16 md:py-24">
        <div className="container-wide">
          <PostBody source={post.content} />
        </div>
      </section>

      {others.length > 0 && (
        <section className="bg-horizon py-20 md:py-24">
          <div className="container-wide">
            <div className="flex items-end justify-between">
              <div>
                <p className="font-display text-sm font-semibold uppercase tracking-widest text-ocean">
                  {t('postRelatedEyebrow')}
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold text-[var(--color-text-primary)]">
                  {t('postRelatedTitle')}
                </h2>
              </div>
              <Link
                href="/blog"
                className="hidden items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-ocean transition-colors hover:text-coral md:flex"
              >
                {t('postAllPosts')}
                <ArrowRightIcon className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-[var(--color-border-primary)] bg-white p-8 transition-all hover:shadow-brand-md"
                >
                  <span className="font-mono text-[11px] uppercase tracking-widest text-coral">
                    {p.category}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-[var(--color-text-primary)] transition-colors group-hover:text-ocean">
                    {p.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {p.excerpt}
                  </p>
                  <p className="mt-6 font-mono text-[11px] text-[var(--color-text-tertiary)]">
                    {formatDate(p.date, locale as Locale)} · {p.readTime}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-navy py-20 md:py-24 text-center">
        <div className="container-wide">
          <h2 className="font-display text-[26px] font-bold leading-tight text-white md:text-[32px]">
            {t('postFinalTitle')}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/70">
            {t('postFinalSubtitle')}
          </p>
          <div className="mt-8">
            <Button href="/demo" size="lg">
              {t('postFinalCta')}
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
