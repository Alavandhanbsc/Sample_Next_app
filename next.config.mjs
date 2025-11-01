import bundleAnalyzer from '@next/bundle-analyzer'

/** @type {import('next').NextConfig} */
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**.unsplash.com' },
      { protocol: 'https', hostname: '**.pixabay.com' },
      { protocol: 'https', hostname: 'platform.theverge.com' },
      { protocol: 'https', hostname: 'media.wired.com' },
      { protocol: 'https', hostname: 'ichef.bbci.co.uk' },
      { protocol: 'https', hostname: 'www.cnet.com' }, // ✅ Added CNET
      { protocol: 'https', hostname: '**' }, // ✅ Wildcard fallback (handles all others)
    ],
  },

  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@mui/material', '@mui/icons-material'],
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

export default withBundleAnalyzer(nextConfig)
