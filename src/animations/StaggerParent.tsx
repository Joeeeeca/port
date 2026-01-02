import { motion } from "framer-motion";
import React from "react";

type StaggerParentProps = {
  children: React.ReactNode;
};

export function StaggerParent({ children }: StaggerParentProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.15 },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
