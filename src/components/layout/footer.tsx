"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, MapPin, Phone, Share2, Video, Camera } from "lucide-react";
import { footerLinks, siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <footer className="border-t border-border bg-[var(--blue-deep)] text-white">
      <div className="container-premium grid gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <span className="flex size-10 items-center justify-center rounded-xl bg-accent font-display text-sm font-bold text-accent-foreground">
              {siteConfig.shortName}
            </span>
            <span className="font-display text-lg font-semibold">{siteConfig.name}</span>
          </div>
          <p className="text-sm leading-relaxed text-white/75">{siteConfig.description}</p>
          <div className="mt-5 space-y-2 text-sm text-white/80">
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
              {siteConfig.address}
            </p>
            <p className="flex items-center gap-2">
              <Phone className="size-4 text-accent" />
              {siteConfig.phone}
            </p>
            <p className="flex items-center gap-2">
              <Mail className="size-4 text-accent" />
              {siteConfig.email}
            </p>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-display text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-sm text-white/75">
            {footerLinks.quick.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display text-lg font-semibold">Courses</h3>
          <ul className="space-y-2 text-sm text-white/75">
            {footerLinks.courses.map((l) => (
              <li key={l.href + l.label}>
                <Link href={l.href} className="hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display text-lg font-semibold">Newsletter</h3>
          <p className="mb-3 text-sm text-white/75">
            Get study tips, exam alerts, and admission updates.
          </p>
          {done ? (
            <p className="rounded-xl bg-white/10 px-3 py-3 text-sm text-accent">
              Thanks for subscribing!
            </p>
          ) : (
            <form
              className="flex flex-col gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setDone(true);
              }}
            >
              <Input
                type="email"
                required
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-white/20 bg-white/10 text-white placeholder:text-white/50"
              />
              <Button type="submit" variant="gold">
                Subscribe
              </Button>
            </form>
          )}
          <div className="mt-5 flex gap-3">
            <a href={siteConfig.social.facebook} aria-label="Facebook" className="rounded-lg bg-white/10 p-2 hover:bg-accent hover:text-accent-foreground">
              <Share2 className="size-4" />
            </a>
            <a href={siteConfig.social.instagram} aria-label="Instagram" className="rounded-lg bg-white/10 p-2 hover:bg-accent hover:text-accent-foreground">
              <Camera className="size-4" />
            </a>
            <a href={siteConfig.social.youtube} aria-label="YouTube" className="rounded-lg bg-white/10 p-2 hover:bg-accent hover:text-accent-foreground">
              <Video className="size-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-premium flex flex-col items-center justify-between gap-3 px-4 py-5 text-sm text-white/60 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}, {siteConfig.location}. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            {footerLinks.legal.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-accent">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
