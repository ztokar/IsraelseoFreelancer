# Blog Management Guide

## Adding New Blog Posts

### Step 1: Create the Article Content

1. Use the `/seo-content-writing` skill to generate SEO-optimized content
2. Save the content as a new component in `components/`
3. Example: `components/BlogArticle2.tsx`

### Step 2: Add to Blog Listing

Edit `components/BlogPage.tsx` and add to the `blogPosts` array:

```typescript
const blogPosts = [
  {
    slug: 'your-new-article-slug',
    title: 'Your Article Title',
    excerpt: 'Brief description of the article (2-3 sentences)',
    date: 'Month Year',
    readTime: 'X min read',
    category: 'Category Name',
    image: '/images/blog-your-image.jpg',
  },
  // ... existing posts
];
```

### Step 3: Add Route

Edit `App.tsx` and add a new route:

```typescript
<Route
  path="blog/your-new-article-slug"
  element={<YourNewArticleComponent />}
/>
```

### Step 4: Create Header Image

Option A - Use existing image:
```bash
cp public/images/service-b2b-seo.jpg public/images/blog-your-image.jpg
```

Option B - Generate with Gemini:
```bash
/gemini-imagegen Create [your image description], 16:9 ratio, 2K resolution
```

### Step 5: Internal Linking

Make sure to:
- Link to relevant service pages
- Link from service pages back to blog articles
- Cross-link between related blog articles
- Use anchor text with target keywords

## Blog Post Template

Copy this structure for consistency:

```typescript
export const YourArticleComponent: React.FC = () => {
  useEffect(() => {
    document.title = 'Your Title | Israel SEO Freelancer Blog';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-fade-in-up">
      {/* Header section with category badge, title, date */}

      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Your content here */}
          </div>

          {/* Related Services section */}
        </div>
      </article>
    </div>
  );
};
```

## SEO Checklist for Each Post

- [ ] Title under 60 characters
- [ ] Primary keyword in title, H1, first 100 words
- [ ] Clear H2/H3 structure
- [ ] URL slug is keyword-rich and clean
- [ ] 3-5 internal links to service pages
- [ ] Author reference section included
- [ ] CTA to audit or service page
- [ ] Image optimized (<500KB)
- [ ] Content length 3,000-5,000 words
- [ ] Personal voice with "I've" statements
- [ ] Specific examples and metrics
- [ ] AI detection score <15% (or close)

## Content Ideas (Future Posts)

### B2B SEO Topics:
1. "How to Build a B2B SEO Strategy That Actually Generates Pipeline"
2. "Bottom-of-Funnel SEO: The Only B2B Content That Matters"
3. "B2B SaaS SEO: Why Your Blog Strategy Is Failing"
4. "Pricing Page SEO: The Most Underrated B2B Lead Generator"
5. "AI Search Optimization for B2B Companies (ChatGPT, Perplexity, Google AI)"

### Technical SEO Topics:
6. "Technical SEO Audit Checklist for B2B Websites"
7. "Schema Markup for B2B SaaS: What Actually Works"
8. "Core Web Vitals Optimization for B2B Sites"

### Strategy Topics:
9. "How Israeli Tech Companies Can Win US Search Rankings"
10. "SEO vs PPC for B2B: When to Choose What"
11. "Building Topical Authority in Niche B2B Markets"

### Case Study Topics:
12. "How We Ranked a SaaS Company for 'Enterprise [Solution]' in 4 Months"
13. "From Zero to 50 Qualified Leads Per Month: A B2B SEO Case Study"

## Keyword Research Process

1. Start with buyer personas
2. Map persona to search intent stages
3. Prioritize BOFU keywords (even with low volume)
4. Use Keywords Everywhere + Moz for data
5. Check competitor rankings
6. Verify keyword intent matches content type

## Internal Linking Strategy

### Hub Pages (Service Pages):
- `/b2b-seo-company` - Hub for B2B SEO content
- `/seoconsulting` - Hub for strategy content
- `/freelance-seo-israel` - Hub for execution content
- `/content-marketing-for-seo` - Hub for content strategy

### Link Flow:
```
Blog Article
  ├─> Service Page (relevant offering)
  ├─> Other Blog Articles (related topics)
  └─> CTA to Audit/Contact

Service Page
  ├─> Related Blog Articles (education/proof)
  └─> CTA to Contact
```

## Publishing Workflow

1. **Draft** - Write content with SEO content skill
2. **Review** - Check SEO checklist
3. **Test AI Detection** - Use https://dejan.ai/tools/ai-detection/
4. **Humanize** - If >15%, add personal voice, specific examples
5. **Internal Links** - Add 3-5 contextual links
6. **Images** - Create/optimize header image
7. **Deploy** - Commit and push to production
8. **Monitor** - Track rankings, traffic, conversions

## Analytics to Track

### Per Article:
- Organic traffic (Google Analytics)
- Average time on page
- Bounce rate
- Scroll depth
- CTA click rate
- Demo requests attributed

### Overall Blog:
- Total organic blog traffic
- Keywords ranking (positions 1-10)
- Backlinks earned
- Social shares
- Email signups from blog
- Pipeline influenced by blog content

## Maintenance

### Monthly:
- [ ] Update date on evergreen posts
- [ ] Fix broken links
- [ ] Update statistics/examples
- [ ] Refresh images if needed
- [ ] Check keyword rankings

### Quarterly:
- [ ] Content audit (remove underperforming posts)
- [ ] Refresh top-performing posts
- [ ] Add new internal links from new content
- [ ] Update author bio if needed

---

**Last Updated:** February 8, 2026
