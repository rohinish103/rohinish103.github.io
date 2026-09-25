import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { PostCard } from "@/components/cards";
import { posts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical advice for boards, time management, NEET/JEE foundations, and stream selection.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Blog & Insights"
        description="Practical advice for boards, time management, NEET/JEE foundations, and stream selection."
        crumbs={[{ label: "Blog" }]}
      />
      <section className="section container-page">
        <SectionHeading
          eyebrow="Latest"
          title="Articles from our faculty"
          description="Short, actionable reads you can share with students and parents."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}
