'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const services = [
  {
    icon: "/assets/services/saylani-dasterkhwan.svg",
    title: "Saylani Dasterkhwan",
    description: "Providing free, nutritious meals to those in need through our network of Dasterkhwans across the city, ensuring no one goes to bed hungry.",
    href: "/services/saylani-dasterkhwan"
  },
  {
    icon: "/assets/services/roti-bank.svg",
    title: "Roti Bank",
    description: "Collecting and distributing fresh rotis to underprivileged communities, bridging the gap between food surplus and scarcity.",
    href: "/services/roti-bank"
  },
  {
    icon: "/assets/services/meat-distribution.svg",
    title: "Meat Distribution",
    description: "Distributing quality meat to families in need, ensuring they have access to essential protein sources for a balanced diet.",
    href: "/services/meat-distribution"
  },
  {
    icon: "/assets/services/mobile-dasterkhwan.svg",
    title: "Mobile Dasterkhwan",
    description: "Bringing our Dasterkhwan services to various locations via mobile units, reaching those who cannot access our static distribution points.",
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
              <Link href={service.href} className="block h-full">
                <Image
                  src={service.icon}
                  width={48}
                  height={48}
                  alt={`${service.title} icon`}
                  className="mb-4"
                />
                <h3 className="text-[20px] text-primary font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-[15px]">{service.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

