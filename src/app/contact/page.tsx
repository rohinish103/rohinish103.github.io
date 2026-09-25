import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button, Card, PageHero } from "@/components/ui";
import { ContactForm } from "@/components/forms";
import { mapsUrl, site, whatsappUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Visit Excellence Academy, Beawar — call, WhatsApp, email, or send a quick message. ${site.address}`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Visit our campus near Bus Stand, Station Road, or reach us instantly on phone and WhatsApp."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/contact/", label: "Contact" },
        ]}
      />
      <section className="section-pad">
        <div className="container-premium grid gap-8 lg:grid-cols-2">
          <div>
            <Button href={mapsUrl()} variant="outline" className="mb-6">
              Get Directions
            </Button>
            <h2 className="font-display text-2xl font-semibold">Get in touch</h2>
            <div className="mt-4 space-y-3 text-sm">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 text-primary" /> {site.address}
              </p>
              <p className="flex items-center gap-2">
                <Phone className="size-4 text-primary" /> {site.phoneDisplay}
              </p>
              <Button href={whatsappUrl()} variant="ghost" className="px-0">
                Chat on WhatsApp
              </Button>
              <p className="flex items-center gap-2">
                <Mail className="size-4 text-primary" /> {site.email}
              </p>
            </div>
            <div className="mt-8">
              <h3 className="font-display text-xl font-semibold">Business hours</h3>
              <p className="mt-2 text-sm text-muted-foreground">Monday – Saturday 7:00 AM – 8:00 PM</p>
              <p className="text-sm text-muted-foreground">Sunday 8:00 AM – 1:00 PM (Special batches)</p>
            </div>
          </div>
          <Card>
            <h2 className="mb-2 font-display text-2xl font-semibold">Quick contact</h2>
            <p className="mb-5 text-sm text-muted-foreground">
              Submit the form — we will open WhatsApp with your message pre-filled.
            </p>
            <ContactForm />
          </Card>
        </div>
      </section>
    </>
  );
}
