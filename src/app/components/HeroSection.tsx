import { motion } from "motion/react";
import { Play, Star, Users } from "lucide-react";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Mesh Gradient Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-indigo-600/30 via-violet-600/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-violet-700/20 via-purple-600/10 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Left Content - 2/3 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20"
            >
              <span className="w-2 h-2 bg-violet-400 rounded-full animate-pulse" />
              <span className="text-violet-300 text-sm font-light tracking-wide">
                Lanzamiento Exclusivo
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-7xl lg:text-8xl font-bold tracking-tight"
            >
              <span className="bg-gradient-to-r from-white via-violet-200 to-white bg-clip-text text-transparent">
                Cyber Nexus
              </span>
              <br />
              <span className="text-5xl lg:text-6xl text-gray-400 font-light tracking-normal">
                Edición Digital
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-xl text-gray-400 max-w-2xl leading-relaxed font-light"
            >
              Sumérgete en un universo cyberpunk donde cada decisión moldea el
              destino de Neo-Tokyo. Gráficos de última generación con ray
              tracing completo.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center gap-8"
            >
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="text-white font-semibold">4.9</span>
                <span className="text-gray-500 text-sm">(12.5k reviews)</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-violet-400" />
                <span className="text-white font-semibold">2.3M</span>
                <span className="text-gray-500 text-sm">jugadores</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex items-center gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white px-8 py-6 text-lg shadow-lg shadow-violet-500/50 transition-all hover:shadow-violet-500/70 hover:scale-105"
              >
                Comprar ahora - $59.99
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-700 hover:border-violet-500 hover:bg-violet-500/10 text-white px-6 py-6 text-lg flex items-center gap-2 transition-all"
              >
                <Play className="w-5 h-5" />
                Ver trailer
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Image - 1/3 with radial gradient */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-radial from-violet-500/30 via-transparent to-transparent blur-2xl" />
            <div
              className="relative rounded-3xl overflow-hidden border border-violet-500/20 shadow-2xl shadow-violet-500/20"
              style={{
                background:
                  "linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(67, 56, 202, 0.05) 100%)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1672872476232-da16b45c9001?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBmdXR1cmlzdGljJTIwZ2FtZSUyMG5lb258ZW58MXx8fHwxNzc5NTE4NTkyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Cyber Nexus Game"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
