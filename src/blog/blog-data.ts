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
{
slug: "why-every-small-business-needs-a-website",
title: "Why Every Small Business Needs a Website in 2026",
excerpt:"In today's digital world, having a professional website isn't optional — it's essential. Here's why your small business can't afford to skip it.",
content: `
<h3>The Digital Storefront</h3>

<p>In 2024, your website is often the first impression potential customers have of your business. Before they ever walk through your door or pick up the phone, they're Googling you. And if you don't show up — or worse, if your site looks outdated — you've already lost them.</p>

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
created:"2026-01-09",
readTime:"5 min read",
category:"Business",
tags:["Small Business", "Marketing", "Getting Started"],
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
