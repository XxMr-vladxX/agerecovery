import { ShoppingCart, Search, User } from "lucide-react";

export default function FloatingNavbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-violet-500 font-bold text-2xl">🎮</span>
          <h1 className="text-xl font-bold text-white">GameVerse</h1>
        </div>

        {/* Navegación */}
        <div className="flex gap-8 text-sm text-gray-300">
          <a href="/" className="hover:text-white transition-colors">
            Home
          </a>
          <a href="#coleccion-destacada" className="hover:text-white transition-colors">
            Colección Destacada
          </a>
          {/* Este enlace apunta directamente al ID de tu VideoSection */}
          <a href="#experimenta-futuro" className="hover:text-white transition-colors">
            Experimenta el Futuro
          </a>
        </div>

        {/* Iconos */}
        <div className="flex items-center gap-6 text-gray-400">
          <Search className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
          <User className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
          <div className="relative">
            <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
            <span className="absolute -top-2 -right-2 bg-violet-600 text-[10px] text-white w-4 h-4 flex items-center justify-center rounded-full">
              3
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}