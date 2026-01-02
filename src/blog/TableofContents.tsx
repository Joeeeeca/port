import { motion } from "framer-motion";

export type TocItem = { id: string; text: string };

export function TableOfContents({ items }: { items: TocItem[] }) {
  if (!items.length) return null;

  return (
    <motion.nav
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl border border-border bg-card/70 p-6 backdrop-blur"
    >
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
        On this page
      </h3>

      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="text-sm text-primary hover:underline"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
