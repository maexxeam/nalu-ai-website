/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  pageExtensions: ['ts', 'tsx', 'mdx'],
  async redirects() {
    return [
      { source: '/leistungen', destination: '/', permanent: false },
      { source: '/about', destination: '/', permanent: false },
      { source: '/kontakt', destination: '/', permanent: false },
      { source: '/impressum', destination: '/', permanent: false },
      { source: '/datenschutz', destination: '/', permanent: false },
      { source: '/demo', destination: '/', permanent: true },
      { source: '/pricing', destination: '/', permanent: true },
      { source: '/produkt', destination: '/', permanent: true },
      { source: '/de', destination: '/', permanent: true },
      { source: '/de/:path*', destination: '/', permanent: true },
      { source: '/en/leistungen', destination: '/en', permanent: false },
      { source: '/en/about', destination: '/en', permanent: false },
      { source: '/en/kontakt', destination: '/en', permanent: false },
      { source: '/en/demo', destination: '/en', permanent: true },
      { source: '/en/pricing', destination: '/en', permanent: true },
      { source: '/en/produkt', destination: '/en', permanent: true },
    ]
  },
}

export default nextConfig
