export const site = {
  name: "Excellence Academy",
  shortName: "EA",
  location: "Beawar, Rajasthan",
  tagline: "Building Bright Futures Through Quality Education",
  description:
    "Helping students achieve academic excellence with experienced faculty, structured learning, regular tests, and personal mentorship.",
  url: "https://excellenceacademybeawar.com",
  address: "Near Bus Stand, Station Road, Beawar, Rajasthan 305901",
  phone: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  whatsapp: "919876543210",
  email: "info@excellenceacademybeawar.com",
  mapsQuery: "Excellence Academy, Station Road, Beawar, Rajasthan 305901",
  googleReviews: { rating: 4.9, count: 186 },
  hours: [
    { days: "Monday – Saturday", time: "7:00 AM – 8:00 PM" },
    { days: "Sunday", time: "8:00 AM – 1:00 PM (Special batches)" },
  ],
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    youtube: "https://youtube.com/",
  },
  heroImage:
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&h=1080&fit=crop",
  heroCardImage:
    "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&h=1500&fit=crop",
} as const;

export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  site.mapsQuery,
)}`;

export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  site.mapsQuery,
)}&output=embed`;

export function whatsappUrl(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/courses", label: "Courses" },
  { href: "/results", label: "Results" },
  { href: "/faculty", label: "Faculty" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Blog" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/admission", label: "Admission" },
  { href: "/fees", label: "Fee Structure" },
  { href: "/scholarship", label: "Scholarships" },
  { href: "/batches", label: "Batches" },
  { href: "/download-center", label: "Download Center" },
];

export const footerCourseLinks = [
  { href: "/courses/class-6", label: "Class 6–8" },
  { href: "/courses/class-10", label: "Class 9–10" },
  { href: "/courses/class-11-science", label: "Class 11–12 Science" },
  { href: "/courses/jee-foundation", label: "JEE Foundation" },
  { href: "/courses/neet-foundation", label: "NEET Foundation" },
  { href: "/courses/olympiad-preparation", label: "Olympiad" },
];

export const heroStats = [
  { value: 500, suffix: "+", label: "Students" },
  { value: 95, suffix: "%", label: "Success Rate" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 25, suffix: "+", label: "Expert Faculty" },
];

export const instituteStats = [
  { value: 10, suffix: "+", label: "Years of Excellence" },
  { value: 25, suffix: "+", label: "Qualified Teachers" },
  { value: 500, suffix: "+", label: "Students Enrolled" },
  { value: 98, suffix: "%", label: "Parent Satisfaction" },
];
