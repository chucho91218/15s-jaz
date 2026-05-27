'use client'

import { Instagram } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-20 px-6 bg-[#F3EFEA] flex flex-col items-center justify-center text-center space-y-6">
      {/* Link a Instagram */}
      <Link 
        href="https://instagram.com/festa_invitaciones" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-3 text-stone-400 hover:text-stone-800 transition-colors"
      >
        <Instagram className="w-4 h-4" strokeWidth={1.5} />
        <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase">
          @festa_invitaciones
        </span>
      </Link>

      {/* Eslogan */}
      <p className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-stone-800">
        Diseño exclusivo para eventos
      </p>

      {/* Firma */}
      <p className="font-serif italic text-stone-500 text-sm md:text-base">
        Hecho con amor por Festa
      </p>
    </footer>
  )
}