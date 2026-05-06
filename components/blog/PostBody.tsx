import { MDXRemote } from 'next-mdx-remote/rsc'
import { mdxComponents } from './mdxComponents'

export function PostBody({ source }: { source: string }) {
  return (
    <article className="mx-auto max-w-prose">
      <MDXRemote source={source} components={mdxComponents} />
    </article>
  )
}
