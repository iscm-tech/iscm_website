import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString().split("T")[0]; // Format the date to YYYY-MM-DD

  return [
    {
      url: "https://iscm.ueh.edu.vn",
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://iscm.ueh.edu.vn/course_undergraduate",
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://iscm.ueh.edu.vn/course_graduate",
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://iscm.ueh.edu.vn/course_graduate/master-of-smart-city-and-innovation-management",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://iscm.ueh.edu.vn/news",
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://iscm.ueh.edu.vn/events",
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];
}
