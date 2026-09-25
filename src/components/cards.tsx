import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Clock,
  Languages,
  Star,
  Video,
} from "lucide-react";
import type { Course } from "@/data/courses";
import type { FacultyMember } from "@/data/faculty";
import type { Topper } from "@/data/results";
import type { Testimonial } from "@/data/testimonials";
import type { Post } from "@/data/blog";
import type { Batch, SiteEvent } from "@/data/announcements";
import { Avatar } from "@/components/avatar";
import { site, whatsappUrl } from "@/data/site";
import { formatDate, formatShortDate } from "@/lib/utils";

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="card card-hover flex flex-col p-5">
      <div className="flex items-start justify-between gap-3">
        <h3 className="heading text-lg">{course.title}</h3>
        <span className="chip shrink-0">{course.level}</span>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{course.description}</p>

      <ul className="mt-4 space-y-1.5 text-xs text-muted-foreground">
        <li className="flex items-center gap-2">
          <Clock className="size-3.5 text-primary" />
          {course.duration}
        </li>
        <li className="flex items-center gap-2">
          <Languages className="size-3.5 text-primary" />
          {course.medium}
        </li>
      </ul>

      <p className="mt-3 text-xs text-muted-foreground">
        <span className="font-semibold text-foreground">Subjects:</span>{" "}
        {course.subjects.join(", ")}
      </p>

      <p className="mt-3 font-display text-lg font-semibold text-primary">
        {course.fee}
      </p>

      <Link
        href={`/courses/${course.slug}`}
        className="btn btn-outline mt-4 w-full rounded-lg"
      >
        View Details
        <ArrowRight className="size-3.5" />
      </Link>
    </article>
  );
}

export function FacultyCard({ member }: { member: FacultyMember }) {
  return (
    <article className="card card-hover overflow-hidden">
      <div className="section-tinted grid h-36 place-items-center">
        <Avatar name={member.name} className="size-16 text-xl" />
      </div>
      <div className="p-5">
        <h3 className="heading text-base">{member.name}</h3>
        <p className="text-sm font-medium text-primary">{member.subject}</p>
        <p className="mt-1 text-xs text-muted-foreground">
          {member.qualification} · {member.experience}
        </p>
        <p className="mt-3 text-sm text-muted-foreground">{member.bio}</p>
      </div>
    </article>
  );
}

export function TopperCard({ topper }: { topper: Topper }) {
  return (
    <article className="card card-hover relative p-4">
      {topper.topper ? (
        <span className="absolute top-3 right-3 rounded-full bg-gold px-2 py-0.5 text-[10px] font-bold tracking-wide text-[#1a1405] uppercase">
          Topper
        </span>
      ) : null}
      <div className="flex items-center gap-3">
        <Avatar name={topper.name} />
        <div>
          <h3 className="font-display text-sm font-semibold">{topper.name}</h3>
          <p className="text-xs text-muted-foreground">
            {topper.course} · {topper.year}
          </p>
        </div>
      </div>
      <p className="mt-3 font-display text-xl font-semibold text-primary">
        {topper.percentage}%
      </p>
      <div className="mt-2 flex flex-wrap gap-1.5">
        <span className="chip">{topper.marks}</span>
        {topper.rank ? <span className="chip">{topper.rank}</span> : null}
        <span className="chip">{topper.highlight}</span>
      </div>
    </article>
  );
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="card card-hover flex h-full flex-col p-5">
      <div className="flex items-center gap-1 text-gold">
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <Star key={index} className="size-3.5 fill-current" />
        ))}
        {testimonial.video ? (
          <span className="ml-auto inline-flex items-center gap-1 text-[11px] text-muted-foreground">
            <Video className="size-3.5" /> Video
          </span>
        ) : null}
      </div>
      <blockquote className="mt-3 flex-1 text-sm text-muted-foreground">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <footer className="mt-4 flex items-center gap-3">
        <Avatar name={testimonial.name} className="size-9 text-xs" tone="gold" />
        <div>
          <p className="text-sm font-semibold">{testimonial.name}</p>
          <p className="text-xs text-muted-foreground">
            {testimonial.role}
            {testimonial.context ? ` · ${testimonial.context}` : ""}
          </p>
        </div>
      </footer>
    </article>
  );
}

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="card card-hover overflow-hidden">
      <Link href={`/blog/${post.slug}`}>
        <div className="section-tinted h-32" />
        <div className="p-5">
          <p className="eyebrow">{post.category}</p>
          <h3 className="heading mt-2 text-base">{post.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
          <p className="mt-3 text-xs text-muted-foreground">
            {formatShortDate(post.date)} · {post.readingTime} read
          </p>
        </div>
      </Link>
    </article>
  );
}

export function EventCard({ event }: { event: SiteEvent }) {
  return (
    <article className="card card-hover p-4">
      <div className="flex items-start justify-between gap-3">
        <h3 className="heading text-base">{event.title}</h3>
        <span className="chip shrink-0">{event.category}</span>
      </div>
      <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
        <CalendarDays className="size-3.5" />
        {formatDate(event.date, true)}
      </p>
      <p className="mt-2 text-sm text-muted-foreground">{event.description}</p>
    </article>
  );
}

export function BatchCard({
  batch,
  detailed = false,
}: {
  batch: Batch;
  detailed?: boolean;
}) {
  return (
    <article className="card card-hover flex flex-col p-5">
      <div className="flex items-start justify-between gap-3">
        <h3 className="heading text-base">{batch.name}</h3>
        <span className="chip shrink-0 border-gold/40 bg-gold-soft text-gold">
          {batch.seatsLeft} seats left
        </span>
      </div>
      <p className="mt-1 text-xs text-muted-foreground">{batch.course}</p>
      <ul className="mt-3 flex-1 space-y-1 text-xs text-muted-foreground">
        <li>Starts {formatDate(batch.startDate)}</li>
        <li>{batch.timing}</li>
        <li>
          <span className="font-semibold text-foreground">Faculty:</span>{" "}
          {batch.faculty}
        </li>
      </ul>
      <div className="mt-4 space-y-2">
        <a
          href={whatsappUrl(
            `Hello ${site.name}, I want to enroll in the ${batch.name} batch.`,
          )}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary w-full rounded-lg"
        >
          {detailed ? "Enroll via WhatsApp" : "Enroll"}
        </a>
        {detailed ? (
          <Link href="/admission" className="btn btn-outline w-full rounded-lg">
            Admission Form
          </Link>
        ) : null}
      </div>
    </article>
  );
}
