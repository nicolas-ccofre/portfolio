import type { ComponentType } from "react";
import type { IconProps } from "@phosphor-icons/react";

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: ComponentType<IconProps>;
}
