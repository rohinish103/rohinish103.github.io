# Excellence Academy — Beawar

Static website for **Excellence Academy**, a coaching institute in Beawar, Rajasthan.
Served with GitHub Pages at [excellence-academy.me](https://excellence-academy.me).

## Structure

- `index.html` — home page (hero, stats, featured courses, results, faculty, demo booking, batches, facilities)
- `about/`, `courses/`, `results/`, `faculty/`, `gallery/`, `testimonials/`, `blog/`, `faqs/`, `contact/` — main sections
- `admission/`, `fees/`, `scholarship/`, `batches/`, `download-center/`, `events/`, `career-counseling/` — admissions & student resources
- `attendance/`, `login/parent/`, `login/student/` — demo portals (UI preview only)
- `timetable/`, `exam-calendar/`, `previous-year-papers/` — academics
- `privacy/`, `terms/`, `404.html` — legal & error pages
- `assets/css/site.css` — compiled stylesheet (Tailwind utilities + Fraunces/Manrope fonts)
- `assets/media/` — self-hosted web fonts
- `assets/js/main.js` — site interactivity (navigation, search, reveal animations, counters, accordions, course filtering, WhatsApp enquiry forms, countdown, score chart)
- `robots.txt`, `sitemap.xml`, `og.svg`, `favicon.ico` — SEO assets

## Development

No build step required — it is a plain static site. To preview locally:

```bash
python3 -m http.server 8080
```

then open http://localhost:8080.

## Notes

- Enquiry/contact forms open WhatsApp with a pre-filled message (no backend).
- The attendance page is a demo: try sample IDs `EA2024001` or `EA2024012`.
- Light/dark theme toggle persists via `localStorage`.
