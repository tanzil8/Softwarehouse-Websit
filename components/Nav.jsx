'use client'

import { useState } from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { ChevronDown } from 'lucide-react';

const serviceLinks = [
  { name: "Food Dasterkhwan", to: "/services/food-dasterkhwan" },
  { name: "Roti Bank", to: "/services/roti-bank" },
  { name: "Saylani Meat Distribution", to: "/services/meat-distribution" },
];

const links = [
  { name: "home", to: "/" },
  { name: "about us", to: "/about-us" },
  { name: "services", to: "/services", hasDropdown: true },
  { name: "work", to: "/workpro" },
  { name: "contact", to: "/contact" },
];

const Nav = ({ containerStyles, listStyles, linkStyles, activeLinkStyles }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className={`${containerStyles} relative z-50`}>
      <ul className={listStyles}>
        {links.map((link, index) => (
          <li key={index} className="relative">
            {link.hasDropdown ? (
              <div
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <Link
                  href={link.to}
                  className={`${linkStyles} group hover:underline flex items-center gap-1 ${
                    link.active ? activeLinkStyles : ""
                  }`}
                >
                  {link.name}
                  <ChevronDown className="h-4 w-4" />
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full"></span>
                </Link>
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-[200px] z-[9999]">
                    {serviceLinks.map((serviceLink, serviceIndex) => (
                      <Link
                        key={serviceIndex}
                        href={serviceLink.to}
                        className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
                      >
                        {serviceLink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : ["services", "about us", "home", "work", "contact"].includes(
                link.name
              ) ? (
              <Link
                href={link.to}
                className={`${linkStyles} group hover:underline ${
                  link.active ? activeLinkStyles : ""
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ) : (
              <ScrollLink
                to={link.name}
                smooth
                spy
                activeClass={activeLinkStyles}
                className={`${linkStyles} group hover:underline`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full"></span>
              </ScrollLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;

