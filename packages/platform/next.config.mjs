/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  webpack(config, { isServer, dev }) {
    const prefix = config.assetPrefix ?? config.basePath ?? '';
    config.module.rules.push(
      {
        test: /\.(mp3)$/i,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: `${prefix}/_next/static/media/`,
            outputPath: `${dev ? '' : '../'}${isServer ? '../' : ''}static/media/`,
            name: '[name].[hash:8].[ext]',
          },
        },
      },
      {
        test: /\.lrc$/i,
        use: {
          loader: 'raw-loader',
        },
      },
    );
    return config;
  },
};

export default nextConfig;
