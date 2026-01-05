// src/blog/blog-data.ts

// -----------------------------
// Types
// -----------------------------
export interface BlogPost {
  slug: string
  title: string
  content: string
  excerpt: string
  created: string
  readTime: string
  category: string
  tags: string[]
}

// -----------------------------
// Static posts (THIS IS YOUR CMS FOR NOW)
// -----------------------------
const posts: BlogPost[] = [
  {
    slug: "why-your-website-isnt-converting",
    title: "Why Your Website Isn’t Converting",
    excerpt:
      "Most business websites fail not because of design, but because of one overlooked issue.",
    content: `
<h3>The real problem</h3>
<p>Most websites focus on looking good instead of guiding users.</p>

<h3>What actually converts</h3>
<p>Clear messaging, strong CTAs, and trust signals.</p>
    `,
    created: "2026-01-08",
    readTime: "6 min read",
    category: "Conversion",
    tags: ["SEO", "Conversion"],
  },
]

// -----------------------------
// Public API (same names as before)
// -----------------------------
export async function fetchBlogPosts(): Promise<BlogPost[]> {
  return posts
}

export async function fetchBlogPost(slug: string): Promise<BlogPost | null> {
  return posts.find((p) => p.slug === slug) ?? null
}

export async function fetchAllTags(): Promise<string[]> {
  const tags = new Set<string>()
  posts.forEach((p) => p.tags.forEach((t) => tags.add(t)))
  return Array.from(tags)
}
