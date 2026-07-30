import clsx from "clsx";
import { catalogFilters } from "../../data/catalogItems";
import type { CatalogFilter } from "../../types/catalog";

interface CatalogFilterBarProps {
  active: CatalogFilter;
  onChange: (filter: CatalogFilter) => void;
}

export default function CatalogFilterBar({ active, onChange }: CatalogFilterBarProps) {
  return (
    <div className="mb-10 flex flex-wrap gap-3">
      {catalogFilters.map((filter) => (
        <button
          key={filter.key}
          onClick={() => onChange(filter.key)}
          className={clsx(
            "cursor-pointer rounded-full border border-border px-5 py-2 text-[0.85rem] font-medium backdrop-blur-sm transition-[250ms]",
            active === filter.key
              ? "border-primary bg-primary text-white"
              : "bg-white/50 text-text-muted hover:border-primary hover:bg-primary hover:text-white"
          )}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
