import { cn } from "@/lib/utils";
import { Flame, Sparkles } from "lucide-react";

interface BadgeProps {
  variant?: "default" | "success" | "warning" | "danger" | "new" | "bestseller" | "ai";
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<string, string> = {
  default: "bg-[var(--bg-elevated)] text-[var(--text-secondary)] border-[var(--glass-border)]",
  success: "bg-[rgba(16,185,129,0.15)] text-[var(--emerald)] border-[rgba(16,185,129,0.3)]",
  warning: "bg-[rgba(245,158,11,0.15)] text-[var(--amber-warn)] border-[rgba(245,158,11,0.3)]",
  danger: "bg-[rgba(239,68,68,0.15)] text-[var(--rose-danger)] border-[rgba(239,68,68,0.3)]",
  new: "bg-[rgba(6,182,212,0.15)] text-[var(--neon-cyan)] border-[rgba(6,182,212,0.3)]",
  bestseller: "bg-[rgba(245,158,11,0.15)] text-[var(--amber-warn)] border-[rgba(245,158,11,0.3)]",
  ai: "bg-[rgba(37,99,235,0.15)] text-[var(--cobalt-glow)] border-[rgba(37,99,235,0.3)]",
};

export default function Badge({ variant = "default", children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider border",
        variantStyles[variant],
        className
      )}
    >
      {variant === "ai" && <span className="w-1.5 h-1.5 rounded-full bg-[var(--cobalt-glow)] animate-pulse" />}
      {variant === "bestseller" && <Flame size={12} className="mr-1" />}
      {variant === "new" && <Sparkles size={12} className="mr-1" />}
      {children}
    </span>
  );
}
