import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Generate a fully static site (no server runtime)
  output: "export",
  // Use plain <img> tags or unoptimized mode if next/image ever gets used
  images: { unoptimized: true },
  // Helpful for many static hosts (optional)
  trailingSlash: true,
};

export default nextConfig;
