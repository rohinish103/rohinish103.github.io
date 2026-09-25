import Link from "next/link";
import {
  Calendar,
  CheckCircle2,
  GraduationCap,
  Quote,
  Star,
} from "lucide-react";
import { Button, Card, Initials, SectionHeading } from "@/components/ui";
import { DemoForm } from "@/components/forms";
import { FaqList } from "@/components/faq-list";
import { Countdown } from "@/components/countdown";
import { featuredCourses } from "@/data/courses";
import { faculty } from "@/data/faculty";
import { posts } from "@/data/blog";
import { faqs } from "@/data/faqs";
import { results, resultStats } from "@/data/results";
import {
  admissionSteps,
  batches,
  events,
  facilities,
  notices,
  scholarships,
  testimonials,
  whyChoose,
} from "@/data/content";
import { mapsUrl, site } from "@/data/site";

const heroStats = [
  { value: "0+", label: "Students" },
  { value: "0%", label: "Success Rate" },
  { value: "0+", label: "Years Experience" },
  { value: "0+", label: "Expert Faculty" },
];

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[92vh] overflow-hidden">
        <img src={site.heroImage} alt="Students studying at Excellence Academy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(201,162,39,0.2),transparent_40%)]" />
        <div className="container-premium relative z-10 grid min-h-[92vh] items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="fade-up text-white">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
              Beawar&apos;s Trusted Coaching Institute
            </p>
            <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Excellence Academy
            </h1>
            <p className="mt-4 max-w-xl font-display text-2xl text-white/90 md:text-3xl">{site.tagline}</p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">{site.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/admission/" variant="accent" className="h-12 rounded-xl px-8 text-base">
                Enroll Now
              </Button>
              <Button href="/#demo" variant="white" className="h-12 rounded-xl px-8 text-base">
                <Calendar className="size-4" /> Book Free Demo Class
              </Button>
            </div>
            <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
              <span className="size-2 animate-pulse rounded-full bg-accent" />
              Live admissions this week: <span className="tabular-nums font-bold text-accent">0</span> students enrolled
            </p>
          </div>
          <div className="fade-in relative hidden lg:block">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] border border-white/20 shadow-2xl">
              <img src={site.portraitImage} alt="Students learning together" className="h-full w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--blue-deep)]/70 to-transparent p-6 text-white">
                <p className="text-sm uppercase tracking-[0.18em] text-accent">Campus learning culture</p>
                <p className="mt-1 font-display text-xl">Mentorship · Weekly tests · Smart classrooms</p>
              </div>
            </div>
            <div className="absolute -left-3 bottom-8 grid grid-cols-2 gap-3 rounded-2xl border border-white/20 bg-white/10 p-4 text-white backdrop-blur">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl font-semibold">{stat.value}</p>
                  <p className="text-xs text-white/75">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-border bg-blue-deep text-white">
        <div className="marquee flex w-max gap-10 py-3 text-sm">
          {[...notices, ...notices, ...notices, ...notices].map((notice, index) => (
            <span key={`${notice.title}-${index}`} className="flex items-center gap-2 whitespace-nowrap">
              <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold uppercase text-accent-foreground">
                {notice.type}
              </span>
              {notice.title}
            </span>
          ))}
        </div>
      </div>

      <section className="section-pad">
        <div className="container-premium text-center">
          <Quote className="mx-auto mb-4 size-8 text-accent" />
          <p className="font-display text-2xl italic md:text-3xl">
            “Success is the sum of small efforts repeated day in and day out.”
          </p>
          <p className="mt-3 text-sm text-muted-foreground">— Robert Collier</p>
        </div>
      </section>

      <section className="section-pad premium-gradient">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Why Choose Excellence Academy"
            subtitle="A complete academic ecosystem designed for board success, competitive readiness, and confident learning."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {whyChoose.map((item) => (
              <Card key={item.title}>
                <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Programs"
            title="Featured Courses"
            subtitle="From Class 6 foundations to JEE & NEET pathways — structured for measurable growth."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredCourses.map((course) => (
              <Card key={course.slug} className="flex flex-col">
                <span className="mb-3 w-fit rounded-full bg-secondary px-2.5 py-1 text-xs font-semibold text-primary">
                  {course.classLabel}
                </span>
                <h3 className="font-display text-xl font-semibold">{course.name}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{course.overview}</p>
                <p className="mt-4 text-xs text-muted-foreground">
                  {course.duration} · {course.medium}
                </p>
                <p className="mt-1 text-sm">Subjects: {course.subjects.join(", ")}</p>
                <div className="mt-5 flex items-center justify-between">
                  <p className="font-display text-lg font-semibold text-primary">{course.fees}</p>
                  <Button href={`/courses/${course.slug}/`} variant="ghost" className="px-3">
                    View Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button href="/courses/" variant="outline">
              View All Courses
            </Button>
          </div>
        </div>
      </section>

      <section className="section-pad bg-gradient-to-r from-gold-soft/50 via-background to-blue-soft/40">
        <div className="container-premium">
          <Card className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <Initials value="AS" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Topper of the Month</p>
                <h3 className="font-display text-2xl font-semibold">Ananya Sharma</h3>
                <p className="text-sm text-muted-foreground">Class 10 · 97.8% · Board Topper · Beawar District</p>
              </div>
            </div>
            <div>
              <p className="max-w-md text-sm text-muted-foreground">
                Celebrating consistency, discipline, and mentorship — the Excellence Academy way.
              </p>
              <Button href="/results/" variant="outline" className="mt-3">
                View All Results
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Results"
            title="Success Stories in Numbers"
            subtitle="Transparent outcomes that parents trust — tracked, celebrated, and continuously improved."
          />
          <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {resultStats.map((stat) => (
              <Card key={stat.label} className="text-center">
                <p className="font-display text-3xl font-semibold text-primary">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </Card>
            ))}
          </div>
          <p className="mb-6 text-sm text-muted-foreground">Average batch score progression</p>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {results.slice(0, 4).map((result) => (
              <Card key={`${result.name}-${result.program}`}>
                {result.badge ? (
                  <span className="mb-3 inline-block rounded-full bg-gold-soft px-2 py-0.5 text-[11px] font-semibold text-accent-foreground">
                    Topper
                  </span>
                ) : null}
                <div className="flex items-center gap-3">
                  <Initials value={result.initials} />
                  <div>
                    <h3 className="font-display text-lg font-semibold">{result.name}</h3>
                    <p className="text-xs text-muted-foreground">
                      {result.program} · {result.year}
                    </p>
                  </div>
                </div>
                <p className="mt-4 font-display text-3xl font-semibold text-primary">{result.percent}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {result.marks} · {result.highlight} {result.badge ? `· ${result.badge}` : ""}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad premium-gradient">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Mentors"
            title="Meet Our Expert Faculty"
            subtitle="Experienced educators who combine subject depth with personal mentorship."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {faculty.slice(0, 3).map((member) => (
              <Card key={member.name}>
                <Initials value={member.initials} />
                <h3 className="mt-4 font-display text-xl font-semibold">{member.name}</h3>
                <p className="text-sm font-medium text-primary">{member.subject}</p>
                <p className="mt-1 text-xs text-muted-foreground">{member.credentials}</p>
                <p className="mt-3 text-sm text-muted-foreground">{member.bio}</p>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button href="/faculty/" variant="outline">
              View Full Faculty
            </Button>
          </div>
        </div>
      </section>

      <section id="demo" className="section-pad">
        <div className="container-premium grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="Try Before You Enroll"
              title="Book a Free Demo Class"
              subtitle="Pick a date and time. Experience our classroom energy, teaching style, and mentorship."
            />
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• No obligation · Limited weekly slots</li>
              <li>• Subject expert demo for your class</li>
              <li>• Counseling on course & batch fit</li>
            </ul>
          </div>
          <Card>
            <DemoForm />
          </Card>
        </div>
      </section>

      <section className="section-pad bg-muted/30">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Upcoming"
            title="Upcoming Batches"
            subtitle="Secure your seat early — popular batches fill quickly."
          />
          <Countdown target="2026-04-01T17:00:00" />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {batches.map((batch) => (
              <Card key={batch.name} className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <h3 className="font-display text-xl font-semibold">{batch.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Starts {batch.starts}</p>
                  <p className="text-sm">{batch.time}</p>
                  <p className="text-sm text-muted-foreground">Faculty: {batch.faculty}</p>
                  <p className="mt-2 text-xs font-semibold text-accent">{batch.seats} seats left</p>
                </div>
                <Button href="/admission/" variant="accent">
                  Enroll
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-premium">
          <SectionHeading eyebrow="Campus" title="Facilities Built for Focus" />
          <div className="flex flex-wrap gap-3">
            {facilities.map((item) => (
              <span key={item} className="rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad premium-gradient">
        <div className="container-premium">
          <SectionHeading eyebrow="Process" title="Simple Admission Journey" />
          <div className="grid gap-4 md:grid-cols-5">
            {admissionSteps.map((step, index) => (
              <Card key={step.title}>
                <p className="font-display text-3xl text-primary">{index + 1}</p>
                <h3 className="mt-2 font-display text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.text}</p>
              </Card>
            ))}
          </div>
          <div className="mt-8">
            <Button href="/admission/" variant="accent">
              Start Online Admission
            </Button>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Support"
            title="Scholarships That Reward Merit"
            subtitle="We believe talent deserves opportunity — explore our scholarship pathways."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {scholarships.map((item) => (
              <Card key={item.title}>
                <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
              </Card>
            ))}
          </div>
          <div className="mt-8">
            <Button href="/scholarship/" variant="outline">
              Apply for Scholarship
            </Button>
          </div>
        </div>
      </section>

      <section className="section-pad bg-muted/30">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Voices"
            title="Student & Parent Success Stories"
            subtitle={`Google rating ${site.googleReviews.rating}/5 from ${site.googleReviews.count}+ reviews`}
          />
          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.slice(0, 3).map((item) => (
              <Card key={item.name}>
                <div className="mb-3 flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed">“{item.quote}”</p>
                <p className="mt-4 font-semibold">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.role}</p>
              </Card>
            ))}
          </div>
          <div className="mt-8">
            <Button href="/testimonials/" variant="outline">
              Read More Reviews
            </Button>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-premium grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Campus Life" title="Gallery Highlights" />
            <Card className="flex min-h-[220px] flex-col items-center justify-center text-center">
              <p className="text-muted-foreground">Campus photos will appear here once your approved images are added.</p>
              <p className="mt-2 text-sm text-muted-foreground">Photo gallery coming soon.</p>
              <Button href="/gallery/" variant="outline" className="mt-5">
                Open Gallery Page
              </Button>
            </Card>
          </div>
          <div>
            <SectionHeading eyebrow="Events" title="Upcoming Events" />
            <div className="space-y-3">
              {events.map((event) => (
                <Card key={event.title}>
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-lg font-semibold">{event.title}</h3>
                    <span className="rounded-full bg-secondary px-2 py-0.5 text-xs text-primary">{event.type}</span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{event.date}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{event.text}</p>
                </Card>
              ))}
            </div>
            <Button href="/events/" variant="ghost" className="mt-4 px-0">
              All Events
            </Button>
          </div>
        </div>
      </section>

      <section className="section-pad bg-muted/30">
        <div className="container-premium">
          <SectionHeading eyebrow="Notice Board" title="Pinned Announcements" />
          <div className="grid gap-4 md:grid-cols-3">
            {notices.map((notice) => (
              <Card key={notice.title}>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Pinned</span>
                <h3 className="mt-2 font-display text-xl font-semibold">{notice.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{notice.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-premium grid gap-8 lg:grid-cols-2">
          <Card>
            <SectionHeading
              eyebrow="Tracking"
              title="Performance Tracking Parents Can Trust"
              subtitle="Weekly tests, monthly reports, attendance insights, and progress analysis — all designed for transparency."
            />
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <CheckCircle2 className="size-4 text-primary" /> Weekly tests with actionable feedback
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="size-4 text-primary" /> Monthly parent reports
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="size-4 text-primary" /> Attendance monitoring
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="size-4 text-primary" /> Progress graphs and weak-area analysis
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/attendance/" variant="outline">
                Attendance Portal
              </Button>
              <Button href="/login/parent/" variant="ghost">
                Parent Login
              </Button>
            </div>
          </Card>
          <Card>
            <GraduationCap className="mb-3 size-8 text-primary" />
            <SectionHeading eyebrow="Guidance" title="Career Counseling" />
            <p className="text-sm text-muted-foreground">
              Stream selection, entrance pathways, and long-term academic planning with experienced counselors.
            </p>
            <Button href="/career-counseling/" variant="accent" className="mt-6">
              Book Counseling Session
            </Button>
          </Card>
        </div>
      </section>

      <section className="section-pad premium-gradient">
        <div className="container-premium">
          <SectionHeading eyebrow="Insights" title="From Our Blog" />
          <div className="grid gap-4 md:grid-cols-3">
            {posts.slice(0, 3).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}/`}>
                <Card className="h-full">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{post.category}</span>
                  <h3 className="mt-2 font-display text-xl font-semibold">{post.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-premium">
          <SectionHeading eyebrow="FAQs" title="Frequently Asked Questions" />
          <FaqList items={faqs.slice(0, 6)} />
          <div className="mt-8">
            <Button href="/faqs/" variant="outline">
              View All FAQs
            </Button>
          </div>
        </div>
      </section>

      <section className="section-pad bg-muted/30">
        <div className="container-premium grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Visit Us" title="Contact Excellence Academy" />
            <p className="text-sm text-muted-foreground">{site.address}</p>
            <div className="mt-4 space-y-1 text-sm">
              <p>Phone: {site.phoneDisplay}</p>
              <p>Email: {site.email}</p>
              <p>{site.hours.weekday}</p>
              <p>{site.hours.sunday}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/contact/" variant="accent">
                Contact Page
              </Button>
              <Button href={mapsUrl()} variant="outline">
                Get Directions
              </Button>
            </div>
          </div>
          <Card>
            <SectionHeading eyebrow="Social" title="Follow Our Journey" />
            <p className="text-sm text-muted-foreground">
              Instagram & Facebook feed integration-ready — connect your pages in site config.
            </p>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {["Social post 1", "Social post 2", "Social post 3"].map((label) => (
                <div key={label} className="flex aspect-square items-center justify-center rounded-xl bg-muted text-center text-xs text-muted-foreground">
                  {label}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
