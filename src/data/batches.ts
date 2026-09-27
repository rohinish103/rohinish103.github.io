import type {
  Achievement,
  Batch,
  DownloadItem,
  ExamCalendarItem,
  FeePlan,
  TimetableSlot,
} from "@/types";

export const batches: Batch[] = [
  {
    id: "1",
    name: "Class 10 Board Elite",
    startDate: "2026-04-01",
    seatsLeft: 8,
    timing: "5:00 PM – 7:00 PM",
    faculty: "Amit Joshi",
    courseSlug: "class-10",
  },
  {
    id: "2",
    name: "Class 12 Science Intensive",
    startDate: "2026-04-05",
    seatsLeft: 5,
    timing: "6:00 PM – 8:30 PM",
    faculty: "Rajesh Mehta",
    courseSlug: "class-12-science",
  },
  {
    id: "3",
    name: "NEET Foundation Spring",
    startDate: "2026-04-10",
    seatsLeft: 12,
    timing: "4:00 PM – 6:00 PM",
    faculty: "Neha Rathore",
    courseSlug: "neet-foundation",
  },
  {
    id: "4",
    name: "JEE Foundation Batch A",
    startDate: "2026-04-12",
    seatsLeft: 10,
    timing: "7:00 AM – 9:00 AM",
    faculty: "Priya Sharma",
    courseSlug: "jee-foundation",
  },
];

export const feePlans: FeePlan[] = [
  {
    id: "1",
    name: "Monthly",
    period: "monthly",
    price: 3500,
    features: [
      "All core classes",
      "Weekly tests",
      "Doubt sessions",
      "Digital notes",
      "Parent monthly report",
    ],
  },
  {
    id: "2",
    name: "Quarterly",
    period: "quarterly",
    price: 9900,
    popular: true,
    features: [
      "Everything in Monthly",
      "5% fee savings",
      "Priority demo slots",
      "Extra mock tests",
      "Scholarship eligibility",
    ],
  },
  {
    id: "3",
    name: "Yearly",
    period: "yearly",
    price: 36000,
    features: [
      "Everything in Quarterly",
      "Up to 15% savings",
      "Free workshop access",
      "Career counseling session",
      "Printed revision pack",
    ],
  },
];

export const downloads: DownloadItem[] = [
  { id: "1", title: "Class 10 Science Syllabus", category: "syllabus", classLabel: "Class 10", fileUrl: "/downloads/sample.pdf", size: "1.2 MB" },
  { id: "2", title: "Class 12 Physics Notes — Electrostatics", category: "notes", classLabel: "Class 12", fileUrl: "/downloads/sample.pdf", size: "2.4 MB" },
  { id: "3", title: "Weekly Assignment — Maths", category: "assignments", classLabel: "Class 9", fileUrl: "/downloads/sample.pdf", size: "800 KB" },
  { id: "4", title: "Holiday Homework — Summer", category: "homework", classLabel: "Class 8", fileUrl: "/downloads/sample.pdf", size: "1.1 MB" },
  { id: "5", title: "RBSE Class 10 Maths PYQ 2024", category: "papers", classLabel: "Class 10", fileUrl: "/downloads/sample.pdf", size: "3.0 MB" },
  { id: "6", title: "NEET Biology Chapter Worksheet", category: "notes", classLabel: "NEET", fileUrl: "/downloads/sample.pdf", size: "1.8 MB" },
];

export const previousPapers: DownloadItem[] = [
  { id: "p1", title: "Class 10 Science Board Paper 2024", category: "papers", classLabel: "Class 10", fileUrl: "/downloads/sample.pdf", size: "2.1 MB" },
  { id: "p2", title: "Class 10 Maths Board Paper 2024", category: "papers", classLabel: "Class 10", fileUrl: "/downloads/sample.pdf", size: "1.9 MB" },
  { id: "p3", title: "Class 12 Physics Board Paper 2024", category: "papers", classLabel: "Class 12", fileUrl: "/downloads/sample.pdf", size: "2.5 MB" },
  { id: "p4", title: "Class 12 Chemistry Board Paper 2024", category: "papers", classLabel: "Class 12", fileUrl: "/downloads/sample.pdf", size: "2.2 MB" },
  { id: "p5", title: "Class 12 Maths Board Paper 2023", category: "papers", classLabel: "Class 12", fileUrl: "/downloads/sample.pdf", size: "2.0 MB" },
  { id: "p6", title: "NTSE Stage-1 Sample Paper", category: "papers", classLabel: "NTSE", fileUrl: "/downloads/sample.pdf", size: "1.5 MB" },
];

