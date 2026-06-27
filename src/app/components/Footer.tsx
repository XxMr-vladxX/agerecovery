import logoSymbol from "../assets/logo-symbol.png";

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white/70 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1">
          <div className="flex items-center gap-3 mb-5">
            <img src={logoSymbol} alt="Age Recovery" className="h-8 w-auto" />
            <span className="font-display text-[17px] text-white font-medium">
              Age Recovery
            </span>
          </div>
          <p className="text-[13.5px] leading-relaxed text-white/55 font-light max-w-[260px]">
            Medicina estética y antienvejecimiento facial, con diagnóstico
            clínico individual en cada protocolo.
          </p>
        </div>

        <div>
          <h6 className="text-[11.5px] tracking-wider uppercase text-white/40 font-semibold mb-5">
            Tratamientos
          </h6>
          <ul className="space-y-3 text-[13.5px] font-light">
            <li>
              <a href="#servicios" className="hover:text-cyan transition-colors">
                Bioestimulación
              </a>
            </li>
            <li>
              <a href="#servicios" className="hover:text-cyan transition-colors">
                Ácido hialurónico
              </a>
            </li>
            <li>
              <a href="#servicios" className="hover:text-cyan transition-colors">
                Toxina botulínica
              </a>
            </li>
            <li>
              <a href="#servicios" className="hover:text-cyan transition-colors">
                Hilos tensores
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h6 className="text-[11.5px] tracking-wider uppercase text-white/40 font-semibold mb-5">
            Clínica
          </h6>
          <ul className="space-y-3 text-[13.5px] font-light">
            <li>
              <a href="#metodo" className="hover:text-cyan transition-colors">
                Nuestro método
              </a>
            </li>
            <li>
              <a href="#filosofia" className="hover:text-cyan transition-colors">
                Filosofía
              </a>
            </li>
            <li>
              <a href="#resultados" className="hover:text-cyan transition-colors">
                Casos clínicos
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h6 className="text-[11.5px] tracking-wider uppercase text-white/40 font-semibold mb-5">
            Contacto
          </h6>
          <ul className="space-y-3 text-[13.5px] font-light">
            <li>
              <a href="#contacto" className="hover:text-cyan transition-colors">
                Agendar valoración
              </a>
            </li>
            <li>
              <a href="#contacto" className="hover:text-cyan transition-colors">
                WhatsApp directo
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-7 border-t border-white/10 flex flex-wrap justify-between gap-2 text-[12px] text-white/40">
        <span>© 2026 Age Recovery. Medicina estética y antienvejecimiento.</span>
        <span>Diseño y desarrollo web</span>
      </div>
    </footer>
  );
}
