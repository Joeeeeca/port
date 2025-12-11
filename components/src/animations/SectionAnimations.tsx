import { motion } from "framer-motion";

export function LuxeSlideLR({
  children,
  direction = "left",
}: {
  children: React.ReactNode;
  direction?: "left" | "right";
}) {
  const xStart = direction === "left" ? -120 : 120;

  return (
    <motion.div
    style={{ willChange: "opacity, transform" }}
      initial={{ opacity: 0, x: xStart }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: 1.5, // much slower
        ease: "linear",
      }}
    >
      {children}
    </motion.div>
  );
}


export function FadeZoomIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
    style={{ willChange: "opacity, transform" }}
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 1.2,
        ease: [0.25, 1, 0.5, 1], // smooth + premium, no pop
      }}
    >
      {children}
    </motion.div>
  );
}

/*Hero Section Animations*/

export function HeroFadeUp({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  return (
    <motion.div
    style={{ willChange: "opacity, transform" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.2,
        delay,
        ease: [0.25, 1, 0.5, 1]
      }}
    >
      {children}
    </motion.div>
  );
}

/*HeroZoom for the name */
export function HeroZoom({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  return (
    <motion.div
    style={{ willChange: "opacity, transform" }}
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.4,
        delay,
        ease: [0.25, 1, 0.5, 1]
      }}
    >
      {children}
    </motion.div>
  );
}

/*Animations for the about us section */

// Fade + slide from left
export function FadeLeft({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  return (
    <motion.div
    style={{ willChange: "opacity, transform" }}
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 1.2,
        delay,
        ease: [0.25, 1, 0.5, 1]
      }}
    >
      {children}
    </motion.div>
  );
}

// Fade + slide from right
export function FadeRight({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  return (
    <motion.div
    style={{ willChange: "opacity, transform" }}
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 1.2,
        delay,
        ease: [0.25, 1, 0.5, 1]
      }}
    >
      {children}
    </motion.div>
  );
}

/*My story card animations */

export function StaggerFadeUp({
  children,
  delay = 0,
}: {
  children: React.ReactNode
  delay?: number
}) {
  return (
    <motion.div
    style={{ willChange: "opacity, transform" }}
      className="block"   // <-- THE FIX: was "h-full"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.25, 1, 0.5, 1],
      }}
    >
      {children}
    </motion.div>
  )
}


interface FadeSlideUpProps {
  children: React.ReactNode;
  delay?: number;
}

export function FadeSlideUp({ children, delay = 0 }: FadeSlideUpProps) {
  return (
    <motion.div
    style={{ willChange: "opacity, transform" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.25, 1, 0.5, 1],
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

export function RevealExpand({ children, delay = 0 }: { 
  children: React.ReactNode; 
  delay?: number; 
}) {
  return (
    <motion.div
    style={{ willChange: "opacity, transform" }}
      initial={{ width: "2px", opacity: 0 }}
      whileInView={{ width: "100%", opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        width: { duration: 1.2, ease: [0.25, 1, 0.5, 1], delay },
        opacity: { duration: 0.4, delay: delay + 0.4 },
      }}
      className="overflow-hidden rounded-2xl"
    >
      {/* Fade content AFTER expansion */}
      <motion.div
      style={{ willChange: "opacity, transform" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: delay + 1,
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
