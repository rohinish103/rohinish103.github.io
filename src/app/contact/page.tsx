import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/forms";
import { mapsDirectionsUrl, mapsEmbedUrl, site, whatsappUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Visit ${site.name} near Bus Stand, Station Road, Beawar, or reach us on phone and WhatsApp.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        description="Visit our campus near Bus Stand, Station Road, or reach us instantly on phone and WhatsApp."
        crumbs={[{ label: "Contact" }]}
      />

      <section className="section container-page grid gap-8 lg:grid-cols-2">
        <div>
          <div className="card overflow-hidden p-0">
            <iframe
              title={`Map to ${site.name}`}
              src={mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-64 w-full border-0"
            />
            <div className="p-4">
              <a
                href={mapsDirectionsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline w-full rounded-lg"
              >
                Get Directions
              </a>
            </div>
          </div>

          <h2 className="heading mt-8 text-xl">Get in touch</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              {site.address}
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
              <a href={site.phoneHref} className="hover:text-primary">
                {site.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <MessageCircle className="mt-0.5 size-4 shrink-0 text-primary" />
              <a
                href={whatsappUrl(`Hello ${site.name}, I have an enquiry.`)}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                Chat on WhatsApp
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
              <a href={`mailto:${site.email}`} className="hover:text-primary">
                {site.email}
              </a>
            </li>
          </ul>

          <h2 className="heading mt-8 text-xl">Business hours</h2>
          <dl className="mt-3 space-y-1 text-sm text-muted-foreground">
            {site.hours.map((entry) => (
              <div key={entry.days} className="flex justify-between gap-4 sm:max-w-sm">
                <dt>{entry.days}</dt>
                <dd>{entry.time}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="card h-fit p-5 sm:p-6">
          <h2 className="heading text-xl">Quick contact</h2>
          <p className="mt-1 mb-5 text-sm text-muted-foreground">
            Submit the form — we will open WhatsApp with your message pre-filled.
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
