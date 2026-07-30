import { type ReactNode } from "react";
import Badge from "./Badge";
import Reveal from "./Reveal";

interface SectionHeaderProps {
  badge: string;
  badgeVariant?: "default" | "outline" | "light";
  title: ReactNode;
  description: ReactNode;
}

export default function SectionHeader({
  badge,
  badgeVariant = "default",
  title,
  description,
}: SectionHeaderProps) {
  return (
    <Reveal className="mx-auto mb-16 max-w-[600px] text-center">
      <Badge variant={badgeVariant} className="mb-5">
        {badge}
      </Badge>
      <h2 className="mb-4 text-text">{title}</h2>
      <p className="text-[1.05rem] text-text-muted">{description}</p>
    </Reveal>
  );
}
