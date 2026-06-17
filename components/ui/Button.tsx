"use client";

import React, { useRef, type MouseEvent } from "react";
import { HTMLMotionProps, motion, useReducedMotion } from "framer-motion";
import { cn, transitions } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  magnetic?: boolean;
  children: React.ReactNode;
}

const variantStyles: Record<string, string> = {
  primary:
    "bg-[var(--electric-blue)] text-white hover:bg-[var(--cobalt-glow)] shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[var(--glow-blue)]",
  secondary:
    "glass text-[var(--text-primary)] hover:bg-[rgba(255,255,255,0.06)]",
  ghost:
    "bg-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[rgba(255,255,255,0.04)]",
  danger:
    "bg-[var(--rose-danger)] text-white hover:bg-[#DC2626]",
};

const sizeStyles: Record<string, string> = {
  sm: "px-4 py-2 text-[var(--text-sm)] rounded-[var(--radius-sm)]",
  md: "px-6 py-3 text-[var(--text-base)] rounded-[var(--radius-md)]",
  lg: "px-8 py-4 text-[var(--text-lg)] rounded-[var(--radius-md)]",
};

export default function Button({
  variant = "primary",
  size = "md",
  loading = false,
  magnetic = false,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLButtonElement>(null);

  const handleMagneticMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!magnetic || shouldReduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };

  const handleMagneticLeave = () => {
    if (!magnetic || !ref.current) return;
    ref.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <motion.button
      ref={ref}
      whileHover={shouldReduceMotion ? {} : { scale: 1.03, y: -2 }}
      whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
      transition={transitions.spring}
      onMouseMove={handleMagneticMove}
      onMouseLeave={handleMagneticLeave}
      disabled={disabled || loading}
      className={cn(
        "relative inline-flex items-center justify-center gap-2 font-medium transition-colors duration-200 cursor-pointer",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {loading && <Loader2 className="w-4 h-4 animate-spin" />}
      {children}
    </motion.button>
  );
}
