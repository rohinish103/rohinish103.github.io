export type Course = {
  slug: string;
  title: string;
  level: string;
  category: "School" | "Foundation" | "Competitive";
  description: string;
  duration: string;
  medium: string;
  subjects: string[];
  fee: string;
  featured?: boolean;
};

export const courses: Course[] = [
  {
    slug: "class-6",
    title: "Class 6 Foundation",
    level: "Class 6",
    category: "School",
    description:
      "Strong conceptual foundation with regular practice and weekly assessments for Class 6 students.",
    duration: "Full Academic Year",
    medium: "English / Hindi",
    subjects: ["Mathematics", "Science", "English", "Social Science"],
    fee: "₹2,500/mo",
    featured: true,
  },
  {
    slug: "class-7",
    title: "Class 7 Foundation",
    level: "Class 7",
    category: "School",
    description:
      "Concept clarity, writing skills, and exam temperament building for Class 7.",
    duration: "Full Academic Year",
    medium: "English / Hindi",
    subjects: ["Mathematics", "Science", "English", "Social Science"],
    fee: "₹2,500/mo",
    featured: true,
  },
  {
    slug: "class-9",
    title: "Class 9 Board Prep",
    level: "Class 9",
    category: "School",
    description: "Board-oriented curriculum with weekly tests and doubt clinics.",
    duration: "Full Academic Year",
    medium: "English / Hindi",
    subjects: ["Mathematics", "Science", "English", "Social Science"],
    fee: "₹3,000/mo",
    featured: true,
  },
  {
    slug: "class-10",
    title: "Class 10 Board Excellence",
    level: "Class 10",
    category: "School",
    description:
      "Intensive board preparation with mock papers, revision modules, and mentorship.",
    duration: "Full Academic Year",
    medium: "English / Hindi",
    subjects: ["Mathematics", "Science", "English", "Social Science"],
    fee: "₹3,500/mo",
    featured: true,
  },
  {
    slug: "class-11-science",
    title: "Class 11 Science",
    level: "Class 11 Science",
    category: "School",
    description:
      "PCM/PCB coaching aligned with board syllabus and entrance foundations.",
    duration: "Full Academic Year",
    medium: "English",
    subjects: ["Physics", "Chemistry", "Mathematics / Biology", "English"],
    fee: "₹4,500/mo",
    featured: true,
  },
  {
    slug: "class-12-science",
    title: "Class 12 Science",
    level: "Class 12 Science",
    category: "School",
    description:
      "Board + entrance synchronized preparation with intensive revision cycles.",
    duration: "Full Academic Year",
    medium: "English",
    subjects: ["Physics", "Chemistry", "Mathematics / Biology"],
    fee: "₹5,000/mo",
    featured: true,
  },
  {
    slug: "jee-foundation",
    title: "JEE Foundation",
    level: "Class 9–12",
    category: "Competitive",
    description:
      "Early engineering-entrance preparation with problem-solving drills and concept depth.",
    duration: "Full Academic Year",
    medium: "English",
    subjects: ["Physics", "Chemistry", "Mathematics"],
    fee: "₹5,500/mo",
  },
  {
    slug: "neet-foundation",
    title: "NEET Foundation",
    level: "Class 9–12",
    category: "Competitive",
    description:
      "NCERT-first biology with medical-entrance MCQ practice and weekly mocks.",
    duration: "Full Academic Year",
    medium: "English",
    subjects: ["Physics", "Chemistry", "Biology"],
    fee: "₹5,500/mo",
  },
  {
    slug: "olympiad-preparation",
    title: "Olympiad Preparation",
    level: "Class 6–10",
    category: "Foundation",
    description:
      "IMO, NSO, and NTSE-style training for students who enjoy a challenge.",
    duration: "Session-based",
    medium: "English",
    subjects: ["Mathematics", "Science", "Mental Ability"],
    fee: "₹2,000/mo",
  },
];

export const featuredCourses = courses.filter((course) => course.featured);

export function getCourse(slug: string) {
  return courses.find((course) => course.slug === slug);
}

export const admissionCourseOptions = [
  { label: "Class 6 Foundation", level: "Class 6" },
  { label: "Class 7 Foundation", level: "Class 7" },
  { label: "Class 8 Foundation", level: "Class 8" },
  { label: "Class 9 Board Prep", level: "Class 9" },
  { label: "Class 10 Board Excellence", level: "Class 10" },
  { label: "Class 11 Science", level: "Class 11 Science" },
  { label: "Class 11 Commerce", level: "Class 11 Commerce" },
  { label: "Class 12 Science", level: "Class 12 Science" },
  { label: "Class 12 Commerce", level: "Class 12 Commerce" },
  { label: "Foundation Courses", level: "Class 6–10" },
  { label: "Olympiad Preparation", level: "Class 6–10" },
  { label: "NTSE Coaching", level: "Class 10" },
  { label: "CUET Preparation", level: "Class 12 / Dropper" },
  { label: "NEET Foundation", level: "Class 9–12" },
  { label: "JEE Foundation", level: "Class 9–12" },
  { label: "Competitive Exams", level: "Custom" },
];
