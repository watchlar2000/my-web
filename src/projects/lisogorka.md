---
title: 'Lisogorka'
description: 'Iryna Lisogor personal website.'
order: 1
featured: true
tags: project
tech: ['SvelteKit', 'TypeScript', 'Supabase', 'Postgres', 'DrizzleORM']
github: 'https://github.com/watchlar2000/lisogorka'
demo: 'https://www.irynalisogor.com'
year: '2025'
created: Sep 22, 2025
updated: Sep 22, 2025
---

{% image {alt: "lisogorka website main page", source: "src/images/projects/lisogorka/2025-09-22_20-57.png"} %}

"Lisogorka" is a personal portfolio website of [Iryna Lisogor](https://www.instagram.com/iryna_lisogor/) - a visual designer and illustrator. She needed a digital space to showcase her creative work while maintaining full control over content management.

Live preview - [https://www.irynalisogor.com](https://www.irynalisogor.com)

### The Challenge

Creating a personal web "space" for artists involves the following:

- showcasing work in the desired way,
- ensuring easy content management for non-technical users,
- keeping fast performance,
- and providing admin capabilities for portfolio updates.

The challenge was to build a solution that would be both visually appealing for visitors and practically manageable for daily use.

### Solution & Features

**Content Management System** - Custom admin dashboard allows Iryna to easily add, edit, and organize her portfolio pieces. It supports rich text editing, image uploads, and project categorization.

<p>
{% image {alt: "lisogorka website main page", source: "src/images/projects/lisogorka/2025-09-22_21-06.png"} %}
</p>
<p>
{% image {alt: "lisogorka website main page", source: "src/images/projects/lisogorka/2025-09-22_21-09.png"} %}
</p>

**Performance-First Architecture** - SvelteKit brings optimal loading speeds and SEO resulting in perfect PageSpeed Insights score.

**Responsive Design System** - Developed a fluid typography system and responsive layouts using CUBE CSS methodology.

**Secure Authentication** - Integrated OAuth-based authentication through Supabase for secure admin access.

### Technical Implementation

**Frontend Architecture**

Built with SvelteKit leveraging its App Router for optimal performance, SEO, and developer experience. TypeScript provides comprehensive type safety across the entire codebase, while vanilla CSS with fluid typography creates a maintainable and performant styling system.

**Backend & Database**

Integrated Supabase for PostgreSQL database management and authentication, with DrizzleORM providing type-safe database queries. Cloudinary handles image optimization and delivery.

### Key Metrics & Impact

- **100/100 Performance Score** [PageSpeed Insights](https://pagespeed.web.dev/analysis/https-www-irynalisogor-com/tud04bra5g?form_factor=desktop)
- **Mobile-first responsive design** with consistent experience across devices
- **Seamless admin experience**

### Development Process

The project began with understanding Iryna's specific needs as a visual artist - prioritizing image quality and ease of content updates. I chose SvelteKit for its great performance characteristics and Supabase for its comprehensive backend-as-a-service structure.

### Future Enhancements

- Enhanced Admin UI
- Analytics Dashboard - Portfolio engagement metrics
- Blog Integration
