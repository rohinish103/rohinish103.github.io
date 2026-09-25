import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { courses, getCourse } from "@/data/courses";
import { PageHero } from "@/components/page-hero";
import { site, whatsappUrl } from "@/data/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const course = getCourse((await params).slug);
  if (!course) return { title: "Course" };
  return { title: course.title, description: course.description };
}

const benefits = [
  "Small batches with weekly assessments and mentor check-ins",
  "Structured notes, worksheets, and doubt-clearing sessions",
  "Parent progress reports and transparent communication",
];

export default async function CoursePage({ params }: Params) {
  const course = getCourse((await params).slug);
  if (!course) notFound();

  return (
    <>
      <PageHero
        title={course.title}
        description={course.description}
        crumbs={[
          { label: "Courses", href: "/courses" },
          { label: course.title },
        ]}
      />

      <section className="section container-page grid gap-8 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <div className="flex flex-wrap gap-2">
            <span className="chip">{course.level}</span>
            <span className="chip">{course.category} Program</span>
            {course.featured ? <span className="chip">Featured</span> : null}
          </div>

          <h2 className="heading mt-6 text-2xl">Program Overview</h2>
          <p className="mt-2 text-sm text-muted-foreground">{course.description}</p>

          <h3 className="heading mt-8 text-lg">Subjects Covered</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {course.subjects.map((subject) => (
              <li key={subject} className="chip">
                {subject}
              </li>
            ))}
          </ul>

          <h3 className="heading mt-8 text-lg">
            Why join this batch at {site.name}?
          </h3>
          <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
            {benefits.map((benefit) => (
              <li key={benefit}>• {benefit}</li>
            ))}
          </ul>
        </div>

        <aside className="card h-fit p-5">
          <h2 className="heading text-lg">Course Details</h2>
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
              <dd className="font-display text-lg font-semibold text-primary">
                {course.fee}
              </dd>
            </div>
          </dl>
          <Link href="/admission" className="btn btn-primary mt-5 w-full rounded-lg">
            Apply for Admission
          </Link>
          <a
            href={whatsappUrl(
              `Hello ${site.name}, I have a question about ${course.title}.`,
            )}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline mt-2 w-full rounded-lg"
          >
            Ask a Question
          </a>
        </aside>
      </section>
    </>
  );
}
