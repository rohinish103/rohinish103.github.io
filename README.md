# Excellence Academy, Beawar — website

Marketing and admissions website for Excellence Academy, a coaching institute in
Beawar, Rajasthan. Built with Next.js and Tailwind CSS, exported as a fully
static site and served from GitHub Pages at
[excellence-academy.me](https://excellence-academy.me).

## Stack

| Piece       | Choice                                                   |
| ----------- | -------------------------------------------------------- |
| Framework   | Next.js 16 (App Router), static export                    |
| Styling     | Tailwind CSS v4 with CSS custom properties for theming    |
| Icons       | lucide-react                                              |
| Typography  | Fraunces (display) and Manrope (body) via `next/font`     |
| Hosting     | GitHub Pages, deployed by GitHub Actions                  |

There is no backend. Every enquiry form composes a pre-filled WhatsApp message
and opens `wa.me`, so the site stays static while the institute still receives
structured leads.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export into ./out
npm run lint
npm run typecheck
```

## Project layout

```
src/
  app/                 Routes (App Router). Each folder is a page.
    layout.tsx         Fonts, metadata, JSON-LD, header/footer shell
    page.tsx           Homepage — composes the sections below
    courses/[slug]/    Per-course detail pages
    blog/[slug]/       Article pages
  components/
    home/              One file per homepage section
    cards.tsx          Course, faculty, topper, testimonial, batch, event cards
    forms.tsx          Admission, demo, contact, counseling, portal forms
    ...                Header, footer, search, chart, countdown, accordion
  data/                All site copy lives here (see below)
  lib/utils.ts         Small formatting helpers
public/                Static assets, CNAME, robots.txt, favicon, OG image
```

## Editing content

Content is deliberately separated from layout — most updates need no JSX changes:

| File                        | Controls                                              |
| --------------------------- | ----------------------------------------------------- |
| `src/data/site.ts`          | Name, address, phone, WhatsApp number, hours, socials, nav |
| `src/data/courses.ts`       | Course catalogue, fees, subjects, admission dropdown  |
| `src/data/faculty.ts`       | Teacher profiles                                      |
| `src/data/results.ts`       | Toppers, result statistics, score progression chart   |
| `src/data/announcements.ts` | Notice ticker, events, upcoming batches               |
| `src/data/testimonials.ts`  | Parent and student reviews                            |
| `src/data/faqs.ts`          | FAQ accordion and FAQ schema markup                   |
| `src/data/blog.ts`          | Articles (slug, excerpt, body paragraphs)             |
| `src/data/downloads.ts`     | Download center entries                               |
| `src/data/gallery.ts`       | Gallery images — empty until real campus photos exist |
| `src/data/content.ts`       | Feature grid, facilities, fee plans, milestones, quote |

The phone number, WhatsApp number and email in `src/data/site.ts` are
placeholders from the design — replace them with the live ones before launch.

### Adding gallery photos

1. Drop the images into `public/gallery/`.
2. Add an entry per photo in `src/data/gallery.ts` with `src`, `alt` and
   `category`.

The gallery page and the homepage highlights switch from the "coming soon"
placeholder to a filterable grid automatically once the array is non-empty.

### Adding study material

Put the PDFs in `public/downloads/` and list them in `src/data/downloads.ts`.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the static
export and publishes `out/` to GitHub Pages.

One-time setup in the repository: **Settings → Pages → Build and deployment →
Source → GitHub Actions**. The custom domain is kept alive by `public/CNAME`,
which is copied into the export on every build.

## Accessibility and SEO

- Skip-to-content link, labelled form fields, and focus-visible styles.
- `prefers-reduced-motion` disables the ticker, count-ups and scroll animation.
- Per-page titles and descriptions, Open Graph image, `EducationalOrganization`
  and `FAQPage` JSON-LD, generated `sitemap.xml`, and `robots.txt`.
