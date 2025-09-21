---
title: 'Lisogorka'
description: 'A modern mountain cabin booking platform with real-time availability and interactive trail maps'
order: 2
featured: true
tags: project
tech:
  [
    'SvelteKit',
    'TypeScript',
    'Supabase',
    'Postgres',
    'DrizzleORM',
    'Zod',
    'CSS',
    'Fluid-typography',
  ]
github: 'https://github.com/watchlar2000/lisogorka'
demo: 'www.irynalisogor.com '
year: '2025'
---

# Lisogorka

Lisogorka is a comprehensive booking platform for mountain cabins and outdoor experiences in the Carpathian Mountains. The project combines modern web technologies with intuitive design to help adventurers discover and book unique mountain retreats.

## The Challenge

Mountain cabin owners struggled with fragmented booking systems, while travelers had difficulty finding authentic mountain experiences with reliable availability information. Most existing platforms were either too generic or lacked the specialized features needed for mountain accommodations.

## Solution & Features

**Real-time Booking System**
Built a dynamic availability calendar with instant confirmation and automated booking management. Cabin owners can update availability, pricing, and amenities in real-time through an intuitive dashboard.

**Interactive Trail Maps**
Integrated Mapbox GL to display hiking trails, difficulty levels, and points of interest around each cabin. Users can explore trails, check elevation profiles, and plan their mountain adventures directly from the platform.

**Weather Integration**
Real-time weather forecasts and mountain conditions help guests plan their stays. The system provides alerts for severe weather and suggests alternative dates when conditions aren't ideal.

**Mobile-First Design**
Responsive design ensures seamless experience across devices, crucial for travelers planning trips on mobile devices or checking information while on trails.

## Technical Implementation

**Frontend Architecture**
Built with Next.js 14 using the App Router for optimal performance and SEO. TypeScript ensures type safety across the codebase, while Tailwind CSS provides consistent, responsive styling.

**Backend & Database**
Leveraged Supabase for real-time database operations, authentication, and file storage. Row-level security policies protect user data while enabling real-time updates for booking availability.

**Performance Optimizations**

- Image optimization for cabin photos using Next.js Image component
- Route-based code splitting for faster page loads
- Cached weather and map data to reduce API calls
- Progressive web app features for offline trail map access

## Key Metrics & Impact

- **50+ cabin listings** across 3 mountain regions
- **200+ successful bookings** in first 6 months
- **4.8/5 average rating** from users
- **40% increase** in direct bookings for partner cabins
- **Mobile usage: 65%** of total traffic

## Lessons Learned

Working with geolocation data and mapping APIs presented unique challenges, especially ensuring accuracy for remote mountain locations. Implementing proper error handling for network connectivity issues in mountain areas was crucial for user experience.

The project reinforced the importance of user research - initial feedback from mountain guides and frequent hikers shaped key features like offline map capabilities and weather integration.

## Future Enhancements

- Native mobile app development
- Integration with popular hiking apps like AllTrails
- AI-powered recommendation system based on user preferences
- Multi-language support for international visitors
- Carbon footprint tracking for eco-conscious travelers
