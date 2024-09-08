// import { ArchiverWebpackPlugin } from '@tanem/archiver-webpack-plugin';

const { GITHUB_REPOSITORY } = process.env;

/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  basePath: GITHUB_REPOSITORY
    ? `/${GITHUB_REPOSITORY.split('/').at(1)}`
    : undefined,
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
