import React from 'react'
import { Utensils, CroissantIcon, Coffee, Beef, Truck } from 'lucide-react'

const FoodPrograms = () => {
  const foodPrograms = [
    {
      title: "Langar",
      description: "Providing free meals to everyone in need through our network of food stalls across the city, ensuring no one goes to bed hungry.",
      icon: <Utensils className="w-6 h-6 text-[#7DDCD4]" />
    },
    {
      title: "Roti Bank",
      description: "Collecting and distributing fresh bread daily to underprivileged families, making sure everyone has access to this basic necessity.",
      icon: <CroissantIcon className="w-6 h-6 text-[#7DDCD4]" />
    },
    {
      title: "Dasterkhwan",
      description: "Operating community kitchens where volunteers prepare fresh, wholesome meals daily, fostering a sense of community and shared responsibility.",
      icon: <Coffee className="w-6 h-6 text-[#7DDCD4]" />
    },
    {
      title: "Meat Distribution",
      description: "Regular distribution of meat to ensure protein intake for underprivileged families, especially during religious occasions.",
      icon: <Beef className="w-6 h-6 text-[#7DDCD4]" />
    },
    {
      title: "Mobile Dasterkhwan",
      description: "Bringing meals directly to communities in need through our mobile food service, reaching those who cannot come to our fixed locations.",
      icon: <Truck className="w-6 h-6 text-[#7DDCD4]" />
    }
  ]

  return (
    <div className="min-h-screen bg-[#7DDCD4]/10 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-12">
          Our Food Programs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {foodPrograms.map((program, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#7DDCD4]/20">
                  {program.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FoodPrograms

