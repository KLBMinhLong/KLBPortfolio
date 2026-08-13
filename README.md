# KLBPortfolio

The long-term personal portfolio of **Nguyễn Minh Long**, branded as **KLB.dev** and intended for deployment at [minhlongdev.id.vn](https://minhlongdev.id.vn).

## Current status

The discovery and planning phase is complete. This branch contains the approved source of truth for the next implementation phase.

No production application has been scaffolded yet. The next phase will build the React/Vite site from the specifications in:

- [Agent.md](./Agent.md) - identity, content, case studies, technical constraints and deployment rules
- [DESIGN.md](./DESIGN.md) - visual system, layouts, components, motion and accessibility

## Positioning

- Role: Software Developer
- Opportunities: Software Developer Intern and Fresher
- Direction: Backend and full-stack with equal emphasis
- Workflow: AI-first, verification-driven
- Location: Ho Chi Minh City, Vietnam
- Education: Final-year Software Engineering student at HUTECH
- GPA: 3.53/4.00
- Expected graduation: October 2026

## Featured work

### eProcure Enterprise

Solo AI-first engineering project developed as an FPT IS internship capstone. The system explores enterprise procurement workflows with Java, Spring Boot, Angular, PostgreSQL, Kafka, Redis, Keycloak, Camunda and containerized infrastructure.

- Source: [E-Procurement](https://github.com/KLBMinhLong/E-Procurement)
- Demo: [eProcure Enterprise system demo](https://youtu.be/a2H5rima8uU)

The project is not presented as a production FPT IS product. AI involvement, testing responsibility and project limitations must remain explicit.

### YourSneaker

Solo full-stack sneaker commerce project built with ASP.NET Core 9, React, TypeScript and MySQL, including administration workflows and VNPay sandbox payment integration.

- Source: [YourSneaker](https://github.com/KLBMinhLong/YourSneaker)
- Demo: [YourSneaker demo](https://youtu.be/_y9Tr9E2Dgs)

### Student Dormitory Management

Six-member team project in which Long managed Jira and task distribution while contributing to room selection, registration, payment and monthly electricity/water workflows.

- Source: [Student Dormitory Management](https://github.com/KLBMinhLong/StudentDormitoryManagement)

## Approved visual direction

**Engineering Blueprint on Graphite**:

- Graphite surfaces
- Electric-mint signal color
- Editorial project storytelling
- Subtle system traces
- Real screenshots and workflow diagrams as the primary visuals
- Small gaming/sport personality accents in the About section

The site must avoid generic purple gradients, excessive glassmorphism, particles, typewriter titles, fake terminals and skill percentage bars.

## Planned stack

| Concern | Choice |
|---|---|
| Framework | React + Vite + TypeScript |
| Styling | Vanilla CSS or CSS Modules with design tokens |
| Motion | Framer Motion, used selectively |
| Icons | Lucide React |
| Languages | English default, Vietnamese secondary |
| Content | Typed data plus Markdown/MDX-compatible case studies and notes |
| Hosting | Vercel |
| Domain | `minhlongdev.id.vn` |

## Deployment plan

1. Build and verify the site locally.
2. Deploy and test on a Vercel preview/production URL.
3. Add the custom domain in Vercel.
4. Update DNS through the existing DirectAdmin/Vinahost control panel using the exact records supplied by Vercel.
5. Verify TLS, redirects, metadata and all public routes.

Do not change DNS until the Vercel deployment has been verified.

## Important content rules

- Display name is always **Nguyễn Minh Long**.
- `KLB.dev` is the brand; `minhlongdev.id.vn` is the owned website.
- Do not expose the phone number on the public site.
- Aptis ESOL B2 is issued by the British Council.
- Use the real portrait at `Infomation/avtImgMinhLong.jpg`.
- Use only three featured projects.
- The old blog becomes a curated Engineering Notes section.
- The current résumé is temporary and will be replaced after the portfolio content stabilizes.

## Next phase

The implementation phase should begin by:

1. Scaffolding the Vite/React/TypeScript application.
2. Creating design tokens and the responsive shell.
3. Building typed bilingual content data.
4. Implementing the homepage in the approved section order.
5. Adding the three project case-study routes.
6. Running build, accessibility, responsive and visual verification.
