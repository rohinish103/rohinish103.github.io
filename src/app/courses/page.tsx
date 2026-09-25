import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CourseList } from "@/components/course-list";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Structured programs from Class 6 through board excellence, foundations, and competitive exam prep.",
};

export default function CoursesPage() {
  return (
    <>
      <PageHero
        title="Our Courses"
        description="Structured programs from Class 6 through board excellence, foundations, and competitive exam prep."
        crumbs={[{ label: "Courses" }]}
      />
      <section className="section container-page">
        <CourseList />
      </section>
    </>
  );
}
