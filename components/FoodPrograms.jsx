'use client'

import { motion } from 'framer-motion'
import { Button } from 'react-scroll'

const programs = [
  {
    id: 1,
    title: 'Langar',
    description: 'Free meals served daily to everyone in need',
    image: '/placeholder.svg?height=400&width=600',
  },
  {
    id: 2,
    title: 'Roti Bank',
    description: 'Collecting and distributing fresh bread to underprivileged families',
    image: '/placeholder.svg?height=400&width=600',
  },
  {
    id: 3,
    title: 'Dasterkhwan',
    description: 'Community dining service providing nutritious meals',
    image: '/placeholder.svg?height=400&width=600',
  },
  {
    id: 4,
    title: 'Meat Distribution',
    description: 'Regular distribution of meat to ensure protein intake',
    image: '/placeholder.svg?height=400&width=600',
  },
  {
    id: 5,
    title: 'Mobile Dasterkhwan',
    description: 'Bringing meals directly to communities in need',
    image: '/placeholder.svg?height=400&width=600',
  },
]

export default function FoodPrograms() {
  return (
    <div className="w-full bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Our Food Distribution Programs
          </h2>
          <p className="text-xl text-gray-600">
            Serving over 300,000 underprivileged individuals on a daily basis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <motion.div
              key={program.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/25" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {program.description}
                </p>
                <Button 
                  className="w-full bg-[#8CC63F] hover:bg-[#7ab32f] text-white font-medium py-2 px-4 rounded transition-colors"
                >
                  Donate
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button 
            size="lg"
            className="bg-[#0077BE] hover:bg-[#005f99] text-white font-semibold px-8 py-3 rounded-md shadow-lg transition-colors"
          >
            View All Programs
          </Button>
        </div>
      </div>
    </div>
  )
}

