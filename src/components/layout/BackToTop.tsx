import clsx from "clsx";

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
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-[21px] w-[21px]"
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
}
