import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import Footer from "../components/Footer";

import imgPrincipal from "../assets/servicios/aridos.png";
import galeria1 from "../assets/obras/aridos/aridos1.png";
import galeria2 from "../assets/obras/aridos/aridos2.png";
import galeria3 from "../assets/obras/aridos/aridos3.png";
import galeria4 from "../assets/obras/aridos/aridos4.png";
import galeria5 from "../assets/obras/aridos/aridos5.png";

const Aridos = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero con texto institucional */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <img
          src={imgPrincipal}
          alt="Producción de Áridos"
          className="w-full h-full object-cover object-center"
        />

        <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white px-6 py-4 md:py-6">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold">Producción de Áridos</h1>
            <p className="text-sm md:text-base text-gray-200">
              Variedad, calidad y volumen para el abastecimiento continuo
            </p>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        {/* Frase institucional */}
        <div className="bg-gray-100 border-l-4 border-brand-orange p-6">
          <p className="text-sm md:text-base text-gray-700 font-medium">
            Nuestra planta procesadora garantiza calidad constante en áridos para hormigones, albañilería y obras especiales.
          </p>
        </div>

        {/* Descripción */}
        <div>
          <h2 className="text-xl font-semibold text-brand-blue mb-4">Servicios y productos</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Contamos con una planta productora de áridos equipada para abastecer obras civiles, viales y mineras. Nuestros materiales cumplen con los estándares técnicos requeridos y son clasificados según su granulometría y destino de uso.
          </p>
        </div>

        {/* Catálogo de áridos */}
        <div>
          <h2 className="text-xl font-semibold text-brand-blue mb-4">Materiales disponibles</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 list-disc list-inside text-sm text-gray-700">
            <li>Arena lavada para hormigones</li>
            <li>Arena lavada para albañilería (10-12 mm / 6 mm máx.)</li>
            <li>Arena fina albañilería (4 mm máx.)</li>
            <li>Arena común (9 mm máx.)</li>
            <li>Arena de trituración</li>
            <li>Arena para bloque en playa (14 mm máx.)</li>
            <li>Ripio triturado</li>
            <li>Ripio lavado del 1 al 3 (hormigones)</li>
            <li>Ripio lavado del 1 al 5 (hormigones)</li>
            <li>Ripio lavado 9–19 mm máx. (hormigones)</li>
            <li>Ripio grillado común en playa</li>
            <li>Descarte de grilla en playa</li>
            <li>Granza lavada (6–12 mm máx.)</li>
            <li>Binder (5 mm máx.)</li>
            <li>Enlame de playa de río</li>
            <li>Aluvión común – playa de río</li>
            <li>Piedra Bola</li>
          </ul>
        </div>

        {/* Galería interactiva */}
        <div>
          <h2 className="text-xl font-semibold text-brand-blue mb-4">Galería</h2>
          <PhotoProvider>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[galeria1, galeria2, galeria3, galeria4, galeria5].map((img, idx) => (
                <PhotoView key={idx} src={img}>
                  <img
                    src={img}
                    alt={`Galería áridos ${idx + 1}`}
                    className="w-full h-48 object-cover cursor-zoom-in"
                  />
                </PhotoView>
              ))}
            </div>
          </PhotoProvider>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Aridos;
