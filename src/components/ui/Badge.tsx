import { type ReactNode } from "react";
import clsx from "clsx";

type BadgeVariant = "default" | "outline" | "light";

const variantClasses: Record<BadgeVariant, string> = {
  default: "border border-primary/22 bg-primary/9 text-primary",
  outline: "border border-primary/20 bg-white/45 text-text-muted backdrop-blur-sm",
  light: "border border-white/55 bg-white/35 text-text",
};

interface BadgeProps {
  variant?: BadgeVariant;
  className?: string;
  children: ReactNode;
}

export default function Badge({ variant = "default", className, children }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-block rounded-full px-4 py-1.5 text-[0.78rem] font-semibold tracking-[0.05em] uppercase",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
