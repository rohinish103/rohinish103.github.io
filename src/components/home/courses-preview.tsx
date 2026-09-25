import Link from "next/link";
import { featuredCourses } from "@/data/courses";
import { CourseCard } from "@/components/cards";
import { SectionHeading } from "@/components/section-heading";

export function CoursesPreview() {
  return (
    <section className="section-tinted">
      <div className="section container-page">
        <SectionHeading
          eyebrow="Programs"
          title="Featured Courses"
          description="From Class 6 foundations to JEE & NEET pathways — structured for measurable growth."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featuredCourses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/courses" className="btn btn-primary px-6">
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  );
}
