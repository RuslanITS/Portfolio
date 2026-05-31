export type Project = {
  id: number;
  title: string;
  description: string;
  technology: string[];
  githubUrl: string;
};

export type Skill = {
  id: number;
  title: string;
  level: string;
  icon: ReactNode;
  category: string;
};