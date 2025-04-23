import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video/vid.mp4" type="video/mp4" />
        Tu navegador no soporta video HTML5.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-8xl uppercase font-extrabold mb-6 drop-shadow-xl">
            Hacemos ciudad
          </h1>
          <a
            href="#servicios"
            className="bg-brand-orange text-white font-semibold px-6 py-3 rounded-xl text-lg hover:bg-orange-600 transition duration-300 shadow-md hover:scale-105"
          >
            Conocé nuestros servicios
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
