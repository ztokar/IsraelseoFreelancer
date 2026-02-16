import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export const BlogArticle{{NUM}}: React.FC = () => {
  useEffect(() => {
    document.title = '{{TITLE}} | Zechariah Tokar';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-fade-in-up">
      {/* Article Header */}
      <header className="relative min-h-[50vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-primary/5">
        <div className="max-w-4xl mx-auto w-full relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-white/80 backdrop-blur-sm">
            <span className="text-sm font-medium text-primary">{{CATEGORY}}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
            {{TITLE}}
          </h1>

          <div className="flex items-center justify-center gap-4 text-slate-600">
            <span>{{DATE}}</span>
            <span>•</span>
            <span>{{READ_TIME}} min read</span>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {{CONTENT}}
          </div>
        </div>
      </article>
    </div>
  );
};
