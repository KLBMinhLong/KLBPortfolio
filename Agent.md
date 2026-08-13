# Agent.md - KLBPortfolio Implementation Specification

## 1. Project mission

`KLBPortfolio` is the long-term personal portfolio of **Nguyễn Minh Long**, a final-year Software Engineering student at HUTECH.

The site is primarily for recruiters and engineering interviewers evaluating Long for:

- Software Developer Intern positions.
- Fresher Software Developer positions.
- Backend and full-stack roles with equal emphasis.

The portfolio must communicate three things within the first screen and first project:

1. Long can work across backend systems and complete full-stack products.
2. Long has hands-on internship experience at FPT IS and can explain the systems he built.
3. Long follows an AI-first but verification-driven engineering workflow.

This is not a generic developer landing page. It is an evidence-led portfolio built around project case studies, decisions, workflows, screenshots and demonstrations.

## 2. Source of truth

When content conflicts, use this file as the portfolio source of truth. Do not reuse outdated facts from old CVs or the previous Hugo blog without checking this section.

### Identity

- Full name: Nguyễn Minh Long
- Display name in both languages: Nguyễn Minh Long
- Brand: `KLB.dev`
- Canonical website: `https://minhlongdev.id.vn`
- Location: Thu Duc, Ho Chi Minh City, Vietnam
- Email: `nguyenminhlongcntt@gmail.com`
- GitHub: `https://github.com/KLBMinhLong`
- LinkedIn: `https://www.linkedin.com/in/minh-long-nguyễn-09984a333`
- YouTube: `https://www.youtube.com/@KLB-MinhLong`
- Phone: `+84 377241808`, but do not expose it on the website; keep it in the résumé only.

`KLB.dev` is a brand label, not the owned domain. All logo links, canonical metadata and public URLs must point to `minhlongdev.id.vn`. Never imply ownership of `klb.dev`.

### Education and recognition

- School: Ho Chi Minh City University of Technology (HUTECH)
- Major: Software Engineering
- Study period: October 2022 to present
- GPA: 3.53/4.00
- Expected graduation: October 2026
- Recognition: Outstanding Student Recognition, awarded annually from 2023 through 2026
- English: Aptis ESOL, CEFR B2, British Council

### Current career position

- Public title: Software Developer
- Availability: Open to Software Developer Intern and Fresher opportunities
- Direction: Backend and full-stack development with equal emphasis
- Initial target: Companies in Vietnam
- Future direction: International companies and freelance work after gaining experience and improving professional English

### Interests

- Films
- Badminton
- Games

Use these only to add personality in the About section. Do not turn the complete site into a game interface.

## 3. Positioning and approved messaging

### Primary headline

> Building reliable systems, from backend logic to complete product experiences.

### English introduction

> I’m Nguyễn Minh Long, a final-year Software Engineering student with internship experience at FPT IS. I build applications with Java/Spring Boot, .NET, Angular and React through an AI-first, verification-driven workflow.

### Vietnamese introduction

> Mình là Nguyễn Minh Long, sinh viên năm cuối ngành Kỹ thuật Phần mềm, vừa hoàn thành kỳ thực tập tại FPT IS. Mình phát triển ứng dụng với Java/Spring Boot, .NET, Angular và React theo quy trình AI-first, kết hợp đọc hiểu, kiểm thử và xác minh chức năng.

### Availability line

English:

> Open to Software Developer Intern & Fresher opportunities.

Vietnamese:

> Sẵn sàng cho cơ hội Software Developer Intern và Fresher.

### About copy

English:

> I’m Nguyễn Minh Long, a final-year Software Engineering student at HUTECH. I enjoy working across backend systems and full-stack product development, from designing APIs and business workflows to building the interface that users interact with.
>
> I work with an AI-first mindset, using AI across research, planning, coding, documentation and testing. I remain responsible for reviewing generated solutions, validating functionality and correcting implementations that do not meet the intended architecture or business flow.
>
> Outside software, I enjoy watching films, playing badminton and gaming.

Vietnamese:

