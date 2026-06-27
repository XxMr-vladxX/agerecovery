import { motion } from "motion/react";
import FloatingNavbar from "../components/FloatingNavbar";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";

export default function DoctorPage() {
  return (
    <div className="min-h-screen bg-ivory text-ink overflow-x-hidden">
      <FloatingNavbar />
      <Breadcrumbs
        items={[{ label: "Inicio", to: "/" }, { label: "Dr. Responsable" }]}
      />

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/5] overflow-hidden"
              style={{
                background:
                  "linear-gradient(165deg, #0A5A8E 0%, #00263F 55%, #001D33 100%)",
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 70% 20%, rgba(0,138,196,0.3), transparent 60%)",
                }}
              />
              {/* Placeholder: reemplazar por foto real del responsable médico */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-7 h-px bg-gold" />
                <span className="text-[12px] tracking-[0.18em] uppercase text-cyan font-semibold">
                  Responsable médico
                </span>
              </div>
              <h1 className="font-display font-normal text-[32px] md:text-[42px] leading-[1.16] text-navy-deep tracking-tight mb-6">
                Dr. [Nombre del responsable médico]
              </h1>
              <p className="text-[15.5px] leading-relaxed text-ink-soft font-light mb-4">
                Médico cirujano especializado en medicina estética y
                antienvejecimiento, con formación enfocada en protocolos
                faciales de mínima invasión y resultados naturales. Esta
                sección está pendiente de actualizar con la biografía,
                cédula profesional y estudios reales del responsable
                médico de Age Recovery.
              </p>
              <p className="text-[15.5px] leading-relaxed text-ink-soft font-light mb-8">
                Cada protocolo aplicado en clínica pasa primero por un
                diagnóstico clínico individual, antes de cualquier
                recomendación de tratamiento.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-7 border-t border-navy/10">
                <div>
                  <div className="font-display text-[26px] text-navy-deep font-medium">
                    12+
                  </div>
                  <div className="text-[11.5px] text-ink-soft mt-1">
                    Años de práctica clínica
                  </div>
                </div>
                <div>
                  <div className="font-display text-[26px] text-navy-deep font-medium">
                    [Cédula]
                  </div>
                  <div className="text-[11.5px] text-ink-soft mt-1">
                    Cédula profesional
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
