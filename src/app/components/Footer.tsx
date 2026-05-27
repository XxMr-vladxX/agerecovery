import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Columna 1: Branding y Redes Sociales */}
        <div className="col-span-1">
          <h2 className="text-white text-2xl font-bold mb-4">GameVerse</h2>
          <p className="text-sm leading-relaxed mb-6">
            Conectando jugadores con los mundos que definen la próxima era del gaming.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors duration-200">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              <Youtube className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Columna 2: Explorar */}
        <div>
          <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Explorar</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-purple-400 transition">Biblioteca de Juegos</a></li>
            <li><a href="#" className="hover:text-purple-400 transition">Ofertas de Temporada</a></li>
            <li><a href="#" className="hover:text-purple-400 transition">Próximos Lanzamientos</a></li>
          </ul>
        </div>

        {/* Columna 3: Servicios */}
        <div>
          <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Servicios</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-purple-400 transition">Estado de Servidores</a></li>
            <li><a href="#" className="hover:text-purple-400 transition">Soporte Técnico</a></li>
            <li><a href="#" className="hover:text-purple-400 transition">Comunidad / Discord</a></li>
          </ul>
        </div>

        {/* Columna 4: Legal */}
        <div>
          <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Legal</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-purple-400 transition">Política de Privacidad</a></li>
            <li><a href="#" className="hover:text-purple-400 transition">Términos de Servicio</a></li>
            <li><a href="#" className="hover:text-purple-400 transition">Reembolsos</a></li>
          </ul>
        </div>
      </div>

      {/* Pie inferior */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-800 text-xs text-gray-500">
        <p>© 2026 GameVerse. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}