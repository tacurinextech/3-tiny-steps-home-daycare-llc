import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enables static export
  // Optional: Set basePath if deploying to a subpath (e.g., /repo-name/)
  basePath: process.env.NODE_ENV === 'production' ? '/3-tiny-steps' : '',
  // Optional: Disable trailing slashes (recommended for GitHub Pages)
  trailingSlash: false,

};

export default nextConfig;
