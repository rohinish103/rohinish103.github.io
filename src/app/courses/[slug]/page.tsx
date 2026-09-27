import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Clock, Languages, BookOpen, IndianRupee } from "lucide-react";
import { Breadcrumbs, PageHero } from "@/components/shared/section-header";
import { courses, getCourseBySlug } from "@/data/courses";
import { siteConfig } from "@/data/site";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) {
    return { title: "Course Not Found" };
  }
  return {
    title: course.name,
    description: course.description,
  };
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const categoryLabel =
    course.category === "school"
      ? "School Program"
      : course.category === "foundation"
        ? "Foundation Program"
        : "Competitive Program";

  return (
    <>
      <PageHero title={course.name} description={course.description} />
      <section className="section-pad">
        <div className="container-premium">
          <Breadcrumbs
            items={[
              { label: "Courses", href: "/courses" },
              { label: course.name },
            ]}
          />

          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
              <div className="flex flex-wrap items-center gap-2">
                <Badge>{course.classLabel}</Badge>
                <Badge className="border-primary/20 bg-blue-soft text-primary">{categoryLabel}</Badge>
                {course.featured ? (
                  <Badge className="bg-accent text-accent-foreground">Featured</Badge>
                ) : null}
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold">Program Overview</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{course.description}</p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold">Subjects Covered</h2>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {course.subjects.map((subject) => (
                    <li
                      key={subject}
                      className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm"
                    >
                      <BookOpen className="size-4 shrink-0 text-primary" />
                      {subject}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-gradient-to-br from-blue-soft/80 to-gold-soft/30 p-6">
                <h3 className="font-display text-lg font-semibold">Why join this batch at {siteConfig.name}?</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>• Small batches with weekly assessments and mentor check-ins</li>
                  <li>• Structured notes, worksheets, and doubt-clearing sessions</li>
                  <li>• Parent progress reports and transparent communication</li>
                </ul>
              </div>
            </div>

            <aside className="h-fit space-y-4 rounded-2xl border border-border bg-card p-6 shadow-sm lg:sticky lg:top-24">
              <h2 className="font-display text-xl font-semibold">Course Details</h2>
              <dl className="space-y-4 text-sm">
                <div className="flex gap-3">
                  <Clock className="mt-0.5 size-4 shrink-0 text-primary" />
                  <div>
                    <dt className="font-medium">Duration</dt>
                    <dd className="text-muted-foreground">{course.duration}</dd>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Languages className="mt-0.5 size-4 shrink-0 text-primary" />
                  <div>
                    <dt className="font-medium">Medium</dt>
                    <dd className="text-muted-foreground">{course.medium}</dd>
                  </div>
                </div>
                {course.fees ? (
                  <div className="flex gap-3">
                    <IndianRupee className="mt-0.5 size-4 shrink-0 text-primary" />
                    <div>
                      <dt className="font-medium">Fees</dt>
                      <dd className="text-lg font-bold text-primary">{course.fees}</dd>
                    </div>
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">Contact us for a personalized fee quote.</p>
                )}
              </dl>
              <div className="flex flex-col gap-2 pt-2">
                <Link href="/admission">
                  <Button className="w-full" variant="gold">
                    Apply for Admission <ArrowRight />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button className="w-full" variant="outline">
                    Ask a Question
                  </Button>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
