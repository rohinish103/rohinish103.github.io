import type { Faculty } from "@/types";

export const faculty: Faculty[] = [
  {
    id: "1",
    slug: "rajesh-mehta",
    name: "Rajesh Mehta",
    qualification: "M.Sc. Physics, B.Ed.",
    experience: "12+ Years",
    subject: "Physics",
    intro: "Specializes in board and JEE Physics with a focus on conceptual clarity and numerical mastery.",
    message: "Physics becomes easy when curiosity leads the way. Ask why, then solve how.",
    social: { email: "rajesh@excellenceacademybeawar.com" },
  },
  {
    id: "2",
    slug: "priya-sharma",
    name: "Priya Sharma",
    qualification: "M.Sc. Chemistry, NET",
    experience: "10+ Years",
    subject: "Chemistry",
    intro: "Known for simplifying organic and inorganic chemistry for NEET and board aspirants.",
    message: "Consistent revision and smart practice build chemistry champions.",
    social: { email: "priya@excellenceacademybeawar.com" },
  },
  {
    id: "3",
    slug: "amit-joshi",
    name: "Amit Joshi",
    qualification: "M.Sc. Mathematics",
    experience: "15+ Years",
    subject: "Mathematics",
    intro: "Expert in Class 9–12 Maths and JEE foundation problem-solving techniques.",
    social: { email: "amit@excellenceacademybeawar.com" },
  },
  {
    id: "4",
    slug: "neha-rathore",
    name: "Neha Rathore",
    qualification: "M.Sc. Botany, B.Ed.",
    experience: "9+ Years",
    subject: "Biology",
    intro: "NEET Biology mentor with NCERT-first pedagogy and diagram-based learning.",
    message: "Biology rewards those who respect NCERT and revise with purpose.",
  },
  {
    id: "5",
    slug: "suresh-goyal",
    name: "Suresh Goyal",
    qualification: "M.Com, CA Inter",
    experience: "11+ Years",
    subject: "Accountancy & Commerce",
    intro: "Commerce specialist helping students master accounting, BST, and economics.",
  },
  {
    id: "6",
    slug: "kavita-singh",
    name: "Kavita Singh",
    qualification: "M.A. English, B.Ed.",
    experience: "8+ Years",
    subject: "English",
    intro: "Builds reading, writing, and communication skills for board excellence.",
  },
];

export function getFacultyBySlug(slug: string) {
  return faculty.find((f) => f.slug === slug);
}
