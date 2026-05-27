'use client'

import { motion } from 'framer-motion'


interface WelcomePortalProps {
  onEnter: () => void
  nombre: string
}

export default function WelcomePortal({ onEnter, nombre }: WelcomePortalProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#F3EFEA] px-6"
    >
      {/* Detalle floral de fondo con opacidad baja */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
        <img 
          src="/separador-rojo.png" 
          className="absolute -top-10 -right-20 w-80 rotate-12" 
          alt="" 
        />
        <img 
          src="/separador-rojo.png" 
          className="absolute -bottom-10 -left-20 w-80 -rotate-12" 
          alt="" 
        />
      </div>

      <div className="relative z-10 text-center flex flex-col items-center">
        {/* Foto de Portada Circular o con Marco Editorial */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="w-64 h-80 md:w-80 md:h-[450px] relative mb-12 shadow-2xl rounded-t-full overflow-hidden border-4 border-white"
        >
          <img 
            src="/foto-portada.jpg" // Asegurate de tener esta foto en public
            alt="Jazmín"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Título Principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h1 className="font-serif text-6xl md:text-8xl text-stone-900 mb-2">
            JAZ
          </h1>
          <p className="font-sans text-sm md:text-base tracking-[0.4em] uppercase text-stone-500 mb-12">
            fifteen
          </p>
        </motion.div>

        {/* Botón de Ingreso */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          onClick={onEnter}
          className="group relative flex flex-col items-center gap-4 focus:outline-none"
        >
          <div className="w-16 h-16 rounded-full border border-stone-300 flex items-center justify-center group-hover:bg-stone-900 group-hover:border-stone-900 transition-all duration-500">
            
          </div>
          <span className="font-sans text-xs tracking-widest uppercase text-stone-400 group-hover:text-stone-900 transition-colors">
            Abrir Invitación
          </span>
        </motion.button>
      </div>
    </motion.div>
  )
}