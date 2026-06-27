import { Link } from "react-router";
import logoSymbol from "../assets/logo-symbol.png";

export default function FloatingNavbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-ivory/90 backdrop-blur-md border-b border-navy/10 px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logoSymbol} alt="Age Recovery" className="h-10 w-auto" />
          <div className="leading-tight">
            <h1 className="text-[19px] font-display font-medium text-navy-deep tracking-tight">
              Age Recovery
            </h1>
            <span className="block text-[9.5px] font-sans font-semibold tracking-[0.16em] text-cyan uppercase">
              Medicina estética
            </span>
          </div>
        </Link>

        {/* Navegación */}
        <div className="hidden md:flex gap-10 text-[13.5px] text-ink-soft font-medium">
          <Link to="/medico" className="hover:text-navy transition-colors">
            Dr. Responsable
          </Link>
          <Link to="/tratamientos" className="hover:text-navy transition-colors">
            Tratamientos
          </Link>
          <Link to="/metodo" className="hover:text-navy transition-colors">
            Método
          </Link>
          <Link to="/filosofia" className="hover:text-navy transition-colors">
            Filosofía
          </Link>
          <Link to="/contacto" className="hover:text-navy transition-colors">
            Contacto
          </Link>
        </div>

        {/* CTA */}
        <Link
          to="/contacto"
          className="bg-navy-deep text-white px-6 py-[11px] text-[13px] font-medium tracking-wide hover:bg-cyan transition-colors"
        >
          Agendar valoración
        </Link>
      </div>
    </nav>
  );
}
