# DESIGN.md - KLB.dev Engineering Blueprint

## 1. Creative direction

The visual direction is **Engineering Blueprint on Graphite**.

The site should feel like a thoughtful engineer's working system: precise, structured and evidence-led, with a small amount of personal energy from gaming and sport. It must not look like a generic purple-gradient developer template, a fake terminal or a gaming dashboard.

Core visual sentence:

> Graphite surfaces, electric-mint signals, editorial project storytelling and subtle system traces.

## 2. Design principles

1. **Evidence before decoration**: screenshots, workflows and decisions are the primary visuals.
2. **Editorial hierarchy**: projects read like compact engineering case studies, not equal marketing cards.
3. **One signal color**: electric mint directs attention; it does not cover every element.
4. **Quiet structure**: grids, traces and borders establish rhythm without visual noise.
5. **Purposeful motion**: animation explains state or sequence and respects reduced-motion preferences.
6. **Recruiter scanability**: role, availability, strongest project and proof are discoverable within seconds.
7. **Long-term extensibility**: the system supports future projects, notes and résumé revisions.

## 3. Brand system

### Brand name

- Display: `KLB.dev`
- Owned website: `minhlongdev.id.vn`
- Logo links must always point to the owned website.

### Logo use

- Main dark navigation: `electric-mint-dark-row.svg`
- Light fallback: `monochrome-light-row.svg`
- Decorative personal mark: `logomarkV2.png`
- Open Graph starting point: `logo-texture-rich.jpg`

The horizontal logo should be optimized or recreated as a small production SVG. Avoid loading the current large source SVG in the sticky header without optimization.

Minimum clear space around the wordmark: approximately the width of the letter `K` counter. Do not apply additional glow, rotation or distortion to the navbar logo.

## 4. Color system

### Core palette

| Token | Value | Purpose |
|---|---:|---|
| `--color-bg-canvas` | `#080B0D` | Page canvas |
| `--color-bg-surface` | `#0E1316` | Primary sections and cards |
| `--color-bg-elevated` | `#141B1F` | Elevated controls and hover surfaces |
| `--color-bg-soft` | `#192226` | Quiet grouped content |
| `--color-text-primary` | `#F2F6F4` | Main headings and essential copy |
| `--color-text-secondary` | `#A9B6B1` | Body copy |
| `--color-text-muted` | `#6F7D78` | Metadata and captions |
| `--color-accent` | `#55F2B0` | Primary electric-mint signal |
| `--color-accent-strong` | `#29D98C` | Active and pressed states |
| `--color-accent-soft` | `rgba(85, 242, 176, 0.12)` | Selected surfaces |
| `--color-border` | `rgba(210, 236, 226, 0.12)` | Default borders |
| `--color-border-strong` | `rgba(85, 242, 176, 0.42)` | Active/focus borders |
| `--color-danger` | `#FF6B6B` | Error states only |
| `--color-warning` | `#F5B94C` | Warning states only |

The palette must remain graphite and mint. Do not introduce purple gradients, multiple neon colors or brand-colored skill badges.

### Contrast

- Primary text must meet WCAG AA on canvas and surfaces.
- Muted text must not be used for essential content.
- Electric mint should usually appear on graphite, not as large text on white.

## 5. Typography

Recommended families:

```css
--font-display: "Space Grotesk", sans-serif;
--font-body: "Inter", sans-serif;
--font-mono: "JetBrains Mono", monospace;
```

Use the mono font only for metadata, technical labels, project identifiers and trace annotations. Do not render the whole site like a terminal.

### Fluid scale

| Role | Suggested size |
|---|---|
| Hero display | `clamp(3rem, 8vw, 6.75rem)` |
| Page title | `clamp(2.5rem, 6vw, 5rem)` |
| Section heading | `clamp(2rem, 4vw, 3.5rem)` |
| Project title | `clamp(1.75rem, 3vw, 2.75rem)` |
| Lead copy | `clamp(1.125rem, 1.8vw, 1.375rem)` |
| Body | `clamp(1rem, 1.2vw, 1.125rem)` |
| Metadata | `0.8125rem` to `0.9375rem` |

Line length for body copy should usually remain between 55 and 75 characters.

## 6. Spacing and layout

### Spacing tokens

Use a 4px base with a restrained scale:

