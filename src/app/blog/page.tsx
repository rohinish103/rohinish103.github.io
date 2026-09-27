import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import { Breadcrumbs, PageHero, SectionHeader } from "@/components/shared/section-header";
import { blogs } from "@/data/blogs";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Blog",
  description: `Study tips, board prep, and career guidance from the mentors at ${siteConfig.name}, Beawar.`,
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Blog & Insights"
        description="Practical advice for boards, time management, NEET/JEE foundations, and stream selection."
      />
      <section className="section-pad">
        <div className="container-premium">
          <Breadcrumbs items={[{ label: "Blog" }]} />
          <SectionHeader
            eyebrow="Latest"
            title="Articles from our faculty"
            description="Short, actionable reads you can share with students and parents."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {blogs.map((b) => (
              <Link
                key={b.id}
                href={`/blog/${b.slug}`}
                className="card-lift group overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={b.cover}
                    alt={b.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-accent">{b.category}</p>
                  <h2 className="mt-2 font-display text-xl font-semibold group-hover:text-primary">
                    {b.title}
                  </h2>
                  <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{b.excerpt}</p>
                  <div className="mt-4 flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="size-3.5" />
                      {new Date(b.date).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="size-3.5" />
                      {b.readTime} read
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
