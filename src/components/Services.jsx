import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Imágenes — reemplazalas por las reales
import civilesImg from "../assets/servicios/civiles.png";
import vialesImg from "../assets/servicios/1.png";
import minerosImg from "../assets/servicios/minera.png";
import aridosImg from "../assets/servicios/aridos.png";


const services = [
  {
    title: "Obras Civiles",
    image: civilesImg,
    link: "/servicios/civiles",
  },
  {
    title: "Obras Viales",
    image: vialesImg,
    link: "/servicios/viales",
  },
  {
    title: "Servicios Mineros",
    image: minerosImg,
    link: "/servicios/mineros",
  },
  {
    title: "Producción de Áridos",
    image: aridosImg,
    link: "/servicios/aridos",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-20 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue text-center mb-16 border-b border-gray-300 pb-4">
          Nuestros Servicios
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link to={service.link} className="block">
                <div className="relative aspect-square uppercase  md:aspect-[2/3] overflow-hidden border border-gray-200 hover:shadow-md transition group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
                    style={{ filter: "brightness(0.6)" }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white text-2xl md:text-3xl font-bold text-center tracking-wide leading-tight px-2">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
