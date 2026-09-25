import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ParentLoginForm } from "@/components/forms";

export const metadata: Metadata = {
  title: "Parent Login",
  description:
    "Parent portal preview for performance reports, fee receipts, and announcements.",
};

export default function ParentLoginPage() {
  return (
    <>
      <PageHero
        title="Parent Login"
        description="View performance reports, fee receipts, and announcements (coming soon)."
        crumbs={[{ label: "Parent Login" }]}
      />
      <section className="section container-page max-w-md">
        <ParentLoginForm />
      </section>
    </>
  );
}
