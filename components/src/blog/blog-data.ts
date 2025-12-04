import pb from "../../../lib/pocketbase";

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt?: string;
  tags?: string;
  category?: string;
  readTime?: string;
  slug?: string;
  created: string;
}

/* -----------------------------
   Fetch ALL Blog Posts
----------------------------- */
export async function fetchBlogPosts(): Promise<BlogPost[]> {
  const records = await pb.collection("posts").getFullList({
    sort: "-created",
  });

  return records as unknown as BlogPost[];
}

/* -----------------------------
   Fetch a SINGLE post by slug
----------------------------- */
export async function fetchBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const record = await pb.collection("posts").getFirstListItem(
      pb.filter(`slug="${slug}"`)
    );

    return record as unknown as BlogPost;
  } catch (err) {
    return null;
  }
}

/* -----------------------------
   Get all tags (for blog filter)
----------------------------- */
export async function fetchAllTags(): Promise<string[]> {
  const posts = await fetchBlogPosts();

  const tagSet = new Set<string>();

  posts.forEach((p) => {
    if (p.tags) {
      p.tags.split(",").forEach((t) => tagSet.add(t.trim()));
    }
  });

  return [...tagSet];
}
