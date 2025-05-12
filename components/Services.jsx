'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const services = [
  {
    icon: "/assets/contact/img22.jpg",
    title: "Search Engine Optimization",
    description: "Search Engine Optimization is one of the most integral parts of a website that helps you rank higher on web pages and get more conversion rates...",
    href: "/services/saylani-dasterkhwan"
  },
  {
    icon: "/assets/contact/img23.jpg",
    title: "Paid Marketing",
    description: "Social media has changed the way we live and the way we do business. Every social platform serves an audience with diversified interests...",
    href: "/services/roti-bank"
  },
  {
    icon: "/assets/contact/img24.jpg",
    title: "Social Media Marketing",
    description: "Social media Marketing is one of the most essential digital marketing strategies which can maximize your brand’s visibility on...",
    href: "/services/meat-distribution"
  },
  {
    icon: "/assets/contact/img26.jpg",
    title: "Ecommerce Development",
    description: "Your website should not just look great; it’s crucial to set the right impression and provide accurate information to your future customers...",
    href: "/services/mobile-dasterkhwan"
  },
]

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section className="relative z-40">
      <div className="container mx-auto">
        <ul className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[20px] -top-12 place-items-center lg:place-items-stretch">
          {services.map((service, index) => (
            <li 
              key={index} 
              className={`bg-white shadow-custom p-6 max-w-[350px] md:max-w-none rounded-lg transition-all duration-300 ease-in-out ${
                hoveredIndex === index ? 'transform scale-105' : ''
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
             
             <img src={service.icon} alt="Card Image 1" class="w-full h-48 object-cover mb-3"/>
                <h3 className="text-[20px] text-primary font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-[15px]">{service.description}</p>
             
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

