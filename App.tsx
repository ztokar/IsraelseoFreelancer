import React from 'react';
import { Layout } from './components/Layout';
import { HomePage } from './components/HomePage';
import { ServicePage } from './components/ServicePage';
import { ServicesHubPage } from './components/ServicesHubPage';
import { ReviewsResultsPage } from './components/ReviewsResultsPage';
import { SpokeServicePage } from './components/SpokeServicePage';
import { RedditSupportPage } from './components/RedditSupportPage';
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
import { BlogArticleConversion } from './components/BlogArticleConversion';
import { ComparisonFreelancerVsAgency } from './components/ComparisonFreelancerVsAgency';
import { VideosPage } from './components/VideosPage';
import { ChatGPTRecommendBrandPage } from './components/ChatGPTRecommendBrandPage';
import { AboutPage } from './components/AboutPage';
import { CaseStudiesHub } from './components/CaseStudiesHub';
import { CaseStudyPage } from './components/CaseStudyPage';
import { GuidePage } from './components/GuidePage';
import { DataIsBeautifulSkillPage } from './components/DataIsBeautifulSkillPage';
import { RecommendationsPage } from './components/RecommendationsPage';
import { RecommendedWebDesignerPage } from './components/RecommendedWebDesignerPage';
import { LocalDemandCaptureBlueprintPage } from './components/LocalDemandCaptureBlueprintPage';
import { BlueprintIntakePage } from './components/BlueprintIntakePage';
import { SERVICE_DATA, SERVICE_SPOKES, REDDIT_SUPPORT_PAGES } from './constants';
import { CASE_STUDY_PAGES } from './constants-casestudies';
import { GUIDE_PAGES } from './constants-guides';
import type { RouteRecord } from 'vite-react-ssg';

const withBlogConversion = (element: React.ReactNode, title: string) => (
  <>
    {element}
    <BlogArticleConversion title={title} />
  </>
);

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },

      // 10-page authority map
      { path: 'freelance-seo-israel', element: <ServicePage content={SERVICE_DATA.freelance} /> },
      { path: 'seo-services-israel', element: <ServicesHubPage /> },
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
      ...REDDIT_SUPPORT_PAGES.map((page) => ({
        path: page.slug,
        element: <RedditSupportPage content={page} />,
      })),

      // Comparison pages
      { path: 'seo-freelancer-vs-agency', element: <ComparisonFreelancerVsAgency /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'videos', element: <VideosPage /> },
      { path: 'how-to-get-chatgpt-to-recommend-your-brand', element: <ChatGPTRecommendBrandPage /> },
      { path: 'resources/dataisbeautiful-claude-skill', element: <DataIsBeautifulSkillPage /> },
      { path: 'recommendations', element: <RecommendationsPage /> },
      { path: 'recommendations/web-designer-seo-web-of-creativity', element: <RecommendedWebDesignerPage /> },
      { path: 'local-demand-capture-blueprint', element: <LocalDemandCaptureBlueprintPage /> },
      { path: 'blueprint-intake', element: <BlueprintIntakePage /> },

      // Case studies
      { path: 'case-studies', element: <CaseStudiesHub /> },
      ...CASE_STUDY_PAGES.map((cs) => ({
        path: `case-studies/${cs.slug}`,
        element: <CaseStudyPage content={cs} />,
      })),

      // AI-SEO + Reddit guide silo pages (validated-demand, exact-match URLs)
      ...GUIDE_PAGES.map((g) => ({
        path: g.slug,
        element: <GuidePage content={g} />,
      })),

      // Blog
      { path: 'blog', element: <BlogPage /> },
      { path: 'blog/claude-code-content-marketing-startups', element: withBlogConversion(<BlogArticle11 />, 'Using Claude Code For Content Marketing For Startups') },
      { path: 'blog/israeli-tech-seo-gap', element: withBlogConversion(<BlogArticle10 />, 'The Israeli Tech SEO Gap') },
      { path: 'blog/seo-drives-pipeline-b2b', element: withBlogConversion(<BlogArticle9 />, 'How SEO Drives Pipeline for B2B Companies') },
      { path: 'blog/why-israeli-b2b-fail-seo', element: withBlogConversion(<BlogArticle8 />, 'Why Most Israeli B2B Companies Fail at SEO') },
      { path: 'blog/seo-israeli-cybersecurity-companies', element: withBlogConversion(<BlogArticle7 />, 'SEO for Israeli Cybersecurity Companies') },
      { path: 'blog/seo-israeli-saas-companies-us-markets', element: withBlogConversion(<BlogArticle6 />, 'SEO for Israeli SaaS Companies Targeting US Markets') },
      { path: 'blog/israel-b2b-seo-pipeline', element: withBlogConversion(<BlogArticle />, 'Israel B2B SEO Services') },
      { path: 'blog/geo-ai-generative-engine-optimization', element: withBlogConversion(<BlogArticle2 />, 'Geo AI and Generative Engine Optimization') },
      { path: 'blog/seo-reputation-management', element: withBlogConversion(<BlogArticle3 />, 'SEO Reputation Management') },
      { path: 'blog/ai-search-2026-updates', element: withBlogConversion(<BlogArticle4 />, 'AI Search 2026 Updates') },
      { path: 'blog/hebrew-seo-checkers-free-tools', element: withBlogConversion(<BlogArticle5 />, 'Hebrew SEO Checkers and Free Tools') },
    ],
  },
];