export const achievements: Achievement[] = [
  { id: "1", year: "2016", title: "Academy Founded", description: "Excellence Academy opened in Beawar with a vision for quality coaching." },
  { id: "2", year: "2018", title: "100+ Distinctions", description: "Crossed 100 students scoring above 90% in board examinations." },
  { id: "3", year: "2020", title: "Smart Campus Upgrade", description: "Introduced smart classrooms, digital notes, and CCTV-secured campus." },
  { id: "4", year: "2022", title: "NEET & JEE Foundation Launch", description: "Expanded into structured entrance foundation programs." },
  { id: "5", year: "2024", title: "Best Coaching Recognition", description: "Recognized locally for consistent board results and parent trust." },
  { id: "6", year: "2025", title: "District Toppers", description: "Multiple district and city toppers across Class 10 and 12." },
];

export const timetable: TimetableSlot[] = [
  {
    day: "Monday",
    slots: [
      { time: "7:00–9:00 AM", subject: "JEE Maths", classLabel: "Class 11–12", faculty: "Amit Joshi" },
      { time: "4:00–6:00 PM", subject: "Science", classLabel: "Class 9", faculty: "Priya Sharma" },
      { time: "6:00–8:00 PM", subject: "Physics", classLabel: "Class 12", faculty: "Rajesh Mehta" },
    ],
  },
  {
    day: "Tuesday",
    slots: [
      { time: "7:00–9:00 AM", subject: "NEET Biology", classLabel: "Foundation", faculty: "Neha Rathore" },
      { time: "5:00–7:00 PM", subject: "Mathematics", classLabel: "Class 10", faculty: "Amit Joshi" },
      { time: "6:00–8:00 PM", subject: "Accountancy", classLabel: "Class 12", faculty: "Suresh Goyal" },
    ],
  },
  {
    day: "Wednesday",
    slots: [
      { time: "4:00–6:00 PM", subject: "English", classLabel: "Class 8–10", faculty: "Kavita Singh" },
      { time: "6:00–8:30 PM", subject: "Chemistry", classLabel: "Class 12", faculty: "Priya Sharma" },
    ],
  },
  {
    day: "Thursday",
    slots: [
      { time: "7:00–9:00 AM", subject: "JEE Physics", classLabel: "Foundation", faculty: "Rajesh Mehta" },
      { time: "5:00–7:00 PM", subject: "Science", classLabel: "Class 10", faculty: "Neha Rathore" },
    ],
  },
  {
    day: "Friday",
    slots: [
      { time: "4:00–6:00 PM", subject: "Doubt Clinic", classLabel: "All Batches", faculty: "Rotating" },
      { time: "6:00–8:00 PM", subject: "Commerce", classLabel: "Class 11", faculty: "Suresh Goyal" },
    ],
  },
  {
    day: "Saturday",
    slots: [
      { time: "9:00–12:00 PM", subject: "Weekly Tests", classLabel: "All Batches", faculty: "Exam Cell" },
      { time: "4:00–6:00 PM", subject: "Revision Modules", classLabel: "Board Batches", faculty: "Faculty Team" },
    ],
  },
];

export const examCalendar: ExamCalendarItem[] = [
  { id: "1", title: "Weekly Test — Class 10", date: "2026-03-14", classLabel: "Class 10", type: "Weekly" },
  { id: "2", title: "Monthly Cumulative — Class 12 Science", date: "2026-03-21", classLabel: "Class 12 Science", type: "Monthly" },
  { id: "3", title: "NEET Foundation Mock", date: "2026-03-28", classLabel: "NEET", type: "Mock" },
  { id: "4", title: "JEE Topic Test — Mechanics", date: "2026-04-02", classLabel: "JEE", type: "Topic" },
  { id: "5", title: "Board Sample Paper Drive", date: "2026-04-10", classLabel: "Class 10 & 12", type: "Board Prep" },
  { id: "6", title: "Olympiad Practice Test", date: "2026-04-18", classLabel: "Class 6–10", type: "Olympiad" },
];
