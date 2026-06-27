import FloatingNavbar from "../components/FloatingNavbar";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import VideoSection from "../components/VideoSection";

export default function MethodPage() {
  return (
    <div className="min-h-screen bg-ivory text-ink overflow-x-hidden">
      <FloatingNavbar />
      <Breadcrumbs items={[{ label: "Inicio", to: "/" }, { label: "Método" }]} />
      <VideoSection />
      <Footer />
    </div>
  );
}
