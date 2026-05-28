'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center bg-[#F3EFEA] overflow-hidden">
      
      {/* Imagen de fondo tenue de ella para dar continuidad absoluta */}
      <motion.div 
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.25 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="absolute inset-0 bg-cover bg-center mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: `url('/DSC_4584.jpg')`, 
        }}
      />
      
      {/* Desvanecimiento perfecto hacia abajo para conectar con la Cuenta Regresiva */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F3EFEA]/20 to-[#F3EFEA]" />

          {/* Contenido Principal */}
          <div className="relative z-10 flex flex-col items-center text-center px-6 select-none max-w-lg w-full">
            
            {/* Contenedor del Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="w-56 md:w-72 max-w-[80vw]"
            >
              <img 
                src="/logojaz.png" 
                alt="Logo Jaz" 
                className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
              />
            </motion.div>

        {/* Separador Fino */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: '50px', opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="h-[1px] bg-stone-400/40 mt-10 mb-5"
        />

        {/* Fecha */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-sans text-[11px] md:text-xs tracking-[0.5em] text-stone-700 uppercase font-light pl-[0.5em]"
        >
          3 de Julio 2026
        </motion.p>
      </div>

      {/* Indicador de scroll */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.7, 0], y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, delay: 1 }}
        className="absolute bottom-12 z-10 flex flex-col items-center"
      >
        <span className="w-[1px] h-10 bg-gradient-to-b from-stone-400 to-transparent" />
      </motion.div>
    </section>
  )
}