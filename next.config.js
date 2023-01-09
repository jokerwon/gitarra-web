const UnoCSS = require("@unocss/webpack").default;

const GITHUB_TOKEN = process.env.GITHUB_TOKEN || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GITHUB_TOKEN,
  },
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
