export type FacultyMember = {
  name: string;
  subject: string;
  qualification: string;
  experience: string;
  bio: string;
  featured?: boolean;
};

export const faculty: FacultyMember[] = [
  {
    name: "Rajesh Mehta",
    subject: "Physics",
    qualification: "M.Sc. Physics, B.Ed.",
    experience: "12+ Years",
    bio: "Specializes in board and JEE Physics with a focus on conceptual clarity and numerical mastery.",
    featured: true,
  },
  {
    name: "Priya Sharma",
    subject: "Chemistry",
    qualification: "M.Sc. Chemistry, NET",
    experience: "10+ Years",
    bio: "Known for simplifying organic and inorganic chemistry for NEET and board aspirants.",
    featured: true,
  },
  {
    name: "Amit Joshi",
    subject: "Mathematics",
    qualification: "M.Sc. Mathematics",
    experience: "15+ Years",
    bio: "Expert in Class 9–12 Maths and JEE foundation problem-solving techniques.",
    featured: true,
  },
  {
    name: "Neha Rathore",
    subject: "Biology",
    qualification: "M.Sc. Botany, B.Ed.",
    experience: "9+ Years",
    bio: "NEET Biology mentor with NCERT-first pedagogy and diagram-based learning.",
  },
  {
    name: "Suresh Goyal",
    subject: "Accountancy & Commerce",
    qualification: "M.Com, CA Inter",
    experience: "11+ Years",
    bio: "Commerce specialist helping students master accounting, BST, and economics.",
  },
  {
    name: "Kavita Singh",
    subject: "English",
    qualification: "M.A. English, B.Ed.",
    experience: "8+ Years",
    bio: "Builds reading, writing, and communication skills for board excellence.",
  },
];

export const featuredFaculty = faculty.filter((member) => member.featured);
