import type { BlogPost } from "@/types";

export const blogs: BlogPost[] = [
  {
    id: "1",
    slug: "10-study-tips-for-board-exams",
    title: "10 Study Tips for Board Exam Success",
    excerpt: "Proven techniques used by our toppers to score 90%+ in RBSE and CBSE boards.",
    content: `Board exams reward consistency more than last-minute hustle. Start with a realistic weekly plan, prioritize NCERT, and revise actively with flash notes.

Practice previous year papers under timed conditions every weekend. Sleep well, stay hydrated, and ask doubts the same day they appear.

At Excellence Academy, weekly tests and mentor check-ins keep students accountable without burnout.`,
    category: "Study Tips",
    cover: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=500&fit=crop",
    date: "2026-02-10",
    readTime: "5 min",
  },
  {
    id: "2",
    slug: "board-exam-preparation-roadmap",
    title: "Board Exam Preparation Roadmap",
    excerpt: "A month-by-month roadmap for Class 10 and 12 students aiming for distinction.",
    content: `Months 1–3: Finish syllabus with concept clarity. Months 4–5: Intensive practice and weak-area repair. Final month: Full mocks, formula sheets, and calm revision.

Parents can support by protecting study hours and reviewing monthly performance reports from the academy.`,
    category: "Board Exams",
    cover: "https://images.unsplash.com/photo-1456513080880-7d93ddd20c4e?w=800&h=500&fit=crop",
    date: "2026-02-18",
    readTime: "6 min",
  },
  {
    id: "3",
    slug: "time-management-for-students",
    title: "Time Management for School Students",
    excerpt: "Balance school, coaching, and rest with a simple daily schedule framework.",
    content: `Use time blocks: school hours, coaching, self-study, and recovery. Protect deep-work slots for Maths and Science. Keep phones outside the study desk.

A 50/10 focus cycle works well for most students in Class 8–12.`,
    category: "Time Management",
    cover: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&h=500&fit=crop",
    date: "2026-02-25",
    readTime: "4 min",
  },
  {
    id: "4",
    slug: "career-guidance-after-class-10",
    title: "Career Guidance After Class 10",
    excerpt: "How to choose Science, Commerce, or Arts with clarity and confidence.",
    content: `Choose a stream based on aptitude, interest, and long-term goals—not peer pressure. Attend our counseling sessions, try foundation modules, and speak with mentors before deciding.`,
    category: "Career Guidance",
    cover: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=500&fit=crop",
    date: "2026-03-01",
    readTime: "5 min",
  },
  {
    id: "5",
    slug: "neet-preparation-tips",
    title: "NEET Preparation Tips for Beginners",
    excerpt: "Build a strong NEET foundation with NCERT-first biology and smart MCQ practice.",
    content: `Master NCERT line by line for Biology. Pair Chemistry theory with daily reaction practice. Physics needs concept + numericals every day.

Join structured mock tests early—accuracy matters as much as speed.`,
    category: "NEET",
    cover: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
    date: "2026-03-05",
    readTime: "7 min",
  },
  {
    id: "6",
    slug: "jee-problem-solving-habits",
    title: "JEE Problem-Solving Habits That Work",
    excerpt: "Daily habits that turn average problem solvers into confident JEE aspirants.",
    content: `Solve mixed problem sets, maintain an error log, and revisit mistakes weekly. Quality over quantity—understand every wrong attempt.

Our JEE foundation batches emphasize this reflective practice model.`,
    category: "JEE",
    cover: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=500&fit=crop",
    date: "2026-03-08",
    readTime: "6 min",
  },
];

export function getBlogBySlug(slug: string) {
  return blogs.find((b) => b.slug === slug);
}
