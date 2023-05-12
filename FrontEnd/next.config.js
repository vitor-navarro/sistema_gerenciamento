/** @type {import('next').NextConfig} */

require('dotenv').config()
const withDotenv = require('dotenv-expand');
const { parsed: dotenv } = require('dotenv').config()



const nextConfig = {
  async redirects(){
    return [
      {
        source: "/cadastro",
        destination: "/registerUser",
        permanent: true,
      },
      {
        source: "/",
        destination: "/registerUser",
        permanent: true,
      }
    ]
  },
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
