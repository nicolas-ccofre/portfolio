import clsx from "clsx";
import type { CatalogItem } from "../../types/catalog";
import Button from "../ui/Button";
import CatalogMockupLanding from "./CatalogMockupLanding";

const tagVariantClasses: Record<CatalogItem["tagVariant"], string> = {
  teal: "border-[rgba(13,122,138,0.18)] bg-[rgba(13,122,138,0.07)] text-[#0a6878]",
  blue: "border-[rgba(0,61,165,0.18)] bg-[rgba(0,61,165,0.07)] text-[#003da5]",
  orange: "border-orange/22 bg-orange/9 text-orange",
  green: "border-green/22 bg-green/9 text-[#3a6648]",
};

interface CatalogCardProps {
  item: CatalogItem;
}

export default function CatalogCard({ item }: CatalogCardProps) {
  return (
    <article className="animate-fade-up overflow-hidden rounded-card border border-border bg-white/65 backdrop-blur-sm transition-[background,border-color,transform,box-shadow] duration-[250ms] hover:-translate-y-1 hover:border-primary/32 hover:bg-white/90 hover:shadow-brand">
      <a
        href={item.href}
        target={item.externalTarget ? "_blank" : undefined}
        rel={item.externalTarget ? "noreferrer" : undefined}
        className="group relative block h-[260px] overflow-hidden"
      >
        {item.image ? (
          <img
            src={item.image.src}
            alt={item.image.alt}
            className="h-full w-full object-cover object-top transition-transform duration-[450ms] ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <CatalogMockupLanding />
        )}
        <div className="absolute inset-0 flex items-center justify-center bg-[rgba(245,250,255,0.88)] opacity-0 transition-opacity duration-[250ms] group-hover:opacity-100">
          <Button as="span" size="sm">
            {item.linkLabel}
          </Button>
        </div>
      </a>
      <div className="p-6">
        <span
          className={clsx(
            "mb-2.5 inline-block rounded-full border px-2.5 py-[3px] text-[0.75rem] font-semibold",
            tagVariantClasses[item.tagVariant]
          )}
        >
          {item.tag}
        </span>
        <h3 className="mb-2 text-[1.15rem]">{item.title}</h3>
        <p className="mb-4 text-[0.9rem] text-text-muted">{item.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-[0.78rem] text-text-muted">HTML · CSS · JS</span>
          <a
            href={item.href}
            target={item.externalTarget ? "_blank" : undefined}
            rel={item.externalTarget ? "noreferrer" : undefined}
            className="text-[0.85rem] font-semibold text-primary transition-colors hover:text-text"
          >
            {item.linkLabel}
          </a>
        </div>
      </div>
    </article>
  );
}
