import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, Play } from "lucide-react";
import { heroStats, site } from "@/data/site";
import { CountUp } from "@/components/count-up";

const floatingPositions = [
  "top-8 left-0 sm:-left-6",
  "top-4 right-0 sm:-right-5",
  "top-1/2 left-0 sm:-left-8",
  "bottom-24 right-0 sm:-right-6",
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src={site.heroImage}
        alt="Students studying in the Excellence Academy library"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#072d5c]/95 via-[#0b4f9c]/80 to-[#0b4f9c]/40" />

      <div className="container-page grid items-center gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div className="animate-rise text-white">
          <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
            Beawar&apos;s Trusted Coaching Institute
          </p>
          <h1 className="heading mt-3 text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
            {site.name}
          </h1>
          <p className="heading mt-3 text-xl text-white/90 sm:text-2xl">
            {site.tagline}
          </p>
          <p className="mt-4 max-w-xl text-sm text-white/80 sm:text-base">
            {site.description}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/admission" className="btn btn-gold px-6 py-2.5">
              Enroll Now
            </Link>
            <a href="#demo" className="btn border border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white/20">
              <CalendarCheck className="size-4" />
              Book Free Demo Class
            </a>
          </div>

          <p className="mt-6 inline-flex flex-wrap items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs text-white/85 backdrop-blur">
            <span className="size-1.5 rounded-full bg-gold" />
            Live admissions this week:
            <CountUp value={47} className="font-semibold text-gold" />
            students enrolled
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative overflow-hidden rounded-2xl border border-white/20 shadow-2xl">
            <Image
              src={site.heroCardImage}
              alt="Excellence Academy campus learning culture"
              width={900}
              height={1100}
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="h-[340px] w-full object-cover sm:h-[480px]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#04203f]/95 to-transparent p-4">
              <p className="flex items-center gap-2 text-sm font-semibold text-white">
                <Play className="size-3.5 fill-gold text-gold" />
                Campus learning culture
              </p>
              <p className="mt-0.5 text-xs text-white/75">
                Mentorship · Weekly tests · Smart classrooms
              </p>
            </div>
          </div>

          {heroStats.map((stat, index) => (
            <div
              key={stat.label}
              className={`absolute ${floatingPositions[index]} hidden rounded-xl border border-white/20 bg-[#04203f]/70 px-3 py-2 text-white shadow-lg backdrop-blur-md sm:block`}
            >
              <p className="font-display text-lg font-semibold">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-[11px] text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
