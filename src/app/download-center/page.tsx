"use client";

import { useState } from "react";
import { Button, Card, PageHero } from "@/components/ui";
import { downloads } from "@/data/content";
import { cn } from "@/lib/cn";

const filters = ["All", "Syllabus", "Notes", "Assignments", "Homework", "Papers"];

export default function DownloadCenterPage() {
  const [filter, setFilter] = useState("All");
  const visible =
    filter === "All"
      ? downloads
      : downloads.filter((item) => item.category.toLowerCase() === filter.toLowerCase());

  return (
    <>
      <PageHero
        title="Download Center"
        subtitle="Syllabus, notes, assignments, and study material for enrolled students and aspirants."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/download-center/", label: "Download Center" },
        ]}
      />
      <section className="section-pad">
        <div className="container-premium">
          <h2 className="font-display text-3xl font-semibold">Study Resources</h2>
          <p className="mt-2 mb-6 text-sm text-muted-foreground">
            Filter by category and download PDFs. Replace sample files with your institute material in public/downloads.
          </p>
          <div className="mb-6 flex flex-wrap gap-2">
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium",
                  filter === item ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground",
                )}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {visible.map((item) => (
              <Card key={item.title} className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                  <p className="text-xs uppercase text-muted-foreground">
                    {item.category} · {item.klass} · {item.size}
                  </p>
                </div>
                <Button href="/contact/" variant="outline">
                  Download
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
