import React from 'react';

export const OrganizationSchema: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Israel SEO Freelancer - Zechariah Tokar",
    "alternateName": "Zechariah Tokar SEO",
    "url": "https://israelseofreelancer.com",
    "logo": "https://israelseofreelancer.com/logo.png",
    "description": "Premium SEO services for US businesses. Freelance SEO consultant specializing in B2B, e-commerce, and content marketing with proven results.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IL"
    },
    "founder": {
      "@type": "Person",
      "name": "Zechariah Tokar",
      "jobTitle": "SEO Consultant & Freelancer",
      "sameAs": [
        "https://www.linkedin.com/in/zechariah-tokar-167b7672/",
        "https://x.com/ZackTokar"
      ]
    },
    "sameAs": [
      "https://www.linkedin.com/in/zechariah-tokar-167b7672/",
      "https://x.com/ZackTokar"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "zechariah@israelseofreelancer.com",
      "contactType": "Customer Service"
    },
    "priceRange": "$$",
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    }
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};

export const WebSiteSchema: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Israel SEO Freelancer",
    "url": "https://israelseofreelancer.com",
    "description": "Professional SEO services for US businesses from an experienced freelance SEO consultant.",
    "publisher": {
      "@type": "Person",
      "name": "Zechariah Tokar"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://israelseofreelancer.com/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};

interface ServiceSchemaProps {
  serviceName: string;
  description: string;
  priceRange: string;
  url: string;
}

export const ServiceSchema: React.FC<ServiceSchemaProps> = ({
  serviceName,
  description,
  priceRange,
  url
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceName,
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "ProfessionalService",
      "name": "Israel SEO Freelancer - Zechariah Tokar",
      "url": "https://israelseofreelancer.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "url": url,
    "priceRange": priceRange,
    "offers": {
      "@type": "Offer",
      "price": "250",
      "priceCurrency": "USD",
      "name": "SEO Audit",
      "description": "Comprehensive SEO audit and strategy consultation"
    }
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};

export const BreadcrumbSchema: React.FC<{ items: Array<{ name: string; url: string }> }> = ({ items }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};
