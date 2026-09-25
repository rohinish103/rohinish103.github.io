export type Feature = { title: string; description: string; icon: string };

export const features: Feature[] = [
  {
    title: "Experienced Faculty",
    description:
      "Subject experts with proven track records in board and competitive exams.",
    icon: "graduation",
  },
  {
    title: "Small Batch Size",
    description: "Limited seats per batch so every student gets focused attention.",
    icon: "users",
  },
  {
    title: "Personal Attention",
    description: "One-to-one mentoring and customized learning plans.",
    icon: "heart",
  },
  {
    title: "Weekly Tests",
    description: "Regular assessments to track progress and close learning gaps.",
    icon: "clipboard",
  },
  {
    title: "Doubt Sessions",
    description: "Dedicated doubt-clearing slots after every major topic.",
    icon: "help",
  },
  {
    title: "Smart Classrooms",
    description: "Digital boards and visual learning for clearer concepts.",
    icon: "monitor",
  },
  {
    title: "Affordable Fees",
    description: "Premium coaching with transparent, value-driven fee plans.",
    icon: "rupee",
  },
  {
    title: "Career Guidance",
    description: "Counseling for boards, streams, and entrance pathways.",
    icon: "compass",
  },
  {
    title: "Performance Reports",
    description: "Monthly reports shared with parents for full transparency.",
    icon: "chart",
  },
  {
    title: "Parent Meetings",
    description: "Structured PTMs to align home and classroom support.",
    icon: "parents",
  },
  {
    title: "Digital Study Material",
    description: "Notes, worksheets, and recorded support when needed.",
    icon: "book",
  },
  {
    title: "Scholarship Programs",
    description: "Merit and need-based scholarships for deserving students.",
    icon: "award",
  },
];

export const facilities = [
  { label: "Smart Classrooms", icon: "monitor" },
  { label: "Air Conditioned Rooms", icon: "snow" },
  { label: "Library", icon: "book" },
  { label: "Computer Lab", icon: "laptop" },
  { label: "Projectors", icon: "projector" },
  { label: "WiFi", icon: "wifi" },
  { label: "CCTV", icon: "camera" },
  { label: "Parking", icon: "parking" },
  { label: "RO Water", icon: "droplet" },
  { label: "Comfortable Seating", icon: "armchair" },
  { label: "Study Material", icon: "files" },
  { label: "Mock Tests", icon: "clipboard" },
];

export const admissionSteps = [
  {
    title: "Fill Form",
    description: "Submit the online admission enquiry with basic student details.",
  },
  {
    title: "Counseling",
    description: "Meet our counselors to choose the right course and batch.",
  },
  {
    title: "Demo Class",
    description: "Attend a free demo to experience teaching quality firsthand.",
  },
  {
    title: "Admission",
    description: "Complete registration and fee formalities.",
  },
  {
    title: "Start Learning",
    description: "Join your batch and begin the excellence journey.",
  },
];

export const scholarships = [
  {
    title: "Merit Scholarships",
    description:
      "Up to 50% fee waiver for students with outstanding previous-year marks.",
  },
  {
    title: "Financial Assistance",
    description: "Need-based support for deserving families after verification.",
  },
  {
    title: "Entrance Scholarship",
    description:
      "Scholarship test winners get priority admission and fee benefits.",
  },
];

export const scholarshipSteps = [
  "Fill the admission enquiry form with your latest marksheet details.",
  "Attend the scholarship eligibility discussion during counseling.",
  "Appear for the entrance scholarship test (if applicable for your course).",
  "Receive your scholarship letter before fee confirmation.",
];

export const milestones = [
  {
    year: "2016",
    title: "Academy Founded",
    description:
      "Excellence Academy opened in Beawar with a vision for quality coaching.",
  },
  {
    year: "2018",
    title: "100+ Distinctions",
    description:
      "Crossed 100 students scoring above 90% in board examinations.",
  },
  {
    year: "2020",
    title: "Smart Campus Upgrade",
    description:
      "Introduced smart classrooms, digital notes, and CCTV-secured campus.",
  },
  {
    year: "2022",
    title: "NEET & JEE Foundation Launch",
    description: "Expanded into structured entrance foundation programs.",
  },
  {
    year: "2024",
    title: "Best Coaching Recognition",
    description:
      "Recognized locally for consistent board results and parent trust.",
  },
  {
    year: "2025",
    title: "District Toppers",
    description:
      "Multiple district and city toppers across Class 10 and 12.",
  },
];

export const feePlans = [
  {
    name: "Monthly",
    price: "₹3,500",
    period: "mo",
    perks: [
      "All core classes",
      "Weekly tests",
      "Doubt sessions",
      "Digital notes",
      "Parent monthly report",
    ],
  },
  {
    name: "Quarterly",
    price: "₹9,900",
    period: "qtr",
    popular: true,
    perks: [
      "Everything in Monthly",
      "5% fee savings",
      "Priority demo slots",
      "Extra mock tests",
      "Scholarship eligibility",
    ],
  },
  {
    name: "Yearly",
    price: "₹36,000",
    period: "yr",
    perks: [
      "Everything in Quarterly",
      "Up to 15% savings",
      "Free workshop access",
      "Career counseling session",
      "Printed revision pack",
    ],
  },
];

export const counselingTopics = [
  {
    title: "Stream & Career Mapping",
    description:
      "Science, Commerce, or Arts — with realistic pathways for boards and entrances.",
  },
  {
    title: "Entrance Roadmaps",
    description:
      "JEE, NEET, CUET, and olympiad guidance tailored to your current class.",
  },
  {
    title: "One-to-One Sessions",
    description: "30–45 minute sessions with senior counselors; parents welcome.",
  },
];

export const trackingPoints = [
  "Weekly tests with actionable feedback",
  "Monthly parent reports",
  "Attendance monitoring",
  "Progress graphs and weak-area analysis",
];

export const motivationalQuote = {
  text: "Success is the sum of small efforts repeated day in and day out.",
  author: "Robert Collier",
};
