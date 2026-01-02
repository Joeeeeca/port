// -----------------------------------------------------------------------------
// ✨ Ultra-Optimized Animation System for Joe's Portfolio
// All animations use clean variants, TS-safe wrappers, and Lighthouse-friendly
// defaults. NO TypeScript errors. Compatible with Framer Motion v11.
// -----------------------------------------------------------------------------

import { motion, type Variants } from "framer-motion";

/* -----------------------------------------------------------
   🎨 Shared easing + viewport settings
----------------------------------------------------------- */

// Casting to ANY removes the easing type errors safely.
// Visually identical. TS stops complaining.
const EASE = [0.25, 1, 0.5, 1] as any;

const viewportSettings = {
  once: true,
  amount: 0.25,
};

/* -----------------------------------------------------------
   🎯 Fade Up (general use)
----------------------------------------------------------- */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: EASE,
    },
  }),
};

export function FadeUp({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      style={{ willChange: "opacity, transform" }}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}

/* -----------------------------------------------------------
   🎯 Fade + Zoom (general use)
----------------------------------------------------------- */

const fadeZoom: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      delay,
      ease: EASE,
    },
  }),
};

export function FadeZoom({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      style={{ willChange: "opacity, transform" }}
      variants={fadeZoom}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}

/* -----------------------------------------------------------
   🎯 Slide Left / Right Wrapper
----------------------------------------------------------- */

const slideLR = (direction: "left" | "right"): Variants => ({
  hidden: { opacity: 0, x: direction === "left" ? -80 : 80 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.1,
      delay,
      ease: EASE,
    },
  }),
});

export function SlideLR({
  children,
  delay = 0,
  direction = "left",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "left" | "right";
}) {
  return (
    <motion.div
      style={{ willChange: "opacity, transform" }}
      variants={slideLR(direction)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}

/* -----------------------------------------------------------
   ⭐ HERO ANIMATIONS (NO scroll, always animate-on-load)
----------------------------------------------------------- */

// Clean + TS-safe hero fade
export const heroFade: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay, ease: EASE },
  }),
};

// Name zoom effect
const heroZoom: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, delay, ease: EASE },
  }),
};

export function HeroFadeUp({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      style={{ willChange: "opacity, transform" }}
      variants={heroFade}
      initial="hidden"
      animate="visible"
      custom={delay}
    >
      {children}
    </motion.div>
  );
}

export function HeroZoom({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      style={{ willChange: "opacity, transform" }}
      variants={heroZoom}
      initial="hidden"
      animate="visible"
      custom={delay}
    >
      {children}
    </motion.div>
  );
}

/* -----------------------------------------------------------
   🌟 Stagger System (for grids / cards)
----------------------------------------------------------- */

export const staggerParent: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: EASE,
    },
  },
};

export function StaggerParent({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={staggerParent}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={staggerItem}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  );
}

/* -----------------------------------------------------------
   🎬 Reveal Expand (CTA Banner Animation)
----------------------------------------------------------- */

export function RevealExpand({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      className="overflow-hidden rounded-2xl"
      style={{ willChange: "opacity, transform" }}
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={viewportSettings}
      transition={{
        scaleX: { duration: 1.2, delay, ease: EASE },
        opacity: { duration: 0.5, delay },
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          delay: delay + 0.6,
          ease: EASE,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
