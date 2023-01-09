const UnoCSS = require("@unocss/webpack").default;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
  webpack: (config, context) => {
    config.plugins.push(UnoCSS());

    if (context.buildId !== "development") {
      config.cache = false;
    }
    return config;
  },
};

module.exports = nextConfig;
