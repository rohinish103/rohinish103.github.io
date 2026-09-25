import Link from "next/link";
import { featuredFaculty } from "@/data/faculty";
import { FacultyCard } from "@/components/cards";
import { SectionHeading } from "@/components/section-heading";

export function FacultyPreview() {
  return (
    <section className="section container-page">
      <SectionHeading
        eyebrow="Mentors"
        title="Meet Our Expert Faculty"
        description="Experienced educators who combine subject depth with personal mentorship."
      />
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {featuredFaculty.map((member) => (
          <FacultyCard key={member.name} member={member} />
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link href="/faculty" className="btn btn-outline">
          View Full Faculty
        </Link>
      </div>
    </section>
  );
}
