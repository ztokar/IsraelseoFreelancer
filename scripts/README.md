# Blog Post Creation Scripts

Automation tools for creating blog posts faster and more consistently.

## Setup (One-Time)

Install python-dotenv if not already installed:
```bash
pip install python-dotenv
```

The `.env` file with `GEMINI_API_KEY` is already set up.

## Quick Start - Create a New Blog Post

### Step 1: Generate Image First (Fail Fast)
```bash
python scripts/generate-blog-image.py "your-slug" "Category" "Brief description"
```

**Example:**
```bash
python scripts/generate-blog-image.py "fintech-seo" "FinTech SEO" "Israeli FinTech companies targeting US markets"
```

This creates: `public/images/blog-your-slug.jpg`

### Step 2: Create Blog Post Scaffold
```bash
python scripts/new-blog-post.py \
  --slug="your-slug" \
  --title="Your Full Title Here" \
  --category="Category" \
  --read-time=10 \
  --excerpt="Short excerpt for blog listing page" \
  --image="blog-your-slug.jpg"
```

**Example:**
```bash
python scripts/new-blog-post.py \
  --slug="fintech-seo" \
  --title="SEO for Israeli FinTech Companies Competing Globally" \
  --category="FinTech SEO" \
  --read-time=11 \
  --excerpt="Israeli FinTech companies face unique challenges competing in US markets. Learn the SEO strategies that actually work." \
  --image="blog-fintech-seo.jpg"
```

This creates:
- `components/BlogArticleN.tsx` (auto-incremented)
- Updates `components/BlogPage.tsx` (adds to blog listing)
- Updates `App.tsx` (adds import and route)

### Step 3: Fill in Content

Open the created `BlogArticleN.tsx` file and replace `{{CONTENT}}` with your blog post HTML content.

### Step 4: Test Locally
```bash
npm run dev
```

Visit: `http://localhost:5173/blog/your-slug`

### Step 5: Commit and Push
```bash
git add .
git commit -m "Add [title] blog post"
git push origin main
```

---

## Manual Workflow (If Scripts Don't Work)

### 1. Generate Image
```bash
cd ~/IsraelseoFreelancer
python scripts/generate-blog-image.py "slug" "Category" "description"
```

### 2. Create Component Manually
- Copy `scripts/blog-template.tsx`
- Rename to `components/BlogArticleN.tsx` (increment N)
- Replace all `{{PLACEHOLDERS}}`

### 3. Update BlogPage.tsx
- Add new entry at TOP of `blogPosts` array

### 4. Update App.tsx
- Add import: `import { BlogArticleN } from './components/BlogArticleN';`
- Add route: `<Route path="blog/slug" element={<BlogArticleN />} />`

---

## What Each Script Does

### `generate-blog-image.py`
- Generates professional 16:9 blog header image
- Uses Gemini API with your API key from `.env`
- Saves to `public/images/blog-{slug}.jpg`
- 2K resolution, optimized for web

### `new-blog-post.py`
- Auto-increments BlogArticle component number
- Creates component from template
- Updates BlogPage.tsx with new post entry
- Updates App.tsx with import and route
- Handles all string escaping and formatting

### `blog-template.tsx`
- Template for BlogArticle components
- Contains all standard boilerplate
- Uses placeholders for customization

---

## Troubleshooting

### "GEMINI_API_KEY not found"
Make sure `.env` file exists in project root with:
```
GEMINI_API_KEY=your-key-here
```

### "ModuleNotFoundError: No module named 'dotenv'"
Install python-dotenv:
```bash
pip install python-dotenv
```

### "ModuleNotFoundError: No module named 'google'"
Install Gemini SDK:
```bash
pip install google-genai
```

### Scripts don't run on Windows
Use `python3` instead of `python` if needed:
```bash
python3 scripts/new-blog-post.py ...
```

---

## Time Savings

| Task | Manual | With Scripts | Time Saved |
|------|--------|--------------|------------|
| Image generation | 2-3 min | 1 min | 1-2 min |
| Component creation | 3-4 min | 30 sec | 2-3 min |
| BlogPage update | 1-2 min | 0 sec (auto) | 1-2 min |
| App.tsx update | 1-2 min | 0 sec (auto) | 1-2 min |
| **Total per post** | **15-20 min** | **5-8 min** | **~10 min** |

---

## Future Improvements

- [ ] Auto-generate slug from title
- [ ] Auto-calculate read time from word count
- [ ] Suggest internal links based on content
- [ ] Preview command that opens browser
- [ ] One-command workflow that does everything
