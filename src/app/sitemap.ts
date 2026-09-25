import type { MetadataRoute } from "next";
import { courses } from "@/data/courses";
import { posts } from "@/data/blog";

export const dynamic = "force-static";

const BASE_URL = "https://excellence-academy.me";

const staticRoutes = [
  "",
  "/about",
  "/courses",
  "/results",
  "/faculty",
  "/gallery",
  "/testimonials",
  "/blog",
  "/faqs",
  "/contact",
  "/admission",
  "/fees",
  "/batches",
  "/events",
  "/scholarship",
  "/career-counseling",
  "/download-center",
  "/attendance",
  "/login/parent",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ...staticRoutes,
    ...courses.map((course) => `/courses/${course.slug}`),
    ...posts.map((post) => `/blog/${post.slug}`),
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
