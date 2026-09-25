import Link from "next/link";
import { mapsDirectionsUrl, mapsEmbedUrl, site } from "@/data/site";

export function ContactPreview() {
  return (
    <section className="section-tinted">
      <div className="section container-page grid items-center gap-8 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Visit Us</p>
          <h2 className="heading mt-2 text-3xl sm:text-4xl">
            Contact {site.name}
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">{site.address}</p>
          <dl className="mt-4 space-y-1 text-sm">
            <div className="flex gap-2">
              <dt className="font-semibold">Phone:</dt>
              <dd>
                <a href={site.phoneHref} className="hover:text-primary">
                  {site.phone}
                </a>
              </dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-semibold">Email:</dt>
              <dd>
                <a href={`mailto:${site.email}`} className="hover:text-primary">
                  {site.email}
                </a>
              </dd>
            </div>
          </dl>
          <dl className="mt-4 space-y-1 text-sm text-muted-foreground">
            {site.hours.map((entry) => (
              <div key={entry.days} className="flex gap-2">
                <dt>{entry.days}:</dt>
                <dd>{entry.time}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-primary">
              Contact Page
            </Link>
            <a
              href={mapsDirectionsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              Get Directions
            </a>
          </div>
        </div>

        <div className="card overflow-hidden p-0">
          <iframe
            title={`Map to ${site.name}`}
            src={mapsEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-72 w-full border-0"
          />
        </div>
      </div>
    </section>
  );
}
