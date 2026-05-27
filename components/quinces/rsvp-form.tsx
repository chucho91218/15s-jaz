'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export default function RsvpForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    menuEspecial: 'Ninguno',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Armamos el mensaje para WhatsApp
    const mensaje = `¡Hola! Confirmo mi asistencia a los 15 de Jazmín.%0A%0A*Nombre:* ${formData.nombre}%0A*Menú especial:* ${formData.menuEspecial}`
    
    // Redirigimos al WhatsApp que me pasaste antes
    window.open(`https://wa.me/543573459268?text=${mensaje}`, '_blank')
  }

  return (
    <section className="py-24 px-6 bg-[#F3EFEA]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto text-center"
      >
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-6">
          Confirmar Asistencia
        </h2>
        
        <p className="text-stone-600 font-sans text-sm md:text-base leading-relaxed mb-12">
          Por favor, confirmá tu presencia antes del 20 de junio.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Campo Nombre */}
          <div className="flex flex-col text-left">
            <label htmlFor="nombre" className="text-xs uppercase tracking-widest text-stone-500 mb-2 font-medium">
              Nombre y Apellido
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              required
              value={formData.nombre}
              onChange={handleChange}
              className="w-full bg-white/50 border border-stone-300 rounded-2xl px-6 py-4 text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:border-transparent transition-all"
              placeholder=""
            />
          </div>

          {/* Campo Menú Especial */}
          <div className="flex flex-col text-left">
            <label htmlFor="menuEspecial" className="text-xs uppercase tracking-widest text-stone-500 mb-2 font-medium">
              Menú Especial / Restricción
            </label>
            <div className="relative">
              <select
                id="menuEspecial"
                name="menuEspecial"
                value={formData.menuEspecial}
                onChange={handleChange}
                className="w-full appearance-none bg-white/50 border border-stone-300 rounded-2xl px-6 py-4 text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:border-transparent transition-all cursor-pointer"
              >
                <option value="Ninguno">Ninguno</option>
                <option value="Celíaco">Celíaco</option>
                <option value="Vegetariano">Vegetariano</option>
                <option value="Vegano">Vegano</option>
                <option value="Diabético">Diabético</option>
                <option value="Alergia (Aclarar en WhatsApp)">Alergia (Aclarar en mensaje)</option>
              </select>
              {/* Flechita personalizada para el select */}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-stone-500">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Botón Principal Único */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full mt-8 flex items-center justify-center gap-2 bg-stone-900 text-white px-8 py-5 rounded-full font-sans text-sm tracking-wider uppercase hover:bg-stone-800 transition-colors shadow-md"
          >
            <Check className="w-5 h-5" />
            Confirmar por WhatsApp
          </motion.button>
        </form>
      </motion.div>
    </section>
  )
}