'use client'

import { motion } from 'framer-motion'

const photos = [
  { id: 1, aspect: 'aspect-[3/4]' },
  { id: 2, aspect: 'aspect-square' },
  { id: 3, aspect: 'aspect-[4/5]' },
  { id: 4, aspect: 'aspect-[3/4]' },
  { id: 5, aspect: 'aspect-square' },
  { id: 6, aspect: 'aspect-[4/5]' },
]

export default function PhotoGallery() {
  return (
    <section className="py-24 px-6 bg-[#F3EFEA]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-16 text-center">
          Galería
        </h2>
        
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${photo.aspect} bg-stone-200 overflow-hidden break-inside-avoid`}
            >
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url("https://images.unsplash.com/photo-${1560000000000 + index * 10000000}?q=80&w=800&auto=format&fit=crop")`,
                  backgroundColor: '#E7E5E4',
                }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
