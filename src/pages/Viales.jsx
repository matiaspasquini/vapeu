import React from "react";
import { motion } from "framer-motion";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { 
  ArrowLeft, 
  Route, 
  TrendingUp,
  Award,
  Microscope,
  Settings,
  ChevronRight,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

import imgPrincipal from "../assets/servicios/1.png";
import galeria1 from "../assets/servicios/1.png";
import galeria2 from "../assets/servicios/1.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.4, 0.0, 0.2, 1],
    },
  }),
};

const Viales = () => {
  const estadisticas = [
    { icono: TrendingUp, valor: "36", unidad: "años", label: "de experiencia" },
    { icono: Route, valor: "1.066.296", unidad: "m²", label: "superficie vial ejecutada" },
    { icono: Award, valor: "47", unidad: "", label: "obras viales" },
  ];

  const ventajasCompetitivas = [
    {
      icon: Microscope,
      titulo: "Laboratorio propio",
      descripcion: "Ensayos de granulometría y asfalto con control de calidad permanente"
    },
    {
      icon: Settings,
      titulo: "Planta de asfalto",
      descripcion: "Ross – Mix de 60-90 Tn/h para producción continua"
    },
    {
      icon: Route,
      titulo: "Maquinaria especializada",
      descripcion: "Terminadoras de asfalto y equipos específicos para cada obra"
    },
  ];

  const tiposDeObra = [
    "Aperturas de calles",
    "Abovedado y nivelación",
    "Perfilado",
    "Enripiados",
    "Accesos viales",
    "Cordones cuneta",
    "Mejoramientos viales",
    "Pavimentaciones",
    "Carpeta de concreto asfáltico",
    "Bacheos e imprimaciones",
    "Calzadas de hormigón armado",
    "Estructuras especiales (puentes)"
  ];

  const obras = [
    {
      nombre: "Mejora y ampliación del sistema de agua potable",
      ubicacion: "San Antonio",
      tipo: "Concreto asfáltico en caliente",
      cliente: "Silvia Peuser de Vallespinos Ingeniería-Arquitectura"
    },
    {
      nombre: "Corredor vial Paso de Jama",
      ubicacion: "Provincia de Jujuy",
      tipo: "Concreto asfáltico en caliente",
      cliente: "Benito Roggio e Hijos S.A."
    },
    {
      nombre: "Bacheo y repavimentación Barrio Centro (Etapa I)",
      ubicacion: "S.S. de Jujuy",
      tipo: "Concreto asfáltico en caliente",
      cliente: "Dirección Provincial de Vialidad - Jujuy"
    },
    {
      nombre: "Ruta Prov. Nº 83 – Puentes Río Sunchal y Santa Rosa",
      ubicacion: "Valle Grande",
      tipo: "Hormigón",
      cliente: "Dirección Provincial de Vialidad - Jujuy"
    },
    {
      nombre: "Repavimentación de calles (Etapa I)",
      ubicacion: "San Salvador de Jujuy",
      tipo: "Concreto asfáltico en caliente",
      cliente: "Municipalidad de San Salvador de Jujuy"
    },
  ];

  const galeria = [galeria1, galeria2];

  return (
    <div className="bg-white text-gray-800">
      <Header />

      {/* Hero section */}
      <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src={imgPrincipal}
          alt="Obras Viales"
          className="w-full h-full object-cover object-center scale-105"
        />
        
        <div className="absolute inset-0 bg-gradient-overlay"></div>

        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute top-24 md:top-28 left-0 right-0 px-6"
        >
          <div className="max-w-7xl mx-auto">
            <Link 
              to="/#servicios" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white 
                       transition-colors duration-300 text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver a servicios
            </Link>
          </div>
        </motion.div>

        {/* Contenido hero */}
        <div className="absolute bottom-0 left-0 right-0 px-6 py-12 md:py-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-azul-600 rounded-lg flex items-center justify-center">
                  <Route className="w-6 h-6 text-white" />
                </div>
                <span className="text-azul-400 font-semibold text-sm uppercase tracking-widest">
                  Nuestro servicio
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">
                Obras Viales
              </h1>
              <p className="text-xl md:text-2xl text-vapor-100 max-w-2xl">
                Infraestructura vial a gran escala
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        {/* Frase destacada */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-r from-azul-50 to-naranja-50 border-l-4 border-azul-600 
                   rounded-r-xl p-8 md:p-10 mb-16 shadow-card"
        >
          <p className="text-lg md:text-xl text-vapor-700 font-medium leading-relaxed">
            Construimos y rehabilitamos <strong className="text-azul-700">caminos que conectan comunidades</strong> y 
            mueven la economía.
          </p>
        </motion.div>

        {/* Estadísticas */}
        <motion.div
          variants={fadeUp}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-vapor-900 mb-6 text-center">
            Resultados alcanzados
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-azul-700 to-naranja-600 rounded-full mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {estadisticas.map((stat, index) => {
              const Icono = stat.icono;
              return (
                <div
                  key={index}
                  className="group bg-white border border-vapor-100 rounded-xl p-8 text-center
                           hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-azul-50 rounded-lg flex items-center justify-center mx-auto mb-4
                                group-hover:bg-azul-700 transition-colors duration-300">
                    <Icono className="w-8 h-8 text-azul-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="font-mono text-3xl md:text-4xl font-bold text-vapor-900 mb-1">
                    {stat.valor}
                    <span className="text-xl text-naranja-600 ml-1">{stat.unidad}</span>
                  </div>
                  <p className="text-vapor-600 text-sm font-medium uppercase tracking-wide">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Ventajas competitivas */}
        <motion.div
          variants={fadeUp}
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-vapor-900 mb-6 text-center">
            Nuestras ventajas
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-azul-700 to-naranja-600 rounded-full mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {ventajasCompetitivas.map((ventaja, index) => {
              const Icon = ventaja.icon;
              return (
                <div
                  key={index}
                  className="group bg-white border border-vapor-100 rounded-xl p-6 
                           hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-naranja-50 rounded-lg flex items-center justify-center mb-4
                                group-hover:bg-naranja-600 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-naranja-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-vapor-900 mb-2 font-display">
                    {ventaja.titulo}
                  </h3>
                  <p className="text-vapor-600 text-sm">
                    {ventaja.descripcion}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Descripción del servicio */}
        <motion.div
          variants={fadeUp}
          custom={4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-vapor-900 mb-6">
            Nuestro servicio
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-azul-700 to-naranja-600 rounded-full mb-8"></div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <p className="text-vapor-700 text-lg leading-relaxed">
                Realizamos obras como: <strong className="text-azul-700">aperturas de calles, abovedado, 
                perfilado y nivelación, enripiados, accesos, construcción de cordones cuneta, mejoramientos 
                viales, pavimentaciones, carpeta de concreto asfáltico, bacheos, imprimaciones, calzadas de 
                hormigón armado</strong> y estructuras especiales como puentes.
              </p>
            </div>
            <div>
              <p className="text-vapor-700 text-lg leading-relaxed">
                Contamos con un <strong className="text-naranja-600">laboratorio propio</strong> de ensayos de 
                granulometría y asfalto, una <strong className="text-naranja-600">planta de concreto asfáltico 
                Ross – Mix (60-90 Tn/h)</strong>, terminadoras de asfalto y maquinaria específica para cada tipo de obra.
              </p>
            </div>
          </div>

          {/* Tipos de obra en grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {tiposDeObra.map((tipo, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                custom={5 + index * 0.05}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 bg-vapor-50 rounded-lg 
                         hover:bg-white hover:shadow-card border border-transparent 
                         hover:border-vapor-100 transition-all duration-300 group"
              >
                <CheckCircle className="w-5 h-5 text-azul-600 flex-shrink-0 
                                      group-hover:scale-110 transition-transform duration-300" />
                <p className="text-vapor-900 text-sm font-medium">{tipo}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Obras ejecutadas */}
        <motion.div
          variants={fadeUp}
          custom={6}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-vapor-900 mb-6">
            Proyectos ejecutados
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-azul-700 to-naranja-600 rounded-full mb-8"></div>

          <div className="space-y-6">
            {obras.map((obra, index) => (
              <div
                key={index}
                className="group bg-vapor-50 border border-vapor-100 rounded-xl p-6 md:p-8
                         hover:bg-white hover:shadow-card-hover transition-all duration-300"
              >
                <h3 className="font-bold text-vapor-900 text-xl mb-4 group-hover:text-azul-700 transition-colors">
                  {obra.nombre}
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-vapor-500 font-semibold uppercase tracking-wide text-xs mb-1">
                      Ubicación
                    </p>
                    <p className="text-vapor-700">{obra.ubicacion}</p>
                  </div>
                  <div>
                    <p className="text-vapor-500 font-semibold uppercase tracking-wide text-xs mb-1">
                      Tipo de obra
                    </p>
                    <p className="text-vapor-700 font-medium">{obra.tipo}</p>
                  </div>
                  <div className="sm:col-span-2">
                    <p className="text-naranja-600 font-medium text-sm">
                      Cliente: {obra.cliente}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Galería */}
        <motion.div
          variants={fadeUp}
          custom={7}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-vapor-900 mb-6">
            Galería de proyectos
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-azul-700 to-naranja-600 rounded-full mb-8"></div>
          
          <PhotoProvider>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {galeria.map((img, idx) => (
                <PhotoView key={idx} src={img}>
                  <div className="group relative h-80 overflow-hidden rounded-xl cursor-zoom-in 
                                shadow-card hover:shadow-card-hover transition-all duration-300">
                    <img
                      src={img}
                      alt={`Galería vial ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-vapor-900/0 group-hover:bg-vapor-900/20 
                                  transition-colors duration-300"></div>
                  </div>
                </PhotoView>
              ))}
            </div>
          </PhotoProvider>
        </motion.div>

        {/* CTA final */}
        <motion.div
          variants={fadeUp}
          custom={8}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 bg-gradient-industrial rounded-2xl p-10 md:p-12 text-center text-white"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
            ¿Tenés un proyecto vial en desarrollo?
          </h3>
          <p className="text-vapor-200 text-lg mb-8 max-w-2xl mx-auto">
            Contamos con la infraestructura, tecnología y experiencia para obras de cualquier magnitud
          </p>
          <Link
            to="/#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-naranja-600 text-white 
                     font-semibold rounded-lg hover:bg-naranja-700 hover:-translate-y-1 
                     hover:shadow-deep transition-all duration-300"
          >
            Consultar proyecto
            <ChevronRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default Viales;