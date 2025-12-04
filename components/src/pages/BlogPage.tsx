import { useEffect, useState } from "react";
import { Navbar } from "../../navbar";
import { BlogHeader } from "../../blog/blog-header";
import { BlogPostCard } from "../../blog/blog-post-card";
import { TagFilter } from "../blog/tag-filter";
import { fetchBlogPosts, fetchAllTags } from "../blog/blog-data";
import type { BlogPost } from "../blog/blog-data";

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const p = await fetchBlogPosts();
      const t = await fetchAllTags();

      setPosts(p);
      setTags(t);
      setLoading(false);
    }
    load();
  }, []);

  // Apply tag filter
  const filtered = selectedTag
    ? posts.filter((p) => p.tags?.includes(selectedTag))
    : posts;

  // Convert PocketBase record → UI format
const mappedPosts = filtered.map((p) => ({
  slug: p.slugs || p.id,
  title: p.title,
  excerpt: p.excerpt || p.content?.slice(0, 120) + "...",
  date: new Date(p.created).toLocaleDateString("en-UK", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }),
  readTime: p.readTime || "5 min read",
  category: p.category || "General",
  tags: p.tags ? p.tags.split(",").map((t) => t.trim()) : [],
  content: p.content,
}));

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-16">
        <BlogHeader />

        <section className="px-6 py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            {/* FILTERS */}
            <div className="mb-12">
              <h3 className="mb-4 font-mono text-sm uppercase tracking-wider text-muted-foreground">
                Filter by Topic
              </h3>

              <TagFilter
                tags={tags}
                selectedTag={selectedTag}
                onSelectTag={setSelectedTag}
              />
            </div>

            {/* LOADING */}
            {loading ? (
              <p className="text-muted-foreground">Loading posts...</p>
            ) : (
              <>
                <p className="mb-8 text-muted-foreground">
                  {mappedPosts.length}{" "}
                  {mappedPosts.length === 1 ? "post" : "posts"}
                  {selectedTag && ` tagged "${selectedTag}"`}
                </p>

                {/* POSTS GRID */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {mappedPosts.map((post) => (
                    <BlogPostCard key={post.slug} {...post} />
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
