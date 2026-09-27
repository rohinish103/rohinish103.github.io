import type { Announcement, EventItem } from "@/types";

export const announcements: Announcement[] = [
  {
    id: "1",
    title: "Admissions Open for 2026–27",
    type: "admission",
    date: "2026-03-01",
    pinned: true,
    content: "Limited seats for Class 6–12, JEE & NEET foundation. Book a free demo class today.",
  },
  {
    id: "2",
    title: "Holiday Notice — Holi",
    type: "holiday",
    date: "2026-03-14",
    pinned: true,
    content: "Institute will remain closed on Holi. Regular classes resume the next working day.",
  },
  {
    id: "3",
    title: "Weekly Test Schedule",
    type: "exam",
    date: "2026-03-10",
    content: "Class 9–12 weekly tests every Saturday. Syllabus shared in WhatsApp groups.",
  },
  {
    id: "4",
    title: "Parent-Teacher Meeting",
    type: "meeting",
    date: "2026-03-22",
    pinned: true,
    content: "PTM for all batches on 22 March, 10 AM – 2 PM. Please confirm attendance.",
  },
  {
    id: "5",
    title: "Career Counseling Seminar",
    type: "event",
    date: "2026-03-28",
    content: "Free seminar on stream selection and entrance pathways for Class 10–12 students.",
  },
];

export const events: EventItem[] = [
  {
    id: "1",
    title: "Career Counseling Seminar",
    date: "2026-03-28",
    type: "Seminar",
    description: "Expert guidance on Science, Commerce, and competitive exam pathways.",
  },
  {
    id: "2",
    title: "Motivational Session with Alumni",
    date: "2026-04-05",
    type: "Motivational",
    description: "Our toppers share study strategies and success stories.",
  },
  {
    id: "3",
    title: "Science Olympiad Workshop",
    date: "2026-04-12",
    type: "Olympiad",
    description: "Problem-solving workshop for IMO/NSO aspirants.",
  },
  {
    id: "4",
    title: "Inter-Batch Quiz Competition",
    date: "2026-04-20",
    type: "Competition",
    description: "Fun academic competition with prizes for winning teams.",
  },
];
