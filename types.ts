export interface ResultItem {
  label: string;
  value: string;
}

export interface CaseStudy {
  client: string;
  metric: string;
  context: string;
  industry?: string;
  market?: string;
  description: string;
  icon?: string;
  graphData?: any[];
}

export interface ServiceContent {
  id: string;
  slug: string;
  title: string;
  seoTitle?: string;
  metaDescription?: string;
  subtitle: string;
  heroColor?: 'primary' | 'secondary' | 'ice';
  description: string;
  entityDefinition?: string;
  marketFit?: string;
  industries?: string[];
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
  pricing?: {
    audit: string;
    management: string;
  };
  features: string[];
  whyMe: string[];
  cta: string;
  faqs?: { question: string; answer: string }[];
}

export interface NavItem {
  label: string;
  path: string;
}

export interface NavChild {
  label: string;
  desc: string;
  path: string;
}

export interface NavGroup {
  label: string;
  path?: string;
  children?: NavChild[];
}
