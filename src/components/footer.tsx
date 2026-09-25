import Link from "next/link";
import { Camera, Mail, MapPin, Phone, Share2, Video } from "lucide-react";
import {
  footerCourseLinks,
  quickLinks,
  site,
  mapsDirectionsUrl,
} from "@/data/site";
import { Logo } from "@/components/logo";
import { NewsletterForm } from "@/components/newsletter-form";

const socials = [
  { href: site.social.instagram, label: "Instagram", Icon: Camera },
  { href: site.social.facebook, label: "Facebook", Icon: Share2 },
  { href: site.social.youtube, label: "YouTube", Icon: Video },
];

export function Footer() {
  return (
    <footer className="bg-[#0b4f9c] text-white">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo tone="dark" />
          <p className="max-w-xs text-sm text-white/75">{site.description}</p>
          <ul className="space-y-2 text-sm text-white/80">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
              <a href={mapsDirectionsUrl} target="_blank" rel="noreferrer">
                {site.address}
              </a>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 size-4 shrink-0 text-gold" />
              <a href={site.phoneHref}>{site.phone}</a>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 size-4 shrink-0 text-gold" />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-base font-semibold">Quick Links</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-base font-semibold">Courses</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {footerCourseLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="transition hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-base font-semibold">Newsletter</h2>
          <p className="mt-4 mb-3 text-sm text-white/75">
            Get study tips, exam alerts, and admission updates.
          </p>
          <NewsletterForm />
          <div className="mt-4 flex gap-2">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid size-9 place-items-center rounded-full bg-white/10 transition hover:bg-gold hover:text-[#1a1405]"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="container-page flex flex-col gap-2 py-4 text-xs text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}, {site.location}. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="transition hover:text-gold">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition hover:text-gold">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
