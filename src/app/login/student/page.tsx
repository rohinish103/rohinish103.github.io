import type { Metadata } from "next";
import { Button, Card, Field, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Student Login",
  description: "Access assignments, test scores, and attendance (coming soon).",
};

export default function StudentLoginPage() {
  return (
    <>
      <PageHero
        title="Student Login"
        subtitle="Access assignments, test scores, and attendance (coming soon)."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/login/student/", label: "Student Login" },
        ]}
      />
      <section className="section-pad">
        <div className="container-premium max-w-md">
          <Card className="space-y-4">
            <Field label="Student ID" name="id" />
            <Field label="Password" name="password" type="password" />
            <Button type="button" variant="accent" className="w-full">
              Sign In
            </Button>
            <Button href="/attendance/" variant="ghost" className="w-full">
              Preview UI only. Try attendance demo
            </Button>
          </Card>
        </div>
      </section>
    </>
  );
}
