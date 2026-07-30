import { useState } from "react";
import SectionHeader from "../ui/SectionHeader";
import { catalogItems } from "../../data/catalogItems";
import type { CatalogFilter } from "../../types/catalog";
import CatalogFilterBar from "./CatalogFilterBar";
import CatalogGrid from "./CatalogGrid";

export default function CatalogSection() {
  const [activeFilter, setActiveFilter] = useState<CatalogFilter>("all");

  return (
    <section
      id="catalogo"
      className="bg-[linear-gradient(135deg,#e5edf8_0%,#d8e6f5_55%,#d0dcef_100%)] py-16 sm:py-25"
    >
      <div className="mx-auto max-w-[1160px] px-6">
        <SectionHeader
          badge="Catálogo"
          badgeVariant="light"
          title="Diseños que venden"
          description="Explora nuestros templates y proyectos reales. Cada uno adaptable a tu negocio."
        />
        <CatalogFilterBar active={activeFilter} onChange={setActiveFilter} />
        <CatalogGrid items={catalogItems} activeFilter={activeFilter} />
      </div>
    </section>
  );
}
