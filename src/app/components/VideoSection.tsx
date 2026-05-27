export default function VideoSection() {
  return (
    // HE AGREGADO EL ID AQUÍ:
    <section 
      id="experimenta-futuro" 
      className="relative w-full max-w-7xl mx-auto h-[450px] overflow-hidden rounded-3xl my-12 shadow-2xl scroll-mt-24"
    >
      
      <iframe
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://www.youtube.com/embed/XBIaqOm0RKQ?autoplay=1&mute=1&loop=1&playlist=XBIaqOm0RKQ&controls=0&modestbranding=1"
        title="Gaming Background"
        allow="autoplay; encrypted-media"
      ></iframe>

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent flex flex-col justify-center p-12">
        <div className="max-w-xl">
          <span className="text-purple-400 font-bold tracking-widest uppercase text-sm mb-2 block">
            Nueva Generación
          </span>
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Experimenta el <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Futuro</span>
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Sumérgete en mundos inmersivos, contenido exclusivo y la potencia que tu setup merece. La aventura comienza aquí.
          </p>
          
          <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-purple-500 hover:text-white transition-all duration-300">
            Ver más
          </button>
        </div>
      </div>
    </section>
  );
}