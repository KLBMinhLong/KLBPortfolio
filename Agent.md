# Agent.md — KLBPortfolio

## Project Overview
**KLBPortfolio** là trang portfolio cá nhân của **Nguyễn Minh Long** — sinh viên năm cuối ngành Kỹ thuật Phần mềm tại HUTECH, TP.HCM. Trang web giới thiệu kỹ năng, kinh nghiệm thực tập tại FPT IS, và các dự án nổi bật. Mục tiêu: gây ấn tượng với nhà tuyển dụng, thể hiện năng lực full-stack developer.

## Personal Info (cho content)
- **Họ tên**: Nguyễn Minh Long
- **Vai trò**: Software Engineer
- **Trường**: Ho Chi Minh City University of Technology (HUTECH)
- **GPA**: 3.53/4.0
- **Tốt nghiệp dự kiến**: 10/2026
- **Email**: nguyenminhlongcntt@gmail.com
- **Phone**: +84 377241808
- **Địa chỉ**: Thủ Đức, TP.HCM
- **GitHub**: https://github.com/KLBMinhLong
- **Chứng chỉ**: Bằng B2 Tiếng Anh
- **Thành tựu**: Giấy khen sinh viên xuất sắc HUTECH (2023–2026)

## Tech Stack

### Build Tool
- **Framework**: React 18 + Vite + TypeScript
- **Styling**: Vanilla CSS (CSS Variables, CSS Modules hoặc global styles)
- **Animations**: Framer Motion (smooth scroll, section reveals, hover effects)
- **Icons**: Lucide React
- **i18n**: React Context + JSON locale files (EN ↔ VI)
- **Deploy**: Vercel (recommended) + custom domain (e.g. minhlong.dev)

### NO dependencies on:
- Tailwind CSS (trừ khi user yêu cầu)
- Backend / Database (static site, dữ liệu hardcode trong data files)
- CMS

## Project Structure
```
KLBPortfolio/
├── Agent.md
├── DESIGN.md
├── README.md
├── .gitignore
├── package.json
├── vite.config.ts
├── tsconfig.json
├── index.html
└── src/
    ├── assets/               # Images, fonts, icons
    │   ├── images/
    │   └── icons/
    ├── components/           # Reusable UI components
    │   ├── ui/               # Button, Badge, Card, SectionTitle...
    │   └── layout/           # Header, Footer, ScrollToTop, LanguageToggle
    ├── sections/             # Page sections
    │   ├── Hero.tsx
    │   ├── About.tsx
    │   ├── Skills.tsx
    │   ├── Experience.tsx
    │   ├── Projects.tsx
    │   └── Contact.tsx
    ├── data/                 # Content data (tách khỏi UI)
    │   ├── profile.ts
    │   ├── skills.ts
    │   ├── experience.ts
    │   └── projects.ts
    ├── i18n/                 # Internationalization
    │   ├── LanguageContext.tsx  # React Context provider
    │   ├── useTranslation.ts   # Custom hook: const { t, lang, toggleLang } = useTranslation()
    │   ├── en.json              # English translations
    │   └── vi.json              # Vietnamese translations
    ├── hooks/                # Custom hooks (useScrollAnimation, useTheme...)
    ├── styles/               # Global CSS, variables
    │   ├── variables.css
    │   ├── reset.css
    │   ├── global.css
    │   └── animations.css
    ├── utils/                # Helper functions
    ├── App.tsx
    └── main.tsx
```

## Sections & Content

### 1. Hero
- Tên: Nguyễn Minh Long
- Title: "Software Engineer"
- Tagline: 1 câu pitch ngắn, mạnh mẽ
- CTA buttons: "View Projects" / "Xem dự án" + "Contact" / "Liên hệ"
- Language toggle button (EN ↔ VI) trên nav bar
- Animated background (CSS particle/gradient mesh — NO Three.js/3D)
- NOTE: Không dùng 3D (Three.js/R3F) — quá nặng cho portfolio, timeline tight