> Mình là Nguyễn Minh Long, sinh viên năm cuối ngành Kỹ thuật Phần mềm tại HUTECH. Mình yêu thích cả backend system và phát triển sản phẩm full-stack, từ thiết kế API, mô hình hóa quy trình nghiệp vụ đến xây dựng giao diện mà người dùng trực tiếp tương tác.
>
> Mình làm việc theo tư duy AI-first, sử dụng AI trong nghiên cứu, lập kế hoạch, viết code, tài liệu hóa và kiểm thử. Mình vẫn chịu trách nhiệm đọc và đánh giá giải pháp được tạo, xác minh chức năng và điều chỉnh những phần chưa đúng với kiến trúc hoặc luồng nghiệp vụ mong muốn.
>
> Ngoài lập trình, mình thích xem phim, chơi cầu lông và chơi game.

## 4. AI-first transparency policy

AI usage is a central part of the portfolio and must be presented honestly.

Approved positioning:

> I use AI throughout planning, implementation, documentation and testing. My responsibility is to define requirements and architecture constraints, review generated solutions, reproduce defects, validate business flows and iterate until the system behaves correctly.

Required workflow visualization:

```text
Problem definition
    -> Architecture constraints
    -> AI-assisted planning and generation
    -> Code and behavior review
    -> Automated and functional testing
    -> Issue correction and iteration
```

Rules:

- Do not claim all code was manually written.
- Do not use `AI expert`, `AI engineer` or `AI-powered developer` as a title.
- Do not imply that AI-generated scope proves mastery of every listed technology.
- Emphasize requirements, constraints, review, testing and correction as Long's responsibilities.
- Link AI workflow claims to concrete eProcure evidence: architecture rules, ADRs, automated tests, functional flows and defect correction.
- Avoid claiming production scale, production users or measured business impact without evidence.

## 5. Information architecture

The initial release should support these routes:

```text
/
/work/eprocure
/work/yoursneaker
/work/student-dormitory
/notes
/resume
```

The homepage section order is fixed unless user testing justifies a change:

1. Navigation
2. Hero
3. Quick proof strip
4. Selected Work
5. AI-first Workflow
6. Experience
7. Technical Capabilities
8. Engineering Notes
9. Education and Recognition
10. About Outside Code
11. Contact and Footer

Navigation labels:

- Work
- Experience
- Capabilities
- Notes
- About
- Résumé
- EN/VI language control

Do not put Skills and About before Selected Work. Evidence must appear early.

## 6. Homepage content specification

### 6.1 Navigation

- Show the compact `KLB.dev` horizontal logo.
- Clicking the logo navigates to `/` on `minhlongdev.id.vn`.
- Keep navigation compact and recruiter-oriented.
- Add active section state only when it remains visually quiet.
- Mobile navigation must be keyboard-accessible and close after selection.

### 6.2 Hero

Required content:

- Nguyễn Minh Long
- Software Developer
- Approved primary headline
- Short introduction
- Availability status
- Primary CTA: `Explore my work`
- Secondary CTA: `View résumé`
- Small links for GitHub and LinkedIn
- Location and expected graduation
- Real portrait from `Infomation/avtImgMinhLong.jpg`

Do not use:

- Typewriter titles
- Rotating job roles
- Particle backgrounds
- Custom cursors
- Fake terminal windows
- Animated counters
- Marketing claims without evidence

### 6.3 Quick proof strip

Show concise facts, not vanity metrics:

- FPT IS - Development Intern
- GPA 3.53/4.00
- 3 selected projects
- Outstanding Student Recognition 2023-2026
- Aptis ESOL B2

### 6.4 Selected Work

Show exactly three featured projects in this order:

1. eProcure Enterprise
2. YourSneaker
3. Student Dormitory Management

Use differentiated editorial layouts rather than three identical glass cards.

### 6.5 AI-first Workflow

- Visualize the approved six-step workflow.
- Explain how AI is used across the lifecycle.
- Include a direct link to the eProcure case study as supporting evidence.
- Keep the tone practical and accountable, not promotional.

### 6.6 Experience

Use the approved FPT IS entry in section 8.

### 6.7 Technical Capabilities

Show capability groups linked to project evidence. Do not use percentage bars or self-assigned proficiency scores.

### 6.8 Engineering Notes

The old networking course website is not a featured project. Reuse selected educational content as Engineering Notes.

Initial candidates:

- TCP vs UDP or the interactive TCP/UDP simulation
- HTTP/REST with Java
- Docker basics or Git workflow

