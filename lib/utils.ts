import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/* ── Animation tokens ─────────────────────────────────── */
export const transitions = {
  spring: { type: "spring" as const, stiffness: 400, damping: 30 },
  smooth: { duration: 0.3, ease: [0.4, 0, 0.2, 1] as const },
  enter: { duration: 0.4, ease: [0, 0, 0.2, 1] as const },
  exit: { duration: 0.2, ease: [0.4, 0, 1, 1] as const },
};

export const pageVariants = {
  initial: { opacity: 0, y: 20, filter: "blur(10px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: transitions.enter,
  },
  exit: {
    opacity: 0,
    y: -10,
    filter: "blur(5px)",
    transition: transitions.exit,
  },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const fadeInUp = {
  initial: { opacity: 0, y: 20, filter: "blur(10px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: transitions.enter,
  },
};

/* ── Format helpers ───────────────────────────────────── */
export function formatNumber(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(n >= 10_000 ? 0 : 1)}K`;
  return n.toString();
}
