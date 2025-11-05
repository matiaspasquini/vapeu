import React, { useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const ContactForm = () => {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);

    try {
      const res = await fetch("https://formspree.io/f/xanoydwz", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        e.target.reset();
        // Resetear estado después de 5 segundos
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-card border border-vapor-100 p-8 md:p-10">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-vapor-900 mb-3 font-display">
          Envianos tu consulta
        </h3>
        <p className="text-vapor-600">
          Completá el formulario y te responderemos a la brevedad
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Nombre */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-vapor-700 mb-2">
            Nombre completo
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full border border-vapor-200 rounded-lg px-4 py-3 
                     focus:outline-none focus:ring-2 focus:ring-naranja-600 focus:border-transparent
                     transition-all duration-300 bg-vapor-50 hover:bg-white"
            placeholder="Tu nombre"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-vapor-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full border border-vapor-200 rounded-lg px-4 py-3 
                     focus:outline-none focus:ring-2 focus:ring-naranja-600 focus:border-transparent
                     transition-all duration-300 bg-vapor-50 hover:bg-white"
            placeholder="tu@email.com"
          />
        </div>

        {/* Teléfono (opcional) */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-vapor-700 mb-2">
            Teléfono <span className="text-vapor-400 font-normal">(opcional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full border border-vapor-200 rounded-lg px-4 py-3 
                     focus:outline-none focus:ring-2 focus:ring-naranja-600 focus:border-transparent
                     transition-all duration-300 bg-vapor-50 hover:bg-white"
            placeholder="+54 388 123 4567"
          />
        </div>

        {/* Mensaje */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-vapor-700 mb-2">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            className="w-full border border-vapor-200 rounded-lg px-4 py-3 
                     focus:outline-none focus:ring-2 focus:ring-naranja-600 focus:border-transparent
                     transition-all duration-300 bg-vapor-50 hover:bg-white resize-none"
            placeholder="Contanos sobre tu proyecto..."
          ></textarea>
        </div>

        {/* Botón de envío */}
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full bg-naranja-600 text-white font-semibold px-6 py-4 rounded-lg 
                   hover:bg-naranja-700 hover:-translate-y-1 hover:shadow-card-hover
                   transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
                   disabled:hover:translate-y-0 flex items-center justify-center gap-2
                   focus:outline-none focus:ring-4 focus:ring-naranja-600/50"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              Enviar mensaje
              <Send className="w-5 h-5" />
            </>
          )}
        </button>

        {/* Mensajes de estado */}
        {status === "success" && (
          <div className="flex items-center gap-3 p-4 bg-success-500/10 border border-success-500/30 
                        rounded-lg text-success-600 animate-fade-in">
            <CheckCircle className="w-5 h-5 flex-shrink-0" />
            <p className="text-sm font-medium">
              ¡Mensaje enviado correctamente! Te responderemos a la brevedad.
            </p>
          </div>
        )}

        {status === "error" && (
          <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 
                        rounded-lg text-red-600 animate-fade-in">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <p className="text-sm font-medium">
              Ocurrió un error al enviar el mensaje. Por favor, intentá nuevamente.
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;