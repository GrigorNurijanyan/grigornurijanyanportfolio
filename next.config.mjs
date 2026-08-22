/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "grigornurijanyan.github.io",
        pathname: "/grigornurijanyanportfolio/**",
      },
    ],
  },
};

export default nextConfig;
