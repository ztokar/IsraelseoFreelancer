import React from 'react';
import { Layout } from './components/Layout';
import { HomePage } from './components/HomePage';
import { ServicePage } from './components/ServicePage';
import { ReviewsResultsPage } from './components/ReviewsResultsPage';
import { SpokeServicePage } from './components/SpokeServicePage';
import { BlogPage } from './components/BlogPage';
import { BlogArticle } from './components/BlogArticle';
import { BlogArticle2 } from './components/BlogArticle2';
import { BlogArticle3 } from './components/BlogArticle3';
import { BlogArticle4 } from './components/BlogArticle4';
import { BlogArticle5 } from './components/BlogArticle5';
import { BlogArticle6 } from './components/BlogArticle6';
import { BlogArticle7 } from './components/BlogArticle7';
import { BlogArticle8 } from './components/BlogArticle8';
import { BlogArticle9 } from './components/BlogArticle9';
import { BlogArticle10 } from './components/BlogArticle10';
import BlogArticle11 from './components/BlogArticle11';
import { ComparisonFreelancerVsAgency } from './components/ComparisonFreelancerVsAgency';
import { VideosPage } from './components/VideosPage';
import { AboutPage } from './components/AboutPage';
import { SERVICE_DATA, SERVICE_SPOKES } from './constants';
import type { RouteRecord } from 'vite-react-ssg';

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },

      // 10-page authority map
      { path: 'freelance-seo-israel', element: <ServicePage content={SERVICE_DATA.freelance} /> },
      { path: 'seo-services-israel', element: <ServicePage content={SERVICE_DATA.services} /> },
      { path: 'seoconsulting', element: <ServicePage content={SERVICE_DATA.consultant} /> },
      { path: 'b2b-seo-israel', element: <ServicePage content={SERVICE_DATA.b2b} /> },
      { path: 'content-marketing-for-seo', element: <ServicePage content={SERVICE_DATA.content} /> },
      { path: 'ai-seo-consultant-israel', element: <ServicePage content={SERVICE_DATA.ai} /> },
      { path: 'technical-seo-audit', element: <ServicePage content={SERVICE_DATA.technical} /> },
      { path: 'link-building-services', element: <ServicePage content={SERVICE_DATA.links} /> },
      { path: 'reviews-results', element: <ReviewsResultsPage /> },

      // First-batch service spokes
      ...SERVICE_SPOKES.map((spoke) => ({
        path: spoke.slug,
        element: <SpokeServicePage content={spoke} />,
      })),

      // Comparison pages
      { path: 'seo-freelancer-vs-agency', element: <ComparisonFreelancerVsAgency /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'videos', element: <VideosPage /> },

      // Blog
      { path: 'blog', element: <BlogPage /> },
      { path: 'blog/claude-code-content-marketing-startups', element: <BlogArticle11 /> },
      { path: 'blog/israeli-tech-seo-gap', element: <BlogArticle10 /> },
      { path: 'blog/seo-drives-pipeline-b2b', element: <BlogArticle9 /> },
      { path: 'blog/why-israeli-b2b-fail-seo', element: <BlogArticle8 /> },
      { path: 'blog/seo-israeli-cybersecurity-companies', element: <BlogArticle7 /> },
      { path: 'blog/seo-israeli-saas-companies-us-markets', element: <BlogArticle6 /> },
      { path: 'blog/israel-b2b-seo-pipeline', element: <BlogArticle /> },
      { path: 'blog/geo-ai-generative-engine-optimization', element: <BlogArticle2 /> },
      { path: 'blog/seo-reputation-management', element: <BlogArticle3 /> },
      { path: 'blog/ai-search-2026-updates', element: <BlogArticle4 /> },
      { path: 'blog/hebrew-seo-checkers-free-tools', element: <BlogArticle5 /> },
    ],
  },
];
