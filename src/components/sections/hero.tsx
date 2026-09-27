"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Play } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/shared/animated-counter";

const floatStats = [
  { label: "Students", value: siteConfig.stats.students, suffix: "+" },
  { label: "Success Rate", value: siteConfig.stats.successRate, suffix: "%" },
  { label: "Years Experience", value: siteConfig.stats.years, suffix: "+" },
  { label: "Expert Faculty", value: siteConfig.stats.teachers, suffix: "+" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&h=1080&fit=crop"
        alt="Students studying at Excellence Academy"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(201,162,39,0.2),transparent_40%)]" />

      <div className="container-premium relative z-10 grid min-h-[92vh] items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-white"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
            Beawar&apos;s Trusted Coaching Institute
          </p>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            {siteConfig.name}
          </h1>
          <p className="mt-4 max-w-xl font-display text-2xl text-white/90 md:text-3xl">
            {siteConfig.tagline}
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            {siteConfig.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/admission">
              <Button size="lg" variant="gold">
                Enroll Now
              </Button>
            </Link>
            <Link href="/#demo">
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 bg-white/10 text-white hover:bg-white/20"
              >
                <Calendar className="size-4" /> Book Free Demo Class
              </Button>
            </Link>
          </div>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
            <span className="size-2 animate-pulse rounded-full bg-accent" />
            Live admissions this week:{" "}
            <AnimatedCounter value={siteConfig.liveAdmissionCount} className="font-bold text-accent" />{" "}
            students enrolled
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative hidden lg:block"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] border border-white/20 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=1000&fit=crop"
              alt="Students learning together"
              fill
              className="object-cover"
              sizes="400px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--blue-deep)]/70 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/15 p-4 text-white backdrop-blur-md">
              <p className="flex items-center gap-2 text-sm font-medium">
                <Play className="size-4 text-accent" /> Campus learning culture
              </p>
              <p className="mt-1 text-xs text-white/80">
                Mentorship · Weekly tests · Smart classrooms
              </p>
            </div>
          </div>

          {floatStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="absolute rounded-2xl border border-white/25 bg-white/15 px-4 py-3 text-white shadow-xl backdrop-blur-md"
              style={{
                top: `${12 + i * 18}%`,
                [i % 2 === 0 ? "left" : "right"]: "-6%",
              }}
            >
              <p className="font-display text-2xl font-bold">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-xs text-white/80">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
