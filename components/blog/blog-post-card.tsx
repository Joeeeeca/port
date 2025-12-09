import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

// 🔥 The BlogPostCard now expects the PocketBase-mapped structure
export interface BlogPostCardProps {
  slug: string;        // your mapped slug OR id
  title: string;
  excerpt: string;
  date: string;        // formatted date string
  readTime: string;    // "5 min read"
  category: string;    // "General" (fallback)
  tags: string[];      // ["tag1", "tag2"]
}

export function BlogPostCard({
  slug,
  title,
  excerpt,
  date,
  readTime,
  category,
  tags,
}: BlogPostCardProps) {
  return (
    <Link to={`/blog/${slug}`} className="group block">
      <Card className="h-full border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
        
        {/* HEADER */}
        <CardHeader className="pb-3">
          <div className="mb-2 flex items-center gap-3">
            <span className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
              {category}
            </span>

            <span className="text-xs text-muted-foreground">
              {readTime}
            </span>
          </div>

          <h2 className="text-xl font-semibold text-foreground transition-colors group-hover:text-primary text-balance">
            {title}
          </h2>
        </CardHeader>

        {/* CONTENT */}
        <CardContent className="pb-4">
          <p className="mb-4 text-muted-foreground text-pretty">
            {excerpt}
          </p>

          {/* TAGS */}
          <div className="flex flex-wrap gap-1.5">
            {tags?.map((tag) => (
           <span
  key={tag}
  className="
    inline-flex items-center
    rounded-full
    border border-border
    px-2 py-0.5
    font-mono text-xs
    text-muted-foreground
    hover:border-primary hover:text-primary
    transition-colors
  "
>
  {tag}
</span>
            ))}
          </div>
        </CardContent>

        {/* FOOTER */}
        <CardFooter className="pt-0">
          <p className="text-sm text-muted-foreground">
            {date}
          </p>
        </CardFooter>

      </Card>
    </Link>
  );
}
