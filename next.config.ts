import type { NextConfig } from 'next'

const isDev = process.env.NODE_ENV === 'development'

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(fonts|images|_next/static|favicon\\.ico|.*\\.css|.*\\.js)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              connect-src 'self' https://auth.privy.io https://explorer-api.walletconnect.com wss://relay.walletconnect.org https://api.mainnet.abs.xyz;
              frame-src https://*.privy.io;
              script-src 'self' 'unsafe-inline' ${isDev ? "'unsafe-eval'" : ''};
              style-src 'self' 'unsafe-inline';
              img-src 'self' data: blob: https://cdn.privy.io https://walletconnect.com https://images.walletconnect.com https://auth.privy.io https://explorer-api.walletconnect.com https://api.mainnet.abs.xyz;
            `.replace(/\s{2,}/g, ' ').trim(),
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Cache-Control',
            value: 'no-store, must-revalidate',
          },
        ],
      },
    ]
  },
}

export default nextConfig
