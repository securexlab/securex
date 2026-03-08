
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
  value: string;
}

export interface SaaSProduct {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  imageUrl: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  industry: string;
  description: string;
  problem: string;
  solution: string;
  outcome: string;
  imageUrl: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  imageUrl: string;
}

export interface TeamMember {
  name: string;
  role: string;
  skills: string[];
  imageUrl: string;
}
