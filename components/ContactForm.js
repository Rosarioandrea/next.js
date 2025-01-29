"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const { register, reset, handleSubmit } = useForm();
  const [msg, setMsg] = useState("");

  const dataSubmit = (data) => {
    if (data) {
      setMsg("¡Gracias por contactarnos!");
      reset(); // Limpia el formulario después de enviar
    }
  };

  return (
    <form className="mt-5" onSubmit={handleSubmit(dataSubmit)}>
      {/* Primera fila: Nombre y E-mail */}
      <div className="flex gap-4 my-2">
        <div className="w-1/2 bg-white rounded">
          <input
            type="text"
            placeholder="Nombre y Apellido"
            className="w-full text-lg px-4 py-1.5 rounded shadow-md outline-none"
            {...register("NombreYApellido", { required: true })}
          />
        </div>
        <div className="w-1/2 bg-white rounded">
          <input
            type="email"
            placeholder="E-mail"
            className="w-full text-lg px-4 py-1.5 rounded shadow-md outline-none"
            {...register("email", { required: true })}
          />
        </div>
      </div>

      {/* Segunda fila: Mensaje */}
      <div className="my-4">
        <div className="bg-white rounded">
          <textarea
            placeholder="Mensaje"
            className="w-full text-lg px-4 py-1.5 rounded shadow-md outline-none resize-none"
            {...register("mensaje")}
            rows="4"
          ></textarea>
        </div>
      </div>

      {/* Mensaje de confirmación */}
      {msg && (
        <div className="text-center my-4">
          <p className="text-green-500 text-lg">{msg}</p>
        </div>
      )}

      {/* Botón de enviar */}
      <div className="flex justify-end mt-6">
        <button
          type="submit"
          className="bg-white rounded text-black hover:bg-white/40 transition-all ease-linear py-2 font-medium uppercase p-2 text-center"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default ContactForm;