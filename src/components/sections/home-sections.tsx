"use client";

import { motion } from "framer-motion";
import {
  AirVent,
  Armchair,
  Award,
  BarChart3,
  BookOpen,
  Cctv,
  CircleParking,
  ClipboardCheck,
  Compass,
  Computer,
  Droplets,
  FileCheck2,
  GraduationCap,
  HeartHandshake,
  IndianRupee,
  Library,
  MessageCircleQuestion,
  MonitorPlay,
  MonitorSmartphone,
  Projector,
  TabletSmartphone,
  Users,
  UsersRound,
  Wifi,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { announcements, events } from "@/data/announcements";
import { batches } from "@/data/batches";
import { getFeaturedCourses } from "@/data/courses";
import { faculty } from "@/data/faculty";
import { blogs } from "@/data/blogs";
import { faqs } from "@/data/faqs";
import { results, resultStats } from "@/data/results";
import { testimonials, googleReviews } from "@/data/testimonials";
import {
  admissionSteps,
  facilities,
  scholarships,
  siteConfig,
  whyChoose,
} from "@/data/site";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { CourseCard, FacultyCard, ResultCard } from "@/components/shared/cards";
import { SectionHeader } from "@/components/shared/section-header";
import { whatsappLink } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  Users,
  HeartHandshake,
  ClipboardCheck,
  MessageCircleQuestion,
  MonitorPlay,
  IndianRupee,
  Compass,
  BarChart3,
  UsersRound,
  TabletSmartphone,
  Award,
  MonitorSmartphone,
  AirVent,
  Library,
  Computer,
  Projector,
  Wifi,
  Cctv,
  CircleParking,
  Droplets,
  Armchair,
  BookOpen,
  FileCheck2,
};

