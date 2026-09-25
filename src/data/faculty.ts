export type Faculty = {
  initials: string;
  name: string;
  subject: string;
  credentials: string;
  bio: string;
};

export const faculty: Faculty[] = [
  {
    initials: "RM",
    name: "Rajesh Mehta",
    subject: "Physics",
    credentials: "M.Sc. Physics, B.Ed. · 12+ Years",
    bio: "Specializes in board and JEE Physics with a focus on conceptual clarity and numerical mastery.",
  },
  {
    initials: "PS",
    name: "Priya Sharma",
    subject: "Chemistry",
    credentials: "M.Sc. Chemistry, NET · 10+ Years",
    bio: "Known for simplifying organic and inorganic chemistry for NEET and board aspirants.",
  },
  {
    initials: "AJ",
    name: "Amit Joshi",
    subject: "Mathematics",
    credentials: "M.Sc. Mathematics · 15+ Years",
    bio: "Expert in Class 9–12 Maths and JEE foundation problem-solving techniques.",
  },
  {
    initials: "NR",
    name: "Neha Rathore",
    subject: "Biology",
    credentials: "M.Sc. Botany, B.Ed. · 9+ Years",
    bio: "NEET Biology mentor with NCERT-first pedagogy and diagram-based learning.",
  },
  {
    initials: "SG",
    name: "Suresh Goyal",
    subject: "Accountancy & Commerce",
    credentials: "M.Com, CA Inter · 11+ Years",
    bio: "Commerce specialist helping students master accounting, BST, and economics.",
  },
  {
    initials: "KS",
    name: "Kavita Singh",
    subject: "English",
    credentials: "M.A. English, B.Ed. · 8+ Years",
    bio: "Builds reading, writing, and communication skills for board excellence.",
  },
];
