import type { ComponentType } from "react";
import type { IconProps } from "@phosphor-icons/react";

export type ServiceAccent = "primary" | "orange" | "green" | "teal";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ComponentType<IconProps>;
  accent: ServiceAccent;
  featured?: boolean;
}
