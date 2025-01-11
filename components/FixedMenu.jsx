import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { useMediaQuery } from "react-responsive";
import { FiMapPin, FiPhoneCall, FiMail } from "react-icons/fi";

//components
import Nav from "./Nav";
import Socials from "./Socials";

const FixedMenu = () => {
  // States to control menu visibility and component lifecycle
  const [showMenuButton, setShowMenuButton] = useState(false); // State for showing the menu button
  const [showMenu, setShowMenu] = useState(false); // State for showing the menu
  const [isMounted, setIsMounted] = useState(false); // Ensure the component is mounted (for SSR compatibility)

  // Media query to check if the screen size is mobile
  const isMobile = useMediaQuery({
    query: "(max-width: 640px)",
  });

  // Mark the component as mounted to prevent SSR mismatches
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Add scroll event listener to show the menu button after scrolling a certain amount
  useEffect(() => {
    if (isMounted) {
      const handleScroll = () => {
        setShowMenuButton(window.scrollY > 150); // Show the menu button after scrolling 150px
      };

      // For non-mobile screens, attach the scroll listener
      if (!isMobile) {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      } else {
        // Always show the menu button on mobile
        setShowMenuButton(true);
      }
    }
  }, [isMobile, isMounted]);

  // Prevent rendering until the component is mounted
  if (!isMounted) return null;

  return (
    <div
      className="fixed w-full h-[400px] z-50 flex justify-center pointer-events-none bg-transparent"
    >
      {/* Animated Menu */}
      <AnimatePresence>
        {showMenu && showMenuButton && (
          <motion.div
            initial={{ opacity: 0, y: 20 }} // Initial animation state
            animate={{ opacity: 1, y: 0 }} // Visible animation state
            exit={{ opacity: 0, y: 20 }} // Exit animation state
            transition={{ duration: 0.2 }} // Animation duration
            className="relative w-full max-w-md md:max-w-none h-[400px] bottom-[28rem] xl:bottom-[21.2rem] px-4 pointer-events-auto"
          >
            <div
              className="bg-white w-full h-full shadow-custom max-w-[1170px]
        mx-auto py-12 xl:py-12 px-12 xl:px-32 flex items-center gap-12 rounded-lg"
            >
              {/* Navigation links */}
              <Nav
                containerStyles="md:border-r border-secondary/20 md:pr-12 w-full
          md:w-auto text-center md:text-left"
                listStyles="flex flex-col justify-center gap-4"
                linkStyles="font-primary text-4xl text-primary cursor-pointer"
                spy={true}
              />
              {/* Additional Information Section */}
              <div className="hidden md:flex mx-auto">
                <div>
                  <div className="flex gap-12 mb-12">
                    {/* Location Info */}
                    <div className="flex flex-col">
                      <div className="text-[28px] text-blue-500 mb-2">
                        <FiMapPin />
                      </div>
                      <p className="font-semibold text-primary text-lg">
                        Head Office
                      </p>
                      <p>Karachi: Office Suite No 104 Basement Plot No. 12-J, Block-6, P.E.C.H.S</p>
                    </div>
                    {/* Phone Info */}
                    <div className="flex flex-col">
                      <div className="text-[28px] text-blue-500 mb-2">
                        <FiPhoneCall />
                      </div>
                      <p className="font-semibold text-primary text-lg">
                        Phone
                      </p>
                      <p>+92 21-34331171-2</p>
                    </div>
                    {/* Email Info */}
                    <div className="flex flex-col">
                      <div className="text-[28px] text-blue-500 mb-2">
                        <FiMail />
                      </div>
                      <p className="font-semibold text-primary text-lg">
                        Email
                      </p>
                      <p>mdlawassociates@gmail.com</p>
                    </div>
                  </div>
                  {/* Social Media Links */}
                  <Socials
                    containerStyles="flex gap-2"
                    iconStyles="text-[20px] w-[32px] h-[32px]
              text-primary flex items-center justify-center rounded-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Menu Button */}
      {isMobile ? (
        // Render menu button without animations on mobile
        <div className="fixed z-50 bottom-16">
          <button
            onClick={() => setShowMenu(!showMenu)} // Toggle menu visibility
            className="bg-accent shadow-custom w-[54px] h-[54px]
              rounded-lg cursor-pointer flex items-center
               justify-center select-none pointer-events-auto"
          >
            <CgMenuGridR className="text-4xl text-white" />
          </button>
        </div>
      ) : (
        // Animated menu button for larger screens
        <AnimatePresence>
          {showMenuButton && (
            <motion.div
              initial={{ y: 100, opacity: 0 }} // Initial animation state
              animate={{ y: 0, opacity: 1 }} // Visible animation state
              exit={{ y: 100, opacity: 0 }} // Exit animation state
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 40,
              }} // Spring animation for smooth movement
              className="fixed z-50 bottom-16 pointer-events-auto"
            >
              <button
                onClick={() => setShowMenu(!showMenu)} // Toggle menu visibility
                className="bg-accent shadow-custom w-[54px] h-[54px]
              rounded-lg cursor-pointer flex items-center justify-center 
              select-none"
              >
                <CgMenuGridR className="text-4xl text-white" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export default FixedMenu;
