export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  descKey: string;
  featured: boolean;
  image: string;
  tech: string[];
  github?: string;
  demo?: string;
  badgeKey?: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "eprocure-enterprise",
    title: "eProcure Enterprise",
    category: "FPT IS Enterprise Capstone",
    descKey: "projects.eprocure_desc",
    featured: true,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
    tech: ["Spring Boot", "PostgreSQL", "Keycloak IAM", "Camunda BPM", "JasperReports", "Angular", "Docker"],
    github: "https://github.com/KLBMinhLong/E-Procurement",
    badgeKey: "FPT IS Banking & Enterprise"
  },
  {
    id: "yoursneaker",
    title: "YourSneaker E-Commerce Platform",
    category: "Full-Stack Streetwear Store",
    descKey: "projects.yoursneaker_desc",
    featured: true,
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1000&auto=format&fit=crop",
    tech: ["ASP.NET Core 8", "React", "TypeScript", "MySQL", "Docker", "Clean Architecture"],
    github: "https://github.com/KLBMinhLong/YourSneaker",
    badgeKey: "Full-Stack .NET & React"
  },
  {
    id: "student-dormitory",
    title: "Student Dormitory Management",
    category: "University System Lead Project",
    descKey: "projects.dormitory_desc",
    featured: true,
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1000&auto=format&fit=crop",
    tech: ["Java", "Spring Boot", "PostgreSQL", "Jira", "System Architecture"],
    github: "https://github.com/KLBMinhLong/StudentDormitoryManagement",
    badgeKey: "Project Lead (6 Members)"
  },
  {
    id: "thitracnghiem-app",
    title: "ThiTracNghiem Mobile App & API",
    category: "Cross-Platform Mobile App",
    descKey: "projects.thitracnghiem_desc",
    featured: true,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop",
    tech: ["Flutter (Dart)", "ASP.NET Core API", "C#", "REST API"],
    github: "https://github.com/KLBMinhLong/ThiTracNghiem_App_Api",
    badgeKey: "Mobile & REST API"
  }
];