Do not migrate every old article for the first release.

### 6.9 Education and Recognition

Include education, GPA, expected graduation, annual recognition and Aptis ESOL B2. Certificates should support the profile but not dominate the page.

### 6.10 About Outside Code

Use compact personal facts:

```text
Current role: Software Developer
Current quest: First Intern/Fresher opportunity
Off-screen: Badminton, films and games
Based in: Ho Chi Minh City
```

Gaming language may appear here as a small accent only.

### 6.11 Contact

Public contact options:

- Email
- GitHub
- LinkedIn
- YouTube
- Ho Chi Minh City, Vietnam

Do not show the phone number. Do not build a contact form in the initial release. Use a clear `mailto:` CTA.

## 7. Featured project specifications

### 7.1 eProcure Enterprise

#### Truthful project label

> Solo AI-first engineering project - FPT IS internship capstone

#### Context

The project was independently developed during the FPT IS internship to apply technologies relevant to the banking unit's focus. It is not a production system delivered to or operated by FPT IS.

#### Short description

> An enterprise procurement platform covering purchase requests, multi-level approvals, purchase orders, goods receipt, invoice matching and payment workflows.

#### Verified scope

- Java 17 and Spring Boot 3.2
- Angular 21
- PostgreSQL 15 with multiple databases and schemas
- Nine domain-oriented services
- Clean Architecture
- Kafka event communication
- Redis
- Keycloak
- Camunda BPMN
- MyBatis and Flyway
- Docker Compose and NGINX gateway
- OpenTelemetry, Prometheus, Grafana, Loki and Tempo
- Permission-based RBAC
- Opaque sessions
- Idempotent write operations
- Audit trails
- Purchase Request to approval, PO, goods receipt, invoice and payment workflows

#### AI disclosure

Most of the implementation was AI-generated under defined architecture and coding constraints. Long reviewed the code and behavior, requested corrections, ran automated tests and functionally tested business flows.

#### Case study structure

1. Procurement problem
2. Product and workflow scope
3. Simplified architecture
4. Purchase Request lifecycle
5. Approval rule engine
6. Permission-based RBAC
7. Three-way matching
8. AI-assisted development and verification
9. Known trade-offs and lessons learned

#### Required assets

- Cover: `Infomation/screenshot-eProcure/DashBoard.png`
- Purchase Request lifecycle: `Infomation/screenshot-eProcure/PurchaseRequest.png`
- Approval rules: `Infomation/screenshot-eProcure/ApproveRule.png`
- RBAC matrix: `Infomation/screenshot-eProcure/RBAC.png`
- Demo: `https://youtu.be/a2H5rima8uU`
- Source: `https://github.com/KLBMinhLong/E-Procurement`

The demo video is the primary evidence for flows not represented by a dedicated screenshot, including three-way matching.

#### Prohibited claims

- Do not call it a production FPT IS system.
- Do not call it a real client project.
- Do not present target KPIs as measured outcomes.
- Do not claim enterprise scale was load-tested unless evidence is later added.

### 7.2 YourSneaker

#### Project label

> Solo full-stack project

#### Short description

> A sneaker and streetwear commerce experience combining an ASP.NET Core backend, React storefront, administrative workflows and VNPay sandbox integration.

#### Evidence to highlight

- ASP.NET Core 9 with Clean Architecture
- React 18 and TypeScript
- MySQL
- JWT access and refresh tokens
- Product discovery, cart and orders
- Admin dashboard and management workflows
- COD and VNPay sandbox payments
- Docker-based database setup

#### Links

- Source: `https://github.com/KLBMinhLong/YourSneaker`
- Demo: `https://youtu.be/_y9Tr9E2Dgs`

Always label VNPay as sandbox. Before the portfolio is published, remove hardcoded fallback secrets from the source project and ensure screenshots do not rely on copyrighted assets in a misleading way.

### 7.3 Student Dormitory Management

#### Project label

> Project Lead & Developer - six-member team

#### Long's contribution

- Managed the Jira workflow.
- Assigned and coordinated work across six members.
- Participated in the room selection and registration flow.
- Contributed to payment-related functionality.
- Contributed to monthly electricity and water management.
- Coordinated feature integration and delivery.

Do not claim sole ownership of the backend or the complete system.

#### Story to present

