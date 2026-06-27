import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { submitContactForm } from "../services/treatmentsService";

type SubmitState = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState("Bioestimulación facial");
  const [status, setStatus] = useState<SubmitState>("idle");
  const [feedback, setFeedback] = useState("");

  // Handler asíncrono del formulario: llama a submitContactForm (una de las
  // funciones documentadas en services/treatmentsService.ts), maneja el
  // estado de carga mientras "viaja" la solicitud, y muestra éxito o error
  // según la respuesta de la promesa.
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const result = await submitContactForm({ name, phone, interest });
      setStatus("success");
      setFeedback(result.message);
      setName("");
      setPhone("");
    } catch (err) {
      setStatus("error");
      setFeedback(
        err instanceof Error
          ? err.message
          : "Ocurrió un error al enviar tu solicitud."
      );
    }
  }

  return (
    <section id="contacto" className="py-28 md:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-navy-deep relative overflow-hidden grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center px-8 md:px-16 py-16 md:py-20"
        >
          <div
            className="absolute -right-24 -top-24 w-[340px] h-[340px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(0,138,196,0.25), transparent 70%)",
            }}
          />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-7 h-px bg-gold" />
              <span className="text-[12px] tracking-[0.18em] uppercase text-cyan font-semibold">
                Valoración inicial
              </span>
            </div>
            <h2 className="font-display font-normal text-[28px] md:text-[36px] text-white leading-[1.2] tracking-tight mb-5">
              El primer paso es un diagnóstico, no una venta.
            </h2>
            <p className="text-[15px] leading-relaxed text-white/60 font-light max-w-[420px]">
              Agenda tu valoración facial sin costo de diagnóstico. Evaluamos
              tu piel y te decimos con honestidad qué protocolo tiene sentido
              para ti — y cuál no.
            </p>
          </div>

          <form
            className="relative z-10 bg-white p-9"
            onSubmit={handleSubmit}
          >
            <div className="mb-[18px]">
              <label
                htmlFor="name"
                className="block text-[11.5px] tracking-wide uppercase text-ink-soft font-semibold mb-2"
              >
                Nombre completo
              </label>
              <input
                id="name"
                type="text"
                placeholder="Tu nombre"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={status === "loading"}
                className="w-full border border-navy/10 bg-cyan-pale px-3.5 py-3 text-[14px] text-ink focus:outline focus:outline-[1.5px] focus:outline-cyan disabled:opacity-60"
              />
            </div>
            <div className="mb-[18px]">
              <label
                htmlFor="phone"
                className="block text-[11.5px] tracking-wide uppercase text-ink-soft font-semibold mb-2"
              >
                Teléfono / WhatsApp
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="+52 686 000 0000"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                disabled={status === "loading"}
                className="w-full border border-navy/10 bg-cyan-pale px-3.5 py-3 text-[14px] text-ink focus:outline focus:outline-[1.5px] focus:outline-cyan disabled:opacity-60"
              />
            </div>
            <div className="mb-[18px]">
              <label
                htmlFor="interest"
                className="block text-[11.5px] tracking-wide uppercase text-ink-soft font-semibold mb-2"
              >
                Tratamiento de interés
              </label>
              <select
                id="interest"
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                disabled={status === "loading"}
                className="w-full border border-navy/10 bg-cyan-pale px-3.5 py-3 text-[14px] text-ink focus:outline focus:outline-[1.5px] focus:outline-cyan disabled:opacity-60"
              >
                <option>Bioestimulación facial</option>
                <option>Ácido hialurónico</option>
                <option>Toxina botulínica</option>
                <option>Hilos tensores</option>
                <option>Skinbooster</option>
                <option>No estoy seguro / quiero diagnóstico</option>
              </select>
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-navy-deep text-white py-3.5 text-[13.5px] font-medium tracking-wide hover:bg-cyan transition-colors mt-1.5 disabled:opacity-70"
            >
              {status === "loading" ? "Enviando…" : "Solicitar valoración"}
            </button>

            {status === "success" && (
              <p className="mt-4 text-[13px] text-cyan font-medium">
                {feedback}
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 text-[13px] text-red-600 font-medium">
                {feedback}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
