import FloatingNavbar from "../components/FloatingNavbar";
import HeroSection from "../components/HeroSection";
import ProductGrid from "../components/ProductGrid";
import ResultsSection from "../components/ResultsSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-ivory text-ink overflow-x-hidden">
      <FloatingNavbar />
      <HeroSection />
      <ProductGrid />
      <ResultsSection />
      <Footer />
    </div>
  );
}
