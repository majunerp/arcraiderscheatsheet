# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 application using React 19, TypeScript, and Tailwind CSS v4. The project follows the Next.js App Router architecture.

## Development Commands

- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Architecture

**App Router Structure**: Uses Next.js App Router with the `app/` directory:
- `app/layout.tsx` - Root layout with Geist font configuration
- `app/page.tsx` - Home page component
- `app/globals.css` - Global styles with Tailwind directives

**TypeScript Configuration**: Path alias `@/*` maps to the root directory for imports.

**Styling**: Tailwind CSS v4 with PostCSS. Dark mode support is implemented via CSS classes.
