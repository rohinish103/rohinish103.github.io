import type { Metadata } from "next";
import { Button, Card, Field, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Parent Login",
  description: "View performance reports, fee receipts, and announcements (coming soon).",
};

export default function ParentLoginPage() {
  return (
    <>
      <PageHero
        title="Parent Login"
        subtitle="View performance reports, fee receipts, and announcements (coming soon)."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/login/parent/", label: "Parent Login" },
        ]}
      />
      <section className="section-pad">
        <div className="container-premium max-w-md">
          <Card className="space-y-4">
            <Field label="Registered Mobile Number" name="mobile" />
            <Field label="OTP" name="otp" />
            <Button type="button" variant="accent" className="w-full">
              Verify & Sign In
            </Button>
            <p className="text-xs text-muted-foreground">Preview UI only. Contact us for report requests.</p>
          </Card>
        </div>
      </section>
    </>
  );
}
