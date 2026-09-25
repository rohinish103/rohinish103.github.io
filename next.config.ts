import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages serves plain files, so the whole site is pre-rendered to /out.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
