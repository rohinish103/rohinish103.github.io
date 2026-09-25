import { instituteStats } from "@/data/site";
import { notices } from "@/data/announcements";
import { motivationalQuote } from "@/data/content";
import { CountUp } from "@/components/count-up";

export function StatsStrip() {
  return (
    <section className="container-page py-10">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {instituteStats.map((stat) => (
          <div key={stat.label} className="card card-hover px-4 py-6 text-center">
            <p className="font-display text-3xl font-semibold text-primary">
              <CountUp value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function NoticeMarquee() {
  const items = [...notices, ...notices];

  return (
    <div className="marquee-track overflow-hidden bg-[#0b4f9c] py-2 text-white">
      <div className="animate-marquee flex w-max gap-8 pr-8">
        {items.map((notice, index) => (
          <span
            key={`${notice.title}-${index}`}
            className="flex shrink-0 items-center gap-2 text-xs"
          >
            <span className="rounded-full bg-gold px-2 py-0.5 text-[10px] font-bold tracking-wide text-[#1a1405] uppercase">
              {notice.type}
            </span>
            {notice.title}
          </span>
        ))}
      </div>
    </div>
  );
}

export function QuoteBanner() {
  return (
    <section className="section-tinted">
      <div className="container-page py-14">
        <figure className="card mx-auto max-w-2xl px-6 py-8 text-center">
          <blockquote className="heading text-xl sm:text-2xl">
            &ldquo;{motivationalQuote.text}&rdquo;
          </blockquote>
          <figcaption className="mt-3 text-xs text-muted-foreground">
            — {motivationalQuote.author}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
