/** @type {import('next').NextConfig} */

require('dotenv').config()

const nextConfig = {
  env: {
    EMAIL_JS_SERVICE_ID: process.env.EMAIL_JS_SERVICE_ID,
  },
  reactStrictMode: true,
}

module.exports = nextConfig
