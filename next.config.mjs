import bundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,

  // Optimize image loading
  images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: '**.unsplash.com',
    },
    {
      protocol: 'https',
      hostname: '**.pixabay.com',
    },
  ],
},


  //  Optional: experimental optimizations
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@mui/material', '@mui/icons-material'],
  },

  //improve Lighthouse SEO performance
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // remove console.logs in prod
  },
};

export default withBundleAnalyzer(nextConfig);
