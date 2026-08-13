export interface Skill {
  name: string;
  category: 'primary' | 'secondary' | 'enterprise';
  icon?: string;
  color?: string;
  badge?: string;
}

export const skillsData: Skill[] = [
  // Primary Stack (Core Backend & DB)
  { name: "Java", category: "primary", color: "var(--color-java)", badge: "Core" },
  { name: "Spring Boot", category: "primary", color: "var(--color-spring)", badge: "Framework" },
  { name: "Spring Security", category: "primary", color: "var(--color-spring)" },
  { name: "Spring Data JPA", category: "primary", color: "var(--color-spring)" },
  { name: "PostgreSQL", category: "primary", color: "var(--color-postgres)", badge: "Database" },
  { name: "Docker", category: "primary", color: "var(--color-docker)", badge: "DevOps" },
  { name: "RESTful API", category: "primary", color: "var(--color-accent)" },
  { name: "Git / GitHub", category: "primary", color: "var(--color-github)" },

  // Secondary Stack (Full-stack & Mobile)
  { name: "C# / ASP.NET Core", category: "secondary", color: "var(--color-dotnet)", badge: "Backend" },
  { name: "Entity Framework", category: "secondary", color: "var(--color-dotnet)" },
  { name: "React", category: "secondary", color: "var(--color-react)", badge: "Frontend" },
  { name: "TypeScript", category: "secondary", color: "var(--color-react)" },
  { name: "MySQL", category: "secondary", color: "var(--color-accent-2)" },
  { name: "SQL Server", category: "secondary", color: "var(--color-dotnet)" },
  { name: "MongoDB", category: "secondary", color: "var(--color-spring)" },
  { name: "Node.js / Express", category: "secondary", color: "var(--color-spring)" },
  { name: "Flutter / Dart", category: "secondary", color: "var(--color-flutter)", badge: "Mobile" },

  // Enterprise & AI Workflow
  { name: "Keycloak (JWT Auth)", category: "enterprise", color: "#4D4D4D", badge: "IAM" },
  { name: "Camunda BPMN 2.0", category: "enterprise", color: "#FF7500", badge: "Workflow" },
  { name: "JasperReports", category: "enterprise", color: "#009688", badge: "Reporting" },
  { name: "Jira / Agile Scrum", category: "enterprise", color: "#0052CC", badge: "Management" },
  { name: "Postman", category: "enterprise", color: "#FF6C37" },
  { name: "AI-Assisted Workflows", category: "enterprise", color: "var(--color-accent-2)", badge: "AI Engineering" }
];
