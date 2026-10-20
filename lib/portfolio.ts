import data from "@/data/data.json";

type ExperienceProject = {
  title: string;
  category: string;
  isPoc: boolean;
  techStack: string[];
  details: string[];
  youtube?: string;
};

type Experience = {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  durationText: string;
  projects: ExperienceProject[];
};

type PersonalProject = {
  name: string;
  description: string;
  techStack: string[];
  github?: string;
  youtube?: string;
  year: string;
};

type PortfolioData = {
  profile: {
    name: string;
    role: string;
    bio: string;
    resumeUrl: string;
  };
  skills: {
    languages: string[];
    frameworks_libraries: string[];
    databases: string[];
    tools: string[];
  };
  experiences: Experience[];
  personalProjects: PersonalProject[];
  contacts: {
    email: string;
    github: string;
    linkedin: string;
    facebook: string;
  };
};

const portfolio = data as unknown as PortfolioData;

export const profile = portfolio.profile;
export const contacts = portfolio.contacts;
export const experiences = portfolio.experiences;
export const personalProjects = portfolio.personalProjects;

export const skillGroups = [
  { label: "Languages", items: portfolio.skills.languages },
  { label: "Frameworks", items: portfolio.skills.frameworks_libraries },
  { label: "Databases", items: portfolio.skills.databases },
  { label: "Tooling", items: portfolio.skills.tools },
];

/** "2025-12" -> "2025.12" (monospaced date gutter) */
function formatMonthNumeric(value: string) {
  return value.replace("-", ".");
}

export function formatRange(startDate: string, endDate: string) {
  return `${formatMonthNumeric(startDate)} → ${formatMonthNumeric(endDate)}`;
}
