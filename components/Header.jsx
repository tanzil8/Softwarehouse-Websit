"use client";
// import { Link as ScrollLink } from "react-scroll";
// components
import Logo from "./Logo";
import Nav from "./Nav";
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="w-full absolute py-24 xl:py-[48px] z-30">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:justify-between">
          {/* logo */}
          <Logo />
          <div className="flex items-center gap-12">
            {/* nav & socials */}
           
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;