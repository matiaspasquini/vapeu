import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logoIcon from "../assets/logovapeu.png";
import logoText from "../assets/vap.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Detectar scroll para cambiar estilo del header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Función para manejar navegación
  const handleNavigation = (href) => {
    if (href.startsWith('#')) {
      // Si estamos en la página principal, hacer scroll a la sección
      if (location.pathname === '/') {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Si no estamos en la página principal, navegar a home y luego hacer scroll
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else {
      navigate(href);
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#quienes-somos", label: "Quiénes somos" },
    { href: "#servicios", label: "Servicios" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-industrial py-3"
          : "bg-white/80 backdrop-blur-md shadow-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        {/* Logo completo */}
        <button
          onClick={() => handleNavigation('#inicio')}
          className="flex items-center space-x-2 group transition-transform duration-300 hover:scale-105"
        >
          <img
            src={logoIcon}
            alt="Vapeu logo"
            className="h-8 md:h-9 w-auto transition-transform duration-300 group-hover:rotate-3"
          />
          <img
            src={logoText}
            alt="Vapeu texto"
            className="h-7 md:h-8 w-auto"
          />
        </button>

        {/* Navegación Desktop */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => handleNavigation(link.href)}
              className="relative px-4 py-2 text-vapor-700 font-medium text-sm tracking-wide transition-all duration-300 hover:text-azul-700 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-azul-700 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
          
          {/* CTA Button */}
          <button
            onClick={() => handleNavigation('#contacto')}
            className="ml-4 px-5 py-2.5 bg-azul-700 text-white font-semibold text-sm rounded-lg 
                     hover:bg-azul-600 hover:-translate-y-0.5 hover:shadow-card-hover 
                     transition-all duration-300 shadow-card"
          >
            Contactar
          </button>
        </nav>

        {/* Botón Menú Mobile */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-vapor-700 hover:text-azul-700 transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menú Mobile */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-white/95 backdrop-blur-lg border-t border-vapor-100 px-6 py-4 space-y-1">
          {navLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => handleNavigation(link.href)}
              className="block w-full text-left px-4 py-3 text-vapor-700 font-medium hover:bg-vapor-50 
                       hover:text-azul-700 rounded-lg transition-all duration-200"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavigation('#contacto')}
            className="block w-full px-4 py-3 bg-azul-700 text-white font-semibold text-center 
                     rounded-lg hover:bg-azul-600 transition-colors duration-200 mt-2"
          >
            Contactar
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;