# Agent.md — KLBPortfolio

## Project Overview
**KLBPortfolio** là trang portfolio cá nhân của **Nguyễn Minh Long** — sinh viên năm cuối ngành Công nghệ Thông tin (chuyên ngành Công nghệ Phần mềm) tại Đại học Công nghệ TP.HCM (HUTECH). Trang web giới thiệu kỹ năng, kinh nghiệm thực tập tại FPT IS, tư duy lập trình hiện đại tích hợp AI (AI-assisted engineering), và các dự án nổi bật. 
Mục tiêu: gây ấn tượng với nhà tuyển dụng, phục vụ nhu cầu tìm việc (Intern/Fresher Backend → Full-stack), chạy lâu dài trên tên miền **minhlongdev.id.vn**.

## Personal Info (cho content)
- **Họ tên**: Nguyễn Minh Long
- **Vai trò**: Software Developer
- **Trường**: Ho Chi Minh City University of Technology (HUTECH)
- **Chuyên ngành**: Công nghệ Phần mềm
- **GPA**: 3.53/4.0
- **Tốt nghiệp dự kiến**: 10/2026
- **Email**: nguyenminhlongcntt@gmail.com
- **Phone / Zalo**: +84 377241808
- **Địa chỉ**: Thủ Đức, TP.HCM
- **LinkedIn**: https://www.linkedin.com/in/minh-long-nguyễn-09984a333
- **GitHub**: https://github.com/KLBMinhLong
- **YouTube**: https://www.youtube.com/@KLB-MinhLong
- **Facebook**: https://www.facebook.com/long.nguyen.601773/
- **Chứng chỉ**: Bằng B2 Tiếng Anh, Cisco Networking Basics, Cisco JS Essentials 1 & 2, Cisco Cybersecurity, Google Gemini Certified, Google Certified Educator L1
- **Thành tựu**: Giấy khen sinh viên xuất sắc HUTECH (2023–2026)
- **Domain**: `minhlongdev.id.vn`
- **Sở thích**: Cầu lông, xem phim, chơi game, nghiên cứu công nghệ & AI

## Tech Stack

### Build Tool & Frontend
- **Framework**: React 18 + Vite + TypeScript
- **Styling**: Vanilla CSS (CSS Variables, CSS Modules, Glassmorphism, UI/UX Pro Max standards)
- **Animations**: Framer Motion (smooth scroll, section reveals, hover effects)
- **Icons**: Lucide React / FontAwesome
- **i18n**: React Context + JSON locale files (EN ↔ VI)
- **Deploy**: Vercel + custom domain (`minhlongdev.id.vn`)

### NO dependencies on:
- Tailwind CSS (dùng Vanilla CSS với tokens đầy đủ)
- Backend / Database cho bản thân trang Portfolio (dữ liệu static JSON/TS)
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
    ├── assets/               # Images, fonts, icons, avatar (CVImg.png)
    ├── components/           # Reusable UI components
    │   ├── ui/               # Button, Badge, Card, SectionTitle, GlassCard...
    │   └── layout/           # Header, Footer, ScrollToTop, LanguageToggle
    ├── sections/             # Page sections
    │   ├── Hero.tsx
    │   ├── About.tsx
    │   ├── Skills.tsx
    │   ├── Experience.tsx
    │   ├── Projects.tsx
    │   ├── Certificates.tsx  # Section chứng chỉ & giải thưởng
    │   └── Contact.tsx
    ├── data/                 # Content data (tách khỏi UI để mở rộng tương lai)
    │   ├── profile.ts
    │   ├── skills.ts
    │   ├── experience.ts
    │   ├── projects.ts
    │   └── certificates.ts
    ├── i18n/                 # Internationalization
    │   ├── LanguageContext.tsx  # React Context provider
    │   ├── useTranslation.ts   # Custom hook
    │   ├── en.json              # English translations
    │   └── vi.json              # Vietnamese translations
    ├── hooks/                # Custom hooks (useScrollAnimation...)
    ├── styles/               # Global CSS, variables, UI/UX Pro Max tokens
    │   ├── variables.css
    │   ├── reset.css
    │   ├── global.css
    │   └── animations.css
    ├── utils/                # Helper functions
    ├── App.tsx
    └── main.tsx
