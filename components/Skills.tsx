import React from "react";

type Skill = {
  id: number;
  title: string;
  icon: React.ReactElement;
};
type ExperienceProps = {
  skills: Skill[];
  heading: string;
};

const Skills = ({ skills, heading }: ExperienceProps) => {
  return (
    <div
      className="py-20 w-full bg-[url('./../public/bg2.jpeg')] bg-fixed bg-cover bg-center"
      id="skills"
    >
      <div>
        <h1 className="heading">
          My <span className="text-purple">{heading}</span>
        </h1>

        <div className="w-full mt-12 flex flex-wrap gap-2 md:gap-5 justify-center">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex sm:min-w-[150px] lg:min-w-[220px] items-center justify-center p-5 border border-purple rounded-lg shadow-lg transition duration-300 hover:text-black-100 text-3xl md:text-7xl text-center relative group"
            >
              <div className="w-0  group-hover:w-full  h-full bg-purple absolute transition-all duration-300" />
              <div className="z-10">
                {skill.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
