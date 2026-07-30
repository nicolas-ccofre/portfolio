import { useEffect, useRef, useState, type FormEvent } from "react";
import clsx from "clsx";
import Button from "../ui/Button";

const inputClasses =
  "w-full rounded-field border border-[rgba(60,105,160,0.18)] bg-white/70 px-4 py-3 text-[0.9rem] text-text outline-none transition-[border-color,box-shadow] duration-[250ms] [font-family:inherit] placeholder:text-text-muted placeholder:opacity-70 focus:border-primary focus:bg-white/90 focus:shadow-[0_0_0_3px_rgba(74,122,178,0.12)]";

const labelClasses = "mb-2 block text-[0.85rem] font-semibold text-text-muted";

/**
 * Simulated submit only — there is no backend integration. Mirrors the original
 * site's behavior (shows a fake "sent" confirmation for 3s, then resets).
 */
export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sent");
    timeoutRef.current = setTimeout(() => {
      setStatus("idle");
      e.currentTarget.reset();
    }, 3000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-card border border-[rgba(60,105,160,0.18)] bg-white/50 p-6 backdrop-blur-lg sm:p-10"
    >
      <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className={labelClasses}>Nombre</label>
          <input type="text" placeholder="Tu nombre" required className={inputClasses} />
        </div>
        <div>
          <label className={labelClasses}>Email</label>
          <input type="email" placeholder="tu@email.com" required className={inputClasses} />
        </div>
      </div>
      <div className="mb-4">
        <label className={labelClasses}>Tipo de proyecto</label>
        <select className={inputClasses}>
          <option value="">Selecciona una opción</option>
          <option>Sitio web corporativo</option>
          <option>Tienda online</option>
          <option>Landing page</option>
          <option>Rediseño de sitio existente</option>
          <option>Otro</option>
        </select>
      </div>
      <div className="mb-4">
        <label className={labelClasses}>Cuéntanos tu proyecto</label>
        <textarea
          rows={4}
          placeholder="Describe tu idea, negocio, objetivos..."
          className={clsx(inputClasses, "resize-y")}
        />
      </div>
      <Button
        type="submit"
        full
        className={clsx(status === "sent" && "!bg-emerald-400 !text-black hover:!bg-emerald-400")}
      >
        {status === "sent" ? "✓ Mensaje enviado" : "Enviar mensaje →"}
      </Button>
    </form>
  );
}
