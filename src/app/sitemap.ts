import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { courses } from "@/data/courses";
import { blogs } from "@/data/blogs";

const staticRoutes = [
  "",
  "/about",
  "/admission",
  "/fees",
  "/scholarship",
  "/batches",
  "/events",
  "/download-center",
  "/previous-year-papers",
  "/career-counseling",
  "/attendance",
  "/login/student",
  "/login/parent",
  "/timetable",
  "/exam-calendar",
  "/privacy",
  "/terms",
  "/courses",
  "/results",
  "/faculty",
  "/gallery",
  "/testimonials",
  "/blog",
  "/faqs",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const now = new Date();

  const pages: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/admission" ? 0.9 : 0.7,
  }));

  const coursePages: MetadataRoute.Sitemap = courses.map((course) => ({
    url: `${base}/courses/${course.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const blogPages: MetadataRoute.Sitemap = blogs.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.55,
  }));

  return [...pages, ...coursePages, ...blogPages];
}
