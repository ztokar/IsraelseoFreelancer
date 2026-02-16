#!/usr/bin/env python3
"""
Blog Post Creation Helper
Usage: python scripts/new-blog-post.py --slug="post-slug" --title="Post Title" --category="Category" --read-time="10"
"""

import argparse
import os
import re
from datetime import datetime

def get_next_article_number():
    """Find the next BlogArticle number by checking existing components."""
    components_dir = "components"
    max_num = 0

    for filename in os.listdir(components_dir):
        if filename.startswith("BlogArticle") and filename.endswith(".tsx"):
            match = re.search(r'BlogArticle(\d+)\.tsx', filename)
            if match:
                num = int(match.group(1))
                max_num = max(max_num, num)

    return max_num + 1

def create_component(num, title, category, read_time):
    """Create BlogArticle component from template."""
    with open("scripts/blog-template.tsx", "r", encoding="utf-8") as f:
        template = f.read()

    # Replace placeholders
    component = template.replace("{{NUM}}", str(num))
    component = component.replace("{{TITLE}}", title)
    component = component.replace("{{CATEGORY}}", category)
    component = component.replace("{{DATE}}", datetime.now().strftime("%B %Y"))
    component = component.replace("{{READ_TIME}}", str(read_time))
    # {{CONTENT}} will be filled in manually after creation

    output_path = f"components/BlogArticle{num}.tsx"
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(component)

    return output_path

def update_blog_page(slug, title, excerpt, category, read_time, image):
    """Add new post to BlogPage.tsx blogPosts array."""
    blog_page_path = "components/BlogPage.tsx"

    with open(blog_page_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Create new post entry
    new_post = f"""    {{
      slug: '{slug}',
      title: '{title}',
      excerpt: '{excerpt}',
      date: '{datetime.now().strftime("%B %Y")}',
      readTime: '{read_time} min read',
      category: '{category}',
      image: '/images/{image}',
    }},"""

    # Find the blogPosts array and insert at the beginning (after opening bracket)
    pattern = r'(const blogPosts = \[\n)'
    replacement = r'\1' + new_post + '\n'

    updated_content = re.sub(pattern, replacement, content)

    with open(blog_page_path, "w", encoding="utf-8") as f:
        f.write(updated_content)

    print(f"[OK] Updated BlogPage.tsx")

def update_app_tsx(num, slug):
    """Add import and route to App.tsx."""
    app_path = "App.tsx"

    with open(app_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Add import (find last BlogArticle import and add after it)
    import_pattern = r"(import { BlogArticle\d+ } from './components/BlogArticle\d+';)"
    last_import = None
    for match in re.finditer(import_pattern, content):
        last_import = match

    if last_import:
        import_line = f"import {{ BlogArticle{num} }} from './components/BlogArticle{num}';"
        insert_pos = last_import.end()
        content = content[:insert_pos] + "\n" + import_line + content[insert_pos:]

    # Add route (find first blog route and insert before it)
    route_pattern = r'(\s+<Route path="blog" element={<BlogPage />} />)'
    route_match = re.search(route_pattern, content)

    if route_match:
        route_line = f"""          <Route
            path="blog/{slug}"
            element={{<BlogArticle{num} />}}
          />"""
        # Insert after the blog listing route
        insert_pos = route_match.end()
        content = content[:insert_pos] + "\n" + route_line + content[insert_pos:]

    with open(app_path, "w", encoding="utf-8") as f:
        f.write(content)

    print(f"[OK] Updated App.tsx")

def main():
    parser = argparse.ArgumentParser(description='Create a new blog post')
    parser.add_argument('--slug', required=True, help='URL slug for the post')
    parser.add_argument('--title', required=True, help='Post title')
    parser.add_argument('--category', required=True, help='Post category')
    parser.add_argument('--read-time', type=int, default=10, help='Estimated read time in minutes')
    parser.add_argument('--excerpt', required=True, help='Short excerpt for blog listing')
    parser.add_argument('--image', default='blog-placeholder.jpg', help='Image filename (without path)')

    args = parser.parse_args()

    # Get next article number
    num = get_next_article_number()
    print(f"[INFO] Creating BlogArticle{num}")

    # Create component
    component_path = create_component(num, args.title, args.category, args.read_time)
    print(f"[OK] Created {component_path}")

    # Update BlogPage
    update_blog_page(args.slug, args.title, args.excerpt, args.category, args.read_time, args.image)

    # Update App.tsx
    update_app_tsx(num, args.slug)

    print(f"\n✓ Blog post scaffold created!")
    print(f"  - Component: components/BlogArticle{num}.tsx")
    print(f"  - URL: /blog/{args.slug}")
    print(f"\nNext steps:")
    print(f"  1. Fill in {{{{CONTENT}}}} in BlogArticle{num}.tsx")
    print(f"  2. Generate image: python scripts/generate-blog-image.py {args.slug} \"{args.category}\"")
    print(f"  3. Test locally: npm run dev")
    print(f"  4. Commit and push")

if __name__ == "__main__":
    main()
