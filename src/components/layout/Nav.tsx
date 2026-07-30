import clsx from "clsx";
import Button from "../ui/Button";
import { useMobileNav } from "../../hooks/useMobileNav";

const links = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#catalogo", label: "Catálogo" },
  { href: "#contacto", label: "Contacto" },
];

interface NavProps {
  isScrolled: boolean;
}

export default function Nav({ isScrolled }: NavProps) {
  const { isOpen, toggle, close } = useMobileNav();

  return (
    <nav
      className={clsx(
        "fixed inset-x-0 top-0 z-[100] flex items-center gap-10 px-6 py-4 transition-[background,box-shadow] duration-300 md:px-10 md:py-[18px]",
        isScrolled && "bg-[rgba(248,251,255,0.92)] shadow-[0_1px_0_var(--color-border)] backdrop-blur-xl"
      )}
    >
      <a href="#" className="mr-auto font-serif text-2xl font-black text-text">
        Studio<span className="text-primary">Pixel</span>
      </a>

      <ul
        className={clsx(
          "gap-8 text-[1.4rem] md:static md:z-auto md:flex md:h-auto md:w-auto md:flex-row md:items-center md:gap-8 md:bg-transparent md:text-[0.9rem] md:backdrop-blur-none",
          isOpen
            ? "fixed inset-0 z-[99] flex flex-col items-center justify-center bg-[rgba(245,250,255,0.97)] backdrop-blur-xl"
            : "hidden"
        )}
      >
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={close}
              className="text-text-muted transition-colors hover:text-text"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <Button as="a" href="#contacto" size="sm" className="hidden md:inline-flex">
        Cotizar proyecto
      </Button>

      <button
        className="relative z-[110] flex flex-col gap-[5px] border-0 bg-transparent p-1 cursor-pointer md:hidden"
        aria-label="Menú"
        onClick={toggle}
      >
        <span className="block h-0.5 w-6 rounded-sm bg-text transition-[250ms]" />
        <span className="block h-0.5 w-6 rounded-sm bg-text transition-[250ms]" />
        <span className="block h-0.5 w-6 rounded-sm bg-text transition-[250ms]" />
      </button>
    </nav>
  );
}
