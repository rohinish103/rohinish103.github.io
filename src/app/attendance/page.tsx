"use client";

import { useState } from "react";
import { Card, Field, PageHero, Button } from "@/components/ui";

const sample: Record<string, { name: string; present: number; total: number }> = {
  EA2024001: { name: "Ananya Sharma", present: 42, total: 45 },
  EA2024012: { name: "Rohan Verma", present: 38, total: 45 },
};

export default function AttendancePage() {
  const [id, setId] = useState("");
  const [result, setResult] = useState<(typeof sample)[string] | "missing" | null>(null);

  return (
    <>
      <PageHero
        title="Student Attendance Portal"
        subtitle="Demo portal for viewing attendance. Full login integration coming soon."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/attendance/", label: "Attendance" },
        ]}
      />
      <section className="section-pad">
        <div className="container-premium max-w-xl">
          <p className="mb-6 text-sm text-muted-foreground">
            UI preview only — no live data. Try sample IDs: EA2024001 or EA2024012.
          </p>
          <Card>
            <form
              className="space-y-4"
              onSubmit={(event) => {
                event.preventDefault();
                setResult(sample[id.trim().toUpperCase()] ?? "missing");
              }}
            >
              <Field label="Student ID" name="id">
                <input
                  name="id"
                  value={id}
                  onChange={(event) => setId(event.target.value)}
                  className="h-11 w-full rounded-xl border border-input bg-background px-3 outline-none ring-ring focus-visible:ring-2"
                />
              </Field>
              <Button type="submit" variant="accent" className="w-full">
                Search
              </Button>
            </form>
            {result && result !== "missing" ? (
              <div className="mt-6 rounded-xl bg-secondary p-4">
                <p className="font-display text-xl font-semibold">{result.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {result.present}/{result.total} days present
                </p>
              </div>
            ) : null}
            {result === "missing" ? (
              <p className="mt-4 text-sm text-destructive">No demo record found for that ID.</p>
            ) : null}
          </Card>
        </div>
      </section>
    </>
  );
}
