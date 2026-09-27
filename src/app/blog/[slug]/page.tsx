import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Breadcrumbs, PageHero } from "@/components/shared/section-header";
import { blogs, getBlogBySlug } from "@/data/blogs";
import { siteConfig } from "@/data/site";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return { title: "Article Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const paragraphs = post.content.split(/\n\n+/).filter(Boolean);

  return (
    <>
      <PageHero title={post.title} description={post.excerpt} />
      <section className="section-pad">
        <div className="container-premium max-w-3xl">
          <Breadcrumbs
            items={[
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
          />

          <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-2xl border border-border shadow-sm">
            <Image src={post.cover} alt={post.title} fill className="object-cover" priority sizes="896px" />
          </div>

          <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <Badge>{post.category}</Badge>
            <span className="inline-flex items-center gap-1">
              <Calendar className="size-4" />
              {new Date(post.date).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="size-4" />
              {post.readTime}
            </span>
          </div>

          <div className="prose prose-neutral max-w-none space-y-4 text-muted-foreground leading-relaxed">
            {paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-border bg-gradient-to-br from-blue-soft/80 to-gold-soft/30 p-6 text-center">
            <p className="font-display text-lg font-semibold">Ready to learn with {siteConfig.name}?</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Book a free demo class or speak with our counselors about the right batch.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <Link href="/admission">
                <Button variant="gold">Apply Now</Button>
              </Link>
              <Link href="/blog">
                <Button variant="outline">
                  <ArrowLeft /> More Articles
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
