import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './components/HomePage';
import { ServicePage } from './components/ServicePage';
import { SERVICE_DATA } from './constants';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          
          <Route 
            path="freelance-seo" 
            element={<ServicePage content={SERVICE_DATA.freelance} />} 
          />
          <Route 
            path="consultant-seo" 
            element={<ServicePage content={SERVICE_DATA.consultant} />} 
          />
          <Route 
            path="b2b-seo" 
            element={<ServicePage content={SERVICE_DATA.b2b} />} 
          />
          <Route 
            path="content-marketing" 
            element={<ServicePage content={SERVICE_DATA.content} />} 
          />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;