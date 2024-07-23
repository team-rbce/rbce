/* eslint-disable max-len */
import React from 'react';

export default function EmailModal() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 backdrop-blur-sm">
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg flex flex-col items-center gap-4 px-10 py-5 max-w-[70%] sm:max-w-[600px] sm:max-h-[320px] max-h-fit bg-white font-Inter">
        <h3 className="mb-4">Entre em Contato</h3>
        <form className="flex flex-col justify-between gap-4">
          <label htmlFor="">
            Nome
            <input type="text" name="name" />
          </label>
          <label htmlFor="">
            Email
            <input type="email" name="email" />
          </label>
          <textarea placeholder="Mensagem" />
          <button
            type="submit"
            className="text-white w-full py-2 rounded-md bg-[#00923E] hover:bg-[#0a6b33] mt-4 shadow-md text-sm"
          >
            Enviar
          </button>
        </form>
        <button aria-label="close modal" className="absolute right-4 top-2 font-sans">X</button>
      </div>
    </div>
  );
}
