export interface ProjectCardProps {
  title: string;
  date: string;
  description: string;
  tech: string[];
  challenges: string[];
  impact: string[];
}

export interface AchievementItem {
  type: string;
  title: string;
  issuer: string;
  year: string;
  description?: string;
  image?: string;
}

export interface Project {
  title: string;
  date: string;
  description: string;
  tech: string[];
  challenges: string[];
  impact: string[];
}
