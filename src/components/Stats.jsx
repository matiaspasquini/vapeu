import React from "react";
import CountUp from "react-countup";
import { Building2, Route, Truck } from "lucide-react";
import { motion } from "framer-motion";

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

const Stats = () => {
  const stats = [
    {
      icon: Building2,
      value: 62984,
      suffix: "m²",
      label: "en construcción",
      duration: 2.5,
      color: "azul",
    },
    {
      icon: Route,
      value: 1066296,
      suffix: "m²",
      label: "en obras viales",
      duration: 3,
      color: "naranja",
    },
    {
      icon: Truck,
      value: 5683160,
      suffix: "m³",
      label: "movimiento de suelo",
      duration: 3.5,
      color: "azul",
    },
  ];

  return (
    <div className="relative z-30 -mt-20 md:-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-white rounded-2xl shadow-industrial border border-vapor-100 
                     px-8 py-10 md:py-12 backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  custom={index + 1}
                  className="group text-center relative"
                >
                  {/* Icono con fondo */}
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-4
                               bg-${stat.color}-50 transition-all duration-300 
                               group-hover:scale-110 group-hover:shadow-lg`}
                  >
                    <Icon
                      className={`w-8 h-8 text-${stat.color}-700 transition-transform duration-300 
                                 group-hover:scale-110`}
                    />
                  </div>

                  {/* Número con contador */}
                  <div className="font-mono text-3xl md:text-4xl font-bold text-vapor-900 mb-1">
                    <CountUp
                      end={stat.value}
                      duration={stat.duration}
                      separator="."
                      enableScrollSpy
                      scrollSpyOnce
                    />
                    <span className="text-2xl md:text-3xl ml-1">{stat.suffix}</span>
                  </div>

                  {/* Label */}
                  <p className="text-sm md:text-base text-vapor-500 font-medium uppercase tracking-wider">
                    {stat.label}
                  </p>

                  {/* Línea decorativa inferior */}
                  <div
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-0 
                               bg-${stat.color}-600 transition-all duration-500 
                               group-hover:w-20 rounded-full`}
                  ></div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Stats;