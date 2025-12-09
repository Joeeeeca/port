import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const { pathname } = useLocation();

  // Are we on /blog or /blog/some-post ?
  const onBlogPage = pathname.startsWith("/blog");

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-5xl mx-auto px-4 h-16 flex items-center ml-auto gap-6">
        
        <div className="ml-auto flex items-center gap-6">
          {onBlogPage ? (
            <Link
              to="/"
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              Home
            </Link>
          ) : (
            <Link
              to="/blog"
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              Blog
            </Link>
          )}

          <ThemeToggle />
        </div>

      </nav>
    </header>
  );
}
