import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button, Card, PageHero } from "@/components/ui";
import { courses, getCourse } from "@/data/courses";

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return {};
  return { title: course.name, description: course.overview };
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  return (
    <>
      <PageHero
        title={course.name}
        subtitle={course.overview}
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/courses/", label: "Courses" },
          { href: `/courses/${course.slug}/`, label: course.name },
        ]}
      />
      <section className="section-pad">
        <div className="container-premium grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary">{course.classLabel}</span>
              <span className="rounded-full bg-muted px-3 py-1 text-xs">{course.categoryLabel}</span>
              {course.featured ? (
                <span className="rounded-full bg-gold-soft px-3 py-1 text-xs font-semibold">Featured</span>
              ) : null}
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold">Program Overview</h2>
              <p className="mt-2 text-muted-foreground">{course.overview}</p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold">Subjects Covered</h2>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {course.subjects.map((subject) => (
                  <li key={subject} className="rounded-xl border border-border bg-card px-4 py-3 text-sm">
                    {subject}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold">Why join this batch at Excellence Academy?</h2>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>• Small batches with weekly assessments and mentor check-ins</li>
                <li>• Structured notes, worksheets, and doubt-clearing sessions</li>
                <li>• Parent progress reports and transparent communication</li>
              </ul>
            </div>
          </div>
          <Card className="h-fit">
            <h2 className="font-display text-2xl font-semibold">Course Details</h2>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Duration</dt>
                <dd className="font-medium">{course.duration}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Medium</dt>
                <dd className="font-medium">{course.medium}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Fees</dt>
                <dd className="font-medium">{course.fees || "Contact us for a personalized fee quote."}</dd>
              </div>
            </dl>
            <div className="mt-6 flex flex-col gap-3">
              <Button href="/admission/" variant="accent">
                Apply for Admission
              </Button>
              <Button href="/contact/" variant="outline">
                Ask a Question
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
