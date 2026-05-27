'use client'

import { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    // Instanciamos el audio con el archivo alojado en la carpeta public
    const audio = new Audio('/Ed Sheeran - Perfect.mp3')
    audio.loop = true
    audioRef.current = audio

    // Se ejecuta el play inmediatamente al montarse el componente
    audio.play()
      .then(() => setIsPlaying(true))
      .catch((err) => console.log("Error al reproducir audio:", err))

    return () => {
      audio.pause()
      audioRef.current = null
    }
  }, [])

  const togglePlay = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log(err))
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={togglePlay}
        className="w-12 h-12 rounded-full bg-stone-900/80 text-white flex items-center justify-center shadow-md backdrop-blur-sm hover:bg-stone-900 transition-all duration-300 focus:outline-none"
        aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5" />
        ) : (
          <VolumeX className="w-5 h-5" />
        )}
      </button>
    </div>
  )
}