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
import { AiSeoMonthlyPage } from './components/AiSeoMonthlyPage';
import { SystemIntakePage } from './components/SystemIntakePage';
import { PrivacyPage } from './components/PrivacyPage';
import { ClaimPage } from './components/lean/ClaimPage';
import { CLAIM_PAGES } from './content/claims';
import { LEAF_PAGES } from './content/leaves';
import { HubPage } from './components/lean/HubPage';
import { RedditSeoPage } from './components/lean/RedditSeoPage';
import { REDIRECTS } from './content/folds';

// Pages merged into a better home (their address now redirects in one hop).
const FOLDED = new Set(REDIRECTS.map(([from]) => from.slice(1)));
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
      { path: 'seo-services-israel', element: <ClaimPage content={CLAIM_PAGES.seo} /> },
      { path: 'ai-seo-services', element: <ClaimPage content={CLAIM_PAGES.ai} /> },
      { path: 'local-seo-services', element: <ClaimPage content={CLAIM_PAGES.local} /> },
      { path: 'reddit-marketing-services', element: <ClaimPage content={CLAIM_PAGES.reddit} /> },
      // Second text version of home and the four service pages, for his review (noindex, not in the sitemap).
      { path: 'preview/version-c/home', element: <HomePage version="C" /> },
      ...Object.values(CLAIM_PAGES).map((c) => ({ path: `preview/version-c${c.path}`, element: <ClaimPage content={c} version="C" /> })),
      { path: 'content-marketing-for-seo', element: <ServicePage content={SERVICE_DATA.content} /> },
      { path: 'technical-seo-audit', element: <ServicePage content={SERVICE_DATA.technical} /> },
      { path: 'reviews-results', element: <ReviewsResultsPage /> },
      ...LEAF_PAGES.map((c) => ({ path: c.path.slice(1), element: <ClaimPage content={c} leaf /> })),

      // First-batch service spokes
      ...SERVICE_SPOKES.filter((s) => !['reddit-marketing-services', 'reddit-seo'].includes(s.slug) && !FOLDED.has(s.slug)).map((spoke) => ({
        path: spoke.slug,
        element: <SpokeServicePage content={spoke} />,
      })),
      ...REDDIT_SUPPORT_PAGES.filter((p) => !FOLDED.has(p.slug)).map((page) => ({
        path: page.slug,
        element: <RedditSupportPage content={page} />,
      })),

      // Comparison pages
      { path: 'seo-freelancer-vs-agency', element: <ComparisonFreelancerVsAgency /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'privacy', element: <PrivacyPage /> },
      { path: 'reddit-seo', element: <RedditSeoPage /> },
      { path: 'resources/dataisbeautiful-claude-skill', element: <DataIsBeautifulSkillPage /> },
      { path: 'local-demand-capture-blueprint', element: <LocalDemandCaptureBlueprintPage /> },
      { path: 'blueprint-intake', element: <BlueprintIntakePage /> },
      { path: 'find-my-target', element: <TargetFinderPage /> },
      { path: 'target-intake', element: <TargetIntakePage /> },
      { path: 'ai-seo-monthly', element: <AiSeoMonthlyPage /> },
      { path: 'system-intake', element: <SystemIntakePage /> },

      // Case studies
      { path: 'case-studies', element: <CaseStudiesHub /> },
      ...['/ai-answers', '/reddit-guides', '/seo-guides'].map((h) => ({ path: h.slice(1), element: <HubPage path={h} /> })),
      ...CASE_STUDY_PAGES.map((cs) => ({
        path: `case-studies/${cs.slug}`,
        element: <CaseStudyPage content={cs} />,
      })),

      // AI-SEO + Reddit guide silo pages (validated-demand, exact-match URLs)
      ...GUIDE_PAGES.filter((g) => !FOLDED.has(g.slug)).map((g) => ({
        path: g.slug,
        element: <GuidePage content={g} />,
      })),

      // Blog
      { path: 'blog/claude-code-content-marketing-startups', lazy: async () => { const { default: BlogArticle11 } = await import('./components/BlogArticle11'); return { Component: () => withBlogConversion(<BlogArticle11 />, 'Using Claude Code For Content Marketing For Startups') }; } },
      { path: 'blog/hebrew-seo-checkers-free-tools', lazy: async () => { const { BlogArticle5 } = await import('./components/BlogArticle5'); return { Component: () => withBlogConversion(<BlogArticle5 />, 'Hebrew SEO Checkers and Free Tools') }; } },
    ],
  },
];
