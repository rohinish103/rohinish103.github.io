export type Notice = {
  type: "admission" | "holiday" | "exam" | "meeting" | "event";
  title: string;
  detail: string;
  pinned?: boolean;
};

export const notices: Notice[] = [
  {
    type: "admission",
    title: "Admissions Open for 2026–27",
    detail:
      "Limited seats for Class 6–12, JEE & NEET foundation. Book a free demo class today.",
    pinned: true,
  },
  {
    type: "holiday",
    title: "Holiday Notice — Holi",
    detail:
      "Institute will remain closed on Holi. Regular classes resume the next working day.",
    pinned: true,
  },
  {
    type: "exam",
    title: "Weekly Test Schedule",
    detail: "Topic tests every Saturday, 4:00 PM. Check your batch notice board.",
  },
  {
    type: "meeting",
    title: "Parent-Teacher Meeting",
    detail:
      "PTM for all batches on 22 March, 10 AM – 2 PM. Please confirm attendance.",
    pinned: true,
  },
  {
    type: "event",
    title: "Career Counseling Seminar",
    detail: "Free seminar on stream selection and entrance pathways, 28 March.",
  },
];

export const pinnedNotices = notices.filter((notice) => notice.pinned);

export type SiteEvent = {
  title: string;
  category: string;
  date: string;
  description: string;
};

export const events: SiteEvent[] = [
  {
    title: "Career Counseling Seminar",
    category: "Seminar",
    date: "2026-03-28",
    description:
      "Expert guidance on Science, Commerce, and competitive exam pathways.",
  },
  {
    title: "Motivational Session with Alumni",
    category: "Motivational",
    date: "2026-04-05",
    description: "Our toppers share study strategies and success stories.",
  },
  {
    title: "Science Olympiad Workshop",
    category: "Olympiad",
    date: "2026-04-12",
    description: "Problem-solving workshop for IMO/NSO aspirants.",
  },
  {
    title: "Inter-Batch Quiz Competition",
    category: "Competition",
    date: "2026-04-20",
    description: "Fun academic competition with prizes for winning teams.",
  },
];

export type Batch = {
  name: string;
  course: string;
  startDate: string;
  timing: string;
  faculty: string;
  seatsLeft: number;
};

export const batches: Batch[] = [
  {
    name: "Class 10 Board Elite",
    course: "Class 10 Board Excellence",
    startDate: "2026-04-01",
    timing: "5:00 PM – 7:00 PM",
    faculty: "Amit Joshi",
    seatsLeft: 8,
  },
  {
    name: "Class 12 Science Intensive",
    course: "Class 12 Science",
    startDate: "2026-04-05",
    timing: "6:00 PM – 8:30 PM",
    faculty: "Rajesh Mehta",
    seatsLeft: 5,
  },
  {
    name: "NEET Foundation Spring",
    course: "NEET Foundation",
    startDate: "2026-04-10",
    timing: "4:00 PM – 6:00 PM",
    faculty: "Neha Rathore",
    seatsLeft: 12,
  },
  {
    name: "JEE Foundation Batch A",
    course: "JEE Foundation",
    startDate: "2026-04-12",
    timing: "7:00 AM – 9:00 AM",
    faculty: "Priya Sharma",
    seatsLeft: 10,
  },
];
