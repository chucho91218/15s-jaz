'use client'

import { motion } from 'framer-motion'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'

const photos = [
  { id: 2, src: '/DSC_4532.jpg', styles: 'col-span-2 aspect-[6/5]' },
  { id: 3, src: '/DSC_4642.jpg', styles: 'col-span-1 aspect-[3/5]' },
  { id: 5, src: '/DSC_19919.jpg', styles: 'col-span-1 aspect-[4/5]' },
  { id: 6, src: '/DSC_33111.jpg', styles: 'col-span-1 aspect-[4/5]' },
  { id: 1, src: '/DSC_4524.jpg', styles: 'col-span-1 aspect-[4/5]' },
]

export default function PhotoGallery() {
  return (
    <PhotoProvider maskOpacity={0.8} bannerVisible={false}>
      {/* Cambiado a bg-white para generar el corte visual */}
      <section className="py-24 px-4 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-12 text-center">
            Galería
          </h2>
          
          <div className="grid grid-cols-3 gap-2">
            {photos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`${photo.styles} bg-stone-100 overflow-hidden rounded-xl cursor-zoom-in`}
              >
                <PhotoView src={photo.src}>
                  <img 
                    src={photo.src} 
                    alt={`Foto galería ${index + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </PhotoView>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </PhotoProvider>
  )
}