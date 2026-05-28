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
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#F3EFEA] px-6 overflow-hidden"
    >
      {/* Foto de ella a pantalla completa, súper tenue y mimetizada */}
      <motion.div 
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.25 }} // Al 25% queda sutil y no compite con el frente
        transition={{ duration: 2, ease: 'easeOut' }}
        className="absolute inset-0 bg-cover bg-center mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: `url('/DSC_4584.jpg')`, 
        }}
      />

      {/* Degradado para suavizar los bordes de la foto de fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F3EFEA]/30 via-transparent to-[#F3EFEA]" />

      <div className="relative z-10 text-center flex flex-col items-center select-none">
        
       
        {/* Logo Oficial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-44 md:w-52 h-auto mb-10"
        >
          <img 
            src="/logojaz.png" 
            alt="Logo Jaz" 
            className="w-full h-full object-contain filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.08)]"
          />
        </motion.div>

        {/* Botón de Ingreso Circular */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          onClick={onEnter}
          className="group relative flex flex-col items-center gap-3 focus:outline-none"
        >
          <div className="w-14 h-14 rounded-full border border-stone-400/60 flex items-center justify-center bg-transparent group-hover:bg-stone-900 group-hover:border-stone-900 transition-all duration-500 shadow-sm">
            <svg 
              className="w-4 h-4 text-stone-700 group-hover:text-stone-100 transition-colors duration-500 transform group-hover:-translate-y-0.5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </div>
          <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-stone-500 group-hover:text-stone-900 transition-colors pl-[0.25em]">
            Abrir Invitación
          </span>
        </motion.button>

      </div>
    </motion.div>
  )
}