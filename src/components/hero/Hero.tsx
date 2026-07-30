import Badge from "../ui/Badge";
import Button from "../ui/Button";
import HeroVideo from "./HeroVideo";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-[100px]">
      <div className="absolute inset-0 z-0">
        <HeroVideo />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(240,248,255,0.62)_0%,rgba(210,230,252,0.48)_55%,rgba(195,220,248,0.42)_100%)]" />
        <div className="absolute -top-[220px] -left-[130px] h-[650px] w-[650px] rounded-full bg-primary opacity-[0.13] blur-[100px]" />
        <div className="absolute -right-[60px] -bottom-[120px] h-[450px] w-[450px] rounded-full bg-accent opacity-[0.13] blur-[100px]" />
      </div>

      <div className="relative z-[1] mx-auto max-w-[740px] px-6 pt-10 pb-20">
        <Badge variant="outline" className="mb-7 animate-hero-down opacity-0">
          Diseño web a medida · 2025
        </Badge>
        <h1 className="mb-6 animate-hero-left text-text opacity-0">
          Hacemos que tu marca
          <br />
          <em>brille en internet</em>
        </h1>
        <p className="mb-10 max-w-[540px] animate-hero-right text-[1.15rem] text-text-muted opacity-0">
          Creamos sitios web modernos, rápidos y que convierten visitantes en clientes. Cada
          proyecto es único, como tu negocio.
        </p>
        <div className="flex animate-hero-up flex-wrap gap-4 opacity-0">
          <Button as="a" href="#catalogo" size="lg">
            Ver catálogo
          </Button>
          <Button as="a" href="#nosotros" variant="ghost" size="lg">
            Conocernos
          </Button>
        </div>
      </div>

      <a
        href="#catalogo"
        aria-label="Ver catálogo"
        className="absolute bottom-10 left-1/2 z-[1] flex h-[46px] w-[46px] animate-bounce-arrow items-center justify-center rounded-full border-[1.5px] border-primary/28 bg-white/55 text-primary backdrop-blur-md transition-[background,box-shadow,border-color] duration-[250ms] hover:border-primary hover:bg-white/92 hover:shadow-[0_4px_18px_rgba(74,122,178,0.25)] hover:[animation-play-state:paused]"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-[22px] w-[22px]"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </a>
    </section>
  );
}
