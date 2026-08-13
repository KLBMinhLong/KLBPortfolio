# DESIGN.md — KLBPortfolio Design System (UI/UX Pro Max Edition)

## Brand Identity

**KLBPortfolio** — Personal developer portfolio of **Nguyễn Minh Long**.
Phong cách: **Modern, Minimal, High-Contrast Premium Dark** — Đơn giản, cực kỳ tinh tế, chú trọng typography, glassmorphism và vi hiệu ứng (micro-animations). Phù hợp tuyệt đối với cảm quan chuyên nghiệp cho nhà tuyển dụng (HR/Tech Lead).

### Design Principles (UI/UX Pro Max)
1. **Content-First Hierarchy**: Thông tin quan trọng (Skills, Experience, Projects, Proof of Work) đập vào mắt ngay lập tục.
2. **High-Contrast Dark Elegance**: Nền tối sâu (`#0B0D17`), độ tương phản vừa phải giúp đọc lâu không mỏi mắt.
3. **Glassmorphism & Subtle Glow**: Các card sở hữu hiệu ứng kính mờ (glassmorphism) kết hợp viền phát sáng nhã nhặn (subtle accent glow) khi hover.
4. **Fluid Micro-Animations**: Sử dụng Framer Motion và CSS keyframes mượt mà (fade in, float, stagger) tạo cảm giác ứng dụng cao cấp.
5. **Multi-device Responsiveness**: Tối ưu tuyệt đối từ màn hình Retina desktop down tới điện thoại di động thông thường.

---

## Color Palette

### Core Background Colors
| Token                  | Value                         | Usage                   |
|------------------------|-------------------------------|--------------------------|
| `--color-bg-primary`    | `#0A0C16`                     | Deep space primary background |
| `--color-bg-secondary`  | `#101323`                     | Section background alternate |
| `--color-bg-card`       | `rgba(18, 22, 41, 0.7)`       | Glassmorphism card default   |
| `--color-bg-card-hover` | `rgba(26, 31, 58, 0.85)`      | Glassmorphism card hover     |

### Brand Accent Colors
| Token                  | Value                         | Usage                   |
|------------------------|-------------------------------|--------------------------|
| `--color-accent`        | `#6C63FF`                     | Primary accent (electric indigo) |
| `--color-accent-hover`  | `#584FF6`                     | Accent hover state      |
| `--color-accent-glow`   | `rgba(108, 99, 255, 0.3)`     | Glow shadows & borders   |
| `--color-accent-2`      | `#00D4AA`                     | Secondary accent (neon teal) |
| `--color-accent-gradient` | `linear-gradient(135deg, #6C63FF, #00D4AA)` | Gradient text & CTA background |

### Text Colors
| Token                    | Value     | Usage                |
|--------------------------|-----------|----------------------|
| `--color-text-primary`    | `#F0F2FF` | Headings, titles, key content |
| `--color-text-secondary`  | `#9498B8` | Body paragraphs, bullet descriptions |
| `--color-text-muted`      | `#5E6282` | Micro labels, dates, captions |
| `--color-text-on-accent`  | `#FFFFFF` | Text inside solid accent buttons |

### Brand & Tech Badge Colors
| Token              | Value     | Usage            |
|--------------------|-----------|-------------------|
| `--color-java`      | `#F89820` | Java badge        |
| `--color-spring`    | `#6DB33F` | Spring Boot badge |
| `--color-dotnet`    | `#512BD4` | .NET badge        |
| `--color-react`     | `#61DAFB` | React badge       |
| `--color-angular`   | `#DD0031` | Angular badge     |
| `--color-postgres`  | `#336791` | PostgreSQL badge  |
| `--color-docker`    | `#2496ED` | Docker badge      |
| `--color-flutter`   | `#02569B` | Flutter badge     |
| `--color-youtube`   | `#FF0000` | YouTube link/icon |
| `--color-linkedin`  | `#0A66C2` | LinkedIn link     |

---

## Typography

