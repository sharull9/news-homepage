/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/new",
        destination: "/",
        permanent: true,
      },
      {
        source: "/popular",
        destination: "/",
        permanent: true,
      },
      {
        source: "/trending",
        destination: "/",
        permanent: true,
      },
      {
        source: "/categories",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
