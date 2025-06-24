import type { LucideIcon } from 'lucide-react';
import { Code, Database, Calculator, BarChart3, Book } from 'lucide-react';

export interface Skill {
  name: string;
  icon: LucideIcon;
  level: number;
}

export const skills: Skill[] = [
  { name: 'Python', icon: Code, level: 90 },
  { name: 'React', icon: Code, level: 85 },
  { name: 'HTML/CSS', icon: Code, level: 90 },
  { name: 'MySQL', icon: Database, level: 80 },
  { name: 'MATLAB', icon: Calculator, level: 85 },
  { name: 'R', icon: BarChart3, level: 80 },
  { name: 'LaTeX', icon: Book, level: 85 },
  { name: 'Excel', icon: BarChart3, level: 90 }
];

export interface Project {
  title: string;
  description: string;
  tech: string[];
  highlight: boolean;
}

export const projects: Project[] = [
  {
    title: 'Quadratic Solver',
    description: 'Excel-based mathematical tool for solving quadratic equations with graphical visualization',
    tech: ['Excel', 'VBA', 'Mathematics'],
    highlight: true
  },
  {
    title: 'LaTeX Presentations',
    description: 'Professional academic presentations and documents using LaTeX typesetting',
    tech: ['LaTeX', 'Academic Writing', 'Typography'],
    highlight: false
  },
  {
    title: 'Mathematical Analysis Tools',
    description: 'MATLAB and R scripts for statistical analysis and mathematical modeling',
    tech: ['MATLAB', 'R', 'Statistics', 'Data Analysis'],
    highlight: true
  },
  {
    title: 'Database Projects',
    description: 'MySQL database design and management for various applications',
    tech: ['MySQL', 'Database Design', 'SQL'],
    highlight: false
  }
];
