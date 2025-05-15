import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repoName = '3-tiny-steps-home-daycare-llc'; // Replace with your GitHub repo name

const nextConfig: NextConfig = {
  output: 'export', // Enables static export
  // Optional: Set basePath if deploying to a subpath (e.g., /repo-name/)
  basePath: isProd ? `/${repoName}` : '', // Needed for GitHub Pages subpaths
  assetPrefix: isProd ? `/${repoName}/` : '', // Fixes CSS/JS paths
  trailingSlash: true,
};

export default nextConfig;
