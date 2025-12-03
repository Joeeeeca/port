// components/src/blog/blog-data.ts
import pb from "../../../lib/pocketbase"; 
// adjust path *if needed* depending on your folder layout

export interface BlogPost {
  id: string;
  slug: string; 
  title: string;
  excerpt?: string;
  content: string;
  created: string;
  category?: string;
  readTime?: string;
  tags?: string;
  coverImage?: string;
}

// Fetch ALL posts from PocketBase
export async function fetchBlogPosts(): Promise<BlogPost[]> {
  const records = await pb.collection("posts").getFullList({
    sort: "-created",
  });

  return records as unknown as BlogPost[];
}

// Fetch ALL unique tags
export async function fetchAllTags(): Promise<string[]> {
  const posts = await fetchBlogPosts();

  const set = new Set<string>();

  posts.forEach((p) => {
    if (p.tags) {
      p.tags.split(",").forEach((t) => set.add(t.trim()));
    }
  });

  return Array.from(set);
}

// Fetch ONE post by slug
export async function fetchBlogPost(slug: string): Promise<BlogPost | null> {
  const posts = await fetchBlogPosts();
  return posts.find((p) => p.slug === slug) ?? null;
}
