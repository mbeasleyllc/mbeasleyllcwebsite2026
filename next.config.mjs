/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Don't advertise the framework in every response.
  poweredByHeader: false,

  images: {
    // next/image only ever loads from Unsplash here. A '**' wildcard turns
    // /_next/image into an open proxy that will fetch and re-serve any remote
    // image on request, so keep this to the hosts actually used.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // No includeSubDomains/preload until every subdomain is confirmed
          // HTTPS-only; adding them early can lock out a subdomain.
          { key: 'Strict-Transport-Security', value: 'max-age=31536000' },
          // camera/microphone are deliberately NOT restricted: the
          // /video-conference page embeds 8x8.vc (Jitsi) in an iframe and
          // needs them delegated.
          { key: 'Permissions-Policy', value: 'geolocation=(), payment=(), usb=()' },
        ],
      },
    ];
  },
};

export default nextConfig;
