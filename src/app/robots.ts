import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/admins/",
      },
      {
        userAgent: "facebookexternalhit",
        allow: "/",
        disallow: "/admins/",
      },
    ],
    sitemap: "https://iscm.ueh.edu.vn/sitemap.xml",
  };
}
