/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  // basePath: 'https://grigornurijanyan.github.io/grigornurijanyanportfolio',
  assetPrefix: 'https://grigornurijanyan.github.io/grigornurijanyanportfolio',
  images: {
    domains: ["images.unsplash.com"],
  },
};

export default nextConfig;
