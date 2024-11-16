import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <section className="pb-20 pt-36 relative" id="home" >

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Welcome to My Portfolio
          </p>

          <TextGenerateEffect
            words="Aspiring Full Stack Developer"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I’m <span className="text-purple font-bold">Rathod Sai Kiran</span>, a fresh graduate eager to start my career
            in software development.
          </p>

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            I have a strong foundation in web technologies and a passion for
            building scalable applications.
          </p>

          <a href="#about">
            <MagicButton
              title="Explore My Work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
