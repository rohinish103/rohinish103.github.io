export type DownloadCategory =
  | "syllabus"
  | "notes"
  | "assignments"
  | "homework"
  | "papers";

export type DownloadItem = {
  title: string;
  category: DownloadCategory;
  className: string;
  size: string;
  file: string;
};

export const downloadCategories: DownloadCategory[] = [
  "syllabus",
  "notes",
  "assignments",
  "homework",
  "papers",
];

export const downloads: DownloadItem[] = [
  {
    title: "Class 10 Science Syllabus",
    category: "syllabus",
    className: "Class 10",
    size: "1.2 MB",
    file: "/downloads/class-10-science-syllabus.pdf",
  },
  {
    title: "Class 12 Physics Notes — Electrostatics",
    category: "notes",
    className: "Class 12",
    size: "2.4 MB",
    file: "/downloads/class-12-physics-electrostatics.pdf",
  },
  {
    title: "Weekly Assignment — Maths",
    category: "assignments",
    className: "Class 9",
    size: "800 KB",
    file: "/downloads/class-9-maths-weekly-assignment.pdf",
  },
  {
    title: "Holiday Homework — Summer",
    category: "homework",
    className: "Class 8",
    size: "1.1 MB",
    file: "/downloads/class-8-summer-homework.pdf",
  },
  {
    title: "RBSE Class 10 Maths PYQ 2024",
    category: "papers",
    className: "Class 10",
    size: "3.0 MB",
    file: "/downloads/rbse-class-10-maths-pyq-2024.pdf",
  },
  {
    title: "NEET Biology Chapter Worksheet",
    category: "notes",
    className: "NEET",
    size: "1.8 MB",
    file: "/downloads/neet-biology-worksheet.pdf",
  },
];
