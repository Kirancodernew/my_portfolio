import React from "react";
import { projects } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { IoIosSend } from "react-icons/io";

const Projects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-7 md:gap-16 mt-10 md:mt-20">
        {projects.map((project) => {
          return (
            <div
              key={project.id}
              id="project.id"
              className="lg:min-h-[25.5rem] h-[25rem] flex flex-col items-center justify-center gap-6 sm:w-96 w-[80vw] hover:scale-105 transition-all ease-in-out duration-300"
            >
              <div>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={project.img}
                    alt="image1"
                    className="w-full h-full"
                    width={300}
                    height={200}
                  />
                </a>
              </div>
              <div>
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {project.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {project.des}
                </p>
              </div>

              <div className="flex justify-start  items-center pb-4">
                <p className="lg:text-lg md:text-xs text-sm text-purple">
                  Check Live Site
                </p>
                <IoIosSend color="#CBACF9" />
              </div>
              </div>

          );
        })}
      </div>
    </div>
  );
};

export default Projects;
