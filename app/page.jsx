"use client"
import { useEffect } from 'react';


import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Work from '@/components/Work/Work';

import Footer from '@/components/Footer';
import Contact2 from '@/components/Contact2';
import FoodStallLocations from '@/components/FoodStallLocations';
import MediaUpdates from '@/components/MediaUpdates';
import DonationSlider from '@/components/DonationSlider';
import FixedMenu from '@/components/FixedMenu';





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
    <FixedMenu/>
    <Services />
 
    <Work />
    <DonationSlider />

    <Contact2 />
    <Footer />

    </>
  );
};

export default Home