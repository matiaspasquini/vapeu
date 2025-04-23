import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

import imgPrincipal from "../assets/servicios/civiles.png";

import galeria2 from "../assets/obras/civiles/civiles2.png";
import galeria3 from "../assets/obras/civiles/civiles3.png";
import galeria4 from "../assets/obras/civiles/civiles4.png";
import galeria5 from "../assets/obras/civiles/civiles5.png";
import galeria6 from "../assets/obras/civiles/civiles6.png";
import galeria7 from "../assets/obras/civiles/civiles7.png";
import galeria8 from "../assets/obras/civiles/civiles8.png";
import galeria9 from "../assets/obras/civiles/civiles9.png";
import galeria10 from "../assets/obras/civiles/civiles10.png";



const Civiles = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero con overlay de texto */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <img
          src={imgPrincipal}
          alt="Obras Civiles"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white px-6 py-4 md:py-6">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold">Obras Civiles</h1>
            <p className="text-sm md:text-base text-gray-200">
              Arquitectura y urbanismo a medida
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        {/* Frase institucional */}
        <div className="bg-gray-100 border-l-4 border-brand-orange p-6">
          <p className="text-sm md:text-base text-gray-700 font-medium">
            Diseñamos y construimos para transformar entornos y mejorar vidas.
          </p>
        </div>

        {/* Ficha técnica */}
        <div>
          <h2 className="text-xl font-semibold text-brand-blue mb-6">Resultados alcanzados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm">
            <div>
              <p className="font-semibold text-brand-blue">Años de experiencia</p>
              <p>17 años</p>
            </div>
            <div>
              <p className="font-semibold text-brand-blue">Superficie construida</p>
              <p>62.984 m²</p>
            </div>
            <div>
              <p className="font-semibold text-brand-blue">Barrios construidos</p>
              <p>13</p>
            </div>
            <div>
              <p className="font-semibold text-brand-blue">Unidades habitacionales</p>
              <p>598</p>
            </div>
            <div>
              <p className="font-semibold text-brand-blue">Escuelas</p>
              <p>12 edificios escolares</p>
            </div>
            <div>
              <p className="font-semibold text-brand-blue">Otros proyectos</p>
              <p>1 parque, 1 estación de transferencia, 1 edificio institucional</p>
            </div>
          </div>
        </div>

        {/* Descripción */}
        <div>
          <h2 className="text-xl font-semibold text-brand-blue mb-4">Descripción</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Realizamos obras de infraestructura, construcción, dirección y administración de obras de arquitectura.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Contamos con una oficina técnica —nuestro estudio de arquitectura— que permite desarrollar proyectos personalizados y específicos a la medida de las inversiones y necesidades de cada cliente.
          </p>
        </div>

        {/* Obras Clasificadas */}
        <div>
          <h2 className="text-xl font-semibold text-brand-blue mb-6">Obras Realizadas</h2>

          {/* Escuelas */}
          <div className="space-y-4 mb-8">
            <h3 className="text-lg font-semibold text-brand-blue"> Escuelas</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>Escuela a crear EGB I y II:</strong> Aguas Calientes, 1252 m² — Programa Nacional 700 Escuelas</li>
              <li><strong>Edificio escolar Nº 338:</strong> El Piquete, 1762 m² — Programa Nacional 700 Escuelas</li>
              <li><strong>Bachillerato Nº 20:</strong> Aguas Calientes, 1056 m² — Programa Más Escuelas</li>
              <li><strong>Escuela secundaria Barrio San José:</strong> Palpalá, 1221 m² — Más Escuelas II</li>
              <li><strong>Jardín y escuela primaria:</strong> La Quiaca, 1773 m² — Más Escuelas II</li>
              <li><strong>Inst. de Formación Docente:</strong> San Pedro, 1953 m² — Más Escuelas III</li>
              <li><strong>Colegio Secundario N°3 “San José”:</strong> Perico, 1768 m² — Sec. de Infraestructura Educativa</li>
            </ul>
          </div>

          {/* Habitacionales */}
          <div className="space-y-4 mb-8">
            <h3 className="text-lg font-semibold text-brand-blue"> Habitacionales</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>80 viviendas e infraestructura:</strong> Palpalá, 4480 m² — Instituto de Vivienda</li>
              <li><strong>30 viviendas e infraestructura:</strong> Puesto Viejo, 1789 m² — Instituto de Vivienda</li>
              <li><strong>67 viviendas Bicentenario:</strong> Palpalá, 3996 m² — Instituto de Vivienda</li>
              <li><strong>60 viviendas Alto Comedero:</strong> San Salvador de Jujuy, 3579 m² — Instituto de Vivienda</li>
            </ul>
          </div>

          {/* Otros */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-brand-blue"> Otros</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>Parque Belgrano Skate Park:</strong> San Salvador de Jujuy, 1750 m² — Municipalidad de S.S. de Jujuy</li>
              <li><strong>Mini estación de transferencia (MET):</strong> Perico, 9800 m² — Ministerio de Ambiente</li>
            </ul>
          </div>
        </div>

        {/* Galería interactiva */}
        <div>
          <h2 className="text-xl font-semibold text-brand-blue mb-4">Galería</h2>
          <PhotoProvider>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[ galeria2, galeria3, galeria4, galeria5, galeria6, galeria7, galeria8, galeria9, galeria10].map((img, idx) => (
                <PhotoView key={idx} src={img}>
                  <img
                    src={img}
                    alt={`Obra ${idx + 1}`}
                    className="w-full h-48 object-cover cursor-zoom-in"
                  />
                </PhotoView>
              ))}
            </div>
          </PhotoProvider>
        </div>
      </div>
      <footer className="bg-brand-blue text-white py-6 mt-20">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm">
             <p>&copy; {new Date().getFullYear()} Vapeu. Todos los derechos reservados.</p>
                <div className="mt-3 md:mt-0 flex gap-4">
                <a href="/" className="hover:text-brand-orange transition">Inicio</a>
                <a href="/#servicios" className="hover:text-brand-orange transition">Servicios</a>
                <a href="/#contacto" className="hover:text-brand-orange transition">Contacto</a>
                </div>
            </div>
            </footer>
    </div>
  );
};

export default Civiles;
