/** @type {import('next').NextConfig} */
const nextConfig = {
  headers:[
    {
      key: 'X-Robots-Tag',
      value: 'index,follow',
    },
  ],
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  reactStrictMode: false,
  swcMinify: true,
  env:{
    API_KEY: process.env.API_KEY,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
