'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Gift, Copy, Check } from 'lucide-react'

export default function GiftRegistry() {
  const [copied, setCopied] = useState(false)
  const alias = 'jazmin.v.b.mp'

  const handleCopy = async () => {
    await navigator.clipboard.writeText(alias)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-24 px-6 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <Gift className="w-10 h-10 text-stone-400 mx-auto mb-8" strokeWidth={1.5} />
        
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-8">
          Mesa de Regalos
        </h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-stone-700 font-sans leading-relaxed text-base md:text-lg mb-10"
        >
         "El mejor regalo que puedo recibir es que me acompañes en mi noche tan esperada. Si de todas formas querés tener un detalle conmigo, estoy juntando plata para comprarme un celu nuevo. Podés sumar tu granito de arena transfiriendo el valor de tu regalo."
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <p className="text-xs text-stone-400 font-sans uppercase tracking-wider mb-2">
            Alias
          </p>
          <p className="text-stone-900 font-mono text-xl md:text-2xl">
            {alias}
          </p>
        </motion.div>
        
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          onClick={handleCopy}
          className="inline-flex items-center gap-2 border-2 border-stone-900 text-stone-900 px-8 py-4 rounded-full font-sans text-sm tracking-wider uppercase hover:bg-stone-900 hover:text-white transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              Copiado
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              Copiar Alias
            </>
          )}
        </motion.button>
      </motion.div>
    </section>
  )
}
