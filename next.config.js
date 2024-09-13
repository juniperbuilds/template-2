const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://apis.google.com; connect-src 'self' https://*.firebase.com https://*.firebaseio.com; frame-src 'self' https://accounts.google.com; img-src 'self' data: https:; style-src 'self' 'unsafe-inline';"
          },
        ],
      },
    ];
  },
  images: {
    domains: ['e39e37cb-0e32-44a9-803a-10bceea7acf7-00-2zzw32xb1ipb9.worf.replit.dev'],
  },
};

module.exports = nextConfig;