```text
Room discovery and selection
    -> Registration and contract workflow
    -> Monthly utilities, invoices and payment
```

#### Selected screenshots from the repository

- `docs/images/06-student-portal.png`
- `docs/images/04-contract-management.png`
- `docs/images/05-invoice-management.png`

Do not prioritize the current dashboard screenshot because its seed data is not persuasive.

#### Source

- `https://github.com/KLBMinhLong/StudentDormitoryManagement`

## 8. Experience copy

### English

> **Development Intern - FPT IS**
> April 2026 - July 2026
>
> Completed a backend-focused internship and independently developed an AI-assisted e-procurement capstone aligned with technologies relevant to the banking unit.
>
> - Applied Java, Spring Boot, Angular, PostgreSQL and containerized infrastructure to a multi-service procurement system.
> - Defined architecture and coding constraints, reviewed AI-generated implementations and iterated through automated and functional testing.
> - Validated purchase request, approval, procurement and invoice-matching workflows.
> - Documented architecture decisions, API conventions and project workflows.

### Vietnamese

> **Development Intern - FPT IS**
> Tháng 04/2026 - Tháng 07/2026
>
> Hoàn thành kỳ thực tập tập trung vào backend và độc lập phát triển capstone e-procurement có AI hỗ trợ, bám theo nhóm công nghệ liên quan đến định hướng của phòng ban ngân hàng.
>
> - Ứng dụng Java, Spring Boot, Angular, PostgreSQL và hạ tầng container vào một hệ thống mua sắm gồm nhiều service.
> - Xác định ràng buộc kiến trúc và coding, đọc lại phần triển khai do AI tạo và lặp lại quá trình kiểm thử tự động lẫn kiểm thử chức năng.
> - Xác minh các luồng yêu cầu mua sắm, phê duyệt, nghiệp vụ procurement và đối soát hóa đơn.
> - Tài liệu hóa quyết định kiến trúc, quy ước API và quy trình dự án.

## 9. Technical capability taxonomy

### Backend and systems

- Java
- Spring Boot
- ASP.NET Core
- REST API
- Spring Security
- MyBatis and JPA
- PostgreSQL
- MySQL

### Frontend and product

- Angular
- React
- TypeScript
- HTML
- CSS and SCSS
- Responsive user interfaces
- API integration

### Architecture and delivery

- Clean Architecture
- Microservices
- Docker and Docker Compose
- Kafka
- Redis
- Keycloak
- Flyway
- Git and GitHub
- Jira

### Working knowledge

- Camunda BPMN
- OpenTelemetry
- Prometheus and Grafana
- JasperReports
- MongoDB
- Node.js and Express
- SQL Server

Do not show IDEs as primary skills. Do not give HTML/CSS equal visual weight to core backend capabilities. Every capability should link to at least one project where possible.

## 10. Asset policy

### Brand assets

Production candidates:

- Dark navbar: `Infomation/KLBLogo/Horizontal/electric-mint-dark-row.svg`
- Light fallback: `Infomation/KLBLogo/Horizontal/monochrome-light-row.svg`
- Decorative mark: `Infomation/KLBLogo/Logomark/logomarkV2.png`
- Temporary Open Graph cover: `Infomation/KLBLogo/OG-Cover/logo-texture-rich.jpg`

Source/reference only:

- `Infomation/KLBLogo/klbLogoRoot.png`
- `Infomation/KLBLogo/Logomark/logomarkV1.png`

Do not ship:

- `Infomation/KLBLogo/Favicon/bold-letters-container.png`
- Existing 16x16-only `favicon.ico`

Before production, optimize the horizontal SVG assets and generate a coherent favicon set for 16, 32, 180, 192 and 512 pixels.

### Portrait

Use `Infomation/avtImgMinhLong.jpg` as the real portrait.

Do not use the old grayscale generated profile images if they do not accurately represent Long. The website, résumé and LinkedIn identity must remain visually consistent.

### Image handling

- Preserve original source files.
- Create web derivatives in WebP or AVIF where supported.
- Keep project screenshots legible; do not shrink detailed enterprise tables until text becomes unreadable.
- Use consistent browser frames and aspect ratios.
- Lazy-load below-the-fold assets.
- Provide meaningful localized alt text.

## 11. Résumé policy

Temporary download source:

