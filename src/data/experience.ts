export interface TimelineItem {
  id: string;
  type: 'work' | 'education';
  titleKey: string;
  subtitleKey: string;
  locationKey: string;
  dateKey: string;
  bulletKeys: string[];
  skills: string[];
}

export const experienceData: TimelineItem[] = [
  {
    id: "fpt-is",
    type: "work",
    titleKey: "experience.internship_title",
    subtitleKey: "experience.internship_company",
    locationKey: "experience.internship_unit",
    dateKey: "experience.internship_date",
    bulletKeys: [
      "experience.internship_desc1",
      "experience.internship_desc2",
      "experience.internship_desc3",
      "experience.internship_desc4"
    ],
    skills: ["Spring Boot", "PostgreSQL", "Keycloak", "Camunda BPM", "JasperReports", "Docker", "Angular"]
  },
  {
    id: "hutech",
    type: "education",
    titleKey: "experience.education_title",
    subtitleKey: "experience.education_school",
    locationKey: "GPA: 3.53 / 4.00",
    dateKey: "experience.education_date",
    bulletKeys: [
      "experience.education_desc1",
      "experience.education_desc2",
      "experience.education_desc3"
    ],
    skills: ["Java", "C#/.NET", "Data Structures", "Software Architecture", "Database Systems", "Agile Jira"]
  }
];
