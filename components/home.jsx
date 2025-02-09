import { Contact2 } from "lucide-react";
import DonationSlider from "./DonationSlider";
import FixedMenu from "./FixedMenu";
import Hero from "./Hero";
import Services from "./Services";
import Work from "./Work/Work";
import Footer from "./Footer";

const Home = () => {
    // implement locomotive scroll
    useEffect(()=> {
      const loadLocomotiveScroll = async ()=> {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        new LocomotiveScroll();
      };
      loadLocomotiveScroll();
    }, []);
  return (
   <>

<Hero/>
    <FixedMenu/>
    <Services/>
 
    <Work/>
    <DonationSlider/>

    <Contact2/>
    <Footer/>
   </>
  )
}

export default Home