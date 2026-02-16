#!/usr/bin/env python3
"""
Blog Image Generation Helper
Usage: python scripts/generate-blog-image.py <slug> "<category>" "<prompt-description>"
Example: python scripts/generate-blog-image.py cybersecurity-seo "Cybersecurity SEO" "Israeli cybersecurity companies competing globally"
"""

import os
import sys
from google import genai
from google.genai import types

def generate_blog_image(slug, category, description=""):
    """Generate a professional blog header image."""

    # Load API key from .env
    from dotenv import load_dotenv
    load_dotenv()

    api_key = os.getenv("GEMINI_API_KEY")
    if not api_key:
        print("[ERROR] GEMINI_API_KEY not found in .env file")
        sys.exit(1)

    client = genai.Client(api_key=api_key)

    # Build prompt based on category
    base_prompt = f"""Create a professional, modern illustration for a B2B tech blog header about {description or category}.

Visual elements to include:
- Tech/B2B symbols relevant to {category}
- Professional data visualizations, charts, growth indicators
- Global connectivity or enterprise themes
- Clean, modern design aesthetic

Style requirements:
- Clean, minimalist design with plenty of negative space
- Professional B2B tech aesthetic (think Stripe, Notion, Linear)
- Color palette: deep blues, teals, light blues, white/light gray backgrounds
- Modern flat design with subtle gradients
- Professional illustration style - NOT cartoon, NOT stock photo
- Sophisticated, enterprise-grade visual language

Technical specs:
- 16:9 aspect ratio for blog header
- High quality, crisp details
- Suitable for web display at 1200px wide

Overall mood: Professional, tech-forward, B2B, authoritative"""

    print(f"[INFO] Generating image for: {category}")
    print(f"[INFO] Slug: {slug}")

    # Generate image
    response = client.models.generate_content(
        model="gemini-3-pro-image-preview",
        contents=[base_prompt],
        config=types.GenerateContentConfig(
            response_modalities=['TEXT', 'IMAGE'],
            image_config=types.ImageConfig(
                aspect_ratio="16:9",
                image_size="2K"
            ),
        ),
    )

    # Save image
    output_path = f"public/images/blog-{slug}.jpg"

    for part in response.parts:
        if part.text:
            print(f"[INFO] Description: {part.text}")
        elif part.inline_data:
            image = part.as_image()
            image.save(output_path)
            file_size = os.path.getsize(output_path)
            print(f"[OK] Image saved to: {output_path}")
            print(f"[OK] File size: {file_size:,} bytes")
            return output_path

    print("[ERROR] No image generated")
    sys.exit(1)

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python scripts/generate-blog-image.py <slug> <category> [description]")
        print('Example: python scripts/generate-blog-image.py fintech-seo "FinTech SEO" "Israeli FinTech companies"')
        sys.exit(1)

    slug = sys.argv[1]
    category = sys.argv[2]
    description = sys.argv[3] if len(sys.argv) > 3 else ""

    generate_blog_image(slug, category, description)
