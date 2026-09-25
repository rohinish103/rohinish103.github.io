import Link from "next/link";
import { featuredPosts } from "@/data/blog";
import { PostCard } from "@/components/cards";
import { SectionHeading } from "@/components/section-heading";

export function BlogPreview() {
  return (
    <section className="section-tinted">
      <div className="section container-page">
        <SectionHeading eyebrow="Insights" title="From Our Blog" />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {featuredPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/blog" className="btn btn-outline">
            Read the Blog
          </Link>
        </div>
      </div>
    </section>
  );
}
