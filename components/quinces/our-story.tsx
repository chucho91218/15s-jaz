'use client'

import { motion } from 'framer-motion'

const storySteps = [
  {
    text: "Mis papis Vale y Marcelo desearon con todo el amor que yo llegara a este mundo...",
    imgSrc: "/jazbb.png?height=400&width=400",
  },
  {
    text: "...para completar junto a mi hermano Benja, esta hermosa familia.",
    imgSrc: "/jazbb2.png?height=400&width=400",
  },
  {
    text: "Llegué un frío lunes 4 de julio de 2011, con poquitas ganas de comer y despertar...",
    imgSrc: "/jazbb3.png?height=400&width=400",
  },
  {
    text: "...estaba muy cómoda en la panza de mi mami.",
    imgSrc: "/jazbb4.png?height=400&width=400",
  },
  {
    text: "Desde pequeña mis características fueron risueña, amorosa, coqueta, charlatana y muy sociable es por eso que quiero celebrar mis 15 años con toda mi gente querida.",
    imgSrc: "/jaz5.png?height=400&width=400",
  }
]

export default function OurStory() {
  return (
    <section className="py-16 px-6 bg-white overflow-hidden">
      <div className="max-w-xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-4xl text-stone-900 mb-12 text-center"
        >
          Nuestra Historia
        </motion.h2>

        <div className="space-y-8">
          {storySteps.map((step, index) => {
            // Alternamos la posición: foto izquierda/texto derecha y viceversa
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`flex items-center gap-6 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <img 
                  src={step.imgSrc} 
                  alt={`Historia Jazmín etapa ${index + 1}`} 
                  className="w-28 h-28 md:w-32 md:h-32 object-cover rounded-2xl shadow-sm flex-shrink-0"
                />
                
                <p className={`text-stone-600 font-sans text-sm md:text-base leading-relaxed ${isEven ? 'text-left' : 'text-right'}`}>
                  {step.text}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}