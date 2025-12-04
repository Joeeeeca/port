import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Navbar } from "../../navbar";
import { fetchBlogPost, fetchBlogPosts } from "../blog/blog-data";

export default function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState<any>(null);
  const [related, setRelated] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      if (!slug) return;

      const found = await fetchBlogPost(slug);
      if (!found) return;

      // Map PB post → UI
      const mapped = {
        slug: found.slugs || found.id,
        title: found.title,
        content: found.content,
        excerpt: found.excerpt,
        category: found.category || "General",
        readTime: found.readTime || "5 min read",
        tags: found.tags ? found.tags.split(",").map((t) => t.trim()) : [],
        date: new Date(found.created).toLocaleDateString("en-UK", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
      };

      setPost(mapped);

      // Related posts
      const all = await fetchBlogPosts();
      const relatedPosts = all
        .filter((p) => p.slugs !== slug)
        .filter((p) =>
          p.tags?.split(",").some((t) => mapped.tags.includes(t.trim()))
        )
        .slice(0, 3)
        .map((p) => ({
          slug: p.slugs || p.id,
          title: p.title,
          excerpt: p.excerpt || p.content.slice(0, 100),
          category: p.category || "General",
          tags: p.tags ? p.tags.split(",").map((t) => t.trim()) : [],
        }));

      setRelated(relatedPosts);
      setLoading(false);
    }

    load();
  }, [slug]);

  if (!post) return <p className="pt-20 text-center">Post not found.</p>;
  if (loading) return <p className="pt-20 text-center">Loading...</p>;

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-16">
        <header className="border-b border-border px-6 py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <span className="rounded-full bg-primary/10 px-4 py-1.5 font-mono text-sm text-primary">
              {post.category}
            </span>

            <h1 className="mt-6 mb-4 text-4xl font-bold">{post.title}</h1>
            <p className="text-muted-foreground">{post.date}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map((tag: string) => (
                <Link
                  key={tag}
                  to={`/blog?tag=${tag}`}
                  className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        </header>

        <article className="px-6 py-16">
          <div className="prose prose-lg mx-auto max-w-3xl dark:prose-invert">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </article>

        {/* RELATED */}
        {related.length > 0 && (
          <section className="border-t border-border px-6 py-16">
            <div className="mx-auto max-w-5xl">
              <h2 className="mb-8 text-2xl font-bold">Related Posts</h2>

              <div className="grid gap-6 md:grid-cols-3">
                {related.map((rp) => (
                  <Link
                    key={rp.slug}
                    to={`/blog/${rp.slug}`}
                    className="group rounded-xl border p-6 hover:border-primary/50"
                  >
                    <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs text-primary mb-3">
                      {rp.category}
                    </span>

                    <h3 className="font-semibold group-hover:text-primary">
                      {rp.title}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      {rp.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="border-t border-border px-6 py-12">
          <div className="mx-auto max-w-3xl">
            <Link
              to="/blog"
              className="text-muted-foreground hover:text-primary"
            >
              ← Back to Blog
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
