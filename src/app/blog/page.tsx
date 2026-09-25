import type { Metadata } from "next";
import Link from "next/link";
import { Card, PageHero } from "@/components/ui";
import { posts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Study tips, board prep, and career guidance from the mentors at Excellence Academy, Beawar.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Blog & Insights"
        subtitle="Practical advice for boards, time management, NEET/JEE foundations, and stream selection."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/blog/", label: "Blog" },
        ]}
      />
      <section className="section-pad">
        <div className="container-premium">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Latest</p>
          <h2 className="mb-8 font-display text-3xl font-semibold">Articles from our faculty</h2>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}/`}>
                <Card className="h-full">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{post.category}</span>
                  <h3 className="mt-2 font-display text-xl font-semibold">{post.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
                  <p className="mt-4 text-xs text-muted-foreground">
                    {post.dateLabel} · {post.minutes} min read
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
