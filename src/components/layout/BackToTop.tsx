import clsx from "clsx";
import { ArrowUp } from "@phosphor-icons/react";

interface BackToTopProps {
  visible: boolean;
}

export default function BackToTop({ visible }: BackToTopProps) {
  return (
    <button
      aria-label="Volver al inicio"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={clsx(
        "fixed right-9 bottom-9 z-[90] flex h-[46px] w-[46px] items-center justify-center rounded-full border-[1.5px] border-primary/28 bg-white/65 text-primary shadow-[0_4px_16px_rgba(74,122,178,0.15)] backdrop-blur-md transition-[opacity,transform,background,box-shadow] duration-300 hover:-translate-y-[3px] hover:border-primary hover:bg-white/95 hover:shadow-[0_6px_22px_rgba(74,122,178,0.25)]",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      )}
    >
      <ArrowUp size={21} weight="regular" />
    </button>
  );
}
