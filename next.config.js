/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dev-nextblog.pantheonsite.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
