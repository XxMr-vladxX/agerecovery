import FloatingNavbar from "../components/FloatingNavbar";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import PhilosophySection from "../components/PhilosophySection";

export default function PhilosophyPage() {
  return (
    <div className="min-h-screen bg-ivory text-ink overflow-x-hidden">
      <FloatingNavbar />
      <Breadcrumbs items={[{ label: "Inicio", to: "/" }, { label: "Filosofía" }]} />
      <PhilosophySection />
      <Footer />
    </div>
  );
}