const chartData = [
  { month: "Jul", score: 62 },
  { month: "Aug", score: 68 },
  { month: "Sep", score: 74 },
  { month: "Oct", score: 79 },
  { month: "Nov", score: 85 },
  { month: "Dec", score: 91 },
];

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function HomeSections() {
  const featured = getFeaturedCourses().slice(0, 6);
  const [demoDate, setDemoDate] = useState("");
  const [demoTime, setDemoTime] = useState("10:00");
  const [demoName, setDemoName] = useState("");
  const [demoPhone, setDemoPhone] = useState("");

  const submitDemo = () => {
    const msg = `Free Demo Booking\nName: ${demoName}\nPhone: ${demoPhone}\nDate: ${demoDate}\nTime: ${demoTime}`;
    window.open(whatsappLink(siteConfig.whatsapp, msg), "_blank");
  };

  return (
    <>
      {/* Trust */}
      <section className="section-pad border-b border-border bg-background">
        <div className="container-premium grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Years of Excellence", value: siteConfig.stats.years, suffix: "+" },
            { label: "Qualified Teachers", value: siteConfig.stats.teachers, suffix: "+" },
            { label: "Students Enrolled", value: siteConfig.stats.students, suffix: "+" },
            { label: "Parent Satisfaction", value: siteConfig.stats.satisfaction, suffix: "%" },
          ].map((item, i) => (
            <Reveal key={item.label} delay={i * 0.05}>
              <div className="rounded-2xl border border-border bg-gradient-to-br from-card to-blue-soft/40 p-6 text-center shadow-sm">
                <p className="font-display text-4xl font-bold text-primary">
                  <AnimatedCounter value={item.value} suffix={item.suffix} />
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Notices */}
      <section className="border-b border-border bg-primary text-primary-foreground">
        <div className="overflow-hidden py-3">
          <div className="marquee flex w-max gap-10 whitespace-nowrap text-sm font-medium">
            {[...announcements, ...announcements].map((a, idx) => (
              <span key={`${a.id}-${idx}`} className="inline-flex items-center gap-2">
                <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold uppercase text-accent-foreground">
                  {a.type}
                </span>
                {a.title}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Motivation quote */}
      <section className="section-pad premium-gradient">
        <div className="container-premium">
          <Reveal>
            <blockquote className="mx-auto max-w-3xl rounded-3xl border border-border bg-card/80 p-8 text-center shadow-sm backdrop-blur">
              <p className="font-display text-2xl text-foreground md:text-3xl">
                “{siteConfig.motivationQuote.text}”
              </p>
              <footer className="mt-4 text-sm text-muted-foreground">
                — {siteConfig.motivationQuote.author}
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Why choose */}
      <section className="section-pad">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Why Choose Us"
            title="Why Choose Excellence Academy"
            description="A complete academic ecosystem designed for board success, competitive readiness, and confident learning."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {whyChoose.map((item, i) => {
              const Icon = iconMap[item.icon] ?? GraduationCap;
              return (
                <Reveal key={item.title} delay={i * 0.03}>
                  <article className="card-lift h-full rounded-2xl border border-border bg-card p-5 shadow-sm">
                    <div className="mb-3 flex size-11 items-center justify-center rounded-xl bg-secondary text-primary">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="section-pad premium-gradient">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Programs"
            title="Featured Courses"
            description="From Class 6 foundations to JEE & NEET pathways — structured for measurable growth."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featured.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/courses">
              <Button size="lg">View All Courses</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Topper of month */}
      <section className="section-pad">
        <div className="container-premium">
          <Reveal>
            <div className="grid items-center gap-8 overflow-hidden rounded-3xl border border-border bg-gradient-to-r from-[var(--blue-deep)] to-primary p-6 text-white md:grid-cols-[240px_1fr] md:p-10">
              <div className="mx-auto flex aspect-square w-48 items-center justify-center rounded-2xl border-4 border-accent bg-white/10 shadow-xl md:w-full">
                <span className="font-display text-5xl font-bold text-accent">
                  {siteConfig.topperOfMonth.name
                    .split(" ")
                    .map((p) => p[0])
                    .join("")
                    .slice(0, 2)}
                </span>
              </div>
              <div>
                <Badge className="mb-3 bg-accent text-accent-foreground">Topper of the Month</Badge>
                <h2 className="font-display text-3xl font-semibold md:text-4xl">
                  {siteConfig.topperOfMonth.name}
                </h2>
                <p className="mt-2 text-white/80">
                  {siteConfig.topperOfMonth.classLabel} · {siteConfig.topperOfMonth.percentage}% ·{" "}
                  {siteConfig.topperOfMonth.achievement}
                </p>
                <p className="mt-4 max-w-xl text-white/75">
                  Celebrating consistency, discipline, and mentorship — the Excellence Academy way.
                </p>
                <Link href="/results" className="mt-6 inline-block">
                  <Button variant="gold">View All Results</Button>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Results + charts */}
      <section className="section-pad premium-gradient">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Results"
            title="Success Stories in Numbers"
            description="Transparent outcomes that parents trust — tracked, celebrated, and continuously improved."
          />
          <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {resultStats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-border bg-card p-5 text-center shadow-sm">
                <p className="font-display text-3xl font-bold text-primary">
                  <AnimatedCounter value={s.value} suffix={s.label.includes("Improvement") ? "%" : "+"} />
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="mb-8 h-64 rounded-2xl border border-border bg-card p-4 shadow-sm">
            <p className="mb-2 text-sm font-medium">Average batch score progression</p>
            <ResponsiveContainer width="100%" height="90%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="scoreFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0b4f9c" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="#0b4f9c" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                <XAxis dataKey="month" />
                <YAxis domain={[50, 100]} />
                <Tooltip />
                <Area type="monotone" dataKey="score" stroke="#0b4f9c" fill="url(#scoreFill)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {results.slice(0, 4).map((r) => (
              <ResultCard key={r.id} result={r} />
            ))}
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="section-pad">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Mentors"
            title="Meet Our Expert Faculty"
            description="Experienced educators who combine subject depth with personal mentorship."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {faculty.slice(0, 3).map((p) => (
              <FacultyCard key={p.id} person={p} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/faculty">
              <Button variant="outline">View Full Faculty</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Demo booking */}
      <section id="demo" className="section-pad premium-gradient">
        <div className="container-premium grid items-center gap-8 lg:grid-cols-2">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Try Before You Enroll"
              title="Book a Free Demo Class"
              description="Pick a date and time. Experience our classroom energy, teaching style, and mentorship."
            />
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• No obligation · Limited weekly slots</li>
              <li>• Subject expert demo for your class</li>
              <li>• Counseling on course & batch fit</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-lg">
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <Label>Student Name</Label>
                <Input className="mt-1" value={demoName} onChange={(e) => setDemoName(e.target.value)} />
              </div>
              <div className="sm:col-span-2">
                <Label>Phone / WhatsApp</Label>
                <Input className="mt-1" value={demoPhone} onChange={(e) => setDemoPhone(e.target.value)} />
              </div>
              <div>
                <Label>Preferred Date</Label>
                <Input type="date" className="mt-1" value={demoDate} onChange={(e) => setDemoDate(e.target.value)} />
              </div>
              <div>
                <Label>Preferred Time</Label>
                <Input type="time" className="mt-1" value={demoTime} onChange={(e) => setDemoTime(e.target.value)} />
              </div>
            </div>
            <Button className="mt-4 w-full" variant="gold" onClick={submitDemo}>
              Confirm Demo Booking
            </Button>
          </div>
        </div>
      </section>

      {/* Batches */}
      <section className="section-pad">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Upcoming"
            title="Upcoming Batches"
            description="Secure your seat early — popular batches fill quickly."
          />
          <BatchCountdown startDate={batches[0].startDate} />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {batches.map((b) => (
              <article key={b.id} className="card-lift rounded-2xl border border-border bg-card p-5 shadow-sm">
                <h3 className="font-display text-lg font-semibold">{b.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">Starts {b.startDate}</p>
                <p className="text-sm text-muted-foreground">{b.timing}</p>
                <p className="text-sm text-muted-foreground">Faculty: {b.faculty}</p>
                <p className="mt-3 text-sm font-semibold text-accent">{b.seatsLeft} seats left</p>
                <Link href="/admission" className="mt-4 block">
                  <Button className="w-full" size="sm">
                    Enroll
                  </Button>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section-pad premium-gradient">
        <div className="container-premium">
          <SectionHeader eyebrow="Campus" title="Facilities Built for Focus" />
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {facilities.map((f) => {
              const Icon = iconMap[f.icon] ?? BookOpen;
              return (
                <div key={f.title} className="card-lift flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-secondary text-primary">
                    <Icon className="size-5" />
                  </div>
                  <p className="text-sm font-medium">{f.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Admission process */}
      <section className="section-pad">
        <div className="container-premium">
          <SectionHeader eyebrow="Process" title="Simple Admission Journey" />
          <div className="relative grid gap-4 md:grid-cols-5">
            {admissionSteps.map((step) => (
              <div key={step.step} className="rounded-2xl border border-border bg-card p-5 text-center shadow-sm">
                <div className="mx-auto mb-3 flex size-10 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                  {step.step}
                </div>
                <h3 className="font-semibold">{step.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/admission">
              <Button size="lg" variant="gold">
                Start Online Admission
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Scholarship */}
      <section className="section-pad premium-gradient">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Support"
            title="Scholarships That Reward Merit"
            description="We believe talent deserves opportunity — explore our scholarship pathways."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {scholarships.map((s) => (
              <article key={s.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <Award className="mb-3 size-8 text-accent" />
                <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/scholarship">
              <Button>Apply for Scholarship</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-pad">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Voices"
            title="Student & Parent Success Stories"
            description={`Google rating ${googleReviews.rating}/5 from ${googleReviews.count}+ reviews`}
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.slice(0, 3).map((t) => (
              <article key={t.id} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                <div className="mb-3 flex gap-1 text-accent">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">“{t.text}”</p>
                <div className="mt-4">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.role === "parent" ? "Parent" : "Student"}
                    {t.classLabel ? ` · ${t.classLabel}` : ""}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/testimonials">
              <Button variant="outline">Read More Reviews</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery teaser */}
      <section className="section-pad premium-gradient">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Campus Life"
            title="Gallery Highlights"
            description="Campus photos will appear here once your approved images are added."
          />
          <div className="rounded-3xl border border-dashed border-border bg-card/60 px-6 py-16 text-center">
            <p className="text-muted-foreground">Photo gallery coming soon.</p>
            <Link href="/gallery" className="mt-6 inline-block">
              <Button variant="outline">Open Gallery Page</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Events + notice board */}
      <section className="section-pad">
        <div className="container-premium grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeader align="left" eyebrow="Events" title="Upcoming Events" />
            <div className="space-y-3">
              {events.map((e) => (
                <article key={e.id} className="rounded-2xl border border-border bg-card p-4 shadow-sm">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-semibold">{e.title}</h3>
                    <Badge>{e.type}</Badge>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{e.date}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{e.description}</p>
                </article>
              ))}
            </div>
            <Link href="/events" className="mt-4 inline-block">
              <Button variant="outline" size="sm">
                All Events
              </Button>
            </Link>
          </div>
          <div>
            <SectionHeader align="left" eyebrow="Notice Board" title="Pinned Announcements" />
            <div className="space-y-3">
              {announcements
                .filter((a) => a.pinned)
                .map((a) => (
                  <article key={a.id} className="rounded-2xl border border-accent/30 bg-gold-soft/40 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-accent">Pinned</p>
                    <h3 className="mt-1 font-semibold">{a.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{a.content}</p>
                  </article>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Performance tracking */}
      <section className="section-pad premium-gradient">
        <div className="container-premium grid items-center gap-8 lg:grid-cols-2">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Tracking"
              title="Performance Tracking Parents Can Trust"
              description="Weekly tests, monthly reports, attendance insights, and progress analysis — all designed for transparency."
            />
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Weekly tests with actionable feedback</li>
              <li>• Monthly parent reports</li>
              <li>• Attendance monitoring</li>
              <li>• Progress graphs and weak-area analysis</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/attendance">
                <Button>Attendance Portal</Button>
              </Link>
              <Link href="/login/parent">
                <Button variant="outline">Parent Login</Button>
              </Link>
            </div>
          </div>
          <div className="h-72 rounded-3xl border border-border bg-card p-4 shadow-sm">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.25} />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="score" stroke="#c9a227" fill="#f7efd6" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Career counseling */}
      <section className="section-pad">
        <div className="container-premium rounded-3xl border border-border bg-gradient-to-br from-blue-soft to-card p-8 md:p-12">
          <SectionHeader
            eyebrow="Guidance"
            title="Career Counseling"
            description="Stream selection, entrance pathways, and long-term academic planning with experienced counselors."
          />
          <div className="text-center">
            <Link href="/career-counseling">
              <Button size="lg" variant="gold">
                Book Counseling Session
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="section-pad premium-gradient">
        <div className="container-premium">
          <SectionHeader eyebrow="Insights" title="From Our Blog" />
          <div className="grid gap-5 md:grid-cols-3">
            {blogs.slice(0, 3).map((b) => (
              <Link key={b.id} href={`/blog/${b.slug}`} className="card-lift overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <div className="relative aspect-[16/10]">
                  <Image src={b.cover} alt={b.title} fill className="object-cover" sizes="33vw" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold text-accent">{b.category}</p>
                  <h3 className="mt-1 font-display text-lg font-semibold">{b.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{b.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad">
        <div className="container-premium max-w-3xl">
          <SectionHeader eyebrow="FAQs" title="Frequently Asked Questions" />
          <Accordion>
            {faqs.slice(0, 6).map((f) => (
              <AccordionItem key={f.id} id={f.id} question={f.question} answer={f.answer} />
            ))}
          </Accordion>
          <div className="mt-6 text-center">
            <Link href="/faqs">
              <Button variant="outline">View All FAQs</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="section-pad premium-gradient">
        <div className="container-premium grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Visit Us"
              title="Contact Excellence Academy"
              description={siteConfig.address}
            />
            <div className="space-y-2 text-sm">
              <p>Phone: {siteConfig.phone}</p>
              <p>Email: {siteConfig.email}</p>
              {siteConfig.businessHours.map((h) => (
                <p key={h.day} className="text-muted-foreground">
                  {h.day}: {h.hours}
                </p>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact">
                <Button>Contact Page</Button>
              </Link>
              <a href={siteConfig.mapsDirectionsUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline">Get Directions</Button>
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border shadow-lg">
            <iframe
              title="Excellence Academy Map"
              src={siteConfig.mapsEmbedUrl}
              className="h-80 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Newsletter already in footer; social feed ready */}
      <section className="section-pad border-t border-border">
        <div className="container-premium text-center">
          <SectionHeader
            eyebrow="Social"
            title="Follow Our Journey"
            description="Instagram & Facebook feed integration-ready — connect your pages in site config."
          />
          <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex aspect-square items-center justify-center rounded-2xl border border-dashed border-border bg-muted/40 text-sm text-muted-foreground"
              >
                Social post {i}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function BatchCountdown({ startDate }: { startDate: string }) {
  const [countdown, setCountdown] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, new Date(startDate).getTime() - Date.now());
      setCountdown({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [startDate]);

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {(
        [
          ["Days", countdown.d],
          ["Hours", countdown.h],
          ["Mins", countdown.m],
          ["Secs", countdown.s],
        ] as const
      ).map(([label, value]) => (
        <div
          key={label}
          className="min-w-20 rounded-2xl border border-border bg-card px-4 py-3 text-center shadow-sm"
        >
          <p className="font-display text-2xl font-bold text-primary">{value}</p>
          <p className="text-xs text-muted-foreground">{label}</p>
        </div>
      ))}
    </div>
  );
}
