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
      className="h-[800px] relative bg-accent/10
     xl:bg-white"
      id="home"
    >
      {/* Header */}
      <Header />
      <div className="container mx-auto h-full">
        <div className="relative z-20 h-full w-full xl:max-w-[768px] flex flex-col items-center xl:items-start justify-center text-center xl:text-left pt-10">
          <h1 className="h1 mb-2 max-w-[320px]">
            <span className="text-accent">Saylani</span> Food
            <TypeAnimation
              preRenderFirstString={true}
              sequence={["Stall", 2000, "Dasterkhwan", 2000]}
              speed={50}
              repeat={Infinity}
              wrapper="span"
              cursor={false}
              className="ml-2 xl:ml-4"
            />
          </h1>

          <p className="lead max-w-[476px] mb-7">
            Saylani Food Stall is a compassionate initiative by Saylani Welfare Trust, 
            dedicated to providing nutritious meals to those in need. Our mission is to 
            combat hunger and promote community well-being through sustainable food distribution.
          </p>

          <a 
            href="https://saylanifoodstats.vercel.app" 
            target="" 
            rel="noopener noreferrer"
          >
            <button className="btn btn-accent mb-8">Donate Now</button>
          </a>

          {/* Stats */}
          <Stats />
        </div>

        {/* Image */}
        <div className="hidden xl:flex w-[55vw] h-[800px] absolute top-0 right-0 bg-accent">
          <div className="absolute w-[600px] h-[642px] bottom-1 z-40 left-[6.5vw]">
            <Image
              src="/assets/hero/say2.jpg"
              fill
              quality="100"
              priority
              className="object-contain rounded-full"
              alt="Volunteers distributing food"
            />
          </div>

          {/* Arrow Shape */}
          <div
            className="hidden xl:flex absolute top-42 left-[2vw]"
            data-scroll
            data-scroll-speed="0.05"
          >
            <Image
              src="/assets/hero/arrow.svg"
              width={160}
              height={160}
              alt="Arrow pointing to content"
            />
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

