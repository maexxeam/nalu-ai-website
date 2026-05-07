import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

export default createMiddleware(routing)

export const config = {
  matcher: [
    // Match all pathnames except for
    // - api routes
    // - _next, _vercel internals
    // - sitemap, robots, opengraph
    // - files with an extension (e.g. favicon.ico)
    '/((?!api|_next|_vercel|sitemap.xml|robots.txt|opengraph-image|.*\\..*).*)',
  ],
}
