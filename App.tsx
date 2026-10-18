import React from 'react';
import { Layout } from './components/Layout';
import { HomePage } from './components/HomePage';
import { ServicePage } from './components/ServicePage';
import { ServicesHubPage } from './components/ServicesHubPage';
import { ReviewsResultsPage } from './components/ReviewsResultsPage';
import { SpokeServicePage } from './components/SpokeServicePage';
import { RedditSupportPage } from './components/RedditSupportPage';
import { BlogPage } from './components/BlogPage';
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
import { TargetFinderPage } from './components/TargetFinderPage';
import { TargetIntakePage } from './components/TargetIntakePage';
import { LocalAuthoritySystemPage } from './components/LocalAuthoritySystemPage';
import { SystemIntakePage } from './components/SystemIntakePage';
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
      {
        path: 'book',
        lazy: async () => {
          const { BookingPage } = await import('./components/BookingPage');
          return { Component: BookingPage };
        },
      },

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
      ...['ai-visibility-audit', 'geo-content-optimization', 'ai-visibility-tracking-services', 'chatgpt-ads-management'].map((slug) => ({
        path: slug,
        lazy: async () => {
          const [{ ServiceOfferPage }, { SERVICE_OFFERS }] = await Promise.all([
            import('./components/ServiceOfferPage'),
            import('./service-offers'),
          ]);
          const offer = SERVICE_OFFERS.find((item) => item.slug === slug);
          if (!offer) throw new Error(`Unknown service: ${slug}`);
          return { Component: () => <ServiceOfferPage offer={offer} /> };
        },
      })),

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
      { path: 'find-my-target', element: <TargetFinderPage /> },
      { path: 'target-intake', element: <TargetIntakePage /> },
      { path: 'local-authority-system', element: <LocalAuthoritySystemPage /> },
      { path: 'system-intake', element: <SystemIntakePage /> },

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
      { path: 'blog/claude-code-content-marketing-startups', lazy: async () => { const { default: BlogArticle11 } = await import('./components/BlogArticle11'); return { Component: () => withBlogConversion(<BlogArticle11 />, 'Using Claude Code For Content Marketing For Startups') }; } },
      { path: 'blog/israeli-tech-seo-gap', lazy: async () => { const { BlogArticle10 } = await import('./components/BlogArticle10'); return { Component: () => withBlogConversion(<BlogArticle10 />, 'The Israeli Tech SEO Gap') }; } },
      { path: 'blog/seo-drives-pipeline-b2b', lazy: async () => { const { BlogArticle9 } = await import('./components/BlogArticle9'); return { Component: () => withBlogConversion(<BlogArticle9 />, 'How SEO Drives Pipeline for B2B Companies') }; } },
      { path: 'blog/why-israeli-b2b-fail-seo', lazy: async () => { const { BlogArticle8 } = await import('./components/BlogArticle8'); return { Component: () => withBlogConversion(<BlogArticle8 />, 'Why Most Israeli B2B Companies Fail at SEO') }; } },
      { path: 'blog/seo-israeli-cybersecurity-companies', lazy: async () => { const { BlogArticle7 } = await import('./components/BlogArticle7'); return { Component: () => withBlogConversion(<BlogArticle7 />, 'SEO for Israeli Cybersecurity Companies') }; } },
      { path: 'blog/seo-israeli-saas-companies-us-markets', lazy: async () => { const { BlogArticle6 } = await import('./components/BlogArticle6'); return { Component: () => withBlogConversion(<BlogArticle6 />, 'SEO for Israeli SaaS Companies Targeting US Markets') }; } },
      { path: 'blog/israel-b2b-seo-pipeline', lazy: async () => { const { BlogArticle } = await import('./components/BlogArticle'); return { Component: () => withBlogConversion(<BlogArticle />, 'Israel B2B SEO Services') }; } },
      { path: 'blog/geo-ai-generative-engine-optimization', lazy: async () => { const { BlogArticle2 } = await import('./components/BlogArticle2'); return { Component: () => withBlogConversion(<BlogArticle2 />, 'Geo AI and Generative Engine Optimization') }; } },
      { path: 'blog/seo-reputation-management', lazy: async () => { const { BlogArticle3 } = await import('./components/BlogArticle3'); return { Component: () => withBlogConversion(<BlogArticle3 />, 'SEO Reputation Management') }; } },
      { path: 'blog/ai-search-2026-updates', lazy: async () => { const { BlogArticle4 } = await import('./components/BlogArticle4'); return { Component: () => withBlogConversion(<BlogArticle4 />, 'AI Search 2026 Updates') }; } },
      { path: 'blog/hebrew-seo-checkers-free-tools', lazy: async () => { const { BlogArticle5 } = await import('./components/BlogArticle5'); return { Component: () => withBlogConversion(<BlogArticle5 />, 'Hebrew SEO Checkers and Free Tools') }; } },
    ],
  },
];
