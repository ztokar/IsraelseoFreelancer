# Integration Guide: Testimonials & YouTube Videos

## 1. Testimonials Carousel

### Add to HomePage

```tsx
// In components/HomePage.tsx
import { TestimonialsCarousel } from './TestimonialsCarousel';

// Add this section anywhere in your HomePage (recommended after case studies):
<section className="py-24 bg-gradient-to-br from-slate-50 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <TestimonialsCarousel />
  </div>
</section>
```

### Add to ServicePage

```tsx
// In components/ServicePage.tsx
import { TestimonialsCarousel } from './TestimonialsCarousel';

// Add before the final CTA section:
<section className="py-20 bg-slate-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <TestimonialsCarousel autoPlayInterval={8000} />
  </div>
</section>
```

### Add to Layout (Global Footer)

```tsx
// In components/Layout.tsx - add before the footer
<section className="py-24 bg-white border-t border-slate-200">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <TestimonialsCarousel />
  </div>
</section>
```

## 2. YouTube Videos in Blog Posts

### Single Video Embed

```tsx
// In components/BlogArticle.tsx
import { YouTubeEmbed } from './YouTubeEmbed';

// Add in your article content:
<div className="my-12">
  <YouTubeEmbed
    videoId="YOUR_VIDEO_ID_HERE"
    title="SEO Strategy Explained"
  />
  <p className="text-sm text-slate-500 mt-3 text-center italic">
    Watch: How to build an SEO pipeline for B2B companies
  </p>
</div>
```

### Video Card with Thumbnail

```tsx
import { VideoCard } from './YouTubeEmbed';

<VideoCard
  videoId="YOUR_VIDEO_ID"
  title="Israel B2B SEO: Complete Strategy Guide"
  description="Learn how Israeli companies can dominate US search results with strategic SEO planning."
  duration="15:42"
  publishDate="February 2026"
/>
```

### Video Grid (Multiple Videos)

```tsx
import { VideoGrid } from './YouTubeEmbed';

const relatedVideos = [
  {
    videoId: "VIDEO_ID_1",
    title: "Keyword Research for B2B",
    description: "Find high-intent keywords...",
    duration: "12:34",
  },
  {
    videoId: "VIDEO_ID_2",
    title: "Technical SEO Checklist",
    description: "Core technical optimizations...",
    duration: "18:22",
  },
  {
    videoId: "VIDEO_ID_3",
    title: "Content Strategy Framework",
    description: "Build content that converts...",
    duration: "22:15",
  },
];

// In your blog page:
<section className="my-16">
  <h2 className="text-3xl font-bold text-slate-900 mb-8">Related Videos</h2>
  <VideoGrid videos={relatedVideos} columns={3} />
</section>
```

## 3. Finding YouTube Video IDs

To get the video ID from a YouTube URL:

- From: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- Extract: `dQw4w9WgXcQ`

Or from short URLs:
- From: `https://youtu.be/dQw4w9WgXcQ`
- Extract: `dQw4w9WgXcQ`

## 4. Recommended Placements

### HomePage
```tsx
Structure:
1. Hero Section
2. Stats Bar
3. Services Grid
4. **Testimonials Carousel** ← Add here
5. Case Studies
6. Tools Section
7. CTA Section
```

### ServicePage
```tsx
Structure:
1. Hero
2. Features
3. Process
4. **Testimonials Carousel** ← Add here
5. CTA
```

### BlogArticle
```tsx
Structure:
1. Hero/Title
2. Introduction
3. **Video Embed** ← Add in content sections
4. Content Sections
5. **Related Videos Grid** ← Add at end
6. CTA
```

## 5. Customization Options

### Testimonials Carousel

```tsx
<TestimonialsCarousel
  autoPlayInterval={8000}  // Change auto-rotation speed (ms)
  className="py-16"         // Add custom spacing
/>
```

### YouTube Components

```tsx
// Basic embed
<YouTubeEmbed videoId="abc123" />

// Autoplay (use sparingly)
<YouTubeEmbed videoId="abc123" autoplay />

// With custom styling
<YouTubeEmbed
  videoId="abc123"
  className="max-w-3xl mx-auto"
/>

// Video card with all metadata
<VideoCard
  videoId="abc123"
  title="Video Title"
  description="Video description..."
  thumbnail="custom-thumbnail.jpg"  // Optional custom thumbnail
  duration="10:25"
  publishDate="Feb 2026"
/>
```

## 6. Performance Tips

1. **Lazy Loading**: Videos only load iframe when played (VideoCard component)
2. **Thumbnails**: Use YouTube's default thumbnails (automatic)
3. **Responsive**: All components are fully responsive
4. **Accessibility**: Proper ARIA labels and keyboard navigation included

## 7. Next Steps

1. Add testimonials to HomePage (recommended first)
2. Get video IDs from your YouTube channel
3. Add video embeds to blog posts
4. Test on mobile devices
5. Consider adding more videos as you publish content