```

## Sections & Content Details

### 1. Hero Section
- **Tên**: Nguyễn Minh Long
- **Title**: Software Developer
- **Tagline (EN)**: *"Backend-focused developer with enterprise experience, leveraging AI workflows to build scalable full-stack solutions from Spring Boot to React."*
- **Tagline (VI)**: *"Lập trình viên chuyên Backend, có kinh nghiệm thực tế doanh nghiệp, áp dụng quy trình AI để phát triển giải pháp Full-stack tối ưu."*
- **Stats Bar**: `3+ Months @ FPT IS` | `GPA 3.53/4.0` | `4+ Key Projects` | `B2 English`
- **CTA Buttons**: "Explore My Work" (scroll to Projects) + "Download CV" (`CV_Nguyen_Minh_Long.pdf`)
- **Background**: Ambient Animated Gradient Mesh (Dark Theme)

### 2. About Me Section
- Sinh viên năm cuối CNTT HUTECH (GPA 3.53/4.0), chuẩn bị tốt nghiệp 10/2026.
- Thực tập tại FPT Information System (FPT IS): Chủ động xây dựng hệ thống eProcure Enterprise đáp ứng các công nghệ core của phòng Banking (Spring Boot, PostgreSQL, Keycloak, Camunda BPM, JasperReports).
- Tư duy hiện đại: Ứng dụng công cụ AI (AI-assisted engineering) để tăng tốc độ phát triển code, tối ưu quy trình và giải quyết bài toán kỹ thuật phức tạp.
- Định hướng: Intern/Fresher Backend Developer → Full-stack Developer trong tương lai.
- Personal side: Đam mê cầu lông, xem phim, chơi game, làm YouTube chia sẻ công nghệ.

### 3. Experience & Education Section
- **Education**: Đại học Công nghệ TP.HCM (HUTECH) — 2022–2026 | GPA 3.53/4.0 | Giấy khen Sinh viên Xuất sắc 3 năm liên tiếp (2023–2026).
- **FPT IS Internship**: Development Intern (04/2026 – 07/2026) | Banking & Enterprise unit.
  - Chủ động thiết kế và hoàn thiện dự án **eProcure Enterprise** theo stack tiêu chuẩn của phòng ban.
  - Xây dựng RESTful API với Spring Boot & Spring Data JPA, bảo mật Keycloak JWT, quy trình công việc Camunda BPMN 2.0, kết xuất báo cáo JasperReports.

### 4. Skills Section (Tối giản & Đúng trọng tâm)
- **Primary / Core**: Java, Spring Boot, Spring Security, Spring Data JPA, PostgreSQL, Docker, Git, RESTful API
- **Secondary / Full-stack**: C# / ASP.NET Core, React, TypeScript, MySQL, SQL Server, MongoDB, Node.js/Express, Angular
- **Enterprise & DevOps**: Keycloak, Camunda BPM, JasperReports, Docker Compose, Jira, Postman, AI-Assisted Tools

### 5. Projects Section (4 Dự án Chọn Lọc)
1. ⭐ **eProcure Enterprise** — Enterprise Procurement System (FPT IS Capstone)
   - Stack: Spring Boot, Angular, PostgreSQL, Docker, Keycloak, Camunda BPM, JasperReports
   - Highlights: Quản lý quy trình mua sắm doanh nghiệp, xác thực Keycloak, luồng duyệt BPMN, xuất báo cáo PDF.
2. ⭐ **YourSneaker** — Streetwear E-Commerce Platform
   - Stack: ASP.NET Core 8, React, TypeScript, MySQL, Docker
   - Highlights: Đăng nhập/đăng ký JWT, giỏ hàng, đặt hàng, quản lý sản phẩm Admin, thanh toán.
3. ⭐ **Student Dormitory Management** — Quản lý ký túc xá
   - Stack: Java, Spring Boot, PostgreSQL, Jira
   - Highlights: Vai trò **Project Lead / Backend Developer** (lead team 6 người), phân tích thiết kế hệ thống và quản lý tiến độ bằng Jira.
4. ⭐ **ThiTracNghiem App & API** — Mobile Exam App
   - Stack: Flutter (Dart), ASP.NET Core Web API, C#
   - Highlights: Ứng dụng thi trắc nghiệm trên di động tích hợp backend API đồng bộ dữ liệu real-time.

### 6. Certificates & Awards Section
- 🏆 Giấy khen Sinh viên Xuất sắc HUTECH (2023–2026)
- 🇬🇧 Bằng B2 Tiếng Anh
- 🌐 Cisco Networking Academy: Networking Basics & Cybersecurity
- 💻 Cisco x OpenEDG: JavaScript Essentials 1 & 2
- 🤖 Google for Education: Gemini Certified Student & Google Certified Educator L1

### 7. Contact Section
- Email: nguyenminhlongcntt@gmail.com
- Phone / Zalo: 0377241808
- LinkedIn: https://www.linkedin.com/in/minh-long-nguyễn-09984a333
- GitHub: https://github.com/KLBMinhLong
- YouTube: https://www.youtube.com/@KLB-MinhLong
- Contact form đơn giản & nút Download CV (`CV_Nguyen_Minh_Long.pdf`).

## Coding Conventions & Execution Rules
- Ngôn ngữ UI: **English (default)** với toggle button 🇺🇸 EN / 🇻🇳 VI
- All user-facing text phải đi qua `t('key')` function — KHÔNG hardcode text
- Fully responsive, glassmorphism UI, smooth scroll, high-contrast dark theme
- Deploy Vercel với custom domain `minhlongdev.id.vn`

