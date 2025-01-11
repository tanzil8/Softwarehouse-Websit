'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from 'react-scroll'

const slides = [
  {
    id: 1,
    title: "URGENT DONATION APPEAL",
    subtitle: "FOOD DONATION",
    image: "/assets/donation/d1.jpg",
  },
  {
    id: 2,
    title: "HELP FEED PEOPLE",
    subtitle: "FOOD DONATION",
    image: "/assets/donation/d2.jpg",
  },
  {
    id: 3,
    title: "SUPPORT FOR ALL",
    subtitle: "FOOD DONATION",
    image: "/assets/donation/d3.png",
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
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  {slides[currentSlide].title}
                </h2>
                <p className="text-xl md:text-2xl mb-8">
                  {slides[currentSlide].subtitle}
                </p>
                <Button 
                  size="lg" 
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-3"
                >
                  Donate Now
                </Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

    
    </div>
  )
}

