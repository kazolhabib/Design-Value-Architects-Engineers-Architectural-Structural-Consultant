# Design Value Architects & Engineers

Design Value Architects & Engineers is a modern Next.js rebuild of the original WordPress website for DVAE. The project focuses on matching the source site closely while improving maintainability, deployment flow, and performance with a code-based stack.

## Project Overview

This site presents DVAE's architectural and structural consultancy work, company information, services, completed projects, FAQs, and contact details. The design is built around large visual project showcases, smooth reveal animations, responsive layouts, and locally managed assets.

## Live Pages

| Page | Route | Status |
| --- | --- | --- |
| Home | `/` | Complete |
| About Us | `/about-us` | Complete |
| Our Services | `/our-services` | Complete |
| FAQ | `/faq` | Complete |
| Our Project | `/our-project` | Complete |
| Contact Us | `/contact-us` | Complete |
| Not Found | `/404` | Complete |

## Key Features

- WordPress-to-code page recreation
- Responsive layouts for desktop, tablet, and mobile
- Home page featured project grid with matched image ratios
- Project carousel with image popup/lightbox
- Contact page with form layout and embedded Google map
- FAQ page with reusable CTA section
- Custom favicon, app icon, and Apple touch icon from the original WordPress site
- Smooth reveal and title animations using Framer Motion
- Local fonts and assets served from the `public` directory

## Tech Stack

- Next.js `16.2.7`
- React `19.2.4`
- Tailwind CSS v4
- HeroUI
- Framer Motion
- ESLint

## Project Structure

```text
src/
  app/
    page.js              Home page
    about-us/            About page
    our-services/        Services page
    our-project/         Projects page
    faq/                 FAQ page
    contact-us/          Contact page
    globals.css          Global styles and theme helpers
  components/
    HeaderHome.js        Home header
    HeaderInternal.js    Internal page header
    Hero.js              Home hero section
    Footer.js            Global footer
    Reveal.js            Reveal animation wrapper
    TitleReveal.js       Animated title component
    TestimonialSlider.js Testimonial section
    Marquee.js           Partner/client marquee
public/
  assets/                Images, icons, videos, fonts, and WordPress assets
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the local site:

```text
http://localhost:3000
```

## Available Scripts

```bash
npm run dev
```

Starts the local development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run start
```

Runs the production build locally.

```bash
npm run lint
```

Checks the project with ESLint.

## Deployment

Recommended deployment platform: Vercel.

Suggested flow:

1. Push the latest code to GitHub.
2. Import the GitHub repository into Vercel.
3. Keep the framework preset as Next.js.
4. Use the default build command: `npm run build`.
5. Connect the production domain after the first successful deployment.

## Notes

- This project uses the Next.js App Router.
- Static assets are stored under `public/assets`.
- Keep WordPress reference pages available while recreating future sections so visual details can be matched carefully.
- Before major updates, run `npm run lint` and check the affected pages in the browser.
