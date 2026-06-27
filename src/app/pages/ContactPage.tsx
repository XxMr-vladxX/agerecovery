import FloatingNavbar from "../components/FloatingNavbar";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import ContactSection from "../components/ContactSection";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-ivory text-ink overflow-x-hidden">
      <FloatingNavbar />
      <Breadcrumbs items={[{ label: "Inicio", to: "/" }, { label: "Contacto" }]} />
      <ContactSection />
      <Footer />
    </div>
  );
}
