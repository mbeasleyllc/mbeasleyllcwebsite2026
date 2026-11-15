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

  /**
   * Permanent redirects for retired URLs.
   *
   * Redirects are evaluated before the filesystem, so these win even while the
   * old page files are still present. Keep every entry a 301: these are
   * permanent moves and any inbound links should transfer their value.
   *
   * Group 1: services retired in the v2 repositioning (courses/LMS dropped,
   * old consulting offers replaced).
   * Group 2: paths that were live on the previous ClickSites host, so any
   * inbound links or search results do not land on a 404.
   */
  async redirects() {
    return [
      // ── Canonical host ───────────────────────────────────────
      // Every canonical tag and the sitemap point at the apex. Without this,
      // www and the apex serve identical content and compete with each other.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.mbeasleyllc.com' }],
        destination: 'https://mbeasleyllc.com/:path*',
        permanent: true,
      },

      // ── Retired service pages ────────────────────────────────
      { source: '/services/web-development', destination: '/services/websites-hosting-vps', permanent: true },
      { source: '/services/transformation', destination: '/services/ai-agents-automation', permanent: true },
      { source: '/services/operations', destination: '/services/ai-agents-automation', permanent: true },
      { source: '/services/strategy', destination: '/services', permanent: true },
      { source: '/services/course-design', destination: '/services', permanent: true },
      { source: '/services/learning-management', destination: '/services', permanent: true },

      // ── Legal aliases ────────────────────────────────────────
      // The prototype's sitemap writes /privacy-policy/ and /terms/; the pages
      // live at /privacy and /terms. Redirect rather than rename, so any link
      // written against the prototype still resolves.
      { source: '/privacy-policy', destination: '/privacy', permanent: true },
      { source: '/terms-of-service', destination: '/terms', permanent: true },

      // ── Removed insights topic pages ─────────────────────────
      // Six topic pages were fabricated: invented staff, "18 articles" while
      // listing six, and every article link 404ing. They were live, so they
      // redirect to the hub rather than 404 now that they are gone.
      { source: '/insights/topics/:slug', destination: '/insights', permanent: true },

      // ── Paths live on the previous host ──────────────────────
      { source: '/Homepage', destination: '/', permanent: true },
      { source: '/design-services', destination: '/services', permanent: true },
      { source: '/training', destination: '/services', permanent: true },

      // ── Old case studies ─────────────────────────────────────
      // Removed with the repositioning: they were web-development stories that
      // contradict the current offer. The prototype plans to bring case studies
      // back once real automation pilot results exist, so these redirect to the
      // credibility content that replaced them.
      { source: '/case-studies', destination: '/about', permanent: true },
      { source: '/case-studies/:slug', destination: '/about', permanent: true },
    ];
  },
};

export default nextConfig;
