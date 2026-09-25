export type Post = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readingTime: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "10-study-tips-for-board-exams",
    title: "10 Study Tips for Board Exam Success",
    category: "Study Tips",
    excerpt:
      "Proven techniques used by our toppers to score 90%+ in RBSE and CBSE boards.",
    date: "2026-02-10",
    readingTime: "5 min",
    body: [
      "Board exams reward consistency more than last-minute hustle. Start with a realistic weekly plan, prioritize NCERT, and revise actively with flash notes.",
      "Practice previous year papers under timed conditions every weekend. Sleep well, stay hydrated, and ask doubts the same day they appear.",
      "At Excellence Academy, weekly tests and mentor check-ins keep students accountable without burnout.",
    ],
  },
  {
    slug: "board-exam-preparation-roadmap",
    title: "Board Exam Preparation Roadmap",
    category: "Board Exams",
    excerpt:
      "A month-by-month roadmap for Class 10 and 12 students aiming for distinction.",
    date: "2026-02-18",
    readingTime: "6 min",
    body: [
      "Split the academic year into three phases: concept building, application practice, and revision. Each phase needs a different study rhythm.",
      "By December, every chapter should have one set of self-made notes and one solved sample paper. January and February belong to revision and mock tests only.",
      "Our board batches follow this exact calendar, with monthly progress reports shared with parents.",
    ],
  },
  {
    slug: "time-management-for-students",
    title: "Time Management for School Students",
    category: "Time Management",
    excerpt:
      "Balance school, coaching, and rest with a simple daily schedule framework.",
    date: "2026-02-25",
    readingTime: "4 min",
    body: [
      "A workable day has three study blocks: a short morning revision, an after-coaching practice slot, and a night review of the day's classes.",
      "Protect sleep and one weekly rest window. Students who schedule rest deliberately stay consistent far longer than those who study in bursts.",
      "Use a weekly planner and review it every Sunday with a parent or mentor.",
    ],
  },
  {
    slug: "career-guidance-after-class-10",
    title: "Career Guidance After Class 10",
    category: "Career Guidance",
    excerpt:
      "How to choose Science, Commerce, or Arts with clarity and confidence.",
    date: "2026-03-01",
    readingTime: "5 min",
    body: [
      "Stream selection should follow aptitude and interest, not peer pressure. Look at your Class 9 and 10 subject performance honestly.",
      "Map each stream to realistic career pathways and the entrance exams they require, then talk to seniors already on that path.",
      "Our counselors run free stream-mapping sessions for every admission enquiry.",
    ],
  },
  {
    slug: "neet-preparation-tips-for-beginners",
    title: "NEET Preparation Tips for Beginners",
    category: "NEET",
    excerpt:
      "Build a strong NEET foundation with NCERT-first biology and smart MCQ practice.",
    date: "2026-03-05",
    readingTime: "7 min",
    body: [
      "NCERT Biology is non-negotiable — read every line, including diagrams and summary boxes, at least three times across the year.",
      "Physics and Chemistry need daily numerical practice. Maintain an error notebook and revisit it before every mock.",
      "Start MCQ practice early, but only after the chapter concept is clear. Speed follows accuracy, never the other way round.",
    ],
  },
  {
    slug: "jee-problem-solving-habits",
    title: "JEE Problem-Solving Habits That Work",
    category: "JEE",
    excerpt:
      "Daily habits that turn average problem solvers into confident JEE aspirants.",
    date: "2026-03-08",
    readingTime: "6 min",
    body: [
      "Solve fewer problems, but solve them completely — without peeking at solutions for at least twenty minutes.",
      "Classify every mistake as conceptual, calculation, or careless. The pattern in that classification tells you what to fix.",
      "Weekly timed sets build the exam temperament that separates a good score from a great one.",
    ],
  },
];

export const featuredPosts = posts.slice(0, 3);

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
