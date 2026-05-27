'use client'

import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import WelcomePortal from '@/components/quinces/welcome-portal'
import Hero from '@/components/quinces/hero'
import MusicPlayer from '@/components/quinces/music-player'
import Countdown from '@/components/quinces/countdown'
import OurStory from '@/components/quinces/our-story'
import EventDetails from '@/components/quinces/event-details'
import PhotoGallery from '@/components/quinces/photo-gallery'
import GiftRegistry from '@/components/quinces/gift-registry'
import QRSocial from '@/components/quinces/qr-social'
import RSVPForm from '@/components/quinces/rsvp-form'
import Footer from '@/components/quinces/footer'

export default function Page() {
  const [showPortal, setShowPortal] = useState(true)

  const handleEnter = () => {
    setShowPortal(false)
  }

  return (
    <main className="relative min-h-screen bg-[#F3EFEA]">
      <AnimatePresence>
        {showPortal && (
          <WelcomePortal nombre="Jazmín" onEnter={handleEnter} />
        )}
      </AnimatePresence>

      {/* El contenido de la invitación solo se renderiza/muestra cuando se cierra el portal */}
      {!showPortal && (
        <div className="animate-in fade-in duration-1000">
          <MusicPlayer />
          <Hero />
          <Countdown />
          <OurStory />
          <EventDetails />
          <PhotoGallery />
          <GiftRegistry />
          <QRSocial />
          <RSVPForm />
          <Footer />
        </div>
      )}
    </main>
  )
}