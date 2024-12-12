/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  // basePath: 'https://grigornurijanyan.github.io/grigornurijanyanportfolio',
  assetPrefix: 'https://grigornurijanyan.github.io/grigornurijanyanportfolio/',
  images: {
    domains: ["https://grigornurijanyan.github.io/grigornurijanyanportfolio"],
  },
};

export default nextConfig;
