export type Topper = {
  name: string;
  course: string;
  year: number;
  percentage: number;
  marks: string;
  rank?: string;
  highlight: string;
  topper?: boolean;
};

export const resultStats = [
  { value: 120, suffix: "+", label: "Students Above 90%" },
  { value: 18, suffix: "+", label: "Board Toppers" },
  { value: 60, suffix: "+", label: "Competitive Qualifiers" },
  { value: 22, suffix: "%", label: "Average Improvement" },
];

export const toppers: Topper[] = [
  {
    name: "Ananya Sharma",
    course: "Class 10",
    year: 2025,
    percentage: 97.8,
    marks: "489/500",
    rank: "District Rank 1",
    highlight: "Board Topper",
    topper: true,
  },
  {
    name: "Rohan Verma",
    course: "Class 12 Science",
    year: 2025,
    percentage: 96.2,
    marks: "481/500",
    rank: "City Rank 2",
    highlight: "PCM Excellence",
    topper: true,
  },
  {
    name: "Isha Patel",
    course: "Class 12 Commerce",
    year: 2025,
    percentage: 95.4,
    marks: "477/500",
    highlight: "Commerce Topper",
    topper: true,
  },
  {
    name: "Arjun Singh",
    course: "Class 10",
    year: 2025,
    percentage: 94.6,
    marks: "473/500",
    highlight: "Science Distinction",
  },
  {
    name: "Meera Gupta",
    course: "Class 12 Science",
    year: 2025,
    percentage: 93.8,
    marks: "469/500",
    highlight: "NEET Qualifier",
  },
  {
    name: "Kabir Khan",
    course: "Class 11 Science",
    year: 2025,
    percentage: 92.5,
    marks: "462/500",
    highlight: "JEE Foundation Star",
  },
  {
    name: "Sneha Jain",
    course: "Class 9",
    year: 2025,
    percentage: 96,
    marks: "480/500",
    highlight: "Olympiad Gold",
  },
  {
    name: "Devansh Agarwal",
    course: "Class 10",
    year: 2024,
    percentage: 91.2,
    marks: "456/500",
    highlight: "NTSE Stage-1",
  },
];

export const topperOfTheMonth = toppers[0];

export const scoreProgression = [
  { label: "Jul", value: 64 },
  { label: "Aug", value: 69 },
  { label: "Sep", value: 74 },
  { label: "Oct", value: 80 },
  { label: "Nov", value: 86 },
  { label: "Dec", value: 91 },
];
