"use client"

import React from "react";
import ProjectsMarquee from "../sub/ProjectsMarquee";
import TextRevealByWord from "../magicui/text-reveal";
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from "@heroicons/react/24/solid";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <TextRevealByWord text="My Projects" />
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
      >

        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <a className="flex flex-row justify-center items-center Welcome-text text-[13px]" href="https://github.com/mari0-0" target="_blank" rel="noopener noreferrer">
          <span className="mr-1"> Project in my GitHub</span> 
          <FaGithub color="white" />
        </a>
      </motion.div>
      {/* <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1> */}
      <ProjectsMarquee />
    </div>
  );
};

export default Projects;
