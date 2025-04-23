import React from "react";

const ObrasGrid = ({ obras }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {obras.map((obra, index) => (
        <div
          key={index}
          className="relative aspect-square md:aspect-[2/3] overflow-hidden border border-gray-200 group hover:shadow-md transition"
        >
          <img
            src={obra.imagen}
            alt={obra.titulo}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
            style={{ filter: "brightness(0.65)" }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-white text-sm md:text-base font-semibold text-center px-2 leading-tight">
              {obra.titulo}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ObrasGrid;
