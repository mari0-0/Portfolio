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
      className="flex flex-col items-center justify-center py-20 mb-80"
      id="projects"
    >
      <TextRevealByWord text="My Projects" />
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
      >

        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <a className="flex flex-row justify-center items-center Welcome-text text-[13px]" href="https://github.com/mari0-0" target="_blank" rel="noopener noreferrer">
          <span className="mr-1"> Projects in my GitHub</span> 
          <FaGithub color="white" />
        </a>
      </motion.div>

      <ProjectsMarquee />
    </div>
  );
};

export default Projects;
