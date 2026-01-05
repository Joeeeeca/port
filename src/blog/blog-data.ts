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
    slug: "why-every-small-business-needs-a-website",
    title: "Why Every Small Business Needs a Website in 2026",
    excerpt:
      "In today's digital world, having a professional website isn't optional — it's essential. Here's why your small business can't afford to skip it.",
    content: `
<h3>The Digital Storefront</h3>
<p>In 2026, your website is often the first impression potential customers have of your business. Before they ever walk through your door or pick up the phone, they're Googling you. And if you don't show up — or worse, if your site looks outdated — you've already lost them.</p>

<h3>Credibility and Trust</h3>
<p>A professional website instantly builds credibility. Think about it: when was the last time you trusted a business that didn't have a website? Customers expect to find you online, and a clean, modern site signals that you're legitimate, professional, and here to stay.</p>

<h3>Available 24/7</h3>
<p>Unlike a physical location, your website never closes. It's working for you around the clock — answering questions, showcasing your services, and capturing leads while you sleep. That's powerful.</p>

<h3>Your Competitors Already Have One</h3>
<p>If your competitors have websites and you don't, guess who's getting the business? Even a simple site puts you in the game and gives potential customers a reason to choose you over the competition.</p>

<h3>Cost-Effective Marketing</h3>

<p>Compared to traditional advertising, a website is incredibly cost-effective. Once it's built, it continues to work for you with minimal ongoing costs. Add some basic SEO, and you've got a marketing machine that attracts customers organically.</p>

<h3>The Bottom Line</h3>

<p>A website isn't just a nice-to-have anymore — it's essential infrastructure for any business that wants to grow. If you're ready to establish your online presence, I'd love to help you get started.</p>
    `,
    created: "2026-01-02",
    readTime: "5 min read",
    category: "Business",
    tags: ["Small Business", "Marketing", "Getting Started"],
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
