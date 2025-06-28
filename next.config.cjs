/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.vrugd.jp/',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.vketreal.jp/',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'vket.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.vket.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'hikky.co.jp',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
