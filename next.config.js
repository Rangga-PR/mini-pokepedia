module.exports = {
  async rewrites() {
    return [
      {
        source: '/:any*',
        destination: '/',
      },
    ];
  },
  images: {
    domains: ['raw.githubusercontent.com'],
  },
};
