import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const About = () => {
  return (
    <section id="quienes-somos" className="bg-white px-6 py-20 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-brand-blue mb-12 border-b border-gray-200 pb-4"
        >
          Quiénes somos
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-700 text-base leading-relaxed mb-12 max-w-4xl"
        >
          Con más de <strong>50 años de trayectoria</strong> en Jujuy, VAPEU es una empresa familiar comprometida con la construcción seria, eficiente y sostenible. Trabajamos en 4 áreas clave: obras civiles, obras viales, servicios mineros y producción de áridos. Nuestra solidez se basa en una estructura profesional y un equipo humano capacitado.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            variants={fadeUp}
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="border-l-4 border-brand-orange pl-6"
          >
            <h3 className="text-lg font-semibold text-brand-blue mb-2">Misión</h3>
            <p className="text-gray-700 text-sm">
              Brindar soluciones integrales en construcción, con responsabilidad y profesionalismo, consolidando calidad en cada proyecto mediante procesos ordenados y personal calificado.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="border-l-4 border-brand-orange pl-6"
          >
            <h3 className="text-lg font-semibold text-brand-blue mb-2">Visión</h3>
            <p className="text-gray-700 text-sm">
              Ser una empresa competitiva y confiable a corto, mediano y largo plazo, generando valor en cada inversión mediante una planificación eficiente, tecnología aplicada y compromiso humano.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
