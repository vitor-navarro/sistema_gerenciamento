/** @type {import('next').NextConfig} */

require('dotenv').config()
const withDotenv = require('dotenv-expand')
const { parsed: dotenv } = require('dotenv').config()



const nextConfig = {
  env: {
    ...dotenv,
  },
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/email-send',
        destination: '/api/email-send',
      },
    ];
  },
}

module.exports = nextConfig
