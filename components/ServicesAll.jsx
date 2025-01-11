import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Briefcase, Calculator, Database, Landmark } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function ServicesPage() {
  const services = [
    {
      title: "Legal & Tax Advisory Services",
      description: "Comprehensive legal and tax solutions with expert guidance",
      image: "/assets/services/sl1.webp",
      href: "/services/tax",
      icon: <Briefcase className="h-6 w-6" />
    },
    {
      title: "Banking & Financial Services",
      description: "Expert banking and Shari'ah-compliant solutions",
      image: "/assets/services/sl3.jpeg",
      href: "/services/banking",
      icon: <Landmark className="h-6 w-6" />
    },
    {
      title: "Software Solutions",
      description: "All-in-one business applications and systems",
      image: "/assets/services/sl4.jpeg",
      href: "/services/software",
      icon: <Database className="h-6 w-6" />
    },
    {
      title: "Financial & Accounting Services",
      description: "Complete financial management and reporting",
      image: "/assets/services/sl5.jpg",
      href: "/services/financial",
      icon: <Calculator className="h-6 w-6" />
    }
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className=" mt-32 flex-grow bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <h2 className="mb-12 text-center text-3xl font-bold text-blue-900 sm:text-4xl">Our Services</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-blue-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-blue-900/20" />
                  <div className="absolute bottom-4 left-4 rounded-full bg-blue-500 p-3 text-white">
                    {service.icon}
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-blue-900">
                      {service.title}
                    </h3>
                    <p className="mb-4 text-sm text-blue-700">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-blue-500">Learn more</span>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-500 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

