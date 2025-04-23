import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

import imgPrincipal from "../assets/servicios/minera.png";
import galeria1 from "../assets/obras/minero/minero1.png";
import galeria2 from "../assets/obras/minero/minero2.png";
import galeria3 from "../assets/obras/minero/minero3.png";
import galeria4 from "../assets/obras/minero/minero4.png";
import galeria5 from "../assets/obras/minero/minero5.png";
import galeria6 from "../assets/obras/minero/minero6.png";
import galeria7 from "../assets/obras/minero/minero7.png";
import galeria8 from "../assets/obras/minero/minero8.png";

const Mineros = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <img
          src={imgPrincipal}
          alt="Servicios Mineros"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white px-6 py-4 md:py-6">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold">Servicios Mineros</h1>
            <p className="text-sm md:text-base text-gray-200">
              Movimiento de suelos y equipamiento especializado
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        {/* Frase */}
        <div className="bg-gray-100 border-l-4 border-brand-orange p-6">
          <p className="text-sm md:text-base text-gray-700 font-medium">
            Comprometidos con la industria minera a través de logística, infraestructura y maquinaria propia.
          </p>
        </div>

        {/* Resultados */}
        <div>
          <h2 className="text-xl font-semibold text-brand-blue mb-6">Resultados alcanzados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm">
            <div>
              <p className="font-semibold text-brand-blue">Años de experiencia</p>
              <p>17 años</p>
            </div>
            <div>
              <p className="font-semibold text-brand-blue">Movimiento de suelos</p>
              <p>5.683.160 m³</p>
            </div>
            <div>
              <p className="font-semibold text-brand-blue">Obras ejecutadas</p>
              <p>11 proyectos mineros</p>
            </div>
          </div>
        </div>

        {/* Descripción */}
        <div>
          <h2 className="text-xl font-semibold text-brand-blue mb-4">Descripción</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Realizamos movimientos de suelos y obras de infraestructura para el sector minero. Contamos con maquinaria pesada y un taller propio para mantenimiento y logística interna. Además, ofrecemos alquiler de camionetas y equipos específicos para proyectos en altura o de gran escala.
          </p>
        </div>

        {/* Equipamiento */}
        <div>
          <h2 className="text-xl font-semibold text-brand-blue mb-4">Equipamiento disponible</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 list-disc list-inside text-sm text-gray-700">
            <li>Rodillos</li>
            <li>Acoplados</li>
            <li>Carretones</li>
            <li>Camionetas</li>
            <li>Barredoras</li>
            <li>Aplanadoras</li>
            <li>Hormigoneras</li>
            <li>Motoniveladoras</li>
            <li>Retroexcavadoras</li>
            <li>Tanques regadores</li>
            <li>Camiones volcadores</li>
            <li>Cargadoras frontales</li>
            <li>Generadores eléctricos</li>
            <li>Excavadoras sobre oruga</li>
          </ul>
        </div>

        {/* Obras Mineras Detalladas */}
        <div>
          <h2 className="text-xl font-semibold text-brand-blue mb-6">Obras ejecutadas</h2>
          <ul className="space-y-4 text-sm text-gray-700">
            <li>
              <strong>Construcción Pozas de Acumulación PDA1:</strong><br />
              Cauchari, Susques, 85.000 m³<br />
              Comitente: Minera Exar S.A.
            </li>
            <li>
              <strong>Construcción Pozas de Acumulación:</strong><br />
              Arriendo de equipos pesados sin operador, Cauchari, 5.000.000 m³<br />
              UTE E-V-M / Minera Exar S.A.
            </li>
            <li>
              <strong>Reparación de Caminos de Cosecha:</strong><br />
              Salar de Olaroz, Cauchari, 12.500 m³<br />
              Comitente: Minera Exar S.A.
            </li>
          </ul>
        </div>

        {/* Galería */}
        <div>
          <h2 className="text-xl font-semibold text-brand-blue mb-4">Galería</h2>
          <PhotoProvider>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[galeria1, galeria2, galeria3, galeria4, galeria5, galeria6, galeria7, galeria8].map((img, idx) => (
                <PhotoView key={idx} src={img}>
                  <img
                    src={img}
                    alt={`Galería minera ${idx + 1}`}
                    className="w-full h-48 object-cover cursor-zoom-in"
                  />
                </PhotoView>
              ))}
            </div>
          </PhotoProvider>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-brand-blue text-white py-6 mt-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Vapeu. Todos los derechos reservados.</p>
          <div className="mt-3 md:mt-0 flex gap-4">
            <a href="#inicio" className="hover:text-brand-orange transition">Inicio</a>
            <a href="#servicios" className="hover:text-brand-orange transition">Servicios</a>
            <a href="#contacto" className="hover:text-brand-orange transition">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Mineros;
