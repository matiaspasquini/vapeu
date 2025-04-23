import React from "react";
import logoIcon from "../assets/logovapeu.png";
import logoText from "../assets/vap.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo completo */}
        <a href="#inicio" className="flex items-center space-x-2">
          <img src={logoIcon} alt="Vapeu logo" className="h-7 md:h-7 w-auto" />
          <img src={logoText} alt="Vapeu texto" className="h-6 md:h-6 w-auto" />
        </a>

        {/* Navegación */}
        <nav className="space-x-4 hidden md:block">
          <a href="#inicio" className="text-gray-700 hover:text-brand-blue transition">Inicio</a>
          <a href="#quienes-somos" className="text-gray-700 hover:text-brand-blue transition">Quiénes somos</a>
          <a href="#servicios" className="text-gray-700 hover:text-brand-blue transition">Servicios</a>
          <a href="#proyectos" className="text-gray-700 hover:text-brand-blue transition">Proyectos</a>
          <a href="#contacto" className="text-gray-700 hover:text-brand-blue transition">Contacto</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
