import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "../../navbar";
import { fetchBlogPost, fetchBlogPosts } from "../blog/blog-data";

// ---- Helpers ------------------------------------------------

function slugifyHeading(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

type UiPost = {
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  tags: string[];
};

// Map PocketBase → UI
function mapRecordToUi(record: any): UiPost {
  const content = String(record.content || "");

  // Inject IDs into <h2>
  const withIds = content.replace(/<h2>(.*?)<\/h2>/g, (match, text) => {
    const id = slugifyHeading(text);
    return `<h2 id="${id}">${text}</h2>`;
  });

  return {
    slug: record.slugs || record.slug || record.id,
    title: record.title,
    content: withIds,
    excerpt: record.excerpt ? String(record.excerpt).trim() : "",
    category: record.category || record.categories || record.type || "General",
    readTime: record.readTime || "5 min read",
    date: new Date(record.created).toLocaleDateString("en-UK", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }),
    tags: record.tags
      ? String(record.tags)
          .split(",")
          .map((t: string) => t.trim())
          .filter(Boolean)
      : [],
  };
}

// ---- Component ----------------------------------------------

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();

  const [post, setPost] = useState<UiPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<UiPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load the post + related posts
  useEffect(() => {
    async function load() {
      if (!slug) return;

      try {
        setLoading(true);
        setError(null);

        const record = await fetchBlogPost(slug);
        if (!record) {
          setError("Post not found");
          return;
        }

        const mapped = mapRecordToUi(record);
        setPost(mapped);

        const allRecords = await fetchBlogPosts();
        const allMapped = allRecords.map(mapRecordToUi);

        const related = allMapped
          .filter((p) => p.slug !== mapped.slug)
          .filter((p) => p.tags.some((tag) => mapped.tags.includes(tag)))
          .slice(0, 3);

        setRelatedPosts(related);
      } catch (err) {
        console.error(err);
        setError("Something went wrong loading this post.");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [slug]);

  // Extract H2 headings for sidebar
  const headings = useMemo(() => {
    if (!post?.content) return [];

    const doc = new DOMParser().parseFromString(post.content, "text/html");
    const h2s = Array.from(doc.querySelectorAll("h2"));

    return h2s.map((h) => h.textContent.trim());
  }, [post]);

  // ---- Render ------------------------------------------------

  if (loading) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24 text-center text-muted-foreground">
          Loading post...
        </div>
      </main>
    );
  }

  if (!post || error) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24 text-center text-muted-foreground">
          {error || "Post not found."}
        </div>
        <div className="mt-4 text-center">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            ← Back to blog
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <article className="pt-16">
        {/* HEADER / HERO */}
        <header className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/10" />
          <div className="relative mx-auto max-w-4xl px-6 py-20 md:py-28">

            {/* Breadcrumbs */}
            <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-primary">Blog</Link>
              <span>/</span>
              <span>{post.category}</span>
            </nav>

            {/* Category */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 font-mono text-sm font-medium text-primary">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="mb-8 text-4xl font-bold md:text-5xl lg:text-6xl">
              {post.title}
            </h1>

            {/* Excerpt */}
            {post.excerpt && (
              <p className="mb-10 max-w-2xl text-xl text-muted-foreground">
                {post.excerpt}
              </p>
            )}

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 border-t border-border pt-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  JC
                </div>
                <div>
                  <p className="font-semibold">JC</p>
                  <p className="text-sm text-muted-foreground">Web Developer</p>
                </div>
              </div>

              <div className="hidden h-8 w-px bg-border md:block" />

              <span className="text-sm text-muted-foreground">{post.date}</span>
              <span className="text-sm text-muted-foreground">{post.readTime}</span>
            </div>
          </div>
        </header>

        {/* MAIN CONTENT + SIDEBAR */}
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_280px]">

            {/* Main content */}
            <div className="min-w-0">
              <div
                className="prose prose-lg prose-slate dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* CTA */}
              <div className="mt-16 rounded-2xl border border-primary/20 p-10 bg-primary/5">
                <h3 className="mb-3 text-xl font-bold">Ready to start your project?</h3>
                <p className="mb-6 text-muted-foreground">
                  If you need a website that actually works for your business, I'm ready.
                </p>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSd1WgbA33GUhJsmRPUL43GUk-WPjyedbvb7iZy0py9uGdWgdw/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90"
                >
                  Start Your Project →
                </a>
              </div>
            </div>

            {/* SIDEBAR */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-8">

                {/* Topics */}
                {post.tags.length > 0 && (
                  <div className="rounded-xl border border-border bg-card p-6">
                    <h3 className="mb-4 font-semibold">Topics</h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <a
                          key={tag}
                          href={`/blog?tag=${encodeURIComponent(tag)}`}
                          className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary hover:bg-primary/20"
                        >
                          {tag}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Headings */}
                {headings.length > 0 && (
                  <div className="rounded-xl border border-border bg-card p-6">
                    <h3 className="mb-4 font-semibold">In this article</h3>
                    <nav className="space-y-2">
                      {headings.map((heading) => {
                        const id = slugifyHeading(heading);
                        return (
                          <a
                            key={id}
                            href={`#${id}`}
                            className="block text-sm text-muted-foreground hover:text-primary"
                          >
                            {heading}
                          </a>
                        );
                      })}
                    </nav>
                  </div>
                )}

                <a
                  href="/blog"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                >
                  ← Back to all articles
                </a>
              </div>
            </aside>
          </div>
        </div>

        {/* CONTINUE READING */}
        {relatedPosts.length > 0 && (
          <section className="border-t border-border bg-muted/30">
            <div className="mx-auto max-w-6xl px-6 py-20">

              <div className="mb-10 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold md:text-3xl">Continue Reading</h2>
                  <p className="text-muted-foreground">More articles you might find helpful</p>
                </div>

                <Link
                  to="/blog"
                  className="hidden md:flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm hover:border-primary hover:text-primary"
                >
                  View all articles →
                </Link>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                {relatedPosts.map((rp) => (
                  <Link
                    key={rp.slug}
                    to={`/blog/${rp.slug}`}
                    className="group flex flex-col rounded-2xl border border-border bg-card p-6 hover:border-primary/50"
                  >
                    <span className="mb-4 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {rp.category}
                    </span>

                    <h3 className="mb-3 text-lg font-semibold leading-snug group-hover:text-primary">
                      {rp.title}
                    </h3>

                    <p className="mb-6 text-sm text-muted-foreground line-clamp-2">{rp.excerpt}</p>

                    <span className="text-xs text-muted-foreground">{rp.readTime}</span>
                  </Link>
                ))}
              </div>

              <Link
                to="/blog"
                className="mt-8 flex md:hidden items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm hover:border-primary hover:text-primary"
              >
                View all articles →
              </Link>
            </div>
          </section>
        )}
      </article>
    </main>
  );
}
