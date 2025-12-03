import { cn } from "../../../lib/utils";

interface TagFilterProps {
  tags: string[];
  selectedTag: string | null;
  onSelectTag: (tag: string | null) => void;
}

export function TagFilter({ tags, selectedTag, onSelectTag }: TagFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {/* ALL POSTS BUTTON */}
      <button
        onClick={() => onSelectTag(null)}
        className={cn(
          "rounded-full px-4 py-2 font-mono text-sm transition-all duration-200",
          selectedTag === null
            ? "bg-primary text-primary-foreground"
            : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
        )}
      >
        All Posts
      </button>

      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onSelectTag(tag)}
          className={cn(
            "rounded-full px-4 py-2 font-mono text-sm transition-all duration-200",
            selectedTag === tag
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
          )}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
