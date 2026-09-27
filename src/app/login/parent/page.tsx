"use client";

import Link from "next/link";
import { useState } from "react";
import { Breadcrumbs, PageHero } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ParentLoginPage() {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "Parent portal is not connected yet. Monthly reports are shared via WhatsApp and email for enrolled students."
    );
  };

  return (
    <>
      <PageHero
        title="Parent Login"
        description="View performance reports, fee receipts, and announcements (coming soon)."
      />
      <section className="section-pad">
        <div className="container-premium max-w-md">
          <Breadcrumbs items={[{ label: "Parent Login" }]} />
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
          >
            <div>
              <Label htmlFor="mobile">Registered Mobile Number</Label>
              <Input
                id="mobile"
                type="tel"
                className="mt-1"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="10-digit mobile"
                autoComplete="tel"
              />
            </div>
            <div>
              <Label htmlFor="otp">OTP</Label>
              <Input
                id="otp"
                className="mt-1"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP (demo)"
                autoComplete="one-time-code"
              />
            </div>
            <Button type="submit" className="w-full">
              Verify & Sign In
            </Button>
            <p className="text-center text-xs text-muted-foreground">
              Preview UI only.{" "}
              <Link href="/contact" className="text-primary hover:underline">
                Contact us
              </Link>{" "}
              for report requests.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
