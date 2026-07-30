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
          Diseño web a medida
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
    </section>
  );
}
