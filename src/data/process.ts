import { ChatCircleText, ClockCountdown, UsersThree } from "@phosphor-icons/react";
import type { ProcessStep } from "../types/process";

export const processSteps: ProcessStep[] = [
  {
    id: "idea",
    number: "01",
    title: "Nos cuentas tu idea",
    description:
      "Nos compartes en qué consiste tu negocio, a quién quieres llegar y qué esperas lograr con tu sitio. No hace falta que sepas de diseño ni de tecnología.",
    icon: ChatCircleText,
  },
  {
    id: "propuesta",
    number: "02",
    title: "Te mostramos una propuesta",
    description:
      "Nos reunimos, presencial o por videollamada, y te mostramos un diseño concreto pensado para tu marca antes de escribir una sola línea de código.",
    icon: UsersThree,
  },
  {
    id: "plazo",
    number: "03",
    title: "Cumplimos el plazo",
    description:
      "Definimos una fecha de entrega realista y la cumplimos. Sabes desde el primer día cuándo vas a tener tu sitio funcionando.",
    icon: ClockCountdown,
  },
];
