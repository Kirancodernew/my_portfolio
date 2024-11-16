"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
import Skills from "@/components/Skills";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaNode,
  FaGithub,
  FaDatabase,
  FaPython,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  TbBrandNextjs,
  TbBrandVscode,
  TbBrandCpp,
  TbFileTypeSql,
} from "react-icons/tb";
import { IoLogoFirebase } from "react-icons/io5";
import {SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiIntellijidea,
  SiPostman,
  SiMysql,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import Projects from "@/components/Projects";

type Skill = {
  id: number;
  title: string;
  icon: React.ReactElement;
};


const skills: Skill[] = [
  { id: 1, title: "HTML", icon: <FaHtml5 /> },
  { id: 2, title: "CSS", icon: <FaCss3 /> },
  { id: 3, title: "JavaScript", icon: <IoLogoJavascript /> },
  { id: 4, title: "React", icon: <FaReact /> },
  { id: 5, title: "Tailwind", icon: <SiTailwindcss /> },
  { id: 6, title: "Express.js", icon: <SiExpress /> },
  { id: 7, title: "Node.js", icon: <FaNode /> },
  { id: 8, title: "TbBrandNextjs", icon: <TbBrandNextjs /> },
  { id: 9, title: "MongoDB", icon: <SiMongodb /> },
  { id: 10, title: "TbFileTypeSql", icon: <TbFileTypeSql /> },
  { id: 11, title: "TbBrandCpp", icon: <TbBrandCpp /> },
  { id: 12, title: "FaPython", icon: <FaPython /> },
];
const tools: Skill[] = [
  { id: 1, title: "FaGithub", icon: <FaGithub /> },
  { id: 2, title: "CSS", icon: <TbBrandVscode /> },
  { id: 3, title: "SiIntellijidea", icon: <SiIntellijidea /> },
  { id: 4, title: "SiPostman", icon: <SiPostman /> },
  { id: 5, title: "SiMysql", icon: <SiMysql /> },
  { id: 6, title: "IoLogoFirebase", icon: <IoLogoFirebase /> },
  { id: 7, title: "FaDatabase", icon: <FaDatabase /> },
];

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Projects/>
        <Skills skills={skills} heading="Skillset"/>
        <Skills skills={tools} heading="Tools"/>
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