- `Infomation/CV_Nguyen_Minh_Long.pdf`

The current PDF has layout and content issues but may be used temporarily. Do not silently rewrite it during portfolio implementation. Replace it later with a new one-page résumé derived from the same content source as this site.

## 12. Technical implementation constraints

### Stack

- React 18 or newer stable version supported by the selected Vite setup
- Vite
- TypeScript strict mode
- Vanilla CSS or CSS Modules using shared design tokens
- Framer Motion only for purposeful motion
- Lucide React icons
- React Context and JSON locale files for English and Vietnamese
- Static deployment; no backend or database required

Do not introduce Tailwind, a CMS, Three.js or a large component framework unless the user explicitly changes the decision.

### Content architecture

Keep content separate from presentation:

```text
src/
  assets/
  components/
    ui/
    layout/
  sections/
  pages/
  data/
  content/
  i18n/
  hooks/
  styles/
  utils/
```

Project metadata, social links, capabilities and experience must live in typed data modules. Long-form case studies and notes should use Markdown or MDX-compatible content so the site can grow.

### Internationalization

- English is the default locale.
- Vietnamese is the secondary locale.
- All visible interface text goes through translation keys.
- Technical product and framework names remain unchanged.
- Update the document language when the locale changes.
- Persist locale preference locally.

### Accessibility

- Meet WCAG 2.2 AA contrast where practical.
- Full keyboard navigation.
- Visible focus states.
- Semantic headings and landmarks.
- Respect `prefers-reduced-motion`.
- Descriptive alt text and link labels.
- Do not use color alone to communicate state.

### Performance

- Target Lighthouse performance, accessibility, best practices and SEO scores of at least 90 on the production build.
- Avoid large animation dependencies and unnecessary client-side work.
- Optimize images and fonts.
- Reserve image space to prevent layout shift.
- Load YouTube embeds only after interaction or use a lightweight facade.

### SEO

Canonical metadata:

- Title: `Nguyễn Minh Long - Software Developer | KLB.dev`
- Canonical URL: `https://minhlongdev.id.vn`
- Description: `Portfolio of Nguyễn Minh Long, a Software Developer working across backend systems and full-stack products with Java, Spring Boot, .NET, Angular and React.`

Required:

- Per-route titles and descriptions
- Canonical links
- Open Graph and Twitter metadata
- Sitemap
- `robots.txt`
- Structured data for Person and projects where appropriate
- Correct English/Vietnamese language metadata

## 13. Deployment specification

Preferred production path:

```text
GitHub main branch
    -> Vercel build and preview deployments
    -> Vercel CDN and TLS
    -> minhlongdev.id.vn
```

Use Vercel for hosting and the existing DirectAdmin/Vinahost panel for DNS management.

Deployment sequence:

1. Build and verify the site locally.
2. Deploy to a temporary `.vercel.app` URL.
3. Verify routes, metadata, performance and assets.
4. Add `minhlongdev.id.vn` in Vercel project domain settings.
5. Apply the exact A/CNAME/TXT records provided by Vercel in the current DNS panel.
6. Add `www` only if desired and redirect it to the apex domain.
7. Verify automatic TLS and canonical redirects.

Do not change DNS before a verified Vercel production deployment exists. Do not hardcode generic Vercel DNS values when the project dashboard provides project-specific records.

## 14. Non-goals for the first release

- No backend or database.
- No contact form.
- No live deployment of eProcure.
- No CMS.
- No complete migration of the old blog.
- No standalone YouTube section while the channel has only a small number of videos.
- No skill percentage bars.
- No visitor counters or fabricated metrics.
- No light theme requirement for the initial release.
- No complex 3D scene.

## 15. Definition of done for implementation

The implementation phase is complete only when:

- All required homepage sections and three case-study routes exist.
- English and Vietnamese content are complete.
- eProcure's AI usage and FPT IS context are accurately disclosed.
- Every featured project has source links and available demo links.
- The temporary résumé downloads correctly.
- The real portrait and approved brand assets are used.
- Mobile, tablet and desktop layouts are verified.
- Keyboard navigation and reduced-motion behavior are verified.
- Production build passes.
- No broken internal or external links remain.
- SEO metadata and Open Graph previews are correct.
- The `.vercel.app` deployment is verified before DNS migration.
