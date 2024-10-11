/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["epos-bucket.s3.ap-southeast-1.amazonaws.com", "epos.enke.in"],
  },
};

export default nextConfig;
