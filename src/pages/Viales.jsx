import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import imgPrincipal from "../assets/servicios/1.png";
import galeria1 from "../assets/servicios/1.png";
import galeria2 from "../assets/servicios/1.png";

const Viales = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <img
          src={imgPrincipal}
          alt="Obras Viales"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white px-6 py-4 md:py-6">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold">Obras Viales</h1>
            <p className="text-sm md:text-base text-gray-200">
              Infraestructura vial a gran escala
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        {/* Frase */}
        <div className="bg-gray-100 border-l-4 border-brand-orange p-6">
          <p className="text-sm md:text-base text-gray-700 font-medium">
            Construimos y rehabilitamos caminos que conectan comunidades y mueven la economía.
          </p>
        </div>

        {/* Resultados */}
        <div>
          <h2 className="text-xl font-semibold text-brand-blue mb-6">Resultados alcanzados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm">
            <div>
              <p className="font-semibold text-brand-blue">Años de experiencia</p>
              <p>36 años</p>
            </div>
            <div>
              <p className="font-semibold text-brand-blue">Superficie vial ejecutada</p>
              <p>1.066.296 m²</p>
            </div>
            <div>
              <p className="font-semibold text-brand-blue">Cantidad de obras</p>
              <p>47 obras viales</p>
            </div>
          </div>
        </div>

        {/* Descripción */}
        <div>
          <h2 className="text-xl font-semibold text-brand-blue mb-4">Descripción</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Realizamos obras como: aperturas de calles, abovedado, perfilado y nivelación, enripiados, accesos, construcción de cordones cuneta, mejoramientos viales, pavimentaciones, carpeta de concreto asfáltico, bacheos, imprimaciones, calzadas de hormigón armado y estructuras especiales como puentes.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Contamos con un laboratorio propio de ensayos de granulometría y asfalto, una planta de concreto asfáltico Ross – Mix (60-90 Tn/h), terminadoras de asfalto y maquinaria específica para cada tipo de obra.
          </p>
        </div>

        {/* Obras Viales Detalladas */}
        <div>
          <h2 className="text-xl font-semibold text-brand-blue mb-6">Obras ejecutadas</h2>
          <ul className="space-y-4 text-sm text-gray-700">
            <li>
              <strong>Mejora y ampliación del sistema de agua potable:</strong> San Antonio (Concreto asfáltico en caliente)<br />
              Comitente: Silvia Peuser de Vallespinos Ingeniería-Arquitectura
            </li>
            <li>
              <strong>Corredor vial Paso de Jama:</strong> Provincia de Jujuy (Concreto asfáltico en caliente)<br />
              Comitente: Benito Roggio e Hijos S.A.
            </li>
            <li>
              <strong>Bacheo y repavimentación Barrio Centro (Etapa I):</strong> S.S. de Jujuy (Concreto asfáltico en caliente)<br />
              Comitente: Dirección Provincial de Vialidad - Jujuy
            </li>
            <li>
              <strong>Ruta Prov. Nº 83 – Puentes Río Sunchal y Santa Rosa:</strong> Valle Grande (Hormigón)<br />
              Comitente: Dirección Provincial de Vialidad - Jujuy
            </li>
            <li>
              <strong>Repavimentación de calles (Etapa I):</strong> San Salvador de Jujuy (Concreto asfáltico en caliente)<br />
              Comitente: Municipalidad de San Salvador de Jujuy
            </li>
          </ul>
        </div>

        {/* Galería */}
        <div>
          <h2 className="text-xl font-semibold text-brand-blue mb-4">Galería</h2>
          <PhotoProvider>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[galeria1, galeria2].map((img, idx) => (
                <PhotoView key={idx} src={img}>
                  <img
                    src={img}
                    alt={`Galería vial ${idx + 1}`}
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

export default Viales;
