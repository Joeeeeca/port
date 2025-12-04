import pb from "../../../lib/pocketbase";

// -----------------------------
// Types
// -----------------------------
export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt?: string;
  created: string;
  readTime?: string;
  category?: string;
  tags?: string;
  slugs?: string;   // ✅ slug field from PB
}

// -----------------------------
// Fetch ALL posts
// -----------------------------
export async function fetchBlogPosts(): Promise<BlogPost[]> {
  const records = await pb.collection("posts").getFullList({
    sort: "-created",
  });

  return records as unknown as BlogPost[];
}

// -----------------------------
// Fetch SINGLE post by slug
// -----------------------------
export async function fetchBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const record = await pb
      .collection("posts")
      .getFirstListItem(`slugs="${slug}"`);

    return record as unknown as BlogPost;
  } catch (err) {
    console.error("Post not found:", slug);
    return null;
  }
}

// -----------------------------
// Fetch all TAGS from PB
// -----------------------------
export async function fetchAllTags(): Promise<string[]> {
  const posts = await fetchBlogPosts();

  const tags = new Set<string>();

  posts.forEach((p) => {
    if (!p.tags) return;
    p.tags.split(",").forEach((t) => tags.add(t.trim()));
  });

  return Array.from(tags);
}
