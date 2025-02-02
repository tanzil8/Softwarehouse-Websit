"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen)

  return (
    <nav className="bg-[#4b909f] rounded-md w-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
           
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="flex space-x-4">
              <Link
                href="/"
                className="text-white hover:bg-wtext-white hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-white hover:bg-wtext-white hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-white hover:bg-wtext-white hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Services
              </Link>
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="text-white hover:bg-wtext-white hover:text-white px-3 py-2 rounded-md text-sm font-medium inline-flex items-center"
                >
                  <span>More</span>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isDropdownOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Link href="/team" className="block px-4 py-2 text-sm text-white hover:bg-wtext-white">
                      Team
                    </Link>
                    <Link href="/projects" className="block px-4 py-2 text-sm text-white hover:bg-wtext-white">
                      Projects
                    </Link>
                    <Link href="/contact" className="block px-4 py-2 text-sm text-white hover:bg-wtext-white">
                      Contact
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-wtext-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden ">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="text-white hover:bg-wtext-white hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:bg-wtext-white hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-white hover:bg-wtext-white hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </Link>
            <button
              onClick={toggleDropdown}
              className="text-white hover:bg-wtext-white hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              More
            </button>
            {isDropdownOpen && (
              <div className="pl-4">
                <Link
                  href="/team"
                  className="text-white hover:bg-wtext-white hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Team
                </Link>
                <Link
                  href="/projects"
                  className="text-white hover:bg-wtext-white hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Projects
                </Link>
                <Link
                  href="/contact"
                  className="text-white hover:bg-wtext-white hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Nav

