import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Award, Users } from "lucide-react";

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

const About = () => {
  return (
    <section id="quienes-somos" className="bg-vapor-50 py-20 md:py-28 relative overflow-hidden">
      {/* Elemento decorativo de fondo */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-azul-50/30 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Encabezado de sección */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="inline-block text-naranja-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Nuestra historia
          </span>
          <h2 className="font-display text-display-mobile md:text-display text-vapor-900 mb-6">
            Quiénes somos
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-azul-700 to-naranja-600 rounded-full"></div>
        </motion.div>

        {/* Texto principal */}
        <motion.div
          variants={fadeUp}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-vapor-700 text-lg md:text-xl leading-relaxed max-w-4xl">
            Con más de <strong className="text-azul-700 font-semibold">50 años de trayectoria</strong> en Jujuy, 
            VAPEU es una empresa familiar comprometida con la construcción seria, eficiente y sostenible. 
            Trabajamos en <strong className="text-azul-700 font-semibold">4 áreas clave</strong>: obras civiles, 
            obras viales, servicios mineros y producción de áridos. Nuestra solidez se basa en una estructura 
            profesional y un equipo humano capacitado.
          </p>
        </motion.div>

        {/* Grid de Misión y Visión */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Misión */}
          <motion.div
            variants={fadeUp}
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group bg-white rounded-xl p-8 shadow-card hover:shadow-card-hover 
                       transition-all duration-300 border border-vapor-100"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-azul-50 rounded-lg flex items-center justify-center 
                            group-hover:bg-azul-700 transition-colors duration-300">
                <Target className="w-7 h-7 text-azul-700 group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-azul-700 mb-3 font-display">
                  Misión
                </h3>
                <p className="text-vapor-600 leading-relaxed">
                  Brindar soluciones integrales en construcción, con responsabilidad y profesionalismo, 
                  consolidando calidad en cada proyecto mediante procesos ordenados y personal calificado.
                </p>
              </div>
            </div>
            {/* Borde decorativo animado */}
            <div className="mt-6 h-1 w-0 bg-gradient-to-r from-azul-700 to-azul-500 
                          group-hover:w-full transition-all duration-500 rounded-full"></div>
          </motion.div>

          {/* Visión */}
          <motion.div
            variants={fadeUp}
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group bg-white rounded-xl p-8 shadow-card hover:shadow-card-hover 
                       transition-all duration-300 border border-vapor-100"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-naranja-50 rounded-lg flex items-center justify-center 
                            group-hover:bg-naranja-600 transition-colors duration-300">
                <Eye className="w-7 h-7 text-naranja-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-naranja-600 mb-3 font-display">
                  Visión
                </h3>
                <p className="text-vapor-600 leading-relaxed">
                  Ser una empresa competitiva y confiable a corto, mediano y largo plazo, generando valor en 
                  cada inversión mediante una planificación eficiente, tecnología aplicada y compromiso humano.
                </p>
              </div>
            </div>
            {/* Borde decorativo animado */}
            <div className="mt-6 h-1 w-0 bg-gradient-to-r from-naranja-600 to-naranja-700 
                          group-hover:w-full transition-all duration-500 rounded-full"></div>
          </motion.div>
        </div>

        {/* Valores destacados - Grid 2x2 */}
        <motion.div
          variants={fadeUp}
          custom={5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-vapor-900 mb-8 text-center font-display">
            Nuestros valores
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: Award, label: "Excelencia", color: "azul" },
              { icon: Users, label: "Compromiso", color: "naranja" },
              { icon: Target, label: "Profesionalismo", color: "azul" },
              { icon: Eye, label: "Transparencia", color: "naranja" },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-lg p-6 text-center shadow-card 
                           hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 
                           border border-vapor-100"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full 
                                 bg-${value.color}-50 mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 text-${value.color}-700`} />
                  </div>
                  <p className="text-vapor-700 font-semibold text-sm">{value.label}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;