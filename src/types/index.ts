export type NavItem = {
  label: string;
  href: string;
};

export type Course = {
  id: string;
  slug: string;
  name: string;
  classLabel: string;
  subjects: string[];
  duration: string;
  medium: string;
  fees?: string;
  description: string;
  category: "school" | "foundation" | "competitive";
  featured?: boolean;
};

export type Faculty = {
  id: string;
  slug: string;
  name: string;
  qualification: string;
  experience: string;
  subject: string;
  intro: string;
  photo?: string;
  message?: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
};

export type Result = {
  id: string;
  name: string;
  classLabel: string;
  percentage: number;
  marks: string;
  rank?: string;
  achievement: string;
  photo?: string;
  year: string;
  isTopper?: boolean;
};

export type GalleryItem = {
  id: string;
  title: string;
  category: "events" | "classrooms" | "awards" | "sports" | "functions" | "tours" | "videos";
  image?: string;
  type: "photo" | "video";
};

export type Testimonial = {
  id: string;
  name: string;
  role: "student" | "parent";
  rating: number;
  text: string;
  photo?: string;
  videoUrl?: string;
  classLabel?: string;
};

export type Announcement = {
  id: string;
  title: string;
  type: "admission" | "holiday" | "exam" | "meeting" | "event" | "general";
  date: string;
  pinned?: boolean;
  content: string;
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  cover: string;
  date: string;
  readTime: string;
};

export type FAQ = {
  id: string;
  question: string;
  answer: string;
  category?: string;
};

export type Batch = {
  id: string;
  name: string;
  startDate: string;
  seatsLeft: number;
  timing: string;
  faculty: string;
  courseSlug: string;
};

export type FeePlan = {
  id: string;
  name: string;
  period: "monthly" | "quarterly" | "yearly";
  price: number;
  features: string[];
  popular?: boolean;
};

export type EventItem = {
  id: string;
  title: string;
  date: string;
  type: string;
  description: string;
};

export type DownloadItem = {
  id: string;
  title: string;
  category: "syllabus" | "notes" | "assignments" | "homework" | "papers";
  classLabel: string;
  fileUrl: string;
  size: string;
};

export type Achievement = {
  id: string;
  year: string;
  title: string;
  description: string;
};

export type TimetableSlot = {
  day: string;
  slots: { time: string; subject: string; classLabel: string; faculty: string }[];
};

export type ExamCalendarItem = {
  id: string;
  title: string;
  date: string;
  classLabel: string;
  type: string;
};
