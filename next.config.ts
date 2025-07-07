import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable the new app directory if you're using it
  experimental: {
    appDir: true,
  },
  // Extend Webpack to support alias '@' for 'src'
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
};

export default nextConfig;
