import { motion } from "motion/react";

const cases = [
  {
    label: "Caso 01",
    title: "Bioestimulación + skinbooster",
    gradient: "linear-gradient(165deg, #0A5A8E, #00263F)",
  },
  {
    label: "Caso 02",
    title: "Hilos tensores PDO",
    gradient: "linear-gradient(165deg, #008AC4, #005d87)",
  },
  {
    label: "Caso 03",
    title: "Ácido hialurónico de pómulos",
    gradient: "linear-gradient(165deg, #0d4670, #001D33)",
  },
];

export default function ResultsSection() {
  return (
    <section id="resultados" className="py-28 md:py-32 bg-ivory">
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
              Casos clínicos
            </span>
          </div>
          <h2 className="font-display font-normal text-[30px] md:text-[40px] leading-[1.16] text-navy-deep tracking-tight">
            Resultados documentados, piel por piel.
          </h2>
          <p className="text-[15.5px] text-ink-soft leading-relaxed font-light mt-5">
            Espacio reservado para fotografía clínica antes/después de
            pacientes reales, con consentimiento informado.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="aspect-[3/4] relative flex items-end overflow-hidden"
              style={{ background: c.gradient }}
            >
              <div className="m-5 bg-white/95 px-5 py-3.5 w-[calc(100%-2.5rem)]">
                <p className="text-[11px] tracking-wide uppercase text-cyan font-semibold">
                  {c.label}
                </p>
                <h5 className="font-display text-[16px] text-navy-deep font-medium mt-1">
                  {c.title}
                </h5>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
