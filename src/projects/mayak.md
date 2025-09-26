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
    'Leaflet',
  ]
github: 'https://github.com/keenethics/mayak'
demo: 'https://www.mayak.co.ua'
year: '2024'
created: Sep 22, 2025
updated: Sep 26, 2025
---

{% image {alt: "mayak website main page", source: "src/images/projects/mayak/2025-09-22_21-19.png"} %}

Mayak helps people in Lviv, Ukraine find mental health support. We built a website where locals can search for verified psychologists without paywalls or fake listings.

<div class="font-display wrapper flow-tight | reference-block" data-wrapper-type="inner">
  <p><a href="https://www.mayak.co.ua">Live preview</a></p>
  <p><a href="https://keenethics.com/mayak">Case study from Keenethics</a></p>
</div>

### The Challenge

Existing platforms had problems - some cost money, others listed unqualified people. The Mayak non-profit request was to build something better for their community.

### What we've come up with

{% image {alt: "mayak website main page", source: "src/images/projects/mayak/2025-09-22_21-24.png"} %}

**Search for help easily** - Find therapists by location, price, specialty, or specific issues like anxiety or depression. Just type what you need and get matched with real professionals.

**Trust the results** - Every therapist is verified and licensed. No fake profiles or unqualified people.

**Use it easily**- The site works for everyone, even people who aren't tech-savvy. Simple design, clear information, and easy navigation.

### Technical Implementation

**Frontend Architecture** - Built with NextJS 14 using App Router for server-side rendering. The component architecture follows a modular pattern with reusable UI components styled using TailwindCSS. Leaflet powers the interactive map functionality, providing real-time visualization of therapist locations.

**Backend & Database** - PostgreSQL database with Prisma ORM handles all the data. Next.js API routes manage the backend logic. React Query was used for efficient data fetching and React Admin for easy content management.

### Key Features

- Interactive map with therapist locations
- Advanced search and filtering system
- Mobile-responsive design
- Admin panel for managing listings
- Error tracking with Sentry
- Type-safe development with TypeScript
