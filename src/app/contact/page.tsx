import type { Metadata } from "next";
import Link from "next/link";
import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
} from "lucide-react";
import { Breadcrumbs, PageHero } from "@/components/shared/section-header";
import { siteConfig } from "@/data/site";
import { formatPhoneDisplay, telLink, whatsappLink } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ContactQuickForm } from "./contact-quick-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Visit ${siteConfig.name}, Beawar — call, WhatsApp, email, or send a quick message. ${siteConfig.address}`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        description="Visit our campus near Bus Stand, Station Road, or reach us instantly on phone and WhatsApp."
      />
      <section className="section-pad">
        <div className="container-premium">
          <Breadcrumbs items={[{ label: "Contact" }]} />

          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
                <iframe
                  title={`${siteConfig.name} location map`}
                  src={siteConfig.mapsEmbedUrl}
                  className="aspect-[4/3] w-full border-0 lg:aspect-video"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <Link href={siteConfig.mapsDirectionsUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full sm:w-auto">
                  <Navigation /> Get Directions
                </Button>
              </Link>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h2 className="font-display text-xl font-semibold">Get in touch</h2>
                <ul className="mt-5 space-y-4 text-sm">
                  <li className="flex gap-3">
                    <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{siteConfig.address}</span>
                  </li>
                  <li className="flex gap-3">
                    <Phone className="mt-0.5 size-5 shrink-0 text-primary" />
                    <a href={telLink(siteConfig.phone)} className="font-medium hover:text-primary">
                      {formatPhoneDisplay(siteConfig.phone)}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <MessageCircle className="mt-0.5 size-5 shrink-0 text-primary" />
                    <a
                      href={whatsappLink(siteConfig.whatsapp, `Hi ${siteConfig.name}, I have a question.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium hover:text-primary"
                    >
                      Chat on WhatsApp
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <Mail className="mt-0.5 size-5 shrink-0 text-primary" />
                    <a href={`mailto:${siteConfig.email}`} className="font-medium hover:text-primary">
                      {siteConfig.email}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-gradient-to-br from-blue-soft/50 to-gold-soft/30 p-6">
                <h3 className="flex items-center gap-2 font-display text-lg font-semibold">
                  <Clock className="size-5 text-accent" />
                  Business hours
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {siteConfig.businessHours.map((row) => (
                    <li key={row.day} className="flex justify-between gap-4 border-b border-border/60 pb-2 last:border-0">
                      <span className="font-medium text-foreground">{row.day}</span>
                      <span>{row.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <ContactQuickForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
