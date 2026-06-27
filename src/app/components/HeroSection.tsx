import { motion } from "motion/react";
import { Link } from "react-router";

export default function HeroSection() {
  return (
    <section className="relative pt-44 md:pt-48 pb-0 overflow-hidden bg-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-7">
              <span className="w-7 h-px bg-gold" />
              <span className="text-[12px] tracking-[0.18em] uppercase text-cyan font-semibold">
                Medicina estética facial
              </span>
            </div>

            <h1 className="font-display font-normal text-[40px] md:text-[56px] lg:text-[62px] leading-[1.06] text-navy-deep tracking-tight mb-7">
              La piel también <em className="italic font-normal text-cyan">envejece con ciencia.</em>{" "}
              Que se recupere con ella.
            </h1>

            <p className="text-[17px] leading-relaxed text-ink-soft font-light max-w-[460px] mb-10">
              En Age Recovery combinamos medicina estética avanzada y
              protocolos personalizados para restaurar la firmeza,
              luminosidad y estructura natural de tu rostro — sin perder lo
              que te hace reconocible.
            </p>

            <div className="flex flex-wrap items-center gap-5 mb-14">
              <Link
                to="/contacto"
                className="bg-navy-deep text-white px-8 py-4 text-[13.5px] font-medium tracking-wide hover:bg-cyan transition-colors"
              >
                Agendar valoración
              </Link>
              <Link
                to="/tratamientos"
                className="flex items-center gap-2 text-[13.5px] font-medium text-navy-deep border-b border-navy-deep pb-1 hover:text-cyan hover:border-cyan transition-colors"
              >
                Ver tratamientos →
              </Link>
            </div>

            <div className="flex gap-11 pt-8 border-t border-navy/10 max-w-[460px]">
              <div>
                <div className="font-display text-[30px] font-medium text-navy-deep leading-none">
                  12+
                </div>
                <div className="text-[11.5px] text-ink-soft mt-1.5">
                  Años de práctica clínica
                </div>
              </div>
              <div>
                <div className="font-display text-[30px] font-medium text-navy-deep leading-none">
                  12
                </div>
                <div className="text-[11.5px] text-ink-soft mt-1.5">
                  Protocolos faciales
                </div>
              </div>
              <div>
                <div className="font-display text-[30px] font-medium text-navy-deep leading-none">
                  98%
                </div>
                <div className="text-[11.5px] text-ink-soft mt-1.5">
                  Pacientes recurrentes
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[460px] md:h-[560px]"
          >
            <div
              className="relative w-full h-full overflow-hidden"
              style={{
                background:
                  "linear-gradient(165deg, #0A5A8E 0%, #00263F 55%, #001D33 100%)",
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 70% 20%, rgba(0,138,196,0.35), transparent 60%)",
                }}
              />
              <svg
                className="absolute -right-10 -top-10 w-[320px] opacity-90"
                viewBox="0 0 200 400"
                fill="none"
              >
                <path
                  d="M100 0C60 50 60 100 100 150C140 200 140 250 100 300C60 350 60 380 100 400"
                  stroke="#FFFFFF"
                  strokeOpacity="0.18"
                  strokeWidth="14"
                />
                <path
                  d="M100 0C140 50 140 100 100 150C60 200 60 250 100 300C140 350 140 380 100 400"
                  stroke="#FFFFFF"
                  strokeOpacity="0.1"
                  strokeWidth="14"
                />
              </svg>
            </div>

            <div className="absolute -left-6 md:-left-8 bottom-12 bg-white px-6 py-5 shadow-xl max-w-[230px]">
              <div className="font-display text-[26px] font-medium text-cyan">
                360°
              </div>
              <p className="text-[12.5px] text-ink-soft leading-snug mt-1.5">
                Diagnóstico facial completo antes de cada protocolo, sin
                excepciones.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <svg
        className="w-full h-[70px] mt-10"
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
      >
        <path
          d="M0 50 C 240 10, 480 90, 720 50 S 1200 10, 1440 50"
          stroke="#008AC4"
          strokeOpacity="0.18"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </section>
  );
}
