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
    slug: "what-makes-a-good-website",
    title: "What Actually Makes a Good Website?",
    excerpt:
      "It's not just about looking pretty. I break down the key elements that separate an okay website from one that actually converts visitors into customers.",
    content: `
<h3>More Than Just Pretty</h3>
<p>A lot of people think a good website is just about looking nice. And while aesthetics matter, they're only part of the equation. A truly good website is one that achieves your business goals — whether that's getting enquiries, selling products, or building trust.</p>

<h3>Clear Purpose</h3>
<p>Every page should have a clear purpose. What do you want visitors to do? Call you? Fill out a form? Buy something? A good website guides visitors toward that action without making them think too hard.</p>

<h3>Fast Loading Times</h3>
<p>Speed matters more than you think. Studies show that 53% of mobile users leave a site that takes longer than 3 seconds to load. A good website is optimised for performance — compressed images, clean code, and fast hosting.</p>

<h3>Mobile-First Design</h3>
<p>More than half of web traffic comes from mobile devices. If your site doesn't work beautifully on a phone, you're losing customers. Good websites are designed mobile-first, then enhanced for larger screens.</p>

<h3>Easy Navigation</h3>

<p>Visitors should be able to find what they're looking for in seconds. Simple, intuitive navigation keeps people on your site longer and reduces frustration. If they can't find it, they'll leave.</p>

<h3>Trust Signals</h3>

<p>Testimonials, reviews, certifications, and professional photos all build trust. A good website strategically places these elements to reassure visitors that you're the real deal.</p>

<h3>Accessibility</h3>

<p>A good website works for everyone, including people with disabilities. Proper contrast, alt text for images, and keyboard navigation aren't just nice to have — they're essential.</p>

<h3>The Takeaway</h3>

<p>A good website isn't about flashy animations or trendy designs. It's about clarity, speed, and purpose. It's about making it easy for visitors to become customers.</p>
    `,
    created: "2026-01-02",
    readTime: "7 min read",
    category: "Web Design",
    tags: ["Web Design", "Conversions", "UX"],
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
