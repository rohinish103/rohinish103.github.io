"use client";

import { useMemo, useState } from "react";
import { Download } from "lucide-react";
import { Breadcrumbs, PageHero, SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { downloads } from "@/data/batches";
import type { DownloadItem } from "@/types";
import { cn } from "@/lib/utils";

const categories: { value: "all" | DownloadItem["category"]; label: string }[] = [
  { value: "all", label: "All" },
  { value: "syllabus", label: "Syllabus" },
  { value: "notes", label: "Notes" },
  { value: "assignments", label: "Assignments" },
  { value: "homework", label: "Homework" },
  { value: "papers", label: "Papers" },
];

export default function DownloadCenterPage() {
  const [filter, setFilter] = useState<"all" | DownloadItem["category"]>("all");

  const filtered = useMemo(
    () => (filter === "all" ? downloads : downloads.filter((d) => d.category === filter)),
    [filter]
  );

  return (
    <>
      <PageHero
        title="Download Center"
        description="Syllabus, notes, assignments, and study material for enrolled students and aspirants."
      />
      <section className="section-pad">
        <div className="container-premium">
          <Breadcrumbs items={[{ label: "Download Center" }]} />
          <SectionHeader
            title="Study Resources"
            description="Filter by category and download PDFs. Replace sample files with your institute material in public/downloads."
            align="center"
          />

          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                type="button"
                onClick={() => setFilter(cat.value)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  filter === cat.value
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card hover:bg-muted"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {filtered.length === 0 ? (
              <p className="text-center text-muted-foreground">No downloads in this category.</p>
            ) : (
              filtered.map((item) => (
                <article
                  key={item.id}
                  className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <div className="mt-1 flex flex-wrap gap-2">
                      <Badge className="capitalize">{item.category}</Badge>
                      <Badge className="border-border bg-muted text-foreground">{item.classLabel}</Badge>
                      <span className="text-xs text-muted-foreground">{item.size}</span>
                    </div>
                  </div>
                  <a href={item.fileUrl} download target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <Download /> Download
                    </Button>
                  </a>
                </article>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}
