import FloatingNavbar from "../components/FloatingNavbar";
import HeroSection from "../components/HeroSection";
import ProductGrid from "../components/ProductGrid";
import VideoSection from "../components/VideoSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050608] text-white overflow-x-hidden">
      <FloatingNavbar />
      <HeroSection />
      <ProductGrid />
      <VideoSection />
      <Footer />
    </div>
  );
}
