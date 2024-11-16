import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">FOLLOW ME ON</h1>
        <h1 className="heading lg:max-w-[45vw]">
          <span className="text-purple">Feel free to connect with me</span>
        </h1>
        <div className="flex items-center md:gap-3 gap-6 mt-6 mb-3">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={info.link} target="_blank" rel="noopener noreferrer">
                <img src={info.img} alt="icons" width={40} height={40} />
              </a>
            </div>
          ))}
        </div>
        <a href="mailto:saikiran.rathod1305@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="text-end text-purple pt-10">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Sai Kiran
        </p>

        
      </div>
    </footer>
  );
};

export default Footer;
