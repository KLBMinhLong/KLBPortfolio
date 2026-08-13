# DESIGN.md — KLBPortfolio Design System

## Brand Identity

**KLBPortfolio** — Personal developer portfolio.
Phong cách: **Modern, Minimal, Premium Dark** — chuyên nghiệp nhưng có điểm nhấn creative, phù hợp với developer profile.

### Design Principles
1. **Clean & Readable**: Content là trung tâm, UI không gây rối mắt
2. **Dark Elegance**: Dark theme chủ đạo, tạo cảm giác premium và tech-savvy
3. **Subtle Motion**: Animations nhẹ nhàng, reveal-on-scroll, không quá lòe loẹt
4. **Professional**: Nhà tuyển dụng là audience chính — thiết kế phải tạo niềm tin
5. **Responsive**: Hoàn hảo trên mọi thiết bị (HR hay xem trên điện thoại)

---

## Color Palette

### Core Colors
| Token                  | Value                         | Usage                   |
|------------------------|-------------------------------|--------------------------|
| `--color-bg-primary`    | `#0B0D17`                     | Main background          |
| `--color-bg-secondary`  | `#111427`                     | Cards, sections          |
| `--color-bg-elevated`   | `#1A1D35`                     | Hover, elevated surfaces |
| `--color-bg-glass`      | `rgba(17, 20, 39, 0.7)`      | Glassmorphism panels     |

### Accent Colors
| Token                  | Value                         | Usage                   |
|------------------------|-------------------------------|--------------------------|
| `--color-accent`        | `#6C63FF`                     | Primary accent (indigo/violet) |
| `--color-accent-hover`  | `#5A52E0`                     | Accent hover             |
| `--color-accent-glow`   | `rgba(108, 99, 255, 0.25)`   | Glow effects             |
| `--color-accent-2`      | `#00D4AA`                     | Secondary accent (teal)  |
| `--color-accent-gradient` | `linear-gradient(135deg, #6C63FF, #00D4AA)` | Gradient highlights |

### Text Colors
| Token                    | Value     | Usage                |
|--------------------------|-----------|----------------------|
| `--color-text-primary`    | `#EAEAF5` | Headings, key content |
| `--color-text-secondary`  | `#8B8DA3` | Body text, descriptions |
| `--color-text-muted`      | `#5A5C72` | Subtle text, labels  |
| `--color-text-on-accent`  | `#FFFFFF` | Text on accent surfaces |

### Status / Skill Colors
| Token              | Value     | Usage            |
|--------------------|-----------|-------------------|
| `--color-java`      | `#F89820` | Java badge        |
| `--color-spring`    | `#6DB33F` | Spring Boot badge |
| `--color-dotnet`    | `#512BD4` | .NET badge        |
| `--color-react`     | `#61DAFB` | React badge       |
| `--color-angular`   | `#DD0031` | Angular badge     |
| `--color-postgres`  | `#336791` | PostgreSQL badge  |
| `--color-docker`    | `#2496ED` | Docker badge      |
| `--color-node`      | `#339933` | Node.js badge     |

### Border
| Token            | Value     | Usage           |
|------------------|-----------|-----------------|
| `--color-border`  | `#1E2140` | Default borders |
| `--color-border-hover` | `#2E3158` | Hover borders |

---

## Typography

### Font Families
```css
--font-heading: 'Space Grotesk', sans-serif;  /* Modern, geometric — tech vibe */
--font-body: 'Inter', sans-serif;              /* Clean, highly readable */
--font-mono: 'JetBrains Mono', monospace;      /* Code snippets */
```

### Font Scale
| Token          | Size     | Usage                    |
|----------------|----------|--------------------------|
| `--text-xs`     | 0.75rem  | Badges, captions         |
| `--text-sm`     | 0.875rem | Labels, small text       |
| `--text-base`   | 1rem     | Body text                |
| `--text-lg`     | 1.125rem | Large body               |
| `--text-xl`     | 1.25rem  | Card titles              |
| `--text-2xl`    | 1.5rem   | Section subtitles        |
| `--text-3xl`    | 2rem     | Section headings         |
| `--text-4xl`    | 2.5rem   | Page titles              |
| `--text-hero`   | 4rem     | Hero name (desktop)      |

### Font Weights
| Token             | Value |
|-------------------|-------|
| `--font-regular`   | 400   |
| `--font-medium`    | 500   |
| `--font-semibold`  | 600   |
| `--font-bold`      | 700   |

---

## Spacing
```css
--space-1:  0.25rem;
--space-2:  0.5rem;
--space-3:  0.75rem;
--space-4:  1rem;
--space-6:  1.5rem;
--space-8:  2rem;
--space-10: 2.5rem;
--space-12: 3rem;
--space-16: 4rem;
--space-20: 5rem;
--space-24: 6rem;
--space-32: 8rem;
```

---

## Border Radius
```css
--radius-sm:   6px;
--radius-md:   10px;
--radius-lg:   16px;
--radius-xl:   24px;
--radius-full: 9999px;
```

---

## Shadows & Effects
```css
--shadow-card: 0 4px 20px rgba(0, 0, 0, 0.3);
--shadow-glow: 0 0 30px rgba(108, 99, 255, 0.2);
--shadow-glow-lg: 0 0 60px rgba(108, 99, 255, 0.15);

/* Glassmorphism */
--glass-bg: rgba(17, 20, 39, 0.6);
--glass-border: 1px solid rgba(255, 255, 255, 0.05);
--glass-blur: blur(16px);
```

---

## Transitions
```css
--transition-fast: 150ms ease;
--transition-base: 300ms ease;
--transition-slow: 500ms ease;
--transition-spring: 600ms cubic-bezier(0.34, 1.56, 0.64, 1);
```

### Animation Patterns
- **Section reveal**: fadeInUp on scroll (Intersection Observer / Framer Motion)
- **Skill badges**: staggered appear animation
- **Project cards**: hover lift + glow border
- **Hero**: text typing effect hoặc gradient text animation
- **Navigation**: blur + fade on scroll
- **Cursor**: optional custom cursor glow

---

## Breakpoints
```css
--bp-sm:  640px;
--bp-md:  768px;
--bp-lg:  1024px;
--bp-xl:  1280px;
```

---

## Component Specs

### Navigation Bar
- Sticky top, glassmorphism background
- Logo/Name on left, section links on right
- Mobile: hamburger menu with slide-in drawer
- Active section highlight (scroll spy)

### Hero Section
- Full viewport height (100vh)
- Large name with gradient text effect
- Subtitle with typewriter or fade animation
- CTA buttons: filled (accent) + outlined
- Subtle animated background (particles, grid, or gradient mesh)

### Section Titles
- Left-aligned hoặc center
- Accent underline hoặc gradient bar
- Section number (optional): "01.", "02."...

### Skill Badges
- Pill-shaped với icon + label
- Background color tương ứng với technology
- Grouped by category (Backend, Frontend, Database, Tools)
- Staggered animation on scroll

### Project Cards
- Background: glass effect
- Thumbnail/screenshot image
- Title, description, tech badges
- Links: GitHub + Live Demo
- Hover: border glow, slight lift

### Experience Timeline
- Vertical timeline on desktop
- Company, role, date range, description bullets
- Timeline dot with accent color
- Animated reveal on scroll

### Contact Section
- Email, GitHub, phone info cards
- Optional: contact form (Formspree integration)
- Social links with hover effects

---

## Image Guidelines
- Profile photo: professional, circular crop
- Project screenshots: 16:9 ratio, consistent styling
- Use generate_image cho placeholders nếu cần
- Lazy loading all images
- WebP format preferred
