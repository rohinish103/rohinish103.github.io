import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import { CourseGrid } from "@/components/course-grid";

export const metadata: Metadata = {
  title: "Courses",
  description: "Structured programs from Class 6 through board excellence, foundations, and competitive exam prep.",
};

export default function CoursesPage() {
  return (
    <>
      <PageHero
        title="Our Courses"
        subtitle="Structured programs from Class 6 through board excellence, foundations, and competitive exam prep."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/courses/", label: "Courses" },
        ]}
      />
      <section className="section-pad">
        <div className="container-premium">
          <CourseGrid />
        </div>
      </section>
    </>
  );
}
