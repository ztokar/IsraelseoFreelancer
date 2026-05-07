export interface ResultItem {
  label: string;
  value: string;
}

export interface ReviewItem {
  quote: string;
  name: string;
  role: string;
  initial: string;
  linkedinVerified?: boolean;
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
  primaryKeyword?: string;
  priceFrom?: string;
  timeline?: string;
  bestFor?: string;
  deliverables?: string[];
  relatedServices?: string[];
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
  pricing: {
    audit: string;
    management: string;
  };
  features: string[];
  whyMe: string[];
  cta: string;
  faqs?: { question: string; answer: string }[];
  gscSignal?: string;
  deepDive?: {
    title: string;
    body: string;
  }[];
}

export interface NavItem {
  label: string;
  path: string;
}

export interface SpokeService {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  eyebrow: string;
  parentPath: string;
  parentLabel: string;
  bestFor: string;
  intro: string;
  handles: string[];
  proof: string;
  related: string[];
  cta: string;
}
