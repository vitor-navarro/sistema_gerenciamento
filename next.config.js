/** @type {import('next').NextConfig} */

const withDotenv = require('dotenv-expand')
const { parsed: dotenv } = require('dotenv').config()

require('dotenv').config()

const nextConfig = {
  env: {
    ...dotenv,
  },
  reactStrictMode: true,
}

module.exports = nextConfig
