import React from 'react';

// Subimos un nivel con '../' para salir de 'components' y entrar a 'assets'
import R9Image from "../assets/R9.png";
import CPUImage from "../assets/CPU.png";
import GWImage from "../assets/GW.png";
import ERImage from "../assets/ER.png";

export default function FeaturedCollection() {
  const games = [
    { title: "Resident Evil: Requiem", img: R9Image, genre: "Survival Horror", price: "$499.00 MXN" },
    { title: "Cyberpunk 2077", img: CPUImage, genre: "RPG Acción", price: "$1,199.00 MXN" },
    { title: "God of War Ragnarök", img: GWImage, genre: "Acción Aventura", price: "$1,399.00 MXN" },
    { title: "Elden Ring", img: ERImage, genre: "Action RPG", price: "$1,299.00 MXN" },
  ];

  return (
    <section className="py-10 px-6">
      <h2 className="text-3xl font-bold text-white mb-8">Colección Destacada</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {games.map((game, index) => (
          <div key={index} className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 p-4">
            <img 
              src={game.img} 
              alt={game.title} 
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="mt-4">
              <h3 className="text-white font-bold text-lg">{game.title}</h3>
              <p className="text-violet-400 text-sm mt-1">{game.genre}</p>
              <p className="text-white font-bold mt-2">{game.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}