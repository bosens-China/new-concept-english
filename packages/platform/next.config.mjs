// import { ArchiverWebpackPlugin } from '@tanem/archiver-webpack-plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config, { dev }) => {
    if (dev) {
      return config;
    }

    // config.plugins.push(new ArchiverWebpackPlugin('zip'));

    return config;
  },
};

export default nextConfig;
