// import { ArchiverWebpackPlugin } from '@tanem/archiver-webpack-plugin';

const { GITHUB_ACTION_REPOSITORY, GITHUB_REPOSITORY, CI } = process.env;

console.log({ env: process.env });

/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  basePath: CI ? '/learning-platform' : undefined,
  images: {
    unoptimized: true,
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
