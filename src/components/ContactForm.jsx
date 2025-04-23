import React, { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);

    const res = await fetch("https://formspree.io/f/xanoydwz", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Nombre</label>
        <input
          type="text"
          name="name"
          required
          className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-brand-orange"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          required
          className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-brand-orange"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Mensaje</label>
        <textarea
          name="message"
          rows="5"
          required
          className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-brand-orange"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-brand-orange text-white font-semibold px-6 py-3 rounded-md hover:bg-orange-600 transition"
      >
        {status === "sending" ? "Enviando..." : "Enviar mensaje"}
      </button>

      {status === "success" && (
        <p className="text-green-600 text-sm mt-2">¡Mensaje enviado correctamente!</p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-sm mt-2">Ocurrió un error. Intentalo nuevamente.</p>
      )}
    </form>
  );
};

export default ContactForm;
