const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Add this line
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};
export default nextConfig;