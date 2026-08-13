export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: 'award' | 'cert';
  badge: string;
  url?: string;
}

export const certificatesData: CertificateItem[] = [
  {
    id: "hutech-award",
    title: "Outstanding Student Award (Giấy khen SV Xuất Sắc)",
    issuer: "HUTECH University",
    date: "2023 – 2026 (3 Consecutive Years)",
    category: "award",
    badge: "Academic Distinction"
  },
  {
    id: "english-b2",
    title: "English B2 Level Certificate",
    issuer: "CEFR B2 Equivalent Standard",
    date: "Certified",
    category: "award",
    badge: "Language Proficiency"
  },
  {
    id: "cisco-networking",
    title: "Networking Basics",
    issuer: "Cisco Networking Academy",
    date: "2025",
    category: "cert",
    badge: "Cisco Certified"
  },
  {
    id: "cisco-js-1",
    title: "JavaScript Essentials 1",
    issuer: "Cisco x OpenEDG",
    date: "2025",
    category: "cert",
    badge: "Cisco Certified"
  },
  {
    id: "cisco-js-2",
    title: "JavaScript Essentials 2",
    issuer: "Cisco x OpenEDG",
    date: "2025",
    category: "cert",
    badge: "Cisco Certified"
  },
  {
    id: "cisco-cyber",
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "2025",
    category: "cert",
    badge: "Cisco Certified"
  },
  {
    id: "google-gemini",
    title: "Gemini Certified University Student",
    issuer: "Google for Education",
    date: "2026",
    category: "cert",
    badge: "Google AI"
  },
  {
    id: "google-educator",
    title: "Google Certified Educator (Level 1)",
    issuer: "Google for Education",
    date: "2026",
    category: "cert",
    badge: "Google Certified"
  }
];
