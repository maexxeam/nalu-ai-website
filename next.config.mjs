/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  pageExtensions: ['ts', 'tsx', 'mdx'],
}

export default nextConfig
