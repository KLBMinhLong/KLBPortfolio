# KLB.dev — Engineering Portfolio

> An evidence-driven, bilingual software engineering portfolio built with **React 19**, **TypeScript**, and **Vite**. Designed following the **Engineering Blueprint on Graphite** design system.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-minhlongdev.id.vn-55F2B0?style=for-the-badge&logo=vercel&logoColor=080B0D)](https://minhlongdev.id.vn)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=080B0D)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

---

## Overview

**KLB.dev** is the personal engineering portfolio of **Nguyễn Minh Long**, a Software Developer focused on backend systems and full-stack product engineering.

The portfolio is built with the principle of **Evidence Before Decoration**: prioritizing technical decisions, system architecture narratives, measurable facts, and product workflows over generic developer templates.

---

## Key Highlights & Features

- 🏗️ **In-Depth Engineering Case Studies**: Detailed multi-layer project narratives covering system scope, clean architecture, service boundaries, database design, and key engineering trade-offs.
- 🌐 **Full Bilingual Support (EN / VI)**: Instant, zero-flicker locale switching powered by custom typed translation context with persistent language preference.
- 📄 **Dual-Mode Résumé Showcase (`/resume`)**: 
  - **Embedded PDF Viewer**: Native browser document preview with custom graphite toolbar, file metadata, and quick download/print actions.
  - **Interactive Breakdown**: Structured web version with quick recruiter stats, FPT IS internship experience, project links, technical skills matrix, and academic honors.
- 📝 **Curated Engineering Notes (`/notes`)**: Technical articles and study notes on networking, system architecture, and web fundamentals.
- 🎨 **Engineering Blueprint Visual System**: Graphite palette, electric-mint signals (`#55F2B0`), fluid typography (`clamp()`), and subtle blueprint traces.
- ⚡ **Performance & Accessibility**: Sub-second bundle load, semantic HTML5 structure, dynamic metadata (`<title>`, meta descriptions), and WCAG AA contrast compliance.

---

## Featured Projects

| Project | Role / Scope | Technologies | Links |
|---|---|---|---|
| **eProcure Enterprise** | Solo AI-assisted Capstone (FPT IS Internship) | Java 17, Spring Boot, Angular, PostgreSQL, Kafka, Redis, Keycloak, Docker | [Source](https://github.com/KLBMinhLong/E-Procurement) · [Demo](https://youtu.be/a2H5rima8uU) |
| **YourSneaker** | Solo Full-stack Product | ASP.NET Core 9, React, TypeScript, MySQL, Docker, VNPay Sandbox | [Source](https://github.com/KLBMinhLong/YourSneaker) · [Demo](https://youtu.be/_y9Tr9E2Dgs) |
| **Student Dormitory Management** | Project Lead & Developer (6-member team) | Java, Spring Boot, PostgreSQL, Jira, PayOS | [Source](https://github.com/KLBMinhLong/StudentDormitoryManagement) |

---

## Tech Stack & Architecture

| Layer | Technology | Purpose |
|---|---|---|
| **Core Framework** | React 19 + TypeScript | UI component architecture and type safety |
| **Build Tooling** | Vite 6 | Fast HMR development and optimized production bundling |
| **Routing** | React Router DOM v7 | Client-side SPA navigation with scroll restoration |
| **Styling** | Vanilla CSS + CSS Variables | Design token system, zero runtime overhead |
| **Icons** | Lucide React | Clean, lightweight SVG icon system |
| **Deployment** | Vercel | Global CDN edge hosting, automatic CI/CD, SSL |

---

## Project Structure

```text
KLBPortfolio/
├── public/
│   ├── assets/
│   │   ├── branding/       # Brand marks, row logos
│   │   ├── documents/      # Official CV (Nguyen-Minh-Long-Resume.pdf)
│   │   ├── notes/          # Engineering notes cover illustrations
│   │   └── projects/       # High-resolution project screenshots & architecture
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/         # Header, Footer, SiteLayout
│   │   └── ui/             # SectionHeading, Reveal, UI primitives
│   ├── data/
│   │   └── content.ts      # Typed bilingual content models (EN & VI)
│   ├── hooks/
│   │   └── useDocumentMeta.ts # Dynamic SEO title & description
│   ├── i18n/
│   │   └── LanguageContext.tsx # Context provider for EN / VI locale switching
│   ├── pages/
│   │   ├── HomePage.tsx     # Single-page narrative portfolio
│   │   ├── ProjectPage.tsx  # Dynamic case study detail route (/work/:slug)
│   │   ├── NotesPage.tsx    # Curated engineering notes list (/notes)
│   │   ├── NotePage.tsx     # Single note article route (/notes/:slug)
│   │   ├── ResumePage.tsx   # Dual-mode CV viewer (/resume)
│   │   └── NotFoundPage.tsx # 404 System map page
│   ├── sections/            # Hero, Proof, Work, Workflow, Experience, Capabilities, Notes, About, Contact
│   ├── styles/
│   │   └── global.css       # Blueprint design tokens, typography, and responsive styles
│   ├── App.tsx              # Router provider and app routes
│   └── main.tsx             # Application entry point
├── package.json
├── tsconfig.json
├── vercel.json              # SPA rewrite configuration for Vercel
└── vite.config.ts
```

---

## Getting Started

### Prerequisites

- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/KLBMinhLong/KLBPortfolio.git
   cd KLBPortfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## Author & Contact

**Nguyễn Minh Long**  
*Software Developer | Backend & Full-stack*

- 🌐 **Portfolio**: [minhlongdev.id.vn](https://minhlongdev.id.vn)
- 🐙 **GitHub**: [@KLBMinhLong](https://github.com/KLBMinhLong)
- 💼 **LinkedIn**: [Nguyễn Minh Long](https://www.linkedin.com/in/minh-long-nguy%E1%BB%85n-09984a333)
- ✉️ **Email**: [nguyenminhlongcntt@gmail.com](mailto:nguyenminhlongcntt@gmail.com)

---

## License

This project is open source and available under the [MIT License](LICENSE).

