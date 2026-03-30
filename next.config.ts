import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "img.youtube.com",
  //     },
  //     {
  //       protocol: "http",
  //       hostname: "localhost",
  //       port: "5000",
  //       pathname: "/public/static/**",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "**.ueh.edu.vn",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "ueh.edu.vn",
  //     },
  //   ],
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
