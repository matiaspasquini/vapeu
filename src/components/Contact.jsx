import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "./ContactForm";

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

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Dirección",
      value: "San Salvador de Jujuy, Jujuy, Argentina",
      link: "https://maps.google.com/?q=San+Salvador+de+Jujuy",
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: "+54 388 123 4567",
      link: "tel:+543881234567",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@vapeu.com.ar",
      link: "mailto:info@vapeu.com.ar",
    },
    {
      icon: Clock,
      label: "Horario",
      value: "Lunes a Viernes: 8:00 - 17:00",
      link: null,
    },
  ];

  return (
    <section id="contacto" className="py-20 md:py-28 bg-vapor-50 relative overflow-hidden">
      {/* Elemento decorativo de fondo */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-azul-50/30 to-transparent pointer-events-none"></div>

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
            Hablemos
          </span>
          <h2 className="font-display text-display-mobile md:text-display text-vapor-900 mb-6">
            Contacto
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-azul-700 to-naranja-600 rounded-full mx-auto mb-6"></div>
          <p className="text-vapor-600 text-lg max-w-2xl mx-auto">
            ¿Tenés un proyecto en mente? Nos encantaría escucharte y trabajar juntos
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Información de contacto */}
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Título de la columna */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-vapor-900 mb-3 font-display">
                Información de contacto
              </h3>
              <p className="text-vapor-600">
                Estamos disponibles para responder tus consultas y brindarte la mejor atención
              </p>
            </div>

            {/* Items de contacto */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    custom={index + 3}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="group"
                  >
                    {item.link ? (
                      <a
                        href={item.link}
                        target={item.icon === MapPin ? "_blank" : undefined}
                        rel={item.icon === MapPin ? "noopener noreferrer" : undefined}
                        className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-card 
                                 hover:shadow-card-hover transition-all duration-300 
                                 hover:-translate-y-1 border border-vapor-100"
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-naranja-50 rounded-lg 
                                      flex items-center justify-center group-hover:bg-naranja-600 
                                      transition-colors duration-300">
                          <Icon className="w-6 h-6 text-naranja-600 group-hover:text-white 
                                         transition-colors duration-300" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-vapor-500 uppercase tracking-wide mb-1">
                            {item.label}
                          </p>
                          <p className="text-vapor-900 font-medium group-hover:text-azul-700 
                                      transition-colors duration-300">
                            {item.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-card 
                                    border border-vapor-100">
                        <div className="flex-shrink-0 w-12 h-12 bg-azul-50 rounded-lg 
                                      flex items-center justify-center">
                          <Icon className="w-6 h-6 text-azul-700" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-vapor-500 uppercase tracking-wide mb-1">
                            {item.label}
                          </p>
                          <p className="text-vapor-900 font-medium">{item.value}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Mapa embebido */}
            <motion.div
              variants={fadeUp}
              custom={7}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-8 rounded-xl overflow-hidden shadow-card border border-vapor-100"
            >
              <iframe
                title="Ubicación Vapeu"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.6394540363553!2d-65.27403088990204!3d-24.1843742623206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941b05ee413baa73%3A0x36c284c1751ae54b!2sVAPEU%20SRL.%20Empresa%20Constructora!5e0!3m2!1ses-419!2sar!4v1745409312093!5m2!1ses-419!2sar"
                width="100%"
                height="300"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </motion.div>
          </motion.div>

          {/* Formulario */}
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;