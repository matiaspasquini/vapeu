import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-brand-blue text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo o nombre */}
        <div className="text-xl font-semibold tracking-wide">
          VAPEU
        </div>

        {/* Navegación simple */}
        <nav className="flex gap-6 text-sm">
          <a href="#inicio" className="hover:text-brand-orange transition">Inicio</a>
          <a href="#servicios" className="hover:text-brand-orange transition">Servicios</a>
          <a href="#contacto" className="hover:text-brand-orange transition">Contacto</a>
        </nav>

        {/* Derechos de autor */}
        <p className="text-xs text-gray-300">&copy; {new Date().getFullYear()} VAPEU. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
