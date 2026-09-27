"use client";

import Link from "next/link";
import { useState } from "react";
import { Breadcrumbs, PageHero } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function StudentLoginPage() {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "Student portal login is not connected yet. Use the Attendance demo or contact the institute for credentials."
    );
  };

  return (
    <>
      <PageHero
        title="Student Login"
        description="Access assignments, test scores, and attendance (coming soon)."
      />
      <section className="section-pad">
        <div className="container-premium max-w-md">
          <Breadcrumbs items={[{ label: "Student Login" }]} />
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
          >
            <div>
              <Label htmlFor="studentId">Student ID</Label>
              <Input
                id="studentId"
                className="mt-1"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                placeholder="EA2024001"
                autoComplete="username"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                className="mt-1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </div>
            <Button type="submit" className="w-full">
              Sign In
            </Button>
            <p className="text-center text-xs text-muted-foreground">
              Preview UI only.{" "}
              <Link href="/attendance" className="text-primary hover:underline">
                Try attendance demo
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
