import { asset } from "../lib/asset";
import type { CatalogItem } from "../types/catalog";

export const catalogItems: CatalogItem[] = [
  {
    id: "clinica-roa",
    category: "salud",
    title: "Clínica Rōa",
    description:
      "Sitio para clínica dental y medicina estética con servicios de implantología, ortodoncia y armonización facial.",
    tag: "Salud",
    tagVariant: "teal",
    href: "https://clinicaroa.cl",
    linkLabel: "Ver sitio →",
    externalTarget: true,
    image: { src: asset("img/clinica-roa-banner.png"), alt: "Clínica Rōa" },
  },
  {
    id: "oncologia-digestiva",
    category: "salud",
    title: "Oncología Digestiva",
    description:
      "Sitio médico especializado para cirujano oncólogo digestivo con perfil profesional, patologías tratadas y agenda de citas.",
    tag: "Salud",
    tagVariant: "teal",
    href: "https://oncologiadigestiva.cl",
    linkLabel: "Ver sitio →",
    externalTarget: true,
    image: {
      src: asset("img/oncologia-digestiva-banner.png"),
      alt: "Oncología Digestiva",
    },
  },
  {
    id: "jaime-castillo",
    category: "salud",
    title: "Dr. Jaime Castillo",
    description:
      "Sitio para cirujano especialista en cirugía digestiva, bariátrica y hepatobiliar con perfil profesional y agenda online.",
    tag: "Salud",
    tagVariant: "teal",
    href: "https://drjaimecastillo.cl",
    linkLabel: "Ver sitio →",
    externalTarget: true,
    image: { src: asset("img/jaime-castillo-banner.png"), alt: "Dr. Jaime Castillo" },
  },
  {
    id: "proximo-proyecto",
    category: "corporativo",
    title: "Próximo proyecto",
    description:
      "Sitio corporativo con diseño moderno, identidad de marca y orientado a resultados.",
    tag: "Corporativo",
    tagVariant: "blue",
    href: asset("examples/landing/index.html"),
    linkLabel: "Ver demo →",
    externalTarget: true,
    mockup: "landing",
  },
  {
    id: "con-fluencia",
    category: "landing",
    title: "Con-fluencia",
    description:
      "Sitio para consultora de asuntos públicos, asesoría legislativa y comunicación estratégica.",
    tag: "Landing Page",
    tagVariant: "orange",
    href: "https://con-fluencia.cl",
    linkLabel: "Ver sitio →",
    externalTarget: true,
    image: { src: asset("img/con-fluencia-banner.png"), alt: "Con-fluencia" },
  },
];

export const catalogFilters: { key: CatalogItem["category"] | "all"; label: string }[] = [
  { key: "all", label: "Todos" },
  { key: "salud", label: "Salud" },
  { key: "landing", label: "Landing Page" },
  { key: "corporativo", label: "Corporativo" },
];
