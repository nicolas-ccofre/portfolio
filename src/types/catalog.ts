export type CatalogCategory = "salud" | "landing" | "corporativo";
export type CatalogFilter = "all" | CatalogCategory;

export interface CatalogItem {
  id: string;
  category: CatalogCategory;
  title: string;
  description: string;
  tag: string;
  tagVariant: "teal" | "blue" | "orange" | "green";
  href: string;
  linkLabel: string;
  externalTarget: boolean;
  image?: { src: string; alt: string };
  mockup?: "landing";
}
