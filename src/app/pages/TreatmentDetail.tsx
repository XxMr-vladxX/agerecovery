import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { motion } from "motion/react";
import FloatingNavbar from "../components/FloatingNavbar";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import {
  loadTreatmentWithRetry,
  fetchRelatedTreatments,
  type Treatment,
} from "../services/treatmentsService";

export default function TreatmentDetail() {
  const { slug } = useParams<{ slug: string }>();

  const [treatment, setTreatment] = useState<Treatment | null>(null);
  const [related, setRelated] = useState<Treatment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;
    let isMounted = true;

    // Función asíncrona local que orquesta dos llamadas del servicio:
    // 1. loadTreatmentWithRetry: carga el tratamiento principal, con
    //    reintentos automáticos si la "red" falla.
    // 2. fetchRelatedTreatments: una vez que sabemos cuál tratamiento es,
    //    carga los relacionados EN PARALELO (Promise.all internamente).
    async function loadPageData() {
      setIsLoading(true);
      setError(null);
      setTreatment(null);

      try {
        const data = await loadTreatmentWithRetry(slug, 2);
        if (!isMounted) return;
        setTreatment(data);

        const relatedData = await fetchRelatedTreatments(slug, 3);
        if (!isMounted) return;
        setRelated(relatedData);
      } catch (err) {
        if (isMounted) {
          setError(
            "No pudimos cargar este tratamiento. Por favor intenta de nuevo o regresa al catálogo."
          );
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadPageData();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  return (
    <div className="min-h-screen bg-ivory text-ink overflow-x-hidden">
      <FloatingNavbar />
      <Breadcrumbs
        items={[
          { label: "Inicio", to: "/" },
          { label: "Tratamientos", to: "/tratamientos" },
          { label: treatment ? treatment.title : "Cargando…" },
        ]}
      />

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          {isLoading && (
            <div className="py-24 text-center text-ink-soft text-[14px]">
              Cargando información del tratamiento…
            </div>
          )}

          {error && (
            <div className="py-24 text-center">
              <p className="text-red-600 text-[14px] mb-5">{error}</p>
              <Link
                to="/tratamientos"
                className="inline-block bg-navy-deep text-white px-7 py-3 text-[13px] font-medium hover:bg-cyan transition-colors"
              >
                Volver al catálogo
              </Link>
            </div>
          )}

          {!isLoading && !error && treatment && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl mb-14"
              >
                <div className="font-display text-[15px] text-gold font-medium mb-4">
                  {treatment.num}
                </div>
                <h1 className="font-display font-normal text-[32px] md:text-[42px] leading-[1.16] text-navy-deep tracking-tight mb-5">
                  {treatment.title}
                </h1>
                <div className="flex gap-2 flex-wrap mb-7">
                  {treatment.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] text-cyan border border-cyan-soft bg-cyan-pale px-3 py-1.5 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-[15.5px] leading-relaxed text-ink-soft font-light">
                  {treatment.fullDesc}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-navy/10 border border-navy/10 mb-16">
                <div className="bg-ivory p-7">
                  <div className="text-[11px] tracking-wide uppercase text-cyan font-semibold mb-2">
                    Duración
                  </div>
                  <div className="font-display text-[16px] text-navy-deep">
                    {treatment.duration}
                  </div>
                </div>
                <div className="bg-ivory p-7">
                  <div className="text-[11px] tracking-wide uppercase text-cyan font-semibold mb-2">
                    Sesiones
                  </div>
                  <div className="font-display text-[16px] text-navy-deep">
                    {treatment.sessions}
                  </div>
                </div>
                <div className="bg-ivory p-7">
                  <div className="text-[11px] tracking-wide uppercase text-cyan font-semibold mb-2">
                    Resultados
                  </div>
                  <div className="font-display text-[16px] text-navy-deep">
                    {treatment.results}
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <Link
                  to="/#contacto"
                  className="inline-block bg-navy-deep text-white px-8 py-4 text-[13.5px] font-medium tracking-wide hover:bg-cyan transition-colors"
                >
                  Agendar valoración para este tratamiento
                </Link>
              </div>

              {related.length > 0 && (
                <div>
                  <h2 className="font-display text-[22px] font-medium text-navy-deep mb-6">
                    Tratamientos relacionados
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {related.map((r) => (
                      <Link
                        key={r.slug}
                        to={`/tratamientos/${r.slug}`}
                        className="block border border-navy/10 p-5 hover:border-cyan transition-colors group"
                      >
                        <h4 className="font-display text-[16px] font-medium text-navy-deep group-hover:text-cyan transition-colors mb-2">
                          {r.title}
                        </h4>
                        <p className="text-[12.5px] text-ink-soft font-light line-clamp-2">
                          {r.shortDesc}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
