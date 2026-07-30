import SectionHeader from "../ui/SectionHeader";
import { team } from "../../data/team";
import TeamCard from "./TeamCard";

export default function TeamSection() {
  return (
    <section id="nosotros" className="py-16 sm:py-25">
      <div className="mx-auto max-w-[1160px] px-6">
        <SectionHeader
          badge="El equipo"
          title={
            <>
              Dos personas,
              <br />
              una visión
            </>
          }
          description="Tener una página web bien hecha no es un lujo — es la herramienta que te permite estar disponible las 24 horas, llegar a clientes que nunca te hubieran encontrado de otra forma y proyectar la confianza que tu negocio merece. Nosotros nos encargamos de todo el proceso para que tú solo tengas que enfocarte en crecer."
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {team.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
