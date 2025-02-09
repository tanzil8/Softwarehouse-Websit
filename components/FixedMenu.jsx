"use client"; // Add this at the top of the file

import { AnimatePresence, motion } from "framer-motion"; 
import { useEffect, useState } from "react"; 
import { CgMenuGridR } from "react-icons/cg"; 
import { useMediaQuery } from "react-responsive"; 
import { FiMapPin, FiPhoneCall, FiMail } from "react-icons/fi"; 
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon

// components import
// Nav from "./Nav"; 
// Socials from "./Socials";  

const FixedMenu = () => {   
  const [showMenuButton, setShowMenuButton] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  useEffect(() => {     
    setIsMounted(true);   
  }, []);

  useEffect(() => {
    if (isMounted) {
      const handleScroll = () => {
        setShowMenuButton(window.scrollY > 150); 
      };
      
      if (!isMobile) {
        window.addEventListener("scroll", handleScroll); 
        return () => window.removeEventListener("scroll", handleScroll); 
      } else {
        setShowMenuButton(true);
      }
    } 
  }, [isMobile, isMounted]); 

  if (!isMounted) return null;

  // WhatsApp URL (with your number)
  const whatsappURL = "https://wa.me/03701249772"; 

  return (     
    <div className="fixed w-full h-[400px] z-50 flex justify-end mr-10 pointer-events-none bg-transparent">       
      <AnimatePresence>         
        {showMenu && showMenuButton && (           
          <motion.div             
            initial={{ opacity: 0, y: 20 }}             
            animate={{ opacity: 1, y: 0 }}             
            exit={{ opacity: 0, y: 20 }}             
            transition={{ duration: 0.2 }}             
            className="relative w-full max-w-md md:max-w-none h-[400px] bottom-[28rem] xl:bottom-[21.2rem] px-4 pointer-events-auto"           
          >             
            <div className="bg-white w-full h-full shadow-custom max-w-[1170px] mx-auto py-12 xl:py-12 px-12 xl:px-32 flex items-center gap-12 rounded-lg">
              {/* Navigation and other sections */}
            </div>           
          </motion.div>         
        )}       
      </AnimatePresence>       

      {isMobile ? (         
        <div className="fixed z-50 bottom-16">           
          <button             
            onClick={() => window.location.href = whatsappURL} 
            className="bg-[#25D366]  shadow-custom w-[54px] h-[54px] rounded-lg cursor-pointer flex items-center justify-center select-none pointer-events-auto"           
          >             
            <FaWhatsapp className="text-4xl text-white" /> {/* WhatsApp logo */}           
          </button>         
        </div>       
      ) : (         
        <AnimatePresence>           
          {showMenuButton && (             
            <motion.div               
              initial={{ y: 100, opacity: 0 }}               
              animate={{ y: 0, opacity: 1 }}               
              exit={{ y: 100, opacity: 0 }}               
              transition={{ type: "spring", stiffness: 400, damping: 40 }}               
              className="fixed z-50 bottom-16 pointer-events-auto"              
            >               
              <button                 
                onClick={() => window.location.href = whatsappURL}                 
                className="bg-[#25D366]  shadow-custom w-[54px] h-[54px] rounded-lg cursor-pointer flex items-center justify-center select-none m-9"               
              >                 
                <FaWhatsapp className="text-4xl text-white" /> {/* WhatsApp logo */}               
              </button>             
            </motion.div>           
          )}         
        </AnimatePresence>       
      )}     
    </div>   
  ); 
};  

export default FixedMenu;
