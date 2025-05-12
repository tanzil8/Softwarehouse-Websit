"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink } from "lucide-react"

// AnimatedText Component
const AnimatedText = ({ text, textStyles }) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`text-3xl md:text-4xl font-bold ${textStyles}`}
    >
      {text}
    </motion.h2>
  )
}

// WorkItem Component
const WorkItem = ({ href, category, img, title, description, onProjectClick }) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-lg shadow-lg h-[350px]"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 z-10"></div>

      <img
        src={img || "/placeholder.svg"}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 p-6 text-center">
        <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
        <p className="text-white text-sm mb-4 line-clamp-3">{description}</p>
        <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full mb-4">{category}</span>

        <div className="flex space-x-3">
          <button
            onClick={onProjectClick}
            className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition-colors text-sm font-medium"
          >
            View Details
          </button>

          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors text-sm font-medium flex items-center"
            onClick={(e) => e.stopPropagation()}
          >
            Visit <ExternalLink className="ml-1 h-3 w-3" />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

// Enhanced data for projects with proper categories, titles, descriptions and links
const data = [
  {
    href: "https://project1.com",
    category: "web",
    img: "/assets/donation/img1.jpg",
    title: "E-Commerce Website",
    description: "A modern e-commerce platform with advanced filtering and payment integration.",
  },
  {
    href: "https://project1.com",
    category: "web",
    img: "/assets/donation/img1.jpg",
    title: "E-Commerce Website",
    description: "A modern e-commerce platform with advanced filtering and payment integration.",
  },
  {
    href: "https://project2.com",
    category: "mobile",
    img: "/assets/donation/img2.jpg",
    title: "Mobile App UI",
    description: "User interface design for a fitness tracking mobile application.",
  },
  {
    href: "https://project3.com",
    category: "design",
    img: "/assets/donation/img3.jpg",
    title: "Brand Identity",
    description: "Complete brand identity design including logo, color palette, and guidelines.",
  },
  {
    href: "https://project4.com",
    category: "web",
    img: "/assets/donation/img7.jpg",
    title: "Portfolio Website",
    description: "Responsive portfolio website for a professional photographer.",
  },
  {
    href: "https://project5.com",
    category: "design",
    img: "/assets/donation/img5.jpg",
    title: "Product Packaging",
    description: "Creative packaging design for an organic food product line.",
  },
  {
    href: "https://project6.com",
    category: "mobile",
    img: "/assets/donation/img8.jpg",
    title: "Mobile Game UI",
    description: "User interface and experience design for a mobile puzzle game.",
  },
]

// Main Work Component
const Work = () => {
  const uniqueCategories = Array.from(new Set(data.map((item) => item.category)))

  const tabData = [
    { category: "all", label: "All Projects" },
    ...uniqueCategories.map((category) => ({
      category,
      label: category.charAt(0).toUpperCase() + category.slice(1),
    })),
  ]

  const [tabValue, setTabValue] = useState("all")
  const [visibleItems, setVisibleItems] = useState(6)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  const filterWork = tabValue === "all" ? data : data.filter((item) => item.category === tabValue)

  const loadMoreItems = () => {
    setVisibleItems((prev) => prev + 3)
  }

  const handleProjectClick = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleTabChange = (value) => {
    setTabValue(value)
    setVisibleItems(6) // Reset visible items when changing tabs
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="mt-32 flex-grow">
        <section className="container mx-auto px-4 py-16" id="work">
          <Tabs value={tabValue} onValueChange={handleTabChange} className="w-full flex flex-col">
            <div className="flex flex-col xl:flex-row items-center xl:items-start xl:justify-between mb-[30px]">
              <AnimatedText text="Our Latest Works" textStyles="h2 mb-[30px] xl:mb-0" />
              <TabsList className="bg-gray-100 p-1 rounded-lg">
                {tabData.map((tab) => (
                  <TabsTrigger
                    key={tab.category}
                    value={tab.category}
                    className="px-4 py-2 data-[state=active]:bg-white data-[state=active]:shadow-sm"
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value={tabValue} className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
                <AnimatePresence>
                  {filterWork.slice(0, visibleItems).map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <WorkItem {...item} onProjectClick={() => handleProjectClick(item)} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {visibleItems < filterWork.length && (
                <div className="flex justify-center mt-10">
                  <button
                    onClick={loadMoreItems}
                    className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Load More
                  </button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </section>

        {isModalOpen && selectedProject && (
          <div
            className="fixed inset-0 z-50 bg-black bg-opacity-75 flex justify-center items-center p-4"
            onClick={closeModal}
          >
            <div
              className="relative bg-white rounded-lg max-w-4xl w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <img
                    src={selectedProject.img || "/placeholder.svg"}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6">
                  <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                  <p className="text-gray-600 mb-4">{selectedProject.description}</p>
                  <div className="mb-4">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                      {selectedProject.category}
                    </span>
                  </div>
                  <a
                    href={selectedProject.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors"
                  >
                    Visit Project <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
              <button className="absolute top-4 right-4 text-gray-800 hover:text-black text-3xl" onClick={closeModal}>
                &times;
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default Work
