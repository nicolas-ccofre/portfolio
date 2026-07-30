import { ArrowsClockwise, Buildings, Lightning, ShoppingCartSimple } from "@phosphor-icons/react";
import type { Service } from "../types/service";

export const services: Service[] = [
  {
    id: "corporativo",
    title: "Sitio web corporativo",
    description:
      "Tu presencia digital completa: quiénes son, qué hacen y cómo encontrarlos. La base para que cualquier cliente potencial te tome en serio.",
    icon: Buildings,
    accent: "primary",
    featured: true,
  },
  {
    id: "landing",
    title: "Landing page",
    description:
      "Una sola página enfocada en convertir. Presenta tu oferta y lleva al visitante a la acción. Ideal para lanzar rápido.",
    icon: Lightning,
    accent: "orange",
  },
  {
    id: "ecommerce",
    title: "Tienda online",
    description:
      "Vende directamente desde tu sitio, con catálogo y pago integrado. Para negocios que quieren vender las 24 horas.",
    icon: ShoppingCartSimple,
    accent: "green",
  },
  {
    id: "rediseno",
    title: "Rediseño de sitio existente",
    description:
      "¿Tu sitio ya no te representa? Lo auditamos y lo llevamos a un nivel profesional sin perder lo que funciona.",
    icon: ArrowsClockwise,
    accent: "teal",
  },
];