```css
--space-1: 0.25rem;
--space-2: 0.5rem;
--space-3: 0.75rem;
--space-4: 1rem;
--space-6: 1.5rem;
--space-8: 2rem;
--space-12: 3rem;
--space-16: 4rem;
--space-24: 6rem;
--space-32: 8rem;
```

### Container

```css
--container-max: 1280px;
--container-reading: 760px;
--gutter-mobile: 20px;
--gutter-tablet: 32px;
--gutter-desktop: 48px;
```

Use a 12-column desktop grid and allow project visuals to break the reading column while staying within the main container.

### Section rhythm

- Hero: generous top and bottom spacing.
- Proof strip: compact and immediately connected to Hero.
- Project sections: large visual breathing room.
- Capability and metadata sections: denser.
- Contact: short, focused closing section.

## 7. Surfaces and geometry

### Radius

```css
--radius-sm: 6px;
--radius-md: 10px;
--radius-lg: 16px;
--radius-pill: 999px;
```

Avoid excessive 24px rounded cards. Technical surfaces should feel deliberate and slightly sharper.

### Borders and shadows

Prefer fine borders and tonal contrast over strong drop shadows.

```css
--shadow-elevated: 0 18px 48px rgba(0, 0, 0, 0.28);
--shadow-focus: 0 0 0 3px rgba(85, 242, 176, 0.2);
```

Glass effects may appear only in the sticky navigation or small overlays. Do not apply glassmorphism to every section.

## 8. Signature visual language

### System trace

A subtle trace line can connect key moments across the page:

```text
Problem -> Build -> Verify -> Ship
```

The trace may use small nodes, section numbers and low-opacity grid coordinates. It should not resemble a decorative circuit-board wallpaper.

### Blueprint grid

- Use a low-opacity grid or dot matrix in the Hero and selected transitions.
- Keep opacity below the level that competes with text.
- Fade the grid before long reading sections.

### Project evidence frames

- Screenshots sit in restrained browser or product frames.
- Preserve screenshot readability.
- Add short captions that explain what the viewer should notice.
- Avoid mockups inside tilted laptops or phones unless the device context matters.

### Personal accents

Gaming/sport character appears through:

- `Current quest` copy in About.
- A small status dot or completion marker.
- Slightly energetic logo texture.
- Optional easter egg with no impact on navigation.

Do not use XP bars, pixel fonts, achievements, levels or game HUD panels site-wide.

## 9. Component specifications

### Navigation

- Sticky, compact and semi-opaque after scrolling.
- Dark background with subtle blur and bottom border.
- Horizontal `KLB.dev` mark on the left.
- Links and language control on the right.
- Maximum one visually dominant action.
- Mobile menu must occupy only the space it needs and preserve focus management.

### Hero

Desktop composition:

- Left: name, role, headline, introduction and actions.
- Right: real portrait integrated with a blueprint frame and system-trace annotation.
- Supporting availability and location metadata below primary actions.

The portrait should be cropped from `avtImgMinhLong.jpg`. Use a neutral treatment and optional mint edge light; do not alter facial identity.

### Buttons

Primary:

- Mint background
- Dark text
- Strong focus ring

Secondary:

- Transparent graphite surface
- Quiet border
- Primary text

Text links:

- Underline or directional icon on hover/focus
- Never rely on color alone

### Proof strip

- One responsive row on desktop.
- Horizontal scroll or stacked grid on narrow screens.
- Each fact uses a small mono label and a concise value.
- No counter animation.

### Selected project feature

eProcure receives the largest area and strongest visual hierarchy.

Project pattern:

- Context and role label
- Project title and one-sentence outcome
- Contribution or evidence bullets
- Technical signals
- Screenshot or media
- `View case study`, `View source` and optional `Watch demo`

Alternate media/text alignment between projects, but do not force symmetry when the content differs.

### AI workflow

- Display six connected steps.
- On desktop, use a horizontal or stepped trace.
- On mobile, use a clear vertical sequence.
- Animation may reveal the path once as it enters the viewport.
- Reduced-motion mode renders the full static sequence.

### Experience

- One strong FPT IS entry is sufficient.
- Do not create a long empty timeline.
- Pair dates and role with concise evidence bullets.
- Include a transparent label linking the capstone to the eProcure case study.

### Capability groups

- Four groups from `Agent.md`.
- Show plain text and small icons where helpful.
- Link technologies to projects as evidence.
- No percentage, star rating, progress ring or logo cloud.

