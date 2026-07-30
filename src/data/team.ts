export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  skills: string[];
  avatarGradient: [string, string];
}

export const team: TeamMember[] = [
  {
    id: "alvaro-flores",
    name: "Álvaro Flores",
    role: "UI/UX Designer & Web Developer",
    bio: "Transforma la identidad de tu marca en una experiencia visual que genera confianza desde el primer clic. Diseña cada pantalla pensando en tus clientes: que encuentren lo que buscan, que sientan que están en el lugar correcto y que quieran volver.",
    skills: ["UI/UX", "Figma", "Tailwind CSS", "React", "JavaScript"],
    avatarGradient: ["#6366f1", "#8b5cf6"],
  },
  {
    id: "nicolas-carrillo",
    name: "Nicolás Carrillo",
    role: "Web Developer & UI/UX Designer",
    bio: "Construye la base técnica que hace que tu sitio cargue rápido, aparezca en Google y esté disponible siempre. Un buen desarrollo es silencioso — simplemente funciona, y esa tranquilidad se nota en cada visita de tus clientes.",
    skills: ["JavaScript", "Python", "WordPress", "React", "Tailwind CSS"],
    avatarGradient: ["#f472b6", "#fb923c"],
  },
];
