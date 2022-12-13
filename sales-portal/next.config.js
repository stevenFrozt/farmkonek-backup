/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  distDir: "build",
  webpack: (config, options) => {
    config.plugins.push(
      new options.webpack.container.ModuleFederationPlugin({
        name: "fe3",
        filename: "static/salesPortal.js",
        remoteType: "var",
        remotes: {
          components: options.isServer
            ? path.resolve("../components/build/mainComponent.js")
            : "components",
        },
        shared: [
          {
            react: {
              eager: true,
              singleton: true,
              requiredVersion: false,
            },
          },
          {
            "react-dom": {
              eager: true,
              singleton: true,
              requiredVersion: false,
            },
          },
        ],
      })
    );
    return config;
  },
};

module.exports = nextConfig;
