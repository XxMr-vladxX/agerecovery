import FloatingNavbar from "../components/FloatingNavbar";
import HeroSection from "../components/HeroSection";
import ProductGrid from "../components/ProductGrid";
import VideoSection from "../components/VideoSection";
import PhilosophySection from "../components/PhilosophySection";
import ResultsSection from "../components/ResultsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-ivory text-ink overflow-x-hidden">
      <FloatingNavbar />
      <HeroSection />
      <ProductGrid />
      <VideoSection />
      <PhilosophySection />
      <ResultsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
