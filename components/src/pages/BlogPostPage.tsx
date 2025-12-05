import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Navbar } from "../../navbar";
import { fetchBlogPost, fetchBlogPosts } from "../blog/blog-data";

// ---- Helpers ------------------------------------------------

function stripIndent(str: string) {
  const lines = str.split("\n");
  const nonEmpty = lines.filter((l) => l.trim().length > 0);
  if (!nonEmpty.length) return str;

  const indent = Math.min(...nonEmpty.map((l) => l.search(/\S/)));
  return lines.map((l) => (indent > 0 ? l.slice(indent) : l)).join("\n");
}

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

// Map a PocketBase record into the UI shape we want
function mapRecordToUi(record: any): UiPost {
  return {
    slug: record.slugs || record.slug || record.id,
    title: record.title,
    content: record.content || "",
    excerpt:
      record.excerpt ||
      (record.content ? record.content.slice(0, 140).trim() + "..." : ""),
    category: record.category || "General",
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

  // Load the post + related posts from PocketBase
  useEffect(() => {
    async function load() {
      if (!slug) return;

      try {
        setLoading(true);
        setError(null);

        const record = await fetchBlogPost(slug);
        if (!record) {
          setPost(null);
          setRelatedPosts([]);
          setError("Post not found");
          return;
        }

        const mapped = mapRecordToUi(record);
        setPost(mapped);

        const allRecords = await fetchBlogPosts();
        const allMapped = allRecords.map(mapRecordToUi);

        const related = allMapped
          .filter((p) => p.slug !== mapped.slug)
          .filter((p) =>
            p.tags.some((tag) => mapped.tags.includes(tag))
          )
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

  const cleanedContent = useMemo(
    () => (post ? stripIndent(post.content) : ""),
    [post]
  );

  const headings = useMemo(() => {
    if (!cleanedContent) return [];
    return cleanedContent
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.startsWith("## "))
      .map((line) => line.replace(/^##\s*/, ""));
  }, [cleanedContent]);

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            Back to blog
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
              <Link
                to="/"
                className="transition-colors hover:text-primary"
              >
                Home
              </Link>
              <span className="text-xs">/</span>
              <Link
                to="/blog"
                className="transition-colors hover:text-primary"
              >
                Blog
              </Link>
              <span className="text-xs">/</span>
              <span className="text-foreground">{post.category}</span>
            </nav>

            {/* Category badge */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 font-mono text-sm font-medium text-primary">
                {/* tiny book icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5z" />
                </svg>
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="mb-8 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
              {post.title}
            </h1>

            {/* Excerpt */}
            {post.excerpt && (
              <p className="mb-10 max-w-2xl text-xl leading-relaxed text-muted-foreground text-pretty">
                {post.excerpt}
              </p>
            )}

            {/* Meta bar */}
            <div className="flex flex-wrap items-center gap-6 border-t border-border pt-8">
              {/* Avatar */}
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-bold">
                  JC
                </div>
                <div>
                  <p className="font-semibold text-foreground">JC</p>
                  <p className="text-sm text-muted-foreground">
                    Web Developer
                  </p>
                </div>
              </div>

              <div className="hidden h-8 w-px bg-border md:block" />

              {/* Date */}
              <div className="flex items-center gap-2 text-muted-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span className="text-sm">{post.date}</span>
              </div>

              {/* Read time */}
              <div className="flex items-center gap-2 text-muted-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span className="text-sm">{post.readTime}</span>
              </div>
            </div>
          </div>
        </header>

        {/* MAIN CONTENT + SIDEBAR */}
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
            {/* Main content */}
            <div className="min-w-0">
              <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
                <ReactMarkdown
                  components={{
                    h2: ({ node, ...props }) => {
                      const text = String(props.children ?? "");
                      const id = slugifyHeading(text);
                      return (
                        <h2
                          id={id}
                          {...props}
                          className="mb-6 mt-16 text-2xl font-bold tracking-tight text-foreground first:mt-0 md:text-3xl"
                        />
                      );
                    },
                    p: ({ node, ...props }) => (
                      <p
                        {...props}
                        className="mb-6 text-lg leading-relaxed text-muted-foreground"
                      />
                    ),
                    li: ({ node, ...props }) => (
                      <li
                        {...props}
                        className="mb-2 ml-4 text-lg leading-relaxed text-muted-foreground list-disc marker:text-primary"
                      />
                    ),
                  }}
                >
                  {cleanedContent}
                </ReactMarkdown>
              </div>

              {/* CTA box */}
              <div className="mt-16 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-8 md:p-10">
                <h3 className="mb-3 text-xl font-bold text-foreground">
                  Ready to start your project?
                </h3>
                <p className="mb-6 text-muted-foreground">
                  If you found this helpful and need a website that actually
                  works for your business, I&apos;d love to chat.
                </p>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSd1WgbA33GUhJsmRPUL43GUk-WPjyedbvb7iZy0py9uGdWgdw/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
                >
                  Start Your Project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-8">
                {/* Topics (tags) */}
                {post.tags.length > 0 && (
                  <div className="rounded-xl border border-border bg-card p-6">
                    <h3 className="mb-4 font-semibold text-foreground">
                      Topics
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <a
                          key={tag}
                          href={`/blog?tag=${encodeURIComponent(tag)}`}
                          className="rounded-full bg-muted px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                        >
                          {tag}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* In this article (headings) */}
                {headings.length > 0 && (
                  <div className="rounded-xl border border-border bg-card p-6">
                    <h3 className="mb-4 font-semibold text-foreground">
                      In this article
                    </h3>
                    <nav className="space-y-2">
                      {headings.map((heading) => {
                        const id = slugifyHeading(heading);
                        return (
                          <a
                            key={id}
                            href={`#${id}`}
                            className="block text-sm text-muted-foreground transition-colors hover:text-primary"
                          >
                            {heading}
                          </a>
                        );
                      })}
                    </nav>
                  </div>
                )}

                {/* Back to blog */}
                <a
                  href="/blog"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m12 19-7-7 7-7" />
                    <path d="M19 12H5" />
                  </svg>
                  Back to all articles
                </a>
              </div>
            </aside>
          </div>
        </div>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <section className="border-t border-border bg-muted/30">
            <div className="mx-auto max-w-6xl px-6 py-20">
              <div className="mb-10 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                    Continue Reading
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    More articles you might find helpful
                  </p>
                </div>
                <Link
                  to="/blog"
                  className="hidden items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary md:flex"
                >
                  View all articles
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </Link>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                {relatedPosts.map((rp) => (
                  <Link
                    key={rp.slug}
                    to={`/blog/${rp.slug}`}
                    className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-xl"
                  >
                    <span className="mb-4 inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 font-mono text-xs font-medium text-primary">
                      {rp.category}
                    </span>
                    <h3 className="mb-3 text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                      {rp.title}
                    </h3>
                    <p className="mb-6 line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {rp.excerpt}
                    </p>
                    <div className="flex items-center justify-between border-t border-border pt-4">
                      <span className="text-xs text-muted-foreground">
                        {rp.readTime}
                      </span>
                      <span className="flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                        Read more
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Mobile "View all" button */}
              <Link
                to="/blog"
                className="mt-8 flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary md:hidden"
              >
                View all articles
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </Link>
            </div>
          </section>
        )}
      </article>
    </main>
  );
}
