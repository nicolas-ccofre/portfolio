import { type ComponentPropsWithoutRef, type ElementType } from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "ghost" | "outline" | "light";
type ButtonSize = "sm" | "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-0 bg-primary text-white hover:-translate-y-0.5 hover:bg-primary-light hover:shadow-[0_8px_28px_rgba(74,122,178,0.35)]",
  ghost:
    "border border-border bg-white/55 text-text backdrop-blur-md hover:border-primary/40 hover:bg-white/85",
  outline: "border border-primary bg-transparent text-primary hover:bg-primary/7",
  light:
    "border border-border bg-surface text-text hover:-translate-y-0.5 hover:bg-white hover:shadow-brand",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-[18px] py-2 text-[0.82rem]",
  md: "px-6 py-3 text-[0.9rem]",
  lg: "px-9 py-4 text-base",
};

interface ButtonOwnProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  full?: boolean;
}

type ButtonProps<T extends ElementType> = ButtonOwnProps & {
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, keyof ButtonOwnProps | "as">;

export default function Button<T extends ElementType = "button">({
  as,
  variant = "primary",
  size = "md",
  full = false,
  className,
  ...rest
}: ButtonProps<T>) {
  const Component = as || "button";

  return (
    <Component
      className={clsx(
        "inline-flex cursor-pointer items-center gap-2 rounded-full font-semibold no-underline transition-all duration-[250ms] ease-out active:scale-[0.98]",
        variantClasses[variant],
        sizeClasses[size],
        full && "w-full justify-center",
        className
      )}
      {...rest}
    />
  );
}
