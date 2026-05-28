"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center bg-[#F3EFEA] overflow-hidden">
      {/* Imagen de fondo tenue */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: `url('/DSC_4584.jpg')`,
        }}
      />

      {/* Degradados para enfocar el centro y conectar con la siguiente sección */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_5%,#F3EFEA_100%)] opacity-85 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#F3EFEA]/20 via-transparent to-[#F3EFEA] pointer-events-none" />

      {/* Contenido Principal */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 select-none max-w-lg w-full mb-10">
        {/* Contenedor del Logo (Un poco más grande y con mejor sombra) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-64 md:w-80 max-w-[85vw] drop-shadow-2xl"
        >
          <img
            src="/logojaz.png"
            alt="Logo Jaz"
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Separador Fino */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "40px", opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-[1px] bg-stone-400 mt-10 mb-6"
        />

        {/* Fecha */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="font-sans text-[10px] md:text-xs tracking-[0.4em] text-stone-600 uppercase font-medium pl-[0.4em]"
        >
          3 de Julio 2026
        </motion.p>
      </div>

      {/* Indicador de scroll mejorado */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 z-10 flex flex-col items-center gap-3"
      >
        <span className="font-sans text-[8px] tracking-[0.3em] uppercase text-stone-400 font-medium">
          Deslizar
        </span>
        <motion.div
          animate={{ y: [0, 10, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-stone-400 to-transparent"
        />
      </motion.div>
    </section>
  );
}