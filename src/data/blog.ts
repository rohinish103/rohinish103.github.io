export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  dateLabel: string;
  minutes: number;
  body: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "10-study-tips-for-board-exams",
    title: "10 Study Tips for Board Exam Success",
    excerpt: "Proven techniques used by our toppers to score 90%+ in RBSE and CBSE boards.",
    category: "Study Tips",
    date: "2026-02-10",
    dateLabel: "10 February 2026",
    minutes: 5,
    body: [
      "Board exams reward consistency more than last-minute hustle. Start with a realistic weekly plan, prioritize NCERT, and revise actively with flash notes.",
      "Practice previous year papers under timed conditions every weekend. Sleep well, stay hydrated, and ask doubts the same day they appear.",
      "At Excellence Academy, weekly tests and mentor check-ins keep students accountable without burnout.",
    ],
  },
  {
    slug: "board-exam-preparation-roadmap",
    title: "Board Exam Preparation Roadmap",
    excerpt: "A month-by-month roadmap for Class 10 and 12 students aiming for distinction.",
    category: "Board Exams",
    date: "2026-02-18",
    dateLabel: "18 February 2026",
    minutes: 6,
    body: [
      "Months 1–3: Finish syllabus with concept clarity. Months 4–5: Intensive practice and weak-area repair. Final month: Full mocks, formula sheets, and calm revision.",
      "Parents can support by protecting study hours and reviewing monthly performance reports from the academy.",
    ],
  },
  {
    slug: "time-management-for-students",
    title: "Time Management for School Students",
    excerpt: "Balance school, coaching, and rest with a simple daily schedule framework.",
    category: "Time Management",
    date: "2026-02-25",
    dateLabel: "25 February 2026",
    minutes: 4,
    body: [
      "Use time blocks: school hours, coaching, self-study, and recovery. Protect deep-work slots for Maths and Science. Keep phones outside the study desk.",
      "A 50/10 focus cycle works well for most students in Class 8–12.",
    ],
  },
  {
    slug: "career-guidance-after-class-10",
    title: "Career Guidance After Class 10",
    excerpt: "How to choose Science, Commerce, or Arts with clarity and confidence.",
    category: "Career Guidance",
    date: "2026-03-01",
    dateLabel: "1 March 2026",
    minutes: 5,
    body: [
      "Choose a stream based on aptitude, interest, and long-term goals—not peer pressure. Attend our counseling sessions, try foundation modules, and speak with mentors before deciding.",
    ],
  },
  {
    slug: "neet-preparation-tips",
    title: "NEET Preparation Tips for Beginners",
    excerpt: "Build a strong NEET foundation with NCERT-first biology and smart MCQ practice.",
    category: "NEET",
    date: "2026-03-05",
    dateLabel: "5 March 2026",
    minutes: 7,
    body: [
      "Master NCERT line by line for Biology. Pair Chemistry theory with daily reaction practice. Physics needs concept + numericals every day.",
      "Join structured mock tests early—accuracy matters as much as speed.",
    ],
  },
  {
    slug: "jee-problem-solving-habits",
    title: "JEE Problem-Solving Habits That Work",
    excerpt: "Daily habits that turn average problem solvers into confident JEE aspirants.",
    category: "JEE",
    date: "2026-03-08",
    dateLabel: "8 March 2026",
    minutes: 6,
    body: [
      "Solve mixed problem sets, maintain an error log, and revisit mistakes weekly. Quality over quantity—understand every wrong attempt.",
      "Our JEE foundation batches emphasize this reflective practice model.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
