"use client";

import { motion } from "framer-motion";

interface WelcomePortalProps {
  onEnter: () => void;
  nombre: string;
}

export default function WelcomePortal({ onEnter, nombre }: WelcomePortalProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#F3EFEA] overflow-hidden"
    >
      {/* Foto de fondo */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: `url('/DSC_4584.jpg')`,
        }}
      />

      {/* Degradado radial (viñeta) para enfocar el centro y suavizar bordes */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,#F3EFEA_100%)] opacity-90 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#F3EFEA]/40 via-transparent to-[#F3EFEA] pointer-events-none" />

      {/* Contenedor principal con mejor distribución vertical */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center pb-12 select-none">
        
        <div className="flex-grow flex items-center justify-center">
          {/* Logo Oficial un poco más proporcionado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-56 md:w-64 h-auto drop-shadow-2xl"
          >
            <img
              src="/logojaz.png"
              alt="Logo Jaz"
              className="w-full h-full object-contain"
            />
          </motion.div>
        </div>

        {/* Botón de Ingreso Circular con animación de flote */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          onClick={onEnter}
          className="group flex flex-col items-center gap-4 focus:outline-none mb-8"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-14 h-14 rounded-full border border-stone-400/80 flex items-center justify-center bg-white/20 backdrop-blur-md group-hover:bg-stone-900 group-hover:border-stone-900 transition-all duration-500 shadow-sm"
          >
            <svg
              className="w-5 h-5 text-stone-700 group-hover:text-stone-100 transition-colors duration-500 transform group-hover:-translate-y-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          </motion.div>
          <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-stone-600 group-hover:text-stone-900 transition-colors pl-[0.3em] font-medium">
            Abrir Invitación
          </span>
        </motion.button>
      </div>
    </motion.div>
  );
}