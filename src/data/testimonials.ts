export type Testimonial = {
  quote: string;
  name: string;
  role: "Parent" | "Student";
  context?: string;
  rating: number;
  video?: boolean;
  featured?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Excellence Academy transformed my daughter's confidence. Weekly reports and personal attention made all the difference for her Class 10 boards.",
    name: "Mrs. Sunita Sharma",
    role: "Parent",
    context: "Parent of Class 10 student",
    rating: 5,
    featured: true,
  },
  {
    quote:
      "The faculty explains every concept patiently. Mock tests and doubt sessions helped me score 96% in Class 12 Science.",
    name: "Rohan Verma",
    role: "Student",
    context: "Class 12 Science",
    rating: 5,
    video: true,
    featured: true,
  },
  {
    quote:
      "Transparent communication, disciplined environment, and affordable fees. Highly recommended for Beawar parents.",
    name: "Mr. Ramesh Patel",
    role: "Parent",
    rating: 5,
    featured: true,
  },
  {
    quote:
      "From average to topper — mentors here believed in me and guided every step. Forever grateful!",
    name: "Ananya Sharma",
    role: "Student",
    context: "Class 10 Topper",
    rating: 5,
  },
  {
    quote:
      "Demo class convinced us immediately. Small batches and smart classrooms are genuinely premium.",
    name: "Mrs. Kavita Jain",
    role: "Parent",
    context: "Parent of Class 8 student",
    rating: 5,
  },
  {
    quote:
      "NEET foundation classes are structured and motivating. Biology coaching here is exceptional.",
    name: "Meera Gupta",
    role: "Student",
    context: "NEET Aspirant",
    rating: 5,
    video: true,
  },
];

export const featuredTestimonials = testimonials.filter((item) => item.featured);
