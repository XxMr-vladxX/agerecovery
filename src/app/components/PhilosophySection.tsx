import { motion } from "motion/react";

export default function PhilosophySection() {
  return (
    <>
      <section id="filosofia" className="bg-cyan-pale py-28 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/5] overflow-hidden border border-navy/10"
              style={{
                background:
                  "linear-gradient(155deg, #ffffff 0%, #E7F3F8 60%, #cfe8f1 100%)",
              }}
            >
              <div className="absolute top-9 left-9 font-display text-[90px] text-cyan opacity-25 leading-none">
                "
              </div>
              <div className="absolute inset-6 border border-navy/15" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-7 h-px bg-gold" />
                <span className="text-[12px] tracking-[0.18em] uppercase text-cyan font-semibold">
                  Nuestra filosofía
                </span>
              </div>
              <h2 className="font-display font-normal text-[28px] md:text-[36px] leading-[1.22] text-navy-deep tracking-tight mb-6">
                No tratamos arrugas. Tratamos el proceso completo de
                envejecimiento.
              </h2>
              <p className="text-[15.5px] leading-relaxed text-ink-soft font-light mb-4">
                Creemos que la medicina estética facial bien hecha no se nota
                como intervención: se nota como descanso, como salud, como
                una versión de ti con más energía celular.
              </p>
              <p className="text-[15.5px] leading-relaxed text-ink-soft font-light mb-8">
                Por eso cada protocolo en Age Recovery combina diagnóstico
                clínico, biotecnología y un criterio estético conservador — el
                mismo que aplicaríamos en nuestra propia piel.
              </p>
              <div className="pt-7 border-t border-navy/10">
                <div className="font-display italic text-[19px] text-navy-deep">
                  Age Recovery
                </div>
                <div className="text-[12px] text-ink-soft mt-0.5">
                  Medicina estética y antienvejecimiento
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-navy-deep py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <motion.blockquote
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="font-display italic font-normal text-[22px] md:text-[28px] text-white leading-snug mb-6"
          >
            "Lo que más valoro de Age Recovery es que nunca buscan que te veas
            distinta — buscan que te veas descansada. Eso es lo que
            diferencia un buen diagnóstico de uno genérico."
          </motion.blockquote>
          <cite className="text-[12.5px] tracking-wide uppercase text-cyan font-semibold not-italic">
            Paciente de bioestimulación facial, 3 sesiones
          </cite>
        </div>
      </section>
    </>
  );
}
