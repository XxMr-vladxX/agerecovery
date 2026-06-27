import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-ivory flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="font-display text-[64px] font-medium text-navy-deep mb-4">
          404
        </h1>
        <p className="text-ink-soft mb-8 font-light">
          Esta página no existe o fue movida.
        </p>
        <Link
          to="/"
          className="inline-block px-7 py-3.5 bg-navy-deep text-white text-[13.5px] font-medium tracking-wide hover:bg-cyan transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
