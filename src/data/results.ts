export type Result = {
  initials: string;
  name: string;
  program: string;
  year: string;
  percent: string;
  marks: string;
  highlight: string;
  badge?: string;
  featured?: boolean;
};

export const results: Result[] = [
  {
    initials: "AS",
    name: "Ananya Sharma",
    program: "Class 10",
    year: "2025",
    percent: "97.8%",
    marks: "489/500",
    highlight: "District Rank 1",
    badge: "Board Topper",
    featured: true,
  },
  {
    initials: "RV",
    name: "Rohan Verma",
    program: "Class 12 Science",
    year: "2025",
    percent: "96.2%",
    marks: "481/500",
    highlight: "City Rank 2",
    badge: "PCM Excellence",
    featured: true,
  },
  {
    initials: "IP",
    name: "Isha Patel",
    program: "Class 12 Commerce",
    year: "2025",
    percent: "95.4%",
    marks: "477/500",
    highlight: "Commerce Topper",
    featured: true,
  },
  {
    initials: "AS",
    name: "Arjun Singh",
    program: "Class 10",
    year: "2025",
    percent: "94.6%",
    marks: "473/500",
    highlight: "Science Distinction",
  },
  {
    initials: "MG",
    name: "Meera Gupta",
    program: "Class 12 Science",
    year: "2025",
    percent: "93.8%",
    marks: "469/500",
    highlight: "NEET Qualifier",
  },
  {
    initials: "KK",
    name: "Kabir Khan",
    program: "Class 11 Science",
    year: "2025",
    percent: "92.5%",
    marks: "462/500",
    highlight: "JEE Foundation Star",
  },
  {
    initials: "SJ",
    name: "Sneha Jain",
    program: "Class 9",
    year: "2025",
    percent: "96%",
    marks: "480/500",
    highlight: "Olympiad Gold",
  },
  {
    initials: "DA",
    name: "Devansh Agarwal",
    program: "Class 10",
    year: "2024",
    percent: "91.2%",
    marks: "456/500",
    highlight: "NTSE Stage-1",
  },
];

export const resultStats = [
  { value: "0+", label: "Students Above 90%" },
  { value: "0+", label: "Board Toppers" },
  { value: "0+", label: "Competitive Qualifiers" },
  { value: "0%", label: "Average Improvement" },
];
