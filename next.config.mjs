/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  typescript: {
    ignoreBuildErrors: true,
  },

  experimental: {
    optimizePackageImports: [
      'lucide-react',
      'class-variance-authority',
      'clsx',
      'tailwind-merge'
    ],
  },

  compress: true,
  poweredByHeader: false,
  generateEtags: false,

  reactStrictMode: true,

  images: {
    unoptimized: true,
  },

  trailingSlash: true,
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
