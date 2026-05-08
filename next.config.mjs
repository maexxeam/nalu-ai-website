import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./i18n/request.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  pageExtensions: ['ts', 'tsx', 'mdx'],
  async redirects() {
    return [
      { source: '/demo', destination: '/kontakt', permanent: true },
      { source: '/de/demo', destination: '/de/kontakt', permanent: true },
      { source: '/en/demo', destination: '/en/kontakt', permanent: true },
      { source: '/pricing', destination: '/', permanent: true },
      { source: '/de/pricing', destination: '/de', permanent: true },
      { source: '/en/pricing', destination: '/en', permanent: true },
      { source: '/produkt', destination: '/#produkt', permanent: true },
      { source: '/de/produkt', destination: '/de#produkt', permanent: true },
      { source: '/en/produkt', destination: '/en#produkt', permanent: true },
    ]
  },
}

export default withNextIntl(nextConfig)