### 2. About Me
- Sinh viên năm cuối HUTECH, GPA 3.53/4.0
- Hướng đi: Backend enterprise (Java/Spring Boot, C#/.NET), đang mở rộng full-stack
- Tính cách: đam mê học hỏi, tự học nhanh, làm việc nhóm tốt
- Ảnh chân dung (placeholder ban đầu)

### 3. Skills
Nhóm theo category:
- **Backend**: Java, Spring Boot, Spring Security, Spring Data JPA, ASP.NET Core, Entity Framework Core, Node.js, ExpressJS
- **Frontend**: React, TypeScript, Angular, HTML, CSS, Bootstrap
- **Database**: PostgreSQL, SQL Server, MySQL, MongoDB
- **DevOps & Tools**: Docker, Docker Compose, Git, GitHub, Jira, Postman, Keycloak
- **Other**: REST API, JWT Auth, Clean Architecture, Camunda BPM, JasperReports

### 4. Experience
- **Development Intern — FPT IS** (04/2026 – 07/2026)
  - Project: eProcure Enterprise
  - 3-month backend training program
  - Built REST APIs with Spring Boot, Spring Data JPA, PostgreSQL
  - Keycloak auth/authorization, JasperReports, Camunda BPM workflow
  - Delivered full-stack capstone: E-Procurement system (Spring Boot + Angular)

### 5. Projects (sắp xếp theo mức độ nổi bật)
1. **eProcure Enterprise** — Enterprise Procurement System ⭐ (FPT IS internship capstone)
   - Stack: Spring Boot, Angular, PostgreSQL, Docker, Keycloak, Camunda BPM, JasperReports
   - Highlights: Real enterprise project, auth + BPMN workflow + reporting
   - GitHub: github.com/KLBMinhLong/E-Procurement

2. **YourSneaker** — E-Commerce Platform ⭐
   - Stack: ASP.NET Core 8, React + TypeScript, MySQL, Docker
   - Features: Auth, Product CRUD, Cart, Orders, Admin Dashboard, VNPay payment
   
3. **Student Dormitory Management** — Quản lý ký túc xá
   - Stack: Java, Spring Boot, PostgreSQL, Jira
   - Role: Project Lead / Backend Developer (6 members)
   - GitHub: github.com/KLBMinhLong/StudentDormitoryManagement

4. **Smart Test** — Online Exam Platform
   - Stack: ASP.NET Core, SQL Server, AJAX
   - GitHub: github.com/KLBMinhLong/DACSWebThiTracNghiem

5. **QuizWeb** — Quiz Application
   - Stack: Node.js, ExpressJS, MongoDB
   - GitHub: github.com/KLBMinhLong/QuizWeb

### 6. Contact
- Email: nguyenminhlongcntt@gmail.com
- GitHub: github.com/KLBMinhLong
- Phone: +84 377241808
- Contact form (optional — can use Formspree or similar)

## Coding Conventions

### General
- Ngôn ngữ code: **English**
- Ngôn ngữ UI: **English (default)** với toggle sang **Tiếng Việt**
- i18n approach: React Context + JSON files (en.json, vi.json)
- All user-facing text phải đi qua `t('key')` function — KHÔNG hardcode text
- Component naming: PascalCase
- File naming: PascalCase cho components, camelCase cho utilities

### CSS
- CSS Variables cho design tokens
- Mobile-first responsive design
- Smooth transitions và animations
- Dark theme default (có thể toggle light mode)

### TypeScript
- Strict mode
- Interfaces cho data types
- Functional components only
- No `any` type

### Performance
- Lazy load images
- Intersection Observer cho scroll animations
- Optimize bundle size (tree-shaking)
- Proper meta tags cho SEO + Open Graph

## SEO & Meta
- Title: "Nguyễn Minh Long — Software Engineer"
- Description: "Portfolio of Nguyen Minh Long — Software Engineer specializing in Java Spring Boot, ASP.NET Core, and React. HUTECH graduate with internship experience at FPT IS."
- Open Graph tags cho social sharing
- Favicon
- Sitemap (optional)
- `<html lang="en">` default, update khi toggle sang `vi`

## Deploy Strategy
- **Platform**: Vercel (free, auto-deploy from GitHub, excellent performance)
- **Custom Domain**: Recommend mua domain riêng (e.g. `minhlong.dev`, `nguyenminhlong.dev`)
  - Provider: Namecheap / Cloudflare (~$10-12/năm)
  - Gắn vào Vercel chỉ mất 5 phút (add domain + update DNS)
- **KHÔNG dùng AWS** — overkill cho static portfolio, tốn thời gian setup
- **CI/CD**: Vercel auto-deploy mỗi lần push lên `main` branch
- **SSL**: Vercel cấp tự động (HTTPS)

## i18n Implementation
### Cách hoạt động:
1. `LanguageContext` lưu trạng thái ngôn ngữ hiện tại (default: `en`)
2. `useTranslation()` hook trả về `{ t, lang, toggleLang }`
3. `t('hero.title')` → tra cứu key trong en.json hoặc vi.json
4. Toggle button trên navbar: 🇺🇸 EN / 🇻🇳 VI
5. Lưu preference vào localStorage

### Quy tắc:
- Tất cả text hiển thị cho user PHẢI dùng `t('key')`
- Key naming: `section.element` (e.g. `hero.greeting`, `about.description`, `skills.title`)
- Chỉ translate nội dung text — technical terms (Spring Boot, React, Docker...) giữ nguyên
