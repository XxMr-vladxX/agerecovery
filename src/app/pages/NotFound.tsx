import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050608] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent mb-4">
          404
        </h1>
        <p className="text-gray-400 mb-8">Página no encontrada</p>
        <Link
          to="/"
          className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:from-indigo-500 hover:to-violet-500 transition-all"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
