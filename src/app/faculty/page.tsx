import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { FacultyList } from "@/components/faculty-list";

export const metadata: Metadata = {
  title: "Faculty",
  description:
    "Meet the mentors behind Excellence Academy — experienced educators committed to clarity, discipline, and results.",
};

export default function FacultyPage() {
  return (
    <>
      <PageHero
        title="Our Faculty"
        description="Meet the mentors behind Excellence Academy — experienced educators committed to clarity, discipline, and results."
        crumbs={[{ label: "Faculty" }]}
      />
      <section className="section container-page">
        <SectionHeading
          eyebrow="Expert Team"
          title="Subject specialists you can trust"
          description="Search by name, subject, or qualification to find your mentor."
        />
        <div className="mt-10">
          <FacultyList />
        </div>
      </section>
    </>
  );
}
