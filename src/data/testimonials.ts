import type { Testimonial } from "@/types";

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Mrs. Sunita Sharma",
    role: "parent",
    rating: 5,
    text: "Excellence Academy transformed my daughter's confidence. Weekly reports and personal attention made all the difference for her Class 10 boards.",
    classLabel: "Parent of Class 10 student",
  },
  {
    id: "2",
    name: "Rohan Verma",
    role: "student",
    rating: 5,
    text: "The faculty explains every concept patiently. Mock tests and doubt sessions helped me score 96% in Class 12 Science.",
    classLabel: "Class 12 Science",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "3",
    name: "Mr. Ramesh Patel",
    role: "parent",
    rating: 5,
    text: "Transparent communication, disciplined environment, and affordable fees. Highly recommended for Beawar parents.",
  },
  {
    id: "4",
    name: "Ananya Sharma",
    role: "student",
    rating: 5,
    text: "From average to topper — mentors here believed in me and guided every step. Forever grateful!",
    classLabel: "Class 10 Topper",
  },
  {
    id: "5",
    name: "Mrs. Kavita Jain",
    role: "parent",
    rating: 5,
    text: "Demo class convinced us immediately. Small batches and smart classrooms are genuinely premium.",
    classLabel: "Parent of Class 8 student",
  },
  {
    id: "6",
    name: "Meera Gupta",
    role: "student",
    rating: 5,
    text: "NEET foundation classes are structured and motivating. Biology coaching here is exceptional.",
    classLabel: "NEET Aspirant",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];

export const googleReviews = {
  rating: 4.9,
  count: 186,
  highlight: "Parents love the personal mentorship and consistent results.",
};
