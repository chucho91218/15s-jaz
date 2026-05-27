'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, Navigation, Shirt } from 'lucide-react'

const mainDetails = [
  { icon: Calendar, label: 'Fecha', value: '3 de Julio de 2026' },
  { icon: Clock, label: 'Hora', value: '21:30 hs' },
  { icon: MapPin, label: 'Lugar', value: 'Salón Santas' },
  { icon: Navigation, label: 'Dirección', value: 'Ruta 13 esq. Independencia' },
]

const dressCode = { icon: Shirt, label: 'Dress Code', value: 'Elegante Sport / Gala' }

export default function EventDetails() {
  const handleOpenMaps = () => {
    window.open('https://maps.app.goo.gl/rcJxK1XCw9GhVJSJ6', '_blank')
  }

  return (
    <section className="py-24 px-6 bg-[#F3EFEA]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        {/* SEPARADOR FLORAL */}
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1.2 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          src="/separador-rojo.png" 
          alt="Detalle floral rojo"
          className="w-48 md:w-64 mx-auto mb-10 object-contain drop-shadow-sm"
        />

        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-16">
         La Celebración
        </h2>
        
        {/* GRILLA DE 2 COLUMNAS PARA DATOS PRINCIPALES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
          {mainDetails.map((detail, index) => (
            <motion.div
              key={detail.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center p-8 rounded-3xl bg-white/40 border border-stone-200/50 backdrop-blur-sm"
            >
              <detail.icon className="w-6 h-6 text-stone-400 mb-4" strokeWidth={1.5} />
              <p className="text-[10px] text-stone-400 font-sans uppercase tracking-[0.2em] mb-2">
                {detail.label}
              </p>
              <p className="text-stone-900 font-sans text-lg">
                {detail.value}
              </p>
            </motion.div>
          ))}
        </div>

       
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center p-8 rounded-3xl bg-white/40 border border-stone-200/50 backdrop-blur-sm"
        >
          <dressCode.icon className="w-6 h-6 text-stone-400 mb-4" strokeWidth={1.5} />
          <p className="text-[10px] text-stone-400 font-sans uppercase tracking-[0.2em] mb-2">
            {dressCode.label}
          </p>
          <p className="text-stone-900 font-sans text-lg">
            {dressCode.value}
          </p>
        </motion.div>
        
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          onClick={handleOpenMaps}
          className="mt-12 inline-flex items-center gap-2 bg-stone-900 text-white px-8 py-4 rounded-full font-sans text-sm tracking-wider uppercase hover:bg-stone-800 transition-colors"
        >
          <MapPin className="w-4 h-4" />
          Ver Ubicación
        </motion.button>
      </motion.div>
    </section>
  )
}