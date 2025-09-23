---
title: 'Mayak'
description: 'A Mental Health Information System.'
order: 2
featured: true
tags: project
tech:
  [
    'NextJS',
    'React',
    'PostgreSQL',
    'React-admin',
    'TailwindCSS',
    'PrismaORM',
    'Laflet',
  ]
github: 'https://github.com/keenethics/mayak'
demo: 'https://www.mayak.co.ua'
year: '2024'
created: Sep 22, 2025
updated: Sep 22, 2025
---

{% image {alt: "mayak website main page", source: "src/images/projects/mayak/2025-09-22_21-19.png"} %}

Mayak helps people in Lviv, Ukraine find mental health support. We built a website where locals can search for verified psychologists without paywalls or fake listings.

Live preview - [www.mayak.co.ua](https://www.mayak.co.ua)

Case study - [https://keenethics.com/mayak](https://keenethics.com/mayak)

### The Challenge

Existing platforms had problems - some cost money, others listed unqualified people. The Mayak non-profit request was to build something better for their community.

### What we've come up with

{% image {alt: "mayak website main page", source: "src/images/projects/mayak/2025-09-22_21-24.png"} %}

**Search for help easily** - Find therapists by location, price, specialty, or specific issues like anxiety or depression. Just type what you need and get matched with real professionals.

**Trust the results** - Every therapist is verified and licensed. No fake profiles or unqualified people.

**Use it easily**- The site works for everyone, even people who aren't tech-savvy. Simple design, clear information, and easy navigation.

### Technical Implementation

**Frontend Architecture**
Built with SvelteKit leveraging its App Router for optimal performance, SEO, and developer experience. TypeScript provides comprehensive type safety across the entire codebase, while vanilla CSS with fluid typography creates a maintainable and performant styling system.

**Backend & Database**
PostgreSQL database with Prisma ORM handles all the profiles and user data. Next.js API routes manage the backend logic. React Query was used for efficient data fetching and React Admin for easy content management

### Key Features

- Interactive map with therapist locations
- Advanced search and filtering system
- Mobile-responsive design
- Admin panel for managing listings
- Error tracking with Sentry
- Type-safe development with TypeScript
