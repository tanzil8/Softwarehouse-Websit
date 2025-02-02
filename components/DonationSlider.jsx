'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from 'react-scroll'

const slides = [
  {
    id: 1,
    title: "URGENT DONATION APPEAL",
    subtitle: "FOOD DONATION",
    image: "/assets/contact/img6.jpg",
  },
  {
    id: 2,
    title: "HELP FEED PEOPLE",
    subtitle: "FOOD DONATION",
    image: "/assets/contact/img7.jpg",
  },
  {
    id: 3,
    title: "SUPPORT FOR ALL",
    subtitle: "FOOD DONATION",
    image: "/assets/contact/img8.jpg",
  },
  {
    id: 3,
    title: "SUPPORT FOR ALL",
    subtitle: "FOOD DONATION",
    image: "/assets/contact/img9.jpg",
  },
]

export default function DonationSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="relative aspect-[16/9] overflow-hidden rounded-lg mb-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <div className="relative h-full">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6">
              
                
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

    
    </div>
  )
}

