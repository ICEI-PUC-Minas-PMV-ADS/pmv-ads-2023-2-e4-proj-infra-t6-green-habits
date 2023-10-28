const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, '.styles')],
    prependData: `@import "./styles/index.scss";`,
  },
  images: {
    domains: ['images.ctfassets.net'],
  },
  env: {
    NEXT_PUBLIC_API_HOST: process.env.NEXT_PUBLIC_API_HOST,
  },
  exportPathMap: function () {
    return {
      '/': { page: '/login' },
    }
  },
}

module.exports = nextConfig