### Font Families
```css
--font-heading: 'Space Grotesk', -apple-system, sans-serif; /* Geometric modern tech vibe */
--font-body: 'Inter', -apple-system, sans-serif;             /* Crisp, readable body text */
--font-mono: 'JetBrains Mono', monospace;                     /* Code snippets & badges */
```

### Font Scale & Line Heights
| Token          | Size     | Line Height | Usage                    |
|----------------|----------|-------------|--------------------------|
| `--text-xs`     | 0.75rem  | 1.4         | Badges, metadata         |
| `--text-sm`     | 0.875rem | 1.5         | Captions, secondary labels |
| `--text-base`   | 1.00rem  | 1.6         | Primary body text        |
| `--text-lg`     | 1.125rem | 1.6         | Lead paragraphs          |
| `--text-xl`     | 1.25rem  | 1.4         | Card & modal titles      |
| `--text-2xl`    | 1.50rem  | 1.3         | Section subtitles        |
| `--text-3xl`    | 2.25rem  | 1.2         | Major section headings   |
| `--text-4xl`    | 3.00rem  | 1.1         | Sub-hero headlines       |
| `--text-hero`   | 4.25rem  | 1.05        | Main Hero Name           |

---

## Spacing & Radius

```css
/* Radius Tokens */
--radius-sm:   8px;
--radius-md:   14px;
--radius-lg:   20px;
--radius-xl:   28px;
--radius-full: 9999px;

/* Spacing Tokens */
--space-1:  0.25rem;
--space-2:  0.50rem;
--space-3:  0.75rem;
--space-4:  1.00rem;
--space-6:  1.50rem;
--space-8:  2.00rem;
--space-12: 3.00rem;
--space-16: 4.00rem;
--space-24: 6.00rem;
```

---

## Glassmorphism & Shadow Tokens

```css
--shadow-subtle: 0 4px 20px rgba(0, 0, 0, 0.25);
--shadow-glow: 0 0 25px rgba(108, 99, 255, 0.25);
--shadow-glow-teal: 0 0 25px rgba(0, 212, 170, 0.25);

--glass-bg: rgba(16, 19, 35, 0.65);
--glass-border: 1px solid rgba(255, 255, 255, 0.08);
--glass-border-active: 1px solid rgba(108, 99, 255, 0.4);
--glass-blur: blur(16px);
```

---

## Motion & Micro-Interactions

1. **Header Glass Scroll**: Header chuyển sang dạng floating glass bar khi cuộn xuống.
2. **Hero Ambient Glow**: Background có các khối gradient chuyển động êm dịu đằng sau.
3. **Card Lift & Border Glow**: Hover vào Card đẩy card lên nhẹ 4px và hiện viền gradient phát sáng.
4. **Staggered Badges**: Skill & Certificate badges xuất hiện từng cái nối tiếp nhau.
5. **Language Switcher Flip**: Chuyển đổi mượt giữa 🇺🇸 EN và 🇻🇳 VI.

---

## Component Specs

### 1. Floating Header
- Position: Sticky top với backdrop-filter mượt.
- Left: Brand Monogram (`<ML/>`).
- Right: Section Navigation Links + Language Toggle + Social Icons.

### 2. Hero Section
- Hero Title với hiệu ứng Gradient Text (`#6C63FF` → `#00D4AA`).
- Interactive Stats Bar (3+ Months FPT IS | GPA 3.53 | 4+ Key Projects).
- Action Buttons: "Explore My Work" (Glow Primary) + "Download CV" (Glass Outline).

### 3. Glass Project Cards
- Visual Aspect Ratio 16:9 cho hình ảnh minh họa/code.
- Tags badge cho các công nghệ sử dụng.
- Link trực tiếp tới GitHub repository & demo.

### 4. Experience & Education Timeline
- Cột mốc thời gian thiết kế dạng nút điểm glowing dot.
- Phân định rõ ràng thời gian thực tập tại FPT IS & quá trình học tập HUTECH.

### 5. Certificates & Awards Grid
- Các card hiển thị logo/bằng khen nhã nhặn.
- Link mở chứng chỉ trực tuyến khi click.
