'use client'

import { motion } from 'framer-motion'
import { Gift, Copy } from 'lucide-react'

export default function GiftTable() {
  const alias = "jazmin.xv.bco"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(alias)
    alert("¡Alias copiado con éxito!")
  }

  return (
    /* Cambiado a bg-[#F3EFEA] para diferenciarlo de la galería */
    <section className="py-24 px-6 bg-[#F3EFEA]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto text-center flex flex-col items-center"
      >
        <div className="w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center text-stone-600 mb-6">
          <Gift className="w-5 h-5 stroke-[1.2]" />
        </div>

        <h2 className="font-serif text-3xl text-stone-900 mb-6">
          Mesa de Regalos
        </h2>

        <p className="font-sans text-stone-600 text-sm leading-relaxed max-w-md mb-10 font-light">
          "El mejor regalo que puedo recibir es que me acompañes en mi noche tan esperada. 
          Si de todas formas querés tener un detalle conmigo, estoy juntando plata para comprarme un celu nuevo. 
          Podés sumar tu granito de arena transfiriendo al valor de tu regalo."
        </p>

        <div className="bg-white/60 backdrop-blur-sm border border-stone-200/60 rounded-2xl p-6 w-full max-w-sm shadow-sm">
          <span className="text-[10px] tracking-widest uppercase text-stone-400 block mb-1">
            Alias
          </span>
          <p className="font-sans font-medium text-stone-800 text-base tracking-wide mb-4">
            {alias}
          </p>
          
          <button
            onClick={copyToClipboard}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-full font-sans text-xs tracking-widest uppercase transition-colors"
          >
            <Copy className="w-3.5 h-3.5" />
            Copiar Alias
          </button>
        </div>
      </motion.div>
    </section>
  )
}