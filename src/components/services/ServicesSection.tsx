import SectionHeader from "../ui/SectionHeader";
import { services } from "../../data/services";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  return (
    <section
      id="servicios"
      className="bg-[linear-gradient(160deg,rgba(250,252,255,0)_0%,rgba(220,234,250,0.45)_100%)] py-16 sm:py-25"
    >
      <div className="mx-auto max-w-[1160px] px-6">
        <SectionHeader
          title="¿Qué tipo de sitio necesitas?"
          description="Cada negocio es distinto. Elige el punto de partida que más se parece al tuyo, o cuéntanos tu idea y te orientamos nosotros."
        />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
