const links = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#catalogo", label: "Catálogo" },
  { href: "#contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-[linear-gradient(180deg,rgba(205,220,242,0.5)_0%,rgba(248,251,255,0.8)_100%)] py-8 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1160px] flex-col flex-wrap items-center justify-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <a href="#" className="font-serif text-2xl font-black text-text">
          Studio<span className="text-primary">Pixel</span>
        </a>
        <p className="text-[0.85rem] text-text-muted">© 2025 StudioPixel · Diseño web profesional</p>
        <div className="flex gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.85rem] text-text-muted transition-colors hover:text-text"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
