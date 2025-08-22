/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "9l83awfqh1.ufs.sh",
      },
    ],
  },
};

export default nextConfig;
