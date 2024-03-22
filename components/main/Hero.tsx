import React from "react";
import HeroContent from "../sub/HeroContent";
import ComputersCanvas from "../canvas/Computers"

const Hero = () => {
  return (
    <div>
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px]  h-full w-full left-0 -z-[10] object-cover "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
      <section className={'relative w-full h-screen mx-auto'}>
        <ComputersCanvas/>
      </section>
    </div>
  );
};

export default Hero;
