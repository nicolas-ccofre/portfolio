import type { CatalogItem, CatalogFilter } from "../../types/catalog";
import CatalogCard from "./CatalogCard";

interface CatalogGridProps {
  items: CatalogItem[];
  activeFilter: CatalogFilter;
}

export default function CatalogGrid({ items, activeFilter }: CatalogGridProps) {
  const visibleItems = items.filter(
    (item) => activeFilter === "all" || item.category === activeFilter
  );

  return (
    <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
      {visibleItems.map((item) => (
        <CatalogCard key={item.id} item={item} />
      ))}
    </div>
  );
}
