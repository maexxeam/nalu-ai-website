import type { Metadata } from 'next'
import { PageHeader } from '@/components/ui/PageHeader'
import { PostCard } from '@/components/blog/PostCard'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Insights',
  description:
    'Demand Planning, ML Forecasting, Supply Chain — aus der Praxis für die Praxis.',
}

export default async function BlogIndex() {
  const posts = await getAllPosts()
  const [featured, ...rest] = posts

  return (
    <>
      <PageHeader
        eyebrow="~ Insights"
        title="Insights."
        subtitle="Demand Planning, ML Forecasting, Supply Chain — aus der Praxis für die Praxis."
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
              Bald gibt es hier den ersten Post.
            </p>
          )}
        </div>
      </section>
    </>
  )
}
