import { motion } from "framer-motion";
import React from "react";

type StaggerItemProps = {
  children: React.ReactNode;
};

export function StaggerItem({ children }: StaggerItemProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
