import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './components/HomePage';
import { ServicePage } from './components/ServicePage';
import { BlogPage } from './components/BlogPage';
import { BlogArticle } from './components/BlogArticle';
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

          {/* Blog Routes */}
          <Route path="blog" element={<BlogPage />} />
          <Route
            path="blog/israel-b2b-seo-pipeline"
            element={<BlogArticle />}
          />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;