# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Arc Raiders game guide website built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4. The application provides a comprehensive cheat sheet with 70+ items, quest tracker, and crafting guides for the Arc Raiders game. The project is heavily SEO-optimized for gaming-related searches.

## Development Commands

- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Architecture

### App Router Structure
Uses Next.js App Router with the `app/` directory:
- `app/layout.tsx` - Root layout with SEO metadata, Google Analytics, Microsoft Clarity, and structured data (Schema.org)
- `app/page.tsx` - Home page with interactive item database, search/filter functionality, and SEO-optimized content
- `app/quests/page.tsx` - Quest guide page
- `app/workshop/page.tsx` - Crafting and workshop guide
- `app/guides/page.tsx` - Strategy guides
- `app/globals.css` - Global styles with Tailwind directives

### Components
- `components/Header.tsx` - Responsive navigation with mobile menu support
- `components/Footer.tsx` - Site footer
- `components/GoogleAnalytics.tsx` - Google Analytics integration
- `components/ItemImage.tsx` - Optimized item image component with rarity-based styling

### Data Layer
- `lib/items-data.ts` - Central data source for 70+ game items with categories, rarities, actions (keep/sell/recycle), values, and descriptions
- `lib/seo.ts` - SEO utility functions for generating optimized metadata (40-60 char titles, 140-160 char descriptions)
- `lib/generated-missing-items.ts` - Generated file for additional items (should be imported, not manually edited)

### Item Data Structure
Items use the following TypeScript interface:
```typescript
interface Item {
  id: string;
  name: string;
  category: 'arc_parts' | 'crafting_materials' | 'quest_items' | 'recyclable' | 'consumables';
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
  action: 'keep' | 'sell' | 'recycle';
  value: number;
  image: string;
  description: string;
  usedFor?: string[];
  recyclesInto?: string[];
}
```

### SEO Implementation
The site is heavily optimized for search engines:
- All page titles: 40-60 characters
- All meta descriptions: 140-160 characters
- Keyword density: 3-5% for "arc raiders" related terms
- Schema.org structured data (WebSite, VideoGame, FAQPage, WebApplication)
- Open Graph and Twitter Card metadata
- Dynamic sitemap generation
- Google Analytics and Microsoft Clarity tracking

### TypeScript Configuration
Path alias `@/*` maps to the root directory for imports.

### Styling
Tailwind CSS v4 with PostCSS. Dark mode is always enabled via the `dark` class on the `<html>` element. The design uses:
- Gradient accents (blue to purple)
- Dark theme optimized for gaming audience
- Responsive design (mobile-first)
- Hover effects and transitions
- Badge system for item actions and rarities

## Important Development Guidelines

### When Adding New Items
1. Add items to `lib/items-data.ts` in the `baseItems` array
2. Ensure all required fields are populated (id, name, category, rarity, action, value, image, description)
3. Place item images in `public/items/` directory
4. Use descriptive filenames matching the item ID (e.g., `leaper_pulse_unit.png`)

### When Adding New Pages
1. Create page in `app/[pagename]/page.tsx`
2. Use `generateMetadata` from `lib/seo.ts` for SEO
3. Ensure title is 40-60 characters
4. Ensure description is 140-160 characters
5. Include primary keyword ("arc raiders") 3-5% of the time in content

### Client vs Server Components
- `app/page.tsx` is a client component (`'use client'`) for interactive search/filter
- `app/layout.tsx` is a server component for SEO metadata
- Most pages can be server components unless they need interactivity
- Use `'use client'` directive only when necessary (state, events, browser APIs)

### SEO Best Practices
- Always use H1 tag once per page for main title
- Use H2/H3 for section hierarchy
- Include natural keyword integration in content
- Add structured data (Schema.org) for rich snippets
- Optimize images with Next.js Image component
- Use semantic HTML elements (`<article>`, `<section>`, `<nav>`)

## Domain and Deployment
- Production domain: https://arcraiderscheatsheet.org
- Deployment platform: Vercel (recommended)
- Analytics: Google Analytics and Microsoft Clarity integrated
- No environment variables required for basic deployment
