const withPlugins = require('next-compose-plugins');

const config = {
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

if (process.env.NODE_ENV != 'test') {
  const withPWA = require('next-pwa');
  const runtimeCaching = require('next-pwa/cache');

  config.pwa = {
    dest: 'public',
    runtimeCaching,
    disable: process.env.NODE_ENV === 'development',
  };
  module.exports = withPlugins([withPWA], config);
} else {
  module.exports = config;
}
