import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import { FacultyList } from "./faculty-list";

export const metadata: Metadata = {
  title: "Faculty",
  description: "Meet the mentors behind Excellence Academy — experienced educators committed to clarity, discipline, and results.",
};

export default function FacultyPage() {
  return (
    <>
      <PageHero
        title="Our Faculty"
        subtitle="Meet the mentors behind Excellence Academy — experienced educators committed to clarity, discipline, and results."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/faculty/", label: "Faculty" },
        ]}
      />
      <section className="section-pad">
        <div className="container-premium">
          <FacultyList />
        </div>
      </section>
    </>
  );
}
