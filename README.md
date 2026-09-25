# Excellence Academy

Website for **Excellence Academy**, a coaching institute in Beawar, Rajasthan. Built with Next.js, TypeScript, and Tailwind CSS — matching the live Vercel site at [excellence-academy-beawar.vercel.app](https://excellence-academy-beawar.vercel.app/).

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

This produces a static export in `out/` for GitHub Pages.

## Pages

Home, About, Courses (and every course detail), Results, Faculty, Gallery, Testimonials, Blog, FAQs, Contact, Admission, Fees, Scholarships, Batches, Events, Download Center, Previous Year Papers, Career Counseling, Attendance, Student/Parent login, Timetable, Exam Calendar, Privacy, and Terms.

## Customize

- Institute details: `src/data/site.ts`
- Courses, faculty, results, FAQs, and content: `src/data/`
- Campus photos: `src/data/gallery.ts`

## Deploy

GitHub Actions publishes the static export to GitHub Pages on push to `main`. Enable **Settings → Pages → Source: GitHub Actions**. The custom domain `excellence-academy.me` is set in `CNAME` / `public/CNAME`.
