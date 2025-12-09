import { ReactNode } from 'react';

export interface ResultItem {
  label: string;
  value: string;
}

export interface CaseStudy {
  client: string;
  metric: string;
  context: string;
  description: string;
  icon?: ReactNode;
  graphData?: any[]; // For the simulated GSC chart
}

export interface ServiceContent {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  ugcIntro: {
    what: string;
    why: string;
    how: string;
  };
  results: ResultItem[];
  caseStudyHighlight: CaseStudy;
  process: {
    title: string;
    steps: string[];
  };
  tools: string[];
  pricing: {
    audit: string;
    management: string;
  };
  features: string[];
  whyMe: string[];
  cta: string;
}

export interface NavItem {
  label: string;
  path: string;
}