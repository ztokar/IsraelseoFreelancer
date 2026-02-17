import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './components/HomePage';
import { ServicePage } from './components/ServicePage';
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
import { SERVICE_DATA } from './constants';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route
            path="freelance-seo-israel"
            element={<ServicePage content={SERVICE_DATA.freelance} />}
          />
          <Route
            path="seoconsulting"
            element={<ServicePage content={SERVICE_DATA.consultant} />}
          />
          <Route
            path="b2b-seo-israel"
            element={<ServicePage content={SERVICE_DATA.b2b} />}
          />
          <Route
            path="content-marketing-for-seo"
            element={<ServicePage content={SERVICE_DATA.content} />}
          />
          <Route
            path="seo-for-lawyers"
            element={<ServicePage content={SERVICE_DATA.lawyers} />}
          />

          {/* Blog Routes */}
          <Route path="blog" element={<BlogPage />} />
          <Route
            path="blog/claude-code-content-marketing-startups"
            element={<BlogArticle11 />}
          />
          <Route
            path="blog/israeli-tech-seo-gap"
            element={<BlogArticle10 />}
          />
          <Route
            path="blog/seo-drives-pipeline-b2b"
            element={<BlogArticle9 />}
          />
          <Route
            path="blog/why-israeli-b2b-fail-seo"
            element={<BlogArticle8 />}
          />
          <Route
            path="blog/seo-israeli-cybersecurity-companies"
            element={<BlogArticle7 />}
          />
          <Route
            path="blog/seo-israeli-saas-companies-us-markets"
            element={<BlogArticle6 />}
          />
          <Route
            path="blog/israel-b2b-seo-pipeline"
            element={<BlogArticle />}
          />
          <Route
            path="blog/geo-ai-generative-engine-optimization"
            element={<BlogArticle2 />}
          />
          <Route
            path="blog/seo-reputation-management"
            element={<BlogArticle3 />}
          />
          <Route
            path="blog/ai-search-2026-updates"
            element={<BlogArticle4 />}
          />
          <Route
            path="blog/hebrew-seo-checkers-free-tools"
            element={<BlogArticle5 />}
          />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;