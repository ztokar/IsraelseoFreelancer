import React from 'react';
import { ContactCTA } from './ContactCTA';
import { RelatedPages } from './ConversionSections';

export const BlogArticleConversion: React.FC<{ title: string }> = ({ title }) => (
  <div className="gp">
    <RelatedPages
      title="Useful next pages."
      lede="If this article matches the problem you are seeing, these pages move from reading to action."
      links={[
        { label: 'B2B SEO', path: '/b2b-seo-israel', type: 'Service', body: 'For companies that need buyer-intent pages and pipeline-focused SEO.' },
        { label: 'AI Search Visibility', path: '/ai-seo-consultant-israel', type: 'Service', body: 'For brands that need to show up in AI answers and recommendation searches.' },
        { label: 'Reviews and results', path: '/reviews-results', type: 'Proof', body: 'Recommendations, selected outcomes, and places to vet the work.' },
      ]}
    />
    <ContactCTA
      subject={`New Inquiry from blog article: ${title}`}
      title="Want me to look at your site?"
      body="Send the site, I review the issue, then I reply with the practical first step."
      submitButtonText="Send my site"
    />
  </div>
);
