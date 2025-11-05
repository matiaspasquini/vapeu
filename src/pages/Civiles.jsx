import React from "react";
import { motion } from "framer-motion";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { 
  ArrowLeft, 
  Building2, 
  Users, 
  Ruler,
  School,
  Home,
  ChevronRight,
  Award,
  TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

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

const Civiles = () => {
  const estadisticas = [
    { icono: TrendingUp, valor: "17", unidad: "años", label: "de experiencia" },
    { icono: Ruler, valor: "62.984", unidad: "m²", label: "construidos" },
    { icono: Home, valor: "598", unidad: "", label: "unidades habitacionales" },
    { icono: School, valor: "12", unidad: "", label: "edificios escolares" },
  ];

  const escuelas = [
    {
      nombre: "Escuela a crear EGB I y II",
      ubicacion: "Aguas Calientes",
      superficie: "1252 m²",
      programa: "Programa Nacional 700 Escuelas"
    },
    {
      nombre: "Edificio escolar Nº 338",
      ubicacion: "El Piquete",
      superficie: "1762 m²",
      programa: "Programa Nacional 700 Escuelas"
    },
    {
      nombre: "Bachillerato Nº 20",
      ubicacion: "Aguas Calientes",
      superficie: "1056 m²",
      programa: "Programa Más Escuelas"
    },
    {
      nombre: "Escuela secundaria Barrio San José",
      ubicacion: "Palpalá",
      superficie: "1221 m²",
      programa: "Más Escuelas II"
    },
    {
      nombre: "Jardín y escuela primaria",
      ubicacion: "La Quiaca",
      superficie: "1773 m²",
      programa: "Más Escuelas II"
    },
    {
      nombre: "Inst. de Formación Docente",
      ubicacion: "San Pedro",
      superficie: "1953 m²",
      programa: "Más Escuelas III"
    },
    {
      nombre: "Colegio Secundario N°3 'San José'",
      ubicacion: "Perico",
      superficie: "1768 m²",
      programa: "Sec. de Infraestructura Educativa"
    },
  ];

  const habitacionales = [
    {
      nombre: "80 viviendas e infraestructura",
      ubicacion: "Palpalá",
      superficie: "4480 m²",
      cliente: "Instituto de Vivienda"
    },
    {
      nombre: "30 viviendas e infraestructura",
      ubicacion: "Puesto Viejo",
      superficie: "1789 m²",
      cliente: "Instituto de Vivienda"
    },
    {
      nombre: "67 viviendas Bicentenario",
      ubicacion: "Palpalá",
      superficie: "3996 m²",
      cliente: "Instituto de Vivienda"
    },
    {
      nombre: "60 viviendas Alto Comedero",
      ubicacion: "San Salvador de Jujuy",
      superficie: "3579 m²",
      cliente: "Instituto de Vivienda"
    },
  ];

  const otrosProyectos = [
    {
      nombre: "Parque Belgrano Skate Park",
      ubicacion: "San Salvador de Jujuy",
      superficie: "1750 m²",
      cliente: "Municipalidad de S.S. de Jujuy"
    },
    {
      nombre: "Mini estación de transferencia (MET)",
      ubicacion: "Perico",
      superficie: "9800 m²",
      cliente: "Ministerio de Ambiente"
    },
  ];

  const galeria = [galeria2, galeria3, galeria4, galeria5, galeria6, galeria7, galeria8, galeria9, galeria10];

  return (
    <div className="bg-white text-gray-800">
      <Header />

      {/* Hero section */}
      <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src={imgPrincipal}
          alt="Obras Civiles"
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
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-azul-400 font-semibold text-sm uppercase tracking-widest">
                  Nuestro servicio
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">
                Obras Civiles
              </h1>
              <p className="text-xl md:text-2xl text-vapor-100 max-w-2xl">
                Arquitectura y urbanismo a medida
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
            Diseñamos y construimos para <strong className="text-azul-700">transformar entornos</strong> y 
            mejorar vidas.
          </p>
        </motion.div>

        {/* Estadísticas destacadas */}
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
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {estadisticas.map((stat, index) => {
              const Icono = stat.icono;
              return (
                <div
                  key={index}
                  className="group bg-white border border-vapor-100 rounded-xl p-6 text-center
                           hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-azul-50 rounded-lg flex items-center justify-center mx-auto mb-4
                                group-hover:bg-azul-700 transition-colors duration-300">
                    <Icono className="w-7 h-7 text-azul-700 group-hover:text-white transition-colors duration-300" />
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

        {/* Descripción del servicio */}
        <motion.div
          variants={fadeUp}
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-vapor-900 mb-6">
            Nuestro servicio
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-azul-700 to-naranja-600 rounded-full mb-8"></div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-vapor-700 text-lg leading-relaxed">
                Realizamos obras de <strong className="text-azul-700">infraestructura, construcción, 
                dirección y administración</strong> de obras de arquitectura.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-vapor-700 text-lg leading-relaxed">
                Contamos con una <strong className="text-azul-700">oficina técnica</strong> —nuestro estudio 
                de arquitectura— que permite desarrollar proyectos personalizados y específicos a la medida de 
                las inversiones y necesidades de cada cliente.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Obras Realizadas - Escuelas */}
        <motion.div
          variants={fadeUp}
          custom={4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <School className="w-8 h-8 text-azul-700" />
            <h3 className="font-display text-2xl md:text-3xl font-bold text-vapor-900">
              Edificios escolares
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {escuelas.map((escuela, index) => (
              <div
                key={index}
                className="group bg-vapor-50 border border-vapor-100 rounded-xl p-6
                         hover:bg-white hover:shadow-card transition-all duration-300"
              >
                <h4 className="font-semibold text-vapor-900 mb-3 text-lg group-hover:text-azul-700 transition-colors">
                  {escuela.nombre}
                </h4>
                <div className="space-y-2 text-sm text-vapor-600">
                  <p><strong className="text-vapor-700">Ubicación:</strong> {escuela.ubicacion}</p>
                  <p><strong className="text-vapor-700">Superficie:</strong> {escuela.superficie}</p>
                  <p className="text-xs text-naranja-600 font-medium uppercase tracking-wide mt-3">
                    {escuela.programa}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Obras Realizadas - Habitacionales */}
        <motion.div
          variants={fadeUp}
          custom={5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <Home className="w-8 h-8 text-naranja-600" />
            <h3 className="font-display text-2xl md:text-3xl font-bold text-vapor-900">
              Proyectos habitacionales
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {habitacionales.map((proyecto, index) => (
              <div
                key={index}
                className="group bg-vapor-50 border border-vapor-100 rounded-xl p-6
                         hover:bg-white hover:shadow-card transition-all duration-300"
              >
                <h4 className="font-semibold text-vapor-900 mb-3 text-lg group-hover:text-naranja-600 transition-colors">
                  {proyecto.nombre}
                </h4>
                <div className="space-y-2 text-sm text-vapor-600">
                  <p><strong className="text-vapor-700">Ubicación:</strong> {proyecto.ubicacion}</p>
                  <p><strong className="text-vapor-700">Superficie:</strong> {proyecto.superficie}</p>
                  <p className="text-xs text-azul-600 font-medium uppercase tracking-wide mt-3">
                    {proyecto.cliente}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Otros Proyectos */}
        <motion.div
          variants={fadeUp}
          custom={6}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-8 h-8 text-azul-700" />
            <h3 className="font-display text-2xl md:text-3xl font-bold text-vapor-900">
              Otros proyectos destacados
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {otrosProyectos.map((proyecto, index) => (
              <div
                key={index}
                className="group bg-vapor-50 border border-vapor-100 rounded-xl p-6
                         hover:bg-white hover:shadow-card transition-all duration-300"
              >
                <h4 className="font-semibold text-vapor-900 mb-3 text-lg group-hover:text-azul-700 transition-colors">
                  {proyecto.nombre}
                </h4>
                <div className="space-y-2 text-sm text-vapor-600">
                  <p><strong className="text-vapor-700">Ubicación:</strong> {proyecto.ubicacion}</p>
                  <p><strong className="text-vapor-700">Superficie:</strong> {proyecto.superficie}</p>
                  <p className="text-xs text-naranja-600 font-medium uppercase tracking-wide mt-3">
                    {proyecto.cliente}
                  </p>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {galeria.map((img, idx) => (
                <PhotoView key={idx} src={img}>
                  <div className="group relative h-64 overflow-hidden rounded-xl cursor-zoom-in 
                                shadow-card hover:shadow-card-hover transition-all duration-300">
                    <img
                      src={img}
                      alt={`Obra ${idx + 1}`}
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
            ¿Tenés un proyecto de obra civil en mente?
          </h3>
          <p className="text-vapor-200 text-lg mb-8 max-w-2xl mx-auto">
            Desde el diseño hasta la entrega final, te acompañamos en cada etapa
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

export default Civiles;