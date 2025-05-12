'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const services = [
  {
    icon: "/assets/contact/img22.jpg",
    title: "Java Script",
    description: "JavaScript is a programming language used to make web pages interactive and dynamic. It runs in browsers and is essential for front-end web development.",
    href: "/services/saylani-dasterkhwan"
  },
  {
    icon: "/assets/contact/img23.jpg",
    title: "React",
    description: "React is a JavaScript library for building fast and interactive user interfaces. It lets developers create reusable UI components for web and mobile apps.",
    href: "/services/roti-bank"
  },
  {
    icon: "/assets/contact/img24.jpg",
    title: "Python",
    description: "Python is a versatile, beginner-friendly programming language known for its clear syntax and readability. It's widely used in web development, data science, automation, and AI.",
    href: "/services/meat-distribution"
  },
  {
    icon: "/assets/contact/img26.jpg",
    title: "Django",
    description: "Django is a high-level Python web framework that enables rapid development of secure and scalable web applications. It comes with built-in features like authentication, admin interface, and database management.",
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

