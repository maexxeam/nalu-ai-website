import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PageHeader } from '@/components/ui/PageHeader'
import { PostBody } from '@/components/blog/PostBody'
import { Button } from '@/components/ui/Button'
import { ArrowRightIcon } from '@/components/ui/Icons'
import { getAllPosts, getPost, formatDate } from '@/lib/blog'

interface Params {
  params: { slug: string }
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = await getPost(params.slug)
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
  const post = await getPost(params.slug)
  if (!post) notFound()

  const all = await getAllPosts()
  const others = all.filter((p) => p.slug !== post.slug).slice(0, 2)

  return (
    <>
      <PageHeader
        eyebrow={`~ ${post.category}`}
        title={post.title}
        subtitle={post.excerpt}
      >
        <p className="mt-8 font-mono text-[11px] uppercase tracking-widest text-white/50">
          {formatDate(post.date)} · {post.readTime}
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
                  Weiterlesen
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold text-[var(--color-text-primary)]">
                  Andere Insights
                </h2>
              </div>
              <Link
                href="/blog"
                className="hidden items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-ocean transition-colors hover:text-coral md:flex"
              >
                Alle Posts
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
                    {formatDate(p.date)} · {p.readTime}
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
            Die Theorie ist klar. Was sagt Ihre Praxis?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/70">
            30 Minuten Demo auf Ihrem Use Case. Wir zeigen Ihnen, wie das
            Beschriebene in Ihrer Realität aussieht.
          </p>
          <div className="mt-8">
            <Button href="/demo" size="lg">
              Demo anfragen →
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
