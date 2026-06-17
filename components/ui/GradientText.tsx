import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  from?: string;
  to?: string;
}

export default function GradientText({
  children,
  className,
  from = "var(--electric-blue)",
  to = "var(--neon-cyan)",
}: GradientTextProps) {
  return (
    <span
      className={cn("inline-block bg-clip-text text-transparent", className)}
      style={{
        backgroundImage: `linear-gradient(135deg, ${from}, ${to})`,
      }}
    >
      {children}
    </span>
  );
}
