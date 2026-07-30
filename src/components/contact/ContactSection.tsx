import Reveal from "../ui/Reveal";
import ContactChannels from "./ContactChannels";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section
      id="contacto"
      className="bg-[linear-gradient(135deg,#c8d8ee_0%,#bccee8_50%,#b4c8e5_100%)] py-16 sm:py-25"
    >
      <div className="mx-auto max-w-[1160px] px-6">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <Reveal>
            <h2 className="mb-4 text-text">¿Listo para empezar?</h2>
            <p className="mb-10 text-text-muted">
              Cuéntanos tu proyecto y te respondemos en menos de 48 horas con una propuesta a
              medida.
            </p>
            <ContactChannels />
          </Reveal>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
