import React from "react";
import CountUp from "react-countup";
import { Building, Route, Truck } from "lucide-react";
import { motion } from "framer-motion";

const iconClass = "w-6 h-6 text-brand-blue mb-2";

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

const Stats = () => {
  return (
    <div className="relative z-30">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-200 px-6 py-4 md:py-6 w-[95%] max-w-4xl shadow-sm"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4 text-center items-center">
          {/* Construcción */}
          <motion.div variants={fadeUp} custom={1}>
            <Building className={iconClass} />
            <div className="text-xl font-bold text-brand-blue">
              <CountUp end={62984} duration={3} separator="." /> m²
            </div>
            <p className="text-xs text-brand-gray mt-1">en construcción</p>
          </motion.div>

          {/* Vial */}
          <motion.div variants={fadeUp} custom={2}>
            <Route className={iconClass} />
            <div className="text-xl font-bold text-brand-blue">
              <CountUp end={1066296} duration={3.5} separator="." /> m²
            </div>
            <p className="text-xs text-brand-gray mt-1">en obras viales</p>
          </motion.div>

          {/* Minería */}
          <motion.div
            className="col-span-2 md:col-span-1"
            variants={fadeUp}
            custom={3}
          >
            <Truck className={iconClass} />
            <div className="text-xl font-bold text-brand-blue">
              <CountUp end={5683160} duration={4} separator="." /> m³
            </div>
            <p className="text-xs text-brand-gray mt-1">movimiento de suelo</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Stats;
