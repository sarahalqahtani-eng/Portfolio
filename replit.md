# Sarah Alqahtani — Portfolio

## Overview
A minimal, editorial personal portfolio built with React + Vite + Tailwind CSS + Framer Motion. Content-driven: projects live in a shared data structure and render both as homepage cards and dedicated case-study routes.

## Tech Stack
- **Frontend**: React 18, Vite 5
- **Styling**: Tailwind CSS 3 (warm beige / editorial design system)
- **Animations**: Framer Motion 11 (light scroll reveals, respects `prefers-reduced-motion`)
- **Routing**: React Router 6

## Project Structure
```
src/
  data/
    site.js       — profile, experience, leadership, education, skills
    projects.js   — shared project data structure + case-study content
  components/
    layout/       — Navbar, Footer
    ui/           — Reveal (scroll animation), SectionHeading, ProjectCard, ProjectCover
  pages/
    Home.jsx          — Hero + 01 Projects / 02 About / 03 Experience / 04 Skills / 05 Contact
    ProjectDetail.jsx — /projects/:slug case-study page, driven by data/projects.js
```

## Adding a project
Add an entry to `src/data/projects.js` (slug, title, category, year, role, shortDescription,
cover, metrics, technologies, features, githubUrl, liveUrl, sections). It automatically
appears as a homepage card and gets a `/projects/<slug>` page — no other code changes needed.

## Routes
- `/` — Home
- `/projects/:slug` — Project case study

## Running
```
npm install
npm run dev     # Vite on port 5000
npm run build   # → dist/
```

## Deployment
Static Vite build deployed on Vercel from this repository. `vercel.json` adds a SPA
rewrite (`/(.*) → /index.html`) so direct links to `/projects/:slug` resolve correctly.
