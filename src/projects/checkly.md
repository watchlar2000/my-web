---
title: 'Checkly'
description: 'Create a personal development plan in no time.'
order: 2
featured: true
tags: project
tech:
  [
    'React',
    'TypeScript',
    'OpenAPI',
    'Fastify',
    'PostgreSQL',
    'Objection',
    'Knex',
  ]
github: 'https://github.com/BinaryStudioAcademy/bsa-2025-checkly'
demo: 'http://checkly.eu-north-1.elasticbeanstalk.com/'
year: '2025'
created: Sep 22, 2025
updated: Sep 22, 2025
---

{% image {alt: "checkly website main page", source: "src/images/projects/checkly/2025-09-22_21-48.png"} %}

Checkly is an AI-powered app that turns your goals into actionable daily plans. Everyone can take a short quiz and get a personalized checklist - whether they want to build better habits, get healthier, or explore creativity.

### The Problem

Most people struggle to turn their goals into concrete daily actions. Traditional planners are either too rigid or too vague to actually follow through.

### What We Built

**Smart Quiz System** - Answer 10-12 questions about your goals and other preferences. The AI uses this to create the plan that will match your lifestyle.

**AI Plan Generation** - Get a customized daily plan with specific tasks. You can choose from 7 categories: personal growth, health, finances, career, creativity, spirituality, or hobbies.

**Beautiful PDF Export** - Download your plan as a PDF file with different design options.

**Full Customization** - Don't like a task? Replace it instantly. Want to regenerate an entire day? One click. The AI adapts to your feedback and keeps learning what works for you.

### The Experience

Pick your focus area, take the quick quiz, and watch as AI creates your personalized roadmap. The interface is playful and motivating, making goal-setting feel more like a game than work.

### Demo Video

<p>
<iframe width="100%" height="500px" src="https://www.youtube.com/embed/8dayzlQ2KYQ?start=3996" title="Checkly Demo" frameborder="0" allowfullscreen></iframe>
</p>

### Technical Implementation

**Frontend Architecture**
Built with modern web technologies for a smooth, responsive experience across all devices. The interface uses vibrant colors and smooth animations to keep users engaged and motivated.

**Backend & AI**
Fastify backend with TypeScript handles the AI logic and plan generation. AWS S3 manages PDF storage and delivery. Comprehensive testing with Playwright ensures reliability across different user scenarios.

**Key Features**

- Intelligent quiz system with progressive questions
- AI-powered task generation and customization
- Real-time plan editing and regeneration
- Mobile-responsive design
