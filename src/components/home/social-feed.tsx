import { site } from "@/data/site";
import { SectionHeading } from "@/components/section-heading";

export function SocialFeed() {
  return (
    <section className="section container-page">
      <SectionHeading
        eyebrow="Social"
        title="Follow Our Journey"
        description="Instagram & Facebook feed integration-ready — connect your pages in site config."
      />
      <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
        {[1, 2, 3].map((index) => (
          <a
            key={index}
            href={site.social.instagram}
            target="_blank"
            rel="noreferrer"
            className="grid aspect-square place-items-center rounded-xl border border-border bg-muted text-xs text-muted-foreground transition hover:border-primary/40 hover:text-primary"
          >
            Social post {index}
          </a>
        ))}
      </div>
    </section>
  );
}
