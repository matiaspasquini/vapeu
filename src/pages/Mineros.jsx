import React from "react";
import { motion } from "framer-motion";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { 
  ArrowLeft, 
  Pickaxe, 
  TrendingUp,
  Mountain,
  Truck,
  ChevronRight,
  Wrench,
  Hammer,
  Package
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

import imgPrincipal from "../assets/servicios/minera.png";
import galeria1 from "../assets/obras/minero/minero1.png";
import galeria2 from "../assets/obras/minero/minero2.png";
import galeria3 from "../assets/obras/minero/minero3.png";
import galeria4 from "../assets/obras/minero/minero4.png";
import galeria5 from "../assets/obras/minero/minero5.png";
import galeria6 from "../assets/obras/minero/minero6.png";
import galeria7 from "../assets/obras/minero/minero7.png";
import galeria8 from "../assets/obras/minero/minero8.png";

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

const Mineros = () => {
  const estadisticas = [
    { icono: TrendingUp, valor: "17", unidad: "años", label: "de experiencia" },
    { icono: Mountain, valor: "5.683.160", unidad: "m³", label: "movimiento de suelos" },
    { icono: Hammer, valor: "11", unidad: "", label: "proyectos mineros" },
  ];

  const equipamiento = [
    { nombre: "Rodillos", categoria: "Compactación" },
    { nombre: "Acoplados", categoria: "Transporte" },
    { nombre: "Carretones", categoria: "Transporte" },
    { nombre: "Camionetas", categoria: "Logística" },
    { nombre: "Barredoras", categoria: "Mantenimiento" },
    { nombre: "Aplanadoras", categoria: "Nivelación" },
    { nombre: "Hormigoneras", categoria: "Construcción" },
    { nombre: "Motoniveladoras", categoria: "Nivelación" },
    { nombre: "Retroexcavadoras", categoria: "Excavación" },
    { nombre: "Tanques regadores", categoria: "Control de polvo" },
    { nombre: "Camiones volcadores", categoria: "Transporte" },
    { nombre: "Cargadoras frontales", categoria: "Carga" },
    { nombre: "Generadores eléctricos", categoria: "Energía" },
    { nombre: "Excavadoras sobre oruga", categoria: "Excavación" },
  ];

  const obras = [
    {
      nombre: "Construcción Pozas de Acumulación PDA1",
      ubicacion: "Cauchari, Susques",
      volumen: "85.000 m³",
      cliente: "Minera Exar S.A."
    },
    {
      nombre: "Construcción Pozas de Acumulación",
      ubicacion: "Cauchari",
      volumen: "5.000.000 m³",
      descripcion: "Arriendo de equipos pesados sin operador",
      cliente: "UTE E-V-M / Minera Exar S.A."
    },
    {
      nombre: "Reparación de Caminos de Cosecha",
      ubicacion: "Salar de Olaroz, Cauchari",
      volumen: "12.500 m³",
      cliente: "Minera Exar S.A."
    },
  ];

  const serviciosDestacados = [
    {
      icon: Truck,
      titulo: "Maquinaria propia",
      descripcion: "Flota completa de equipos pesados para proyectos de gran escala"
    },
    {
      icon: Wrench,
      titulo: "Taller propio",
      descripcion: "Mantenimiento y reparación in-house para máxima disponibilidad"
    },
    {
      icon: Package,
      titulo: "Alquiler de equipos",
      descripcion: "Camionetas y maquinaria especializada para altura y condiciones extremas"
    },
  ];

  const galeria = [galeria1, galeria2, galeria3, galeria4, galeria5, galeria6, galeria7, galeria8];

  return (
    <div className="bg-white text-gray-800">
      <Header />

      {/* Hero section */}
      <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src={imgPrincipal}
          alt="Servicios Mineros"
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
                <div className="w-12 h-12 bg-naranja-600 rounded-lg flex items-center justify-center">
                  <Pickaxe className="w-6 h-6 text-white" />
                </div>
                <span className="text-naranja-400 font-semibold text-sm uppercase tracking-widest">
                  Nuestro servicio
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">
                Servicios Mineros
              </h1>
              <p className="text-xl md:text-2xl text-vapor-100 max-w-2xl">
                Movimiento de suelos y equipamiento especializado
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
          className="bg-gradient-to-r from-naranja-50 to-azul-50 border-l-4 border-naranja-600 
                   rounded-r-xl p-8 md:p-10 mb-16 shadow-card"
        >
          <p className="text-lg md:text-xl text-vapor-700 font-medium leading-relaxed">
            Comprometidos con la <strong className="text-naranja-600">industria minera</strong> a través de 
            logística, infraestructura y maquinaria propia.
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
                  <div className="w-16 h-16 bg-naranja-50 rounded-lg flex items-center justify-center mx-auto mb-4
                                group-hover:bg-naranja-600 transition-colors duration-300">
                    <Icono className="w-8 h-8 text-naranja-600 group-hover:text-white transition-colors duration-300" />
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

        {/* Servicios destacados */}
        <motion.div
          variants={fadeUp}
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-3 gap-6">
            {serviciosDestacados.map((servicio, index) => {
              const Icon = servicio.icon;
              return (
                <div
                  key={index}
                  className="group bg-white border border-vapor-100 rounded-xl p-6 
                           hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-azul-50 rounded-lg flex items-center justify-center mb-4
                                group-hover:bg-azul-700 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-azul-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-vapor-900 mb-2 font-display">
                    {servicio.titulo}
                  </h3>
                  <p className="text-vapor-600 text-sm">
                    {servicio.descripcion}
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
          <p className="text-vapor-700 text-lg leading-relaxed max-w-4xl">
            Realizamos <strong className="text-azul-700">movimientos de suelos y obras de infraestructura</strong> para 
            el sector minero. Contamos con maquinaria pesada y un taller propio para mantenimiento y logística interna. 
            Además, ofrecemos <strong className="text-naranja-600">alquiler de camionetas y equipos específicos</strong> para 
            proyectos en altura o de gran escala.
          </p>
        </motion.div>

        {/* Equipamiento disponible */}
        <motion.div
          variants={fadeUp}
          custom={5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-vapor-900 mb-6">
            Equipamiento disponible
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-azul-700 to-naranja-600 rounded-full mb-8"></div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {equipamiento.map((equipo, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                custom={6 + index * 0.05}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group flex items-start gap-3 p-4 bg-vapor-50 rounded-lg 
                         hover:bg-white hover:shadow-card border border-transparent 
                         hover:border-vapor-100 transition-all duration-300"
              >
                <div className="w-8 h-8 bg-naranja-600 rounded flex items-center justify-center flex-shrink-0 mt-0.5
                              group-hover:scale-110 transition-transform duration-300">
                  <Wrench className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-vapor-900 text-sm font-semibold leading-snug">
                    {equipo.nombre}
                  </p>
                  <span className="inline-block mt-1 text-xs text-vapor-500 font-medium uppercase tracking-wide">
                    {equipo.categoria}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Obras ejecutadas */}
        <motion.div
          variants={fadeUp}
          custom={7}
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
                <h3 className="font-bold text-vapor-900 text-xl mb-4 group-hover:text-naranja-600 transition-colors">
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
                      Volumen
                    </p>
                    <p className="text-vapor-700 font-mono font-semibold">{obra.volumen}</p>
                  </div>
                  {obra.descripcion && (
                    <div className="sm:col-span-2">
                      <p className="text-vapor-500 font-semibold uppercase tracking-wide text-xs mb-1">
                        Descripción
                      </p>
                      <p className="text-vapor-700">{obra.descripcion}</p>
                    </div>
                  )}
                  <div className="sm:col-span-2">
                    <p className="text-azul-600 font-medium text-sm">
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
          custom={8}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-vapor-900 mb-6">
            Galería de proyectos
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-azul-700 to-naranja-600 rounded-full mb-8"></div>
          
          <PhotoProvider>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {galeria.map((img, idx) => (
                <PhotoView key={idx} src={img}>
                  <div className="group relative h-64 overflow-hidden rounded-xl cursor-zoom-in 
                                shadow-card hover:shadow-card-hover transition-all duration-300">
                    <img
                      src={img}
                      alt={`Galería minera ${idx + 1}`}
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
          custom={9}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 bg-gradient-industrial rounded-2xl p-10 md:p-12 text-center text-white"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
            ¿Necesitás servicios mineros especializados?
          </h3>
          <p className="text-vapor-200 text-lg mb-8 max-w-2xl mx-auto">
            Contamos con el equipamiento y la experiencia para proyectos de cualquier escala
          </p>
          <Link
            to="/#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-naranja-600 text-white 
                     font-semibold rounded-lg hover:bg-naranja-700 hover:-translate-y-1 
                     hover:shadow-deep transition-all duration-300"
          >
            Solicitar cotización
            <ChevronRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default Mineros;