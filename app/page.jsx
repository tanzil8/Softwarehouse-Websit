"use client"
import { useEffect } from 'react';


import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Work from '@/components/Work/Work';
import FixedMenu from '@/components/FixedMenu';
import Footer from '@/components/Footer';
import Contact2 from '@/components/Contact2';
import FoodStallLocations from '@/components/FoodStallLocations';
import MediaUpdates from '@/components/MediaUpdates';
import DonationCTA from '@/components/Donation';
import DonationSlider from '@/components/DonationSlider';
import FoodPrograms from '@/components/FoodPrograms';




const Home = () => {
  // implement locomotive scroll
  useEffect(()=> {
    const loadLocomotiveScroll = async ()=> {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    };
    loadLocomotiveScroll();
  }, []);
  return(     
  <>
    <Hero />
    <FixedMenu />
    <Services />
    <FoodStallLocations />
    <Work />
    <DonationSlider />
    {/* <FoodPrograms /> */}




    
    <MediaUpdates />
    {/* <DonationCTA /> */}

    <Contact2 />
    <Footer />
    {/*temporary div */}
    {/* <div className="h-[3000px]"></div> */}
    </>
  );
};

export default Home