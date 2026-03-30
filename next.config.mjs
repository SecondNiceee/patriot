/** @type {import('next').NextConfig} */
const nextConfig = {
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

  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Убираем nodemailer из клиента (если используется только на сервере)
      config.externals = {
        ...config.externals,
        'nodemailer': 'nodemailer',
      };

      // 🔥 КЛЮЧЕВОЕ: НЕ объединяем всё в один чанк!
      // Сохраняем код-сплиттинг для dynamic-секций
      config.optimization = {
        ...config.optimization,
        runtimeChunk: 'single', // ← выносим runtime в отдельный маленький файл
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            // Группа для node_modules — редко меняется → лучше кэшируется
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
              priority: 10,
            },
            // Остальное (твой код) — в main или по dynamic-чанкам
            default: {
              minChunks: 2,
              priority: -10,
              reuseExistingChunk: true,
            },
          },
        },
        minimize: true,
        concatenateModules: true,
      };
    }
    return config;
  },
  
  compress: true,
  poweredByHeader: false,
  generateEtags: false,


    compress: true,
  poweredByHeader: false,
  generateEtags: false,

  reactStrictMode: true,

  images: {
    formats: ["image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },

  trailingSlash: true,
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