### Engineering Notes

- Compact editorial list or cards.
- Show topic, reading time, date and concise summary.
- Use old article imagery only when it adds explanatory value.

### About

- Small personal panel rather than another résumé section.
- May use `Current quest` wording.
- Interests appear as concise labels with restrained icons.

### Contact

- One direct invitation to email.
- GitHub, LinkedIn and YouTube links.
- No form in the initial release.
- No public phone number.

## 10. Case-study design

Each case-study route follows a consistent editorial skeleton:

1. Project header and verified role
2. Problem and context
3. Scope and contribution
4. Key workflow
5. Architecture or technical decisions
6. Screenshot gallery with captions
7. Verification and testing
8. AI usage disclosure where applicable
9. Trade-offs and lessons
10. Source/demo links and next project navigation

### eProcure visual order

1. Dashboard cover
2. Simplified procurement workflow
3. Purchase Request lifecycle screenshot
4. Approval rules screenshot
5. Three-way matching explanation and video demo
6. RBAC screenshot
7. Simplified architecture diagram
8. AI workflow and testing evidence

### YourSneaker visual order

1. Storefront cover
2. Product discovery/detail
3. Cart and checkout
4. VNPay sandbox explanation
5. Admin dashboard
6. Video demo

### Student Dormitory visual order

1. Student room discovery
2. Contract management
3. Monthly utility and invoice operations
4. Team role and Jira coordination

## 11. Image treatment

- Convert delivery images to WebP/AVIF with PNG fallback only when needed.
- Keep original screenshots available as source assets.
- Use responsive `srcset`.
- Do not blur screenshots so heavily that UI text becomes unreadable.
- Use a consistent caption style.
- Avoid large image carousels; show a curated sequence instead.
- YouTube videos should use a lightweight thumbnail facade and load the iframe after interaction.

## 12. Motion system

### Allowed

- Subtle fade/translate section reveal
- System-trace path reveal
- Screenshot crossfade or mask reveal
- Button/icon micro-interactions
- Navigation background transition

### Avoid

- Typewriter effects
- Infinite floating elements
- Cursor followers
- Large parallax
- Background particles
- Continual logo glow pulses
- Animation on every skill or card

### Timing

```css
--duration-fast: 140ms;
--duration-base: 240ms;
--duration-reveal: 520ms;
--ease-standard: cubic-bezier(0.2, 0.8, 0.2, 1);
```

Reduced-motion mode should remove transforms and path drawing while preserving clear state changes.

## 13. Responsive behavior

Suggested breakpoints:

```css
--bp-sm: 640px;
--bp-md: 768px;
--bp-lg: 1024px;
--bp-xl: 1280px;
```

Design mobile-first.

- Hero becomes a single column with portrait below or between copy blocks.
- Proof strip becomes a two-column grid or horizontal scroller.
- Project layouts stack with text before media.
- AI workflow becomes vertical.
- Detailed screenshots can open into an accessible lightbox if required.
- Tables shown in screenshots are images and must have descriptive captions; never depend on their tiny text for primary understanding.

## 14. Accessibility requirements

- Minimum 44px interactive target where practical.
- Visible keyboard focus on all controls.
- Logical heading structure.
- Skip link.
- Semantic landmarks.
- Accessible language switcher.
- Alternative text describes the purpose of each screenshot.
- Icon-only controls require labels.
- No autoplay video or sound.
- Test at 200% zoom and narrow viewports.

## 15. Explicit anti-pattern list

Do not implement:

- Purple/blue generic gradient mesh
- Glass card grid across the whole page
- Skill logo clouds
- Technology-specific badge colors everywhere
- Fake code snippets as decoration
- Terminal-command introductions
- Rotating titles
- Unverified statistics
- Excessive uppercase copy
- Marketing hero language
- A separate section for every certificate
- A separate YouTube section for one or two videos

## 16. Visual acceptance criteria

The design is ready when:

- `KLB.dev` is recognizable without being confused with the owned domain.
- Graphite and electric mint dominate consistently.
- eProcure is unmistakably the flagship project.
- Project evidence is more visually prominent than the skill list.
- The real portrait is used consistently.
- AI-first messaging is visible but does not overpower engineering evidence.
- The interface remains clear without animation.
- Mobile layouts preserve reading order and screenshot context.
- All important text passes contrast checks.
