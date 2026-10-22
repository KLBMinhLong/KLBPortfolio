# DESIGN.md - KLB Studio portfolio, cobalt ink on porcelain

## 1. Creative direction

The visual direction is **cobalt ink on porcelain** ("men lam"), adopted in October 2026. It replaced the
earlier "Engineering Blueprint on Graphite" (near-black with electric mint), which clashed with the blue KLB
logo and read as a generic dark developer template.

Why this direction:

- The KLB logo is blue and cyan, so blue is the brand colour, not mint.
- The one-page résumé (`D:\KLB Studio\Career\CV`) uses the same navy and cobalt and the same typeface, so the
  site, the CV and LinkedIn read as one identity.
- Recruiters in Vietnam scan on light pages; a dark mode still follows `prefers-color-scheme`.

Core visual sentence:

> Porcelain pages, cobalt ink, and every claim next to the place you can check it.

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

- Display: `KLB Studio`, as a label only. Never `KLB.dev` (`klb.dev` is someone else's domain), and no wording that claims the name as exclusive, since others use it too.
- Owned website: `minhlongdev.id.vn`
- Logo links must always point to the owned website.

### Logo use

The standard logo is the brush mark (white K, royal-blue Lb, on black): `D:\KLB Studio\klbLogo.png`.
Since October 2026 every web asset is cut from it, not from the earlier cyan redraw or the mint-tinted SVG:

- Header: `public/assets/brand/klb-logo.png` (128 px, shown at 36 px in its own black tile on both themes)
- Favicon and touch icon: `favicon-32.png`, `apple-touch-icon.png`
- Open Graph: `og-cover.jpg` (1200 x 630, porcelain page, logo tile, name in cobalt, Be Vietnam Pro)

The horizontal logo should be optimized or recreated as a small production SVG. Avoid loading the current large source SVG in the sticky header without optimization.

Minimum clear space around the wordmark: approximately the width of the letter `K` counter. Do not apply additional glow, rotation or distortion to the navbar logo.

## 4. Color system

Tokens live at the top of `src/styles/global.css`. The old `--color-*` names remain as aliases because
`resume.css` and `easter-eggs.css` use them.

| Token | Light | Dark | Purpose |
|---|---|---|---|
| `--paper` | `#F4F7FB` | `#0C1830` | Page canvas |
| `--surface` | `#FFFFFF` | `#11213F` | Framed objects (project media, notes callouts) |
| `--surface-2` | `#E9EFF8` | `#162A4D` | Tinted section (workflow), tags |
| `--ink` | `#0F2547` | `#E8EEF8` | Headings and primary text |
| `--ink-2` | `#3F5068` | `#B4C1D5` | Body copy |
| `--ink-3` | `#5B6B82` | `#8F9FB8` | Metadata |
| `--cobalt` | `#1650C8` | `#8FB3FF` | Name, links, primary action |
| `--jade` | `#1F7A5A` | `#63D0A5` | "Verified" marks in the hero ledger only |
| `--line` | `#D5DFEC` | `#233A62` | Hairlines |
| `--band` | `#0F2547` | `#081122` | Contact band |

The cursor and music modals keep a night-navy deck with the logo blue `#4D8DFF` in both themes.
`--cobalt` light is `#1650C8`, pulled toward the logo's royal blue. A header button lets visitors override the
system theme (`data-theme` on `<html>`, saved as `klb-theme`).
Do not bring back mint, purple gradients or several accent colours.

## 5. Typography

One family: **Be Vietnam Pro** (400 to 800), loaded in `index.html`. It is drawn for Vietnamese diacritics and is
the résumé's typeface. A monospace face is used only inside code blocks (`--font-code`).

| Role | Size |
|---|---|
| Hero name | `clamp(3.25rem, 9.5vw, 7rem)`, weight 800, tracking -0.045em, cobalt |
| Page and contact titles | `clamp(2.5rem, 5vw, 3.75rem)` |
| Section heading | `clamp(1.875rem, 3.4vw, 2.625rem)` |
| Body | `1.0625rem`, line-height 1.65 |
| Metadata | `0.875rem` |

Sentence case everywhere. No uppercase eyebrows, no numbered section labels; numbers appear only where the
content is a sequence (the six workflow steps).

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

The one memorable element is the **hero ledger** ("Things you can check"): each claim sits next to its source
(repository, pull request) or says plainly that it is internal. Only the ledger animates, once on load, and
reduced-motion turns that off. Sections no longer fade in (`Reveal` renders a plain `div`).

### Earlier language (kept for reference)


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
- Brush logo tile and `KLB Studio` wordmark on the left.
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

- `KLB Studio` is recognizable and never presented as a domain name.
- Graphite and electric mint dominate consistently.
- eProcure is unmistakably the flagship project.
- Project evidence is more visually prominent than the skill list.
- The real portrait is used consistently.
- AI-first messaging is visible but does not overpower engineering evidence.
- The interface remains clear without animation.
- Mobile layouts preserve reading order and screenshot context.
- All important text passes contrast checks.
