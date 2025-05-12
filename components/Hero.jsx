"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";


//components
import RotatingShape from "./RotatingShape";
import Header from "./Header";
import Stats from "./Stats/Stats";

const Hero = () => {
  return (
    <section
      className=" h-[800px] relative bg-[#4b909f]/10
     xl:bg-white"
      id="home"
    >
      {/* Header */}
      <Header />
      <div className="container mx-auto h-full">
        <div className="relative z-20 h-full w-full xl:max-w-[768px] flex flex-col items-center xl:items-start justify-center text-center xl:text-left pt-10">
          <div className="text-3xl font-extrabold  mb-2 max-w-[320px]">
            <span className="text-[#4b909f]">Mr Developper</span> <br />
            <TypeAnimation
              preRenderFirstString={true}
              sequence={["Website Developer", 2000, "Js Developer", 2000,"Python Developer", 2000]}
              speed={50}
              repeat={Infinity}
              wrapper="span"
              cursor={false}
              className="ml-2 xl:ml-4 text-black"
            />
          </div>

          <p className="lead max-w-[476px] mb-7">
     "I am a Full Stack Developer with expertise in JavaScript and Python. On the frontend, I specialize in React and Next.js. For the backend, I work with Django, and I use MySQL for database management."
          </p>

          <a 
            href="" 
            target="" 
            rel="noopener noreferrer"
          >
            <button className="btn text-white bg-[#4b909f] mb-8">Contact me </button>
          </a>

          {/* Stats */}
          <Stats />
        </div>

        {/* Image */}
        <div className=" hidden xl:flex w-[55vw] h-[800px] absolute top-0 right-0 bg-[#4b909f]">
         



   
        <div className="w-full  max-w-3xl  relative overflow-hidden rounded-xl transition-all duration-300  ">
          <Image
      
            src="/assets/contact/img27.png?height=800&width=1200"
            width={1200}
            height={800}
            alt="Featured image"
            className="ml-28 w-full object-cover transition-all duration-300 hover:scale-[1.02] hover:shadow-[#3a5e5b]"
            priority
          />
        </div>
   
    

          {/* Arrow Shape */}
          <div
            className="hidden xl:flex absolute top-42 left-[2vw]"
            data-scroll
            data-scroll-speed="0.05"
          >
          
          </div>

          {/* Shape 1 */}
          <div
            className="absolute top-[600px] left-[3vw]"
            data-scroll
            data-scroll-speed="0.2"
          >
            <RotatingShape
              content={
                <Image
                  src="/assets/hero/shape-1.svg"
                  width={38}
                  height={38}
                  alt="Rotating shape 1"
                />
              }
              direction="left"
              duration={6}
            />
          </div>

          {/* Shape 2 */}
          <div
            className="absolute top-[240px] xl:left-[30vw]"
            data-scroll
            data-scroll-speed="0.1"
          >
            <RotatingShape
              content={
                <Image
                  src="/assets/hero/shape-2.svg"
                  width={34}
                  height={34}
                  alt="Rotating shape 2"
                />
              }
              direction="right"
              duration={5}
            />
          </div>

          {/* Shape 3 */}
          <div
            className="absolute top-[480px] xl:left-[40vw]"
            data-scroll
            data-scroll-speed="0.08"
          >
            <RotatingShape
              content={
                <Image
                  src="/assets/hero/shape-3.svg"
                  width={36}
                  height={36}
                  alt="Rotating shape 3"
                />
              }
              direction="left"
              duration={7}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

