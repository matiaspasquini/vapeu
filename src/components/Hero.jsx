import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Activar animaciones después de montar el componente
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
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
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video de fondo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover scale-105"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video/vid.mp4" type="video/mp4" />
        Tu navegador no soporta video HTML5.
      </video>

      {/* Overlay con gradiente */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-overlay"></div>

      {/* Contenido principal */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="text-center text-white max-w-5xl">
          {/* Título principal con animación */}
          <h1
            className={`font-display text-hero-mobile md:text-hero uppercase mb-4 md:mb-6 
                       drop-shadow-deep transition-all duration-1000 transform
                       ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Construimos infraestructura
            <span className="block mt-2 text-naranja-600">que transforma regiones</span>
          </h1>

          {/* Subtítulo con animación retardada */}
          <p
            className={`text-lg md:text-xl font-medium text-vapor-100 mb-8 md:mb-10 
                       max-w-2xl mx-auto transition-all duration-1000 delay-200 transform
                       ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            30 años de excelencia en obras civiles, mineras e inmobiliarias en Jujuy y el NOA
          </p>

          {/* CTAs con animación retardada */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center
                       transition-all duration-1000 delay-500 transform
                       ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <button
              onClick={() => handleNavigation('#servicios')}
              className="group relative px-8 py-4 bg-naranja-600 text-white font-semibold text-lg 
                       rounded-lg overflow-hidden transition-all duration-300
                       hover:bg-naranja-700 hover:-translate-y-1 hover:shadow-deep
                       focus:outline-none focus:ring-4 focus:ring-naranja-600/50"
            >
              <span className="relative z-10">Nuestros Servicios</span>
              <div className="absolute inset-0 bg-naranja-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>

            <button
              onClick={() => handleNavigation('#proyectos')}
              className="group px-8 py-4 bg-transparent border-2 border-white text-white font-semibold text-lg 
                       rounded-lg transition-all duration-300 backdrop-blur-sm
                       hover:bg-white hover:text-azul-700 hover:-translate-y-1 hover:shadow-deep
                       focus:outline-none focus:ring-4 focus:ring-white/50"
            >
              Ver Proyectos
            </button>
          </div>

          {/* Indicador de scroll animado */}
          <div
            className={`absolute bottom-10 left-1/2 transform -translate-x-1/2
                       transition-all duration-1000 delay-1000
                       ${isVisible ? "opacity-100" : "opacity-0"}`}
          >
            <div className="flex flex-col items-center animate-float">
              <span className="text-white/80 text-sm font-medium mb-2">Descubrí más</span>
              <svg
                className="w-6 h-6 text-white/80"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Efecto de degradado inferior para transición suave */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
    </div>
  );
};

export default Hero;