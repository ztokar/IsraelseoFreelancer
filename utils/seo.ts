/**
 * Updates page-level SEO meta tags for SPA navigation.
 * Call in useEffect on each page/article component.
 */
export function updatePageSEO({
  title,
  description,
  path,
  image,
  type = 'website',
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
}) {
  const baseUrl = 'https://israelseofreelancer.com';
  const fullUrl = `${baseUrl}${path}`;
  const ogImage = image ? `${baseUrl}${image}` : `${baseUrl}/images/hero-seo-growth.jpg`;

  document.title = title;

  const updateMeta = (selector: string, value: string) => {
    const el = document.querySelector(selector);
    if (el) el.setAttribute('content', value);
  };

  const updateLink = (selector: string, attr: string, value: string) => {
    const el = document.querySelector(selector);
    if (el) el.setAttribute(attr, value);
  };

  // Standard meta
  updateMeta('meta[name="description"]', description);

  // Canonical
  updateLink('link[rel="canonical"]', 'href', fullUrl);

  // Open Graph
  updateMeta('meta[property="og:title"]', title);
  updateMeta('meta[property="og:description"]', description);
  updateMeta('meta[property="og:url"]', fullUrl);
  updateMeta('meta[property="og:type"]', type);
  updateMeta('meta[property="og:image"]', ogImage);

  // Twitter
  updateMeta('meta[name="twitter:title"]', title);
  updateMeta('meta[name="twitter:description"]', description);
  updateMeta('meta[name="twitter:image"]', ogImage);
}
