import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/data/blog";
import { PageHero } from "@/components/page-hero";
import { PostCard } from "@/components/cards";
import { site } from "@/data/site";
import { formatDate } from "@/lib/utils";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return { title: "Article" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: Params) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  const related = posts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <>
      <PageHero
        title={post.title}
        description={post.excerpt}
        crumbs={[{ label: "Blog", href: "/blog" }, { label: post.title }]}
      />

      <article className="section container-page max-w-3xl">
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <span className="chip">{post.category}</span>
          <span>{formatDate(post.date)}</span>
          <span>· {post.readingTime} read</span>
        </div>

        <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {post.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="section-tinted mt-10 rounded-2xl border border-border p-6 text-center">
          <h2 className="heading text-xl">Ready to learn with {site.name}?</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Book a free demo class or speak with our counselors about the right
            batch.
          </p>
          <Link href="/admission" className="btn btn-gold mt-4 px-6">
            Apply Now
          </Link>
        </div>
      </article>

      <section className="section-tinted">
        <div className="section container-page">
          <h2 className="heading text-2xl">More Articles</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {related.map((item) => (
              <PostCard key={item.slug} post={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
