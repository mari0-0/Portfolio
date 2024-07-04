"use client";

import React from "react";
import SkillText from "../sub/SkillText";
import { SkillCloud } from "../magicui/SkillCloud";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative pb-20"
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText />
      <div className="grid grid-rows-2 gap-20 w-full justify-center items-center md:grid-cols-2 md:grid-rows-1">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={slideInFromLeft(0.5)}
          className="justify-self-center"
        >
          <SkillCloud />
        </motion.div>
        <div className="grid grid-cols-2 gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideInFromRight(0.35)}
          >
            <h4 className="mb-3 text-4xl md:text-3xl lg:text-5xl xl:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-purple-300 from-20% via-purple-400 to-purple-500">
              Frontend
            </h4>
            <ul className="list-inside text-slate-400 text-lg font-light pl-3">
              <li>- React</li>
              <li>- Tailwind</li>
              <li>- CSS</li>
              <li>- HTML</li>
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideInFromRight(0.75)}
          >
            <h4 className="mb-3 text-4xl md:text-3xl lg:text-5xl xl:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-purple-300 from-20% via-purple-400 to-purple-500">Backend</h4>
            <ul className="list-inside text-slate-400 text-lg font-light pl-3">
              <li>- Typescript</li>
              <li>- Javascript</li>
              <li>- Python</li>
              <li>- Next Js</li>
              <li>- Django</li>
              <li>- Flask</li>
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideInFromRight(0.35)}
          >
            <h4 className="mb-3 text-4xl md:text-3xl lg:text-5xl xl:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-purple-300 from-20% via-purple-400 to-purple-500">Web 3</h4>
            <ul className="list-inside text-slate-400 text-lg font-light pl-3">
              <li>- Solidity</li>
              <li>- Ethers</li>
              <li>- Web3 Js</li>
              <li>- Hardhat</li>
              <li>- Thirdweb</li>
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideInFromRight(0.75)}
          >
            <h4 className="mb-3 text-4xl md:text-3xl lg:text-5xl xl:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-purple-300 from-20% via-purple-400 to-purple-500">Others</h4>
            <ul className="list-inside text-slate-400 text-lg font-light pl-3">
              <li>- Git</li>
              <li>- GitHub</li>
              <li>- MySQL</li>
              <li>- SQLite</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
