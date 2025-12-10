import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/blog"
          element={<BlogPage />}
        />
        <Route
          path="/blog/:slug"
          element={<BlogPostPage />}
        />
      </Routes>
    </AnimatePresence>
  );
}
