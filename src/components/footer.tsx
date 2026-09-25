"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { footerCourseLinks, footerQuickLinks, site } from "@/data/site";
import { Button } from "@/components/ui";

export function Footer() {
  return (
    <footer className="border-t border-border bg-[var(--blue-deep)] text-white">
      <div className="container-premium grid gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <span className="flex size-10 items-center justify-center rounded-xl bg-accent font-display text-sm font-bold text-accent-foreground">
              {site.shortName}
            </span>
            <span className="font-display text-lg font-semibold">{site.name}</span>
          </div>
          <p className="text-sm leading-relaxed text-white/75">{site.description}</p>
          <div className="mt-5 space-y-2 text-sm text-white/80">
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
              {site.address}
            </p>
            <p className="flex items-center gap-2">
              <Phone className="size-4 text-accent" />
              {site.phoneDisplay}
            </p>
            <p className="flex items-center gap-2">
              <Mail className="size-4 text-accent" />
              {site.email}
            </p>
          </div>
        </div>
        <div>
          <h3 className="mb-4 font-display text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-sm text-white/75">
            {footerQuickLinks.map((link) => (
              <li key={link.href}>
                <Link className="hover:text-accent" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-display text-lg font-semibold">Courses</h3>
          <ul className="space-y-2 text-sm text-white/75">
            {footerCourseLinks.map((link) => (
              <li key={link.label}>
                <Link className="hover:text-accent" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-display text-lg font-semibold">Newsletter</h3>
          <p className="mb-4 text-sm text-white/75">Get study tips, exam alerts, and admission updates.</p>
          <form
            className="flex flex-col gap-2"
            onSubmit={(event) => {
              event.preventDefault();
              const form = event.currentTarget;
              const email = new FormData(form).get("email");
              window.alert(`Thanks! We'll send updates to ${email}.`);
              form.reset();
            }}
          >
            <input
              name="email"
              type="email"
              required
              placeholder="Email address"
              className="h-11 rounded-xl border border-white/20 bg-white/10 px-3 text-white placeholder:text-white/50 outline-none"
            />
            <Button type="submit" variant="accent">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-sm text-white/70 sm:px-6 lg:px-8">
        <div className="container-premium flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 {site.name}, {site.city}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link className="hover:text-accent" href="/privacy/">
              Privacy Policy
            </Link>
            <Link className="hover:text-accent" href="/terms/">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
