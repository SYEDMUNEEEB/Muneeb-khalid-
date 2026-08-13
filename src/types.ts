export type ProjectCategory = 'Sports Analytics / SaaS' | 'Social / Matrimonial' | 'Healthcare / Management' | 'SaaS Application';

export interface CaseStudyData {
  challenge: string;
  solution: string;
  architectureDetails: {
    frontend: string;
    backend: string;
    database: string;
    infrastructure: string;
  };
  keyFeatures: string[];
  technicalChallenges: {
    problem: string;
    resolution: string;
  }[];
  outcomes: string[];
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  shortDescription: string;
  description: string;
  technologies: string[];
  features: string[];
  architecture: string[];
  impact: string;
  image: string;
  githubUrl?: string;
  demoUrl?: string;
  caseStudy: CaseStudyData;
  featured: boolean;
}

export type SkillCategory = 'Frontend' | 'Backend' | 'Database' | 'Mobile' | 'Infrastructure' | 'Other';

export interface SkillItem {
  name: string;
  category: SkillCategory;
  experienceLevel: string;
  usedIn: string;
  relatedProjectIds: string[];
  icon: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  focusAreas: string[];
  description: string;
  responsibilities: string[];
  technologies: string[];
  majorAccomplishments: string[];
}

export interface CapabilityItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlights: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  summary: string;
  details: string[];
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  idealFor: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  projectType: string;
  budgetRange: string;
  message: string;
}

export interface CursorState {
  text: string;
  variant: 'default' | 'project' | 'button' | 'technology' | 'interactive';
  active: boolean;
}
