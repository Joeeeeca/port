import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function updateProgress() {
      const scrollTop = window.scrollY;
      const docHeight =
        document.body.scrollHeight - window.innerHeight;

      const scrolled = (scrollTop / docHeight) * 100;
      setProgress(scrolled);
    }

    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-primary z-[60]"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: progress / 100 }}
      transition={{ ease: "linear" }}
      style={{
        transformOrigin: "0% 50%",
      }}
    />
  );
}
