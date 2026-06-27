import { motion } from "motion/react";
import { Link } from "react-router";

const services = [
  {
    num: "01",
    slug: "bioestimulacion-facial",
    title: "Bioestimulación facial",
    tags: ["Colágeno", "Firmeza"],
    desc: "Activa la producción natural de colágeno y elastina mediante bioestimuladores de última generación, devolviendo densidad y firmeza a la piel desde la dermis profunda.",
  },
  {
    num: "02",
    slug: "acido-hialuronico",
    title: "Ácido hialurónico de alta densidad",
    tags: ["Volumen", "Contorno"],
    desc: "Restauración de volumen en pómulos, óvalo facial y surcos nasogenianos con técnica de microcánula, priorizando resultados naturales y proporcionados.",
  },
  {
    num: "03",
    slug: "toxina-botulinica",
    title: "Toxina botulínica terapéutica",
    tags: ["Líneas de expresión", "Prevención"],
    desc: "Suaviza líneas dinámicas en frente, entrecejo y patas de gallo, con dosificación milimétrica que respeta la expresividad natural del rostro.",
  },
  {
    num: "04",
    slug: "hilos-tensores",
    title: "Hilos tensores PDO",
    tags: ["Lifting", "Sin cirugía"],
    desc: "Efecto lifting inmediato y progresivo mediante hilos reabsorbibles que estimulan colágeno nuevo mientras reposicionan tejidos descendidos.",
  },
  {
    num: "05",
    slug: "skinbooster",
    title: "Skinbooster y mesoterapia",
    tags: ["Hidratación profunda", "Luminosidad"],
    desc: "Hidratación intradérmica de larga duración que mejora textura, elasticidad y luminosidad sin alterar volúmenes faciales.",
  },
  {
    num: "06",
    slug: "plasma-rico-plaquetas",
    title: "Rejuvenecimiento con plasma rico en plaquetas",
    tags: ["Regeneración celular", "100% autólogo"],
    desc: "Tu propio plasma concentrado, reinyectado para acelerar la regeneración celular y mejorar la calidad general de la piel de forma biocompatible.",
  },
];

export default function ProductGrid() {
  return (
    <section id="servicios" className="py-28 md:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="w-7 h-px bg-gold" />
            <span className="text-[12px] tracking-[0.18em] uppercase text-cyan font-semibold">
              Tratamientos faciales
            </span>
          </div>
          <h2 className="font-display font-normal text-[30px] md:text-[40px] leading-[1.16] text-navy-deep tracking-tight">
            Un protocolo distinto para cada tipo de piel, cada edad y cada
            objetivo.
          </h2>
          <p className="text-[15.5px] text-ink-soft leading-relaxed font-light mt-5">
            Cada tratamiento parte de un diagnóstico individual. No ofrecemos
            paquetes genéricos: construimos el plan facial según tu biotipo de
            piel, tu edad biológica y tus metas estéticas.
          </p>
        </motion.div>

        <div className="flex flex-col">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group grid grid-cols-1 md:grid-cols-[90px_1fr_1.1fr] gap-6 md:gap-10 py-10 border-t border-navy/10 ${
                i === services.length - 1 ? "border-b" : ""
              }`}
            >
              <div className="font-display text-[15px] text-gold font-medium pt-1 group-hover:text-cyan transition-colors">
                {s.num}
              </div>
              <div>
                <Link to={`/tratamientos/${s.slug}`}>
                  <h3 className="font-display text-[24px] md:text-[25px] font-medium text-navy-deep mb-3 tracking-tight hover:text-cyan transition-colors">
                    {s.title}
                  </h3>
                </Link>
                <div className="flex gap-2 flex-wrap">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] text-cyan border border-cyan-soft bg-cyan-pale px-3 py-1.5 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[14.5px] leading-relaxed text-ink-soft font-light">
                  {s.desc}
                </p>
                <Link
                  to={`/tratamientos/${s.slug}`}
                  className="inline-flex items-center gap-2 mt-4 text-[13px] font-medium text-navy-deep border-b border-transparent hover:border-navy-deep hover:text-cyan transition-colors"
                >
                  Conocer protocolo →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
