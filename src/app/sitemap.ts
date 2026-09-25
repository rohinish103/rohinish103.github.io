import type { MetadataRoute } from "next";
import { courses } from "@/data/courses";
import { posts } from "@/data/blog";
import { site } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-08-06T18:00:21.685Z");
  const pages = [
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
    ...courses.map((course) => `/courses/${course.slug}`),
    ...posts.map((post) => `/blog/${post.slug}`),
  ];

  return pages.map((path) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/admission" ? 0.9 : 0.7,
  }));
}
