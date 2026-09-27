import type { NavItem } from "@/types";

/**
 * SITE CONFIG — Replace placeholder contact details with your real institute info.
 */
export const siteConfig = {
  name: "Excellence Academy",
  shortName: "EA",
  tagline: "Building Bright Futures Through Quality Education",
  description:
    "Helping students achieve academic excellence with experienced faculty, structured learning, regular tests, and personal mentorship.",
  location: "Beawar, Rajasthan",
  // TODO: Replace with real institute details
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  email: "info@excellenceacademybeawar.com",
  address: "Near Bus Stand, Station Road, Beawar, Rajasthan 305901",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.5!2d74.32!3d26.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zBeawar!5e0!3m2!1sen!2sin!4v1",
  mapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=Excellence+Academy+Beawar",
  businessHours: [
    { day: "Monday – Saturday", hours: "7:00 AM – 8:00 PM" },
    { day: "Sunday", hours: "8:00 AM – 1:00 PM (Special batches)" },
  ],
  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    youtube: "https://youtube.com/",
    twitter: "https://twitter.com/",
  },
  stats: {
    years: 10,
    teachers: 25,
    students: 500,
    satisfaction: 98,
    successRate: 95,
  },
  admissionOpen: true,
  liveAdmissionCount: 47,
  motivationQuote: {
    text: "Success is the sum of small efforts repeated day in and day out.",
    author: "Robert Collier",
  },
  topperOfMonth: {
    name: "Ananya Sharma",
    classLabel: "Class 10",
    percentage: 97.8,
    achievement: "Board Topper · Beawar District",
  },
  url: "https://www.excellence-academy.me",
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Results", href: "/results" },
  { label: "Faculty", href: "/faculty" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  quick: [
    { label: "About Us", href: "/about" },
    { label: "Admission", href: "/admission" },
    { label: "Fee Structure", href: "/fees" },
    { label: "Scholarships", href: "/scholarship" },
    { label: "Batches", href: "/batches" },
    { label: "Download Center", href: "/download-center" },
  ],
  courses: [
    { label: "Class 6–8", href: "/courses?category=school" },
    { label: "Class 9–10", href: "/courses?category=school" },
    { label: "Class 11–12 Science", href: "/courses?category=school" },
    { label: "JEE Foundation", href: "/courses/jee-foundation" },
    { label: "NEET Foundation", href: "/courses/neet-foundation" },
    { label: "Olympiad", href: "/courses/olympiad-preparation" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export const whyChoose = [
  { title: "Experienced Faculty", description: "Subject experts with proven track records in board and competitive exams.", icon: "GraduationCap" },
  { title: "Small Batch Size", description: "Limited seats per batch so every student gets focused attention.", icon: "Users" },
  { title: "Personal Attention", description: "One-to-one mentoring and customized learning plans.", icon: "HeartHandshake" },
  { title: "Weekly Tests", description: "Regular assessments to track progress and close learning gaps.", icon: "ClipboardCheck" },
  { title: "Doubt Sessions", description: "Dedicated doubt-clearing slots after every major topic.", icon: "MessageCircleQuestion" },
  { title: "Smart Classrooms", description: "Digital boards and visual learning for clearer concepts.", icon: "MonitorPlay" },
  { title: "Affordable Fees", description: "Premium coaching with transparent, value-driven fee plans.", icon: "IndianRupee" },
  { title: "Career Guidance", description: "Counseling for boards, streams, and entrance pathways.", icon: "Compass" },
  { title: "Performance Reports", description: "Monthly reports shared with parents for full transparency.", icon: "BarChart3" },
  { title: "Parent Meetings", description: "Structured PTMs to align home and classroom support.", icon: "UsersRound" },
  { title: "Digital Study Material", description: "Notes, worksheets, and recorded support when needed.", icon: "TabletSmartphone" },
  { title: "Scholarship Programs", description: "Merit and need-based scholarships for deserving students.", icon: "Award" },
];

export const facilities = [
  { title: "Smart Classrooms", icon: "MonitorSmartphone" },
  { title: "Air Conditioned Rooms", icon: "AirVent" },
  { title: "Library", icon: "Library" },
  { title: "Computer Lab", icon: "Computer" },
  { title: "Projectors", icon: "Projector" },
  { title: "WiFi", icon: "Wifi" },
  { title: "CCTV", icon: "Cctv" },
  { title: "Parking", icon: "CircleParking" },
  { title: "RO Water", icon: "Droplets" },
  { title: "Comfortable Seating", icon: "Armchair" },
  { title: "Study Material", icon: "BookOpen" },
  { title: "Mock Tests", icon: "FileCheck2" },
];

export const admissionSteps = [
  { step: 1, title: "Fill Form", description: "Submit the online admission enquiry with basic student details." },
  { step: 2, title: "Counseling", description: "Meet our counselors to choose the right course and batch." },
  { step: 3, title: "Demo Class", description: "Attend a free demo to experience teaching quality firsthand." },
  { step: 4, title: "Admission", description: "Complete registration and fee formalities." },
  { step: 5, title: "Start Learning", description: "Join your batch and begin the excellence journey." },
];

export const scholarships = [
  {
    title: "Merit Scholarships",
    description: "Up to 50% fee waiver for students with outstanding previous-year marks.",
  },
  {
    title: "Financial Assistance",
    description: "Need-based support for deserving families after verification.",
  },
  {
    title: "Entrance Scholarship",
    description: "Scholarship test winners get priority admission and fee benefits.",
  },
];
