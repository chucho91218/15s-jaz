'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date('2026-07-03T21:30:00').getTime()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 px-6 bg-[#F3EFEA]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-16">
          Cuenta Regresiva.
        </h2>

        <div className="flex justify-center items-center divide-x divide-stone-300">
          {[
            { label: 'Días', value: timeLeft.days },
            { label: 'Horas', value: timeLeft.hours },
            { label: 'Minutos', value: timeLeft.minutes },
            { label: 'Segundos', value: timeLeft.seconds },
          ].map((item, index) => (
            <div key={item.label} className="flex flex-col items-center px-4 md:px-12 w-24 md:w-40">
              <span className="font-serif text-5xl md:text-7xl text-stone-900 mb-4 tabular-nums">
                {item.value.toString().padStart(2, '0')}
              </span>
              <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-stone-500 font-sans">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}