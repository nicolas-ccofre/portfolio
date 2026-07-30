import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import BackToTop from "./components/layout/BackToTop";
import Hero from "./components/hero/Hero";
import TeamSection from "./components/team/TeamSection";
import CatalogSection from "./components/catalog/CatalogSection";
import ContactSection from "./components/contact/ContactSection";
import { useScrollPosition } from "./hooks/useScrollPosition";

function App() {
  const { isScrolled, showBackToTop } = useScrollPosition();

  return (
    <>
      <Nav isScrolled={isScrolled} />
      <Hero />
      <TeamSection />
      <CatalogSection />
      <ContactSection />
      <Footer />
      <BackToTop visible={showBackToTop} />
    </>
  );
}

export default App;
