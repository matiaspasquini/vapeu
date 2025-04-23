import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import ContactForm from "./ContactForm"

const Contact = () => {
  return (
    <section id="contacto" className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue text-center mb-12">
          Contacto
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Datos de contacto */}
          <div className="space-y-6 text-gray-800">
            <div className="flex items-start gap-4">
              <MapPin className="text-brand-orange w-6 h-6 mt-1" />
              <div>
                <p className="text-sm font-semibold text-brand-blue">Dirección</p>
                <p>San Salvador de Jujuy, Jujuy, Argentina</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-brand-orange w-6 h-6 mt-1" />
              <div>
                <p className="text-sm font-semibold text-brand-blue">Teléfono</p>
                <p>+54 388 123 4567</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-brand-orange w-6 h-6 mt-1" />
              <div>
                <p className="text-sm font-semibold text-brand-blue">Email</p>
                <p>info@vapeu.com.ar</p>
              </div>
            </div>
          </div>

          <ContactForm />

          {/* Mapa embebido (puede ser opcional) */}
          {/* <div className="rounded-xl overflow-hidden shadow-md">
            <iframe
              title="Ubicación Vapeu"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.6394540363553!2d-65.27403088990204!3d-24.1843742623206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941b05ee413baa73%3A0x36c284c1751ae54b!2sVAPEU%20SRL.%20Empresa%20Constructora!5e0!3m2!1ses-419!2sar!4v1745409312093!5m2!1ses-419!2sar"
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
