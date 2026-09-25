import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { DownloadList } from "@/components/download-list";

export const metadata: Metadata = {
  title: "Download Center",
  description:
    "Syllabus, notes, assignments, and study material for enrolled students and aspirants.",
};

export default function DownloadCenterPage() {
  return (
    <>
      <PageHero
        title="Download Center"
        description="Syllabus, notes, assignments, and study material for enrolled students and aspirants."
        crumbs={[{ label: "Download Center" }]}
      />
      <section className="section container-page">
        <SectionHeading
          eyebrow="Study Resources"
          title="Filter and download"
          description="Replace the sample entries with your institute material in public/downloads."
        />
        <div className="mt-10">
          <DownloadList />
        </div>
      </section>
    </>
  );
}
