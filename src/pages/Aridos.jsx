import React from "react";
import { motion } from "framer-motion";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { 
  ArrowLeft, 
  CheckCircle, 
  Package, 
  Truck, 
  Award,
  ChevronRight,
  Mountain
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

import imgPrincipal from "../assets/servicios/aridos.png";
import galeria1 from "../assets/obras/aridos/aridos1.png";
import galeria2 from "../assets/obras/aridos/aridos2.png";
import galeria3 from "../assets/obras/aridos/aridos3.png";
import galeria4 from "../assets/obras/aridos/aridos4.png";
import galeria5 from "../assets/obras/aridos/aridos5.png";

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

const Aridos = () => {
  const materiales = [
    { nombre: "Arena lavada para hormigones", categoria: "Hormigones" },
    { nombre: "Arena lavada para albañilería (10-12 mm / 6 mm máx.)", categoria: "Albañilería" },
    { nombre: "Arena fina albañilería (4 mm máx.)", categoria: "Albañilería" },
    { nombre: "Arena común (9 mm máx.)", categoria: "General" },
    { nombre: "Arena de trituración", categoria: "General" },
    { nombre: "Arena para bloque en playa (14 mm máx.)", categoria: "Bloques" },
    { nombre: "Ripio triturado", categoria: "Hormigones" },
    { nombre: "Ripio lavado del 1 al 3 (hormigones)", categoria: "Hormigones" },
    { nombre: "Ripio lavado del 1 al 5 (hormigones)", categoria: "Hormigones" },
    { nombre: "Ripio lavado 9–19 mm máx. (hormigones)", categoria: "Hormigones" },
    { nombre: "Ripio grillado común en playa", categoria: "General" },
    { nombre: "Descarte de grilla en playa", categoria: "General" },
    { nombre: "Granza lavada (6–12 mm máx.)", categoria: "Especiales" },
    { nombre: "Binder (5 mm máx.)", categoria: "Viales" },
    { nombre: "Enlame de playa de río", categoria: "General" },
    { nombre: "Aluvión común – playa de río", categoria: "General" },
    { nombre: "Piedra Bola", categoria: "Decoración" },
  ];

  const ventajas = [
    {
      icon: Award,
      titulo: "Calidad certificada",
      descripcion: "Materiales que cumplen estándares técnicos rigurosos",
    },
    {
      icon: Package,
      titulo: "Gran variedad",
      descripcion: "17+ tipos de áridos para distintas aplicaciones",
    },
    {
      icon: Truck,
      titulo: "Logística propia",
      descripcion: "Entrega rápida y confiable en toda la región",
    },
  ];

  const galeria = [galeria1, galeria2, galeria3, galeria4, galeria5];

  return (
    <div className="bg-white text-gray-800">
      <Header />

      {/* Hero section mejorado */}
      <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src={imgPrincipal}
          alt="Producción de Áridos"
          className="w-full h-full object-cover object-center scale-105"
        />
        
        {/* Overlay con gradiente */}
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
                  <Mountain className="w-6 h-6 text-white" />
                </div>
                <span className="text-naranja-400 font-semibold text-sm uppercase tracking-widest">
                  Nuestro servicio
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">
                Producción de Áridos
              </h1>
              <p className="text-xl md:text-2xl text-vapor-100 max-w-2xl">
                Variedad, calidad y volumen para el abastecimiento continuo
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
          className="bg-gradient-to-r from-azul-50 to-naranja-50 border-l-4 border-naranja-600 
                   rounded-r-xl p-8 md:p-10 mb-16 shadow-card"
        >
          <p className="text-lg md:text-xl text-vapor-700 font-medium leading-relaxed">
            Nuestra planta procesadora garantiza <strong className="text-azul-700">calidad constante</strong> en 
            áridos para hormigones, albañilería y obras especiales.
          </p>
        </motion.div>

        {/* Ventajas en cards */}
        <motion.div
          variants={fadeUp}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-20"
        >
          {ventajas.map((ventaja, index) => {
            const Icon = ventaja.icon;
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
                  {ventaja.titulo}
                </h3>
                <p className="text-vapor-600 text-sm">
                  {ventaja.descripcion}
                </p>
              </div>
            );
          })}
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
            Servicios y productos
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-azul-700 to-naranja-600 rounded-full mb-8"></div>
          <p className="text-vapor-700 text-lg leading-relaxed max-w-4xl">
            Contamos con una <strong className="text-azul-700">planta productora de áridos</strong> equipada 
            para abastecer obras civiles, viales y mineras. Nuestros materiales cumplen con los estándares 
            técnicos requeridos y son clasificados según su granulometría y destino de uso.
          </p>
        </motion.div>

        {/* Catálogo de materiales */}
        <motion.div
          variants={fadeUp}
          custom={4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-vapor-900 mb-6">
            Materiales disponibles
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-azul-700 to-naranja-600 rounded-full mb-8"></div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {materiales.map((material, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                custom={5 + index * 0.05}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group flex items-start gap-3 p-4 bg-vapor-50 rounded-lg 
                         hover:bg-white hover:shadow-card border border-transparent 
                         hover:border-vapor-100 transition-all duration-300"
              >
                <CheckCircle className="w-5 h-5 text-naranja-600 flex-shrink-0 mt-0.5 
                                      group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <p className="text-vapor-900 text-sm font-medium leading-snug">
                    {material.nombre}
                  </p>
                  <span className="inline-block mt-1 text-xs text-vapor-500 font-medium uppercase tracking-wide">
                    {material.categoria}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Galería interactiva */}
        <motion.div
          variants={fadeUp}
          custom={6}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-vapor-900 mb-6">
            Galería de planta
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
                      alt={`Galería áridos ${idx + 1}`}
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
          custom={7}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 bg-gradient-industrial rounded-2xl p-10 md:p-12 text-center text-white"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
            ¿Necesitás cotizar áridos para tu proyecto?
          </h3>
          <p className="text-vapor-200 text-lg mb-8 max-w-2xl mx-auto">
            Contactanos para recibir asesoramiento técnico y presupuesto sin compromiso
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

export default Aridos;