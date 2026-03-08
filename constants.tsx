
import React from 'react';
import { 
  Code, 
  Layers, 
  Smartphone, 
  ShieldCheck, 
  TrendingUp, 
  HelpCircle,
  Monitor,
  Zap,
  Globe
} from 'lucide-react';
import { Service, SaaSProduct, PortfolioProject, BlogPost, TeamMember } from './types';

export const COLORS = {
  primary: '#0f172a',
  secondary: '#40bfff', // Matching logo blue
  accent: '#ff5c5c',    // Matching logo red (X)
  background: '#020617'
};

export const SERVICES: Service[] = [
  {
    id: 'web-dev',
    title: 'Web Design & Development',
    description: 'We craft high-performance, responsive websites that convert visitors into customers.',
    icon: <Monitor className="w-8 h-8 text-sky-400" />,
    benefits: ['Mobile-first design', 'SEO optimization', 'Blazing fast performance'],
    value: 'Enhances online presence and user engagement, driving direct revenue growth.'
  },
  {
    id: 'software-dev',
    title: 'Software Development',
    description: 'Custom software solutions tailored to your unique business challenges and workflows.',
    icon: <Code className="w-8 h-8 text-sky-400" />,
    benefits: ['Scalable architecture', 'Robust security', 'Agile delivery'],
    value: 'Automates complex processes and provides data-driven decision capabilities.'
  },
  {
    id: 'saas-dev',
    title: 'SaaS Product Development',
    description: 'End-to-end development of cloud-native applications with multi-tenant capabilities.',
    icon: <Layers className="w-8 h-8 text-sky-400" />,
    benefits: ['Cloud-first approach', 'Subscription management', 'Elastic scaling'],
    value: 'Creates recurring revenue streams and expands global market reach.'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies to amplify your brand and reach the right audience.',
    icon: <TrendingUp className="w-8 h-8 text-sky-400" />,
    benefits: ['Targeted campaigns', 'In-depth analytics', 'Brand storytelling'],
    value: 'Lowers acquisition costs while significantly increasing brand authority.'
  },
  {
    id: 'it-consultation',
    title: 'IT Consultation',
    description: 'Expert guidance on digital transformation, security protocols, and tech stack optimization.',
    icon: <HelpCircle className="w-8 h-8 text-sky-400" />,
    benefits: ['Risk mitigation', 'Cost efficiency', 'Tech roadmapping'],
    value: 'Aligns technology investments with long-term business goals for sustainable growth.'
  }
];

export const SAAS_PRODUCTS: SaaSProduct[] = [
  {
    id: 'secure-auth',
    name: 'SecureAuth 360',
    tagline: 'Enterprise-grade identity protection.',
    description: 'A comprehensive authentication platform with biometric integration and fraud detection.',
    features: ['Multi-factor authentication', 'Anomaly detection', 'Single Sign-On (SSO)', 'Privacy compliance'],
    imageUrl: 'https://picsum.photos/seed/secure/800/600'
  },
  {
    id: 'biztrack-pro',
    name: 'BizTrack Pro',
    tagline: 'Real-time business intelligence.',
    description: 'Monitor every aspect of your business operations with our intuitive dashboard.',
    features: ['Real-time reporting', 'AI-driven forecasting', 'Inventory management', 'Cloud integration'],
    imageUrl: 'https://picsum.photos/seed/biztrack/800/600'
  }
];

export const PORTFOLIO: PortfolioProject[] = [
  {
    id: 'eco-market',
    title: 'EcoMarket Platform',
    industry: 'E-commerce',
    description: 'A global marketplace for sustainable products.',
    problem: 'The client needed a platform that could handle high-traffic sustainable product verification and global logistics.',
    solution: 'Built a React-based frontend with a Python/Django backend featuring automated verification logic.',
    outcome: 'Increased seller onboarding by 45% and reduced transaction processing time by 30%.',
    imageUrl: 'https://picsum.photos/seed/eco/800/600'
  },
  {
    id: 'fintech-app',
    title: 'Nexus Wealth Manager',
    industry: 'FinTech',
    description: 'A wealth management tool for personal investors.',
    problem: 'Fragmented data made it difficult for users to track investments across multiple platforms.',
    solution: 'Integrated multiple financial APIs into a unified dashboard with bank-grade security.',
    outcome: 'User retention grew by 60% within the first six months of launch.',
    imageUrl: 'https://picsum.photos/seed/fintech/800/600'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'trends-2024',
    title: 'The Future of SaaS in 2024',
    category: 'Technology Trends',
    date: 'Oct 15, 2024',
    excerpt: 'AI integration and vertical SaaS are set to redefine how enterprises operate...',
    imageUrl: 'https://picsum.photos/seed/blog1/800/600'
  },
  {
    id: 'security-best',
    title: 'Cybersecurity Checklist for Small Businesses',
    category: 'Security',
    date: 'Oct 10, 2024',
    excerpt: 'Don’t wait for a breach to happen. Implement these essential security measures today...',
    imageUrl: 'https://picsum.photos/seed/blog2/800/600'
  }
];

export const TEAM: TeamMember[] = [
  {
    name: 'Alex Rivera',
    role: 'Lead Architect',
    skills: ['React', 'Next.js', 'Node.js'],
    imageUrl: 'https://picsum.photos/seed/alex/200/200'
  },
  {
    name: 'Sarah Chen',
    role: 'SaaS Specialist',
    skills: ['Python', 'Django', 'PostgreSQL'],
    imageUrl: 'https://picsum.photos/seed/sarah/200/200'
  }
];
