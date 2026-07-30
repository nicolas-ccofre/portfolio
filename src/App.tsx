import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import BackToTop from "./components/layout/BackToTop";
import Hero from "./components/hero/Hero";
import ServicesSection from "./components/services/ServicesSection";
import TeamSection from "./components/team/TeamSection";
import ProcessSection from "./components/process/ProcessSection";
import CatalogSection from "./components/catalog/CatalogSection";
import ContactSection from "./components/contact/ContactSection";
import { useScrollPosition } from "./hooks/useScrollPosition";

function App() {
  const { isScrolled, showBackToTop, navSentinelRef, backToTopSentinelRef } = useScrollPosition();

  return (
    <div className="relative">
      <div ref={navSentinelRef} className="pointer-events-none absolute top-10 h-px w-px" aria-hidden />
      <div
        ref={backToTopSentinelRef}
        className="pointer-events-none absolute top-[600px] h-px w-px"
        aria-hidden
      />

      <Nav isScrolled={isScrolled} />
      <Hero />
      <ServicesSection />
      <TeamSection />
      <ProcessSection />
      <CatalogSection />
      <ContactSection />
      <Footer />
      <BackToTop visible={showBackToTop} />
    </div>
  );
}

export default App;
