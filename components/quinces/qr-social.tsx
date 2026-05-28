'use client'

import { motion } from 'framer-motion'
import Image from 'next/image' 
import Link from 'next/link'   

// Definimos la URL real del canal de Instagram
const INSTAGRAM_CHANNEL_URL = 'https://ig.me/j/AbatdEOxVktvg93P/'

export default function QrSocial() {
  return (
    <section className="py-24 px-6 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
    

        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-6">
          QR Social
        </h2>
        
        <p className="text-stone-600 font-sans text-sm md:text-base leading-relaxed mb-12 max-w-md mx-auto">
          Durante la fiesta, subí tus fotos y videos al canal compartido para que todos podamos revivir este momento especial.
        </p>

        <div className="flex flex-col items-center justify-center">
          {/* HACEMOS EL QR CLICKEABLE CON EL LINK REAL */}
          <Link href={INSTAGRAM_CHANNEL_URL} target="_blank" rel="noopener noreferrer">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-4 bg-stone-50 rounded-3xl flex items-center justify-center mb-6 border border-stone-200 cursor-pointer shadow-inner"
            >
              <Image 
                src="/qr-social1.png" 
                alt="Código QR para unirse al canal de Instagram"
                width={128} 
                height={128} 
                className="object-contain rounded-xl"
              />
            </motion.div>
          </Link>
          
        </div>
      </motion.div>
    </section>
  )
}