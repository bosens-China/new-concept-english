// import { ArchiverWebpackPlugin } from '@tanem/archiver-webpack-plugin';

const { GITHUB_ACTION_REPOSITORY, GITHUB_REPOSITORY, CI } = process.env;

console.log(GITHUB_ACTION_REPOSITORY, GITHUB_REPOSITORY);

/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  basePath: CI ? '/learning-platform' : undefined,

  webpack: (config, { dev }) => {
    if (dev) {
      return config;
    }

    // config.plugins.push(new ArchiverWebpackPlugin('zip'));

    return config;
  },
};

export default nextConfig;
