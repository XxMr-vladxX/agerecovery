import { motion } from "motion/react";
import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

// IMPORTACIÓN DIRECTA (subiendo dos niveles desde src/app/components)
// Reemplaza tus líneas de importación actuales por estas:
import R9Image from "/src/app/assets/R9.png";
import CPUImage from "/src/app/assets/CPU.png";
import GWImage from "/src/app/assets/GW.png";
import ERImage from "/src/app/assets/ER.png";

const products = [
  { id: 1, title: "Resident Evil: Requiem", category: "Survival Horror", price: "499.00", image: R9Image },
  { id: 2, title: "Cyberpunk 2077", category: "RPG Acción", price: "1,199.00", image: CPUImage },
  { id: 3, title: "God of War Ragnarök", category: "Acción Aventura", price: "1,399.00", image: GWImage },
  { id: 4, title: "Elden Ring", category: "Action RPG", price: "1,299.00", image: ERImage },
];

export default function ProductGrid() {
  return (
    <section id="coleccion-destacada" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="bg-black/40 border-gray-800 p-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-4">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover" 
                  onError={(e) => {
                    console.error("Error al cargar:", product.image);
                    e.currentTarget.src = "https://via.placeholder.com/300"; // Fallback visual
                  }}
                />
              </div>
              <h3 className="text-lg font-semibold text-white">{product.title}</h3>
              <p className="text-violet-400 text-sm mb-2">{product.category}</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-white">${product.price} MXN</span>
                <Button size="sm" className="bg-violet-600">
                  <ShoppingCart className="w-4 h-4 mr-2" /> Agregar
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}