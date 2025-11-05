import React from "react";
import { Link } from "react-router-dom";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Linkedin, 
  Facebook, 
  Instagram,
  ChevronUp 
} from "lucide-react";
import logoIcon from "../assets/logovapeu.png";
import logoText from "../assets/vap.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    empresa: [
      { label: "Inicio", href: "#inicio" },
      { label: "Quiénes somos", href: "#quienes-somos" },
      { label: "Servicios", href: "#servicios" },
      { label: "Proyectos", href: "#proyectos" },
    ],
    servicios: [
      { label: "Obras Civiles", href: "/servicios/civiles" },
      { label: "Obras Viales", href: "/servicios/viales" },
      { label: "Servicios Mineros", href: "/servicios/mineros" },
      { label: "Producción de Áridos", href: "/servicios/aridos" },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-vapor-900 text-white relative overflow-hidden">
      {/* Elemento decorativo superior */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-azul-600 via-naranja-600 to-azul-600"></div>

      {/* Contenido principal del footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Columna 1: Logo y descripción */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img src={logoIcon} alt="Vapeu logo" className="h-10 w-auto brightness-0 invert" />
              <img src={logoText} alt="Vapeu texto" className="h-9 w-auto brightness-0 invert" />
            </div>
            <p className="text-vapor-300 text-sm leading-relaxed mb-6">
              Construyendo el futuro de Jujuy desde hace más de 50 años. 
              Calidad, compromiso y experiencia en cada proyecto.
            </p>
            {/* Redes sociales */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 bg-vapor-800 rounded-lg flex items-center justify-center
                             hover:bg-naranja-600 transition-all duration-300 hover:-translate-y-1
                             hover:shadow-lg group"
                  >
                    <Icon className="w-5 h-5 text-vapor-300 group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Columna 2: Empresa */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6 text-white">
              Empresa
            </h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-vapor-300 text-sm hover:text-naranja-400 transition-colors 
                             duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-naranja-600 group-hover:w-4 transition-all 
                                   duration-300 mr-0 group-hover:mr-2 rounded-full"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Servicios */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6 text-white">
              Servicios
            </h3>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-vapor-300 text-sm hover:text-naranja-400 transition-colors 
                             duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-naranja-600 group-hover:w-4 transition-all 
                                   duration-300 mr-0 group-hover:mr-2 rounded-full"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6 text-white">
              Contacto
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://maps.google.com/?q=San+Salvador+de+Jujuy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-vapor-300 text-sm hover:text-naranja-400 
                           transition-colors duration-300 group"
                >
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span>San Salvador de Jujuy, Jujuy, Argentina</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+543881234567"
                  className="flex items-center gap-3 text-vapor-300 text-sm hover:text-naranja-400 
                           transition-colors duration-300 group"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>+54 388 123 4567</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@vapeu.com.ar"
                  className="flex items-center gap-3 text-vapor-300 text-sm hover:text-naranja-400 
                           transition-colors duration-300 group"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>info@vapeu.com.ar</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Separador */}
        <div className="h-px bg-vapor-800 mb-8"></div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-vapor-400 text-sm text-center md:text-left">
            © {currentYear} VAPEU SRL. Todos los derechos reservados.
          </p>

          {/* Links legales */}
          <div className="flex gap-6 text-sm text-vapor-400">
            <Link to="/privacidad" className="hover:text-naranja-400 transition-colors duration-300">
              Privacidad
            </Link>
            <Link to="/terminos" className="hover:text-naranja-400 transition-colors duration-300">
              Términos
            </Link>
          </div>
        </div>
      </div>

      {/* Botón scroll to top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-naranja-600 rounded-full 
                 flex items-center justify-center shadow-deep hover:bg-naranja-700 
                 hover:-translate-y-1 transition-all duration-300 z-50 group"
        aria-label="Volver arriba"
      >
        <ChevronUp className="w-6 h-6 text-white group-hover:animate-bounce" />
      </button>
    </footer>
  );
};

export default Footer;