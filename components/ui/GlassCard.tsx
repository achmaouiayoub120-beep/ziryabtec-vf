"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn, transitions } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: "blue" | "cyan" | "emerald" | "none";
  as?: "div" | "article" | "section";
}

const glowStyles: Record<string, string> = {
  blue: "hover:shadow-[var(--glow-blue)]",
  cyan: "hover:shadow-[var(--glow-cyan)]",
  emerald: "hover:shadow-[var(--glow-emerald)]",
  none: "",
};

export default function GlassCard({
  children,
  className,
  hover = true,
  glow = "blue",
  as: Component = "div",
}: GlassCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const MotionComponent = motion.create(Component);

  return (
    <MotionComponent
      whileHover={
        hover && !shouldReduceMotion
          ? { y: -4, transition: transitions.smooth }
          : {}
      }
      className={cn(
        "glass rounded-[var(--radius-md)] p-6",
        "transition-shadow duration-300",
        hover && glowStyles[glow],
        className
      )}
    >
      {children}
    </MotionComponent>
  );
}
