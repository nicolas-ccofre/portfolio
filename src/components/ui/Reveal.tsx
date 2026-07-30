import { type ElementType, type HTMLAttributes, type Ref } from "react";
import clsx from "clsx";
import { useScrollReveal } from "../../hooks/useScrollReveal";

interface RevealProps extends HTMLAttributes<HTMLElement> {
  as?: "div" | "article";
}

/** Fades + slides an element in the first time it enters the viewport (one-shot). */
export default function Reveal({ as = "div", className, children, ...rest }: RevealProps) {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();
  const Component = as as ElementType;

  return (
    <Component
      ref={ref as Ref<HTMLElement>}
      className={clsx(
        "transition-all duration-[600ms] ease-out",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-[30px] opacity-0",
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}
