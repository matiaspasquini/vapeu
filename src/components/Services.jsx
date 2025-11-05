import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Route, Pickaxe, Mountain } from "lucide-react";

// Imágenes
import civilesImg from "../assets/servicios/civiles.png";
import vialesImg from "../assets/servicios/1.png";
import minerosImg from "../assets/servicios/minera.png";
import aridosImg from "../assets/servicios/aridos.png";

const services = [
  {
    title: "Obras Civiles",
    description: "Construcción de edificios, infraestructura urbana y proyectos residenciales",
    image: civilesImg,
    link: "/servicios/civiles",
    icon: Building2,
    color: "azul",
  },
  {
    title: "Obras Viales",
    description: "Rutas, caminos y toda la infraestructura vial de calidad",
    image: vialesImg,
    link: "/servicios/viales",
    icon: Route,
    color: "naranja",
  },
  {
    title: "Servicios Mineros",
    description: "Movimiento de suelo, perforación y servicios especializados",
    image: minerosImg,
    link: "/servicios/mineros",
    icon: Pickaxe,
    color: "azul",
  },
  {
    title: "Producción de Áridos",
    description: "Extracción y procesamiento de materiales para construcción",
    image: aridosImg,
    link: "/servicios/aridos",
    icon: Mountain,
    color: "naranja",
  },
];

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

const Services = () => {
  return (
    <section id="servicios" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Elemento decorativo de fondo */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-vapor-50 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Encabezado de sección */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-naranja-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Qué hacemos
          </span>
          <h2 className="font-display text-display-mobile md:text-display text-vapor-900 mb-6">
            Nuestros Servicios
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-azul-700 to-naranja-600 rounded-full mx-auto mb-6"></div>
          <p className="text-vapor-600 text-lg max-w-2xl mx-auto">
            Soluciones integrales en construcción respaldadas por décadas de experiencia y tecnología de punta
          </p>
        </motion.div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={fadeUp}
                custom={index + 2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Link to={service.link} className="block group">
                  <div className="relative h-[450px] overflow-hidden rounded-xl shadow-card 
                                hover:shadow-industrial transition-all duration-500 border border-vapor-100">
                    {/* Imagen de fondo */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover object-center 
                               group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Overlay con gradiente */}
                    <div className="absolute inset-0 bg-gradient-to-t from-vapor-900 via-vapor-900/60 to-transparent 
                                  opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

                    {/* Contenido */}
                    <div className="relative h-full flex flex-col justify-end p-6 text-white">
                      {/* Icono flotante */}
                      <div className={`absolute top-6 right-6 w-12 h-12 bg-${service.color}-600/20 
                                    backdrop-blur-sm rounded-lg flex items-center justify-center
                                    border border-${service.color}-500/30
                                    group-hover:scale-110 group-hover:bg-${service.color}-600 
                                    transition-all duration-300`}>
                        <Icon className={`w-6 h-6 text-white`} />
                      </div>

                      {/* Título */}
                      <h3 className="text-2xl md:text-3xl font-bold mb-3 uppercase tracking-wide 
                                   group-hover:text-naranja-400 transition-colors duration-300 font-display">
                        {service.title}
                      </h3>

                      {/* Descripción */}
                      <p className="text-vapor-200 text-sm mb-4 leading-relaxed opacity-0 
                                  group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {service.description}
                      </p>

                      {/* CTA con flecha */}
                      <div className="flex items-center gap-2 text-white font-semibold text-sm
                                    opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200
                                    group-hover:translate-x-1">
                        <span>Ver más</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>

                      {/* Barra inferior animada */}
                      <div className={`absolute bottom-0 left-0 h-1 w-0 bg-${service.color}-600 
                                    group-hover:w-full transition-all duration-700`}></div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA adicional opcional */}
        <motion.div
          variants={fadeUp}
          custom={7}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-vapor-600 mb-6">
            ¿Necesitás una solución personalizada para tu proyecto?
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-azul-700 text-white 
                     font-semibold rounded-lg hover:bg-azul-600 hover:-translate-y-1 
                     hover:shadow-card-hover transition-all duration-300"
          >
            Consultanos sin compromiso
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;