import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "../../navbar";
import { fetchBlogPost, fetchBlogPosts } from "../blog/blog-data";
import { motion } from "framer-motion";

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

  // Inject IDs into <h2> for potential future ToC / deep links
  const withIds = content.replace(/<h2>(.*?)<\/h2>/g, (match, text) => {
    const id = slugifyHeading(text);
    return `<h2 id="${id}">${text}</h2>`;
  });

  return {
    slug: record.slugs || record.slug || record.id,
    title: record.title,
    content: withIds,
    excerpt: record.excerpt ? String(record.excerpt).trim() : "",
    category: record.category || record.categories || record.type || "Business",
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

  // In case you want headings later (kept but unused for now)
  const headings = useMemo(() => {
    if (!post?.content) return [];

    const matches = post.content.match(/<h2[^>]*>(.*?)<\/h2>/g) || [];
    return matches.map((h) => h.replace(/<[^>]+>/g, "").trim());
  }, [post]);

  // ---- Render ------------------------------------------------

  if (loading) {
    return (
      <main className="min-h-screen bg-background text-foreground">
        <Navbar />
        <div className="pt-32 text-center text-muted-foreground">
          Loading post...
        </div>
      </main>
    );
  }

  if (!post || error) {
    return (
      <main className="min-h-screen bg-background text-foreground">
        <Navbar />
        <div className="pt-32 text-center text-muted-foreground">
          {error || "Post not found."}
        </div>
        <div className="mt-4 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            ← Back to blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <article className="pt-16">
        {/* HERO / HEADER ------------------------------------------------ */}
        <header className="relative overflow-hidden border-b border-border">
          {/* soft gradient background */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-primary/5" />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative mx-auto flex max-w-5xl flex-col gap-8 px-6 py-20 md:py-28"
          >
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary">
                Home
              </Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-primary">
                Blog
              </Link>
              <span>/</span>
              <span className="text-foreground">{post.category}</span>
            </nav>

            {/* Category + meta top line */}
            <div className="flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-primary">
                {post.category}
              </span>
              <span className="hidden h-4 w-px bg-border md:block" />
              <span className="text-xs text-muted-foreground md:text-sm">
                {post.readTime}
              </span>
            </div>

            {/* Title */}
            <div className="space-y-6">
              <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
                {post.title}
              </h1>

              {post.excerpt && (
                <p className="max-w-3xl text-lg text-muted-foreground md:text-xl">
                  {post.excerpt}
                </p>
              )}
            </div>

            {/* Author + meta row */}
            <div className="mt-4 flex flex-wrap items-center gap-6 border-t border-border pt-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-semibold text-primary-foreground">
                  JC
                </div>
                <div>
                  <p className="text-sm font-semibold md:text-base">JC</p>
                  <p className="text-xs text-muted-foreground md:text-sm">
                    Web Developer
                  </p>
                </div>
              </div>

              <span className="hidden h-8 w-px bg-border md:block" />

              <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground md:text-sm">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>

              <div className="ml-auto">
                <button className="inline-flex items-center gap-1 rounded-full border border-border px-4 py-1.5 text-xs text-muted-foreground transition hover:border-primary hover:text-primary">
                  <span>Share</span>
                  <span className="text-xs">↗</span>
                </button>
              </div>
            </div>
          </motion.div>
        </header>

        {/* BODY + SIDEBAR ----------------------------------------------- */}
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_280px]">
            {/* Main content */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
              className="min-w-0"
            >
              <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* CTA */}
              <div className="blog-cta mt-16 rounded-2xl border border-primary/25 bg-primary/5 p-8 md:p-10">
                <h3 className="mb-3 text-xl font-semibold md:text-2xl">
                  Ready to start your project?
                </h3>
                <p className="mb-6 max-w-xl text-sm text-muted-foreground md:text-base">
                  If you need a website that actually works for your business,
                  I'm ready to help.
                </p>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSd1WgbA33GUhJsmRPUL43GUk-WPjyedbvb7iZy0py9uGdWgdw/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition hover:bg-primary/90 hover:shadow-md"
                >
                  Start Your Project
                  <span>→</span>
                </a>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
              className="hidden lg:block"
            >
              <div className="sticky top-28 space-y-6">
                {/* Topics */}
                {post.tags.length > 0 && (
                  <div className="rounded-2xl border border-border bg-card/80 p-6 backdrop-blur">
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                      Topics
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Link
                          key={tag}
                          to={`/blog?tag=${encodeURIComponent(tag)}`}
                          className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary transition hover:bg-primary/20"
                        >
                          {tag}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Back link */}
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground transition hover:text-primary"
                >
                  ← Back to all articles
                </Link>
              </div>
            </motion.aside>
          </div>
        </section>

        {/* CONTINUE READING --------------------------------------------- */}
        {relatedPosts.length > 0 && (
          <section className="border-t border-border bg-muted/10">
            <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
              <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold md:text-3xl">
                    Continue Reading
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    More articles you might find helpful.
                  </p>
                </div>

                <Link
                  to="/blog"
                  className="hidden items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-medium text-muted-foreground transition hover:border-primary hover:text-primary md:inline-flex"
                >
                  View all articles →
                </Link>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                {relatedPosts.map((rp, index) => (
                  <motion.div
                    key={rp.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.35,
                      delay: 0.1 + index * 0.06,
                      ease: "easeOut",
                    }}
                  >
                    <Link
                      to={`/blog/${rp.slug}`}
                      className="group flex h-full flex-col rounded-2xl border border-border bg-card/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/60 hover:shadow-md"
                    >
                      <span className="mb-3 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {rp.category}
                      </span>

                      <h3 className="mb-2 text-base font-semibold leading-snug group-hover:text-primary">
                        {rp.title}
                      </h3>

                      {rp.excerpt && (
                        <p className="mb-5 line-clamp-3 text-xs text-muted-foreground">
                          {rp.excerpt}
                        </p>
                      )}

                      <span className="mt-auto text-xs text-muted-foreground">
                        {rp.readTime}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <Link
                to="/blog"
                className="mt-8 flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-xs font-medium text-muted-foreground transition hover:border-primary hover:text-primary md:hidden"
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
