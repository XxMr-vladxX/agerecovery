import { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import FloatingNavbar from "../components/FloatingNavbar";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import {
  fetchAllTreatments,
  type Treatment,
} from "../services/treatmentsService";

export default function TreatmentsList() {
  const [treatments, setTreatments] = useState<Treatment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    // Función asíncrona local: carga el catálogo completo al montar la página.
    // Se declara dentro del efecto (patrón estándar de React) y llama a
    // fetchAllTreatments(), una de las funciones documentadas del servicio.
    async function loadTreatments() {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchAllTreatments();
        if (isMounted) {
          setTreatments(data);
        }
      } catch (err) {
        if (isMounted) {
          setError("No se pudieron cargar los tratamientos. Intenta de nuevo.");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadTreatments();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="min-h-screen bg-ivory text-ink overflow-x-hidden">
      <FloatingNavbar />
      <Breadcrumbs items={[{ label: "Inicio", to: "/" }, { label: "Tratamientos" }]} />

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-7 h-px bg-gold" />
              <span className="text-[12px] tracking-[0.18em] uppercase text-cyan font-semibold">
                Catálogo completo
              </span>
            </div>
            <h1 className="font-display font-normal text-[32px] md:text-[42px] leading-[1.16] text-navy-deep tracking-tight">
              Todos nuestros tratamientos faciales
            </h1>
            <p className="text-[15.5px] text-ink-soft leading-relaxed font-light mt-5">
              Explora cada protocolo en detalle: duración, número de
              sesiones y tiempos de resultado esperados.
            </p>
          </div>

          {isLoading && (
            <div className="py-20 text-center text-ink-soft text-[14px]">
              Cargando tratamientos…
            </div>
          )}

          {error && (
            <div className="py-20 text-center text-red-600 text-[14px]">
              {error}
            </div>
          )}

          {!isLoading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {treatments.map((t, i) => (
                <motion.div
                  key={t.slug}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <Link
                    to={`/tratamientos/${t.slug}`}
                    className="block border border-navy/10 p-7 h-full hover:border-cyan transition-colors group"
                  >
                    <div className="font-display text-[14px] text-gold font-medium mb-4">
                      {t.num}
                    </div>
                    <h3 className="font-display text-[20px] font-medium text-navy-deep mb-3 group-hover:text-cyan transition-colors">
                      {t.title}
                    </h3>
                    <p className="text-[13.5px] text-ink-soft leading-relaxed font-light mb-4">
                      {t.shortDesc}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {t.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10.5px] text-cyan border border-cyan-soft bg-cyan-pale px-2.5 py-1 rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
