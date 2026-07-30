import clsx from "clsx";
import type { Service, ServiceAccent } from "../../types/service";
import Reveal from "../ui/Reveal";

const accentClasses: Record<ServiceAccent, string> = {
  primary: "bg-primary/8 text-primary",
  orange: "bg-orange/8 text-orange",
  green: "bg-green/8 text-green",
  teal: "bg-teal/8 text-teal",
};

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <Reveal
      as="article"
      className={clsx(
        "rounded-card border border-border bg-white/60 backdrop-blur-sm transition-[background,border-color,transform,box-shadow] duration-[250ms] hover:-translate-y-1 hover:border-primary/25 hover:bg-white/85 hover:shadow-brand",
        service.featured
          ? "lg:col-span-3 p-8 lg:flex lg:items-center lg:gap-10 lg:p-12"
          : "p-8"
      )}
    >
      <div
        className={clsx(
          "flex shrink-0 items-center justify-center rounded-full",
          accentClasses[service.accent],
          service.featured ? "mb-5 h-14 w-14 lg:mb-0" : "mb-5 h-12 w-12"
        )}
      >
        <Icon size={service.featured ? 28 : 22} weight="regular" />
      </div>
      <div className={service.featured ? "lg:max-w-xl" : undefined}>
        <h3 className={service.featured ? "text-2xl" : undefined}>{service.title}</h3>
        <p className="mt-2 text-text-muted">{service.description}</p>
      </div>
    </Reveal>
  );
}
