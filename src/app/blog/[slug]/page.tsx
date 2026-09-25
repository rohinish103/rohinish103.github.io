import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button, PageHero } from "@/components/ui";
import { getPost, posts } from "@/data/blog";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <PageHero
        title={post.title}
        subtitle={post.excerpt}
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/blog/", label: "Blog" },
          { href: `/blog/${post.slug}/`, label: post.title },
        ]}
      />
      <section className="section-pad">
        <article className="container-premium max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{post.category}</p>
          <p className="mt-2 text-sm text-muted-foreground">
            {post.dateLabel} · {post.minutes} min
          </p>
          <div className="mt-8 space-y-4 text-base leading-relaxed text-muted-foreground">
            {post.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-12 rounded-2xl border border-border bg-secondary p-6">
            <h2 className="font-display text-2xl font-semibold">Ready to learn with Excellence Academy?</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Book a free demo class or speak with our counselors about the right batch.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button href="/admission/" variant="accent">
                Apply Now
              </Button>
              <Button href="/blog/" variant="outline">
                More Articles
              </Button>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
