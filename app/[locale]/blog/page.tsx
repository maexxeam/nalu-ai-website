import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { PageHeader } from '@/components/ui/PageHeader'
import { PostCard } from '@/components/blog/PostCard'
import { getAllPosts } from '@/lib/blog'
import type { Locale } from '@/i18n/routing'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Blog' })
  return { title: t('metaTitle'), description: t('metaDescription') }
}

export default async function BlogIndex({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'Blog' })

  const posts = await getAllPosts(locale as Locale)
  const [featured, ...rest] = posts

  return (
    <>
      <PageHeader
        eyebrow={t('headerEyebrow')}
        title={t('headerTitle')}
        subtitle={t('headerSubtitle')}
      />

      <section className="bg-white py-20 md:py-24">
        <div className="container-wide">
          {featured && (
            <div className="mb-16">
              <PostCard post={featured} featured />
            </div>
          )}

          {rest.length > 0 && (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          )}

          {posts.length === 0 && (
            <p className="text-center font-mono text-sm uppercase tracking-widest text-[var(--color-text-tertiary)]">
              {t('empty')}
            </p>
          )}
        </div>
      </section>
    </>
  )
}
