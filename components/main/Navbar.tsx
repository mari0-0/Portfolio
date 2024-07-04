import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";
import { FaDiscord, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/logo.png"
            alt="logo"
            width={140}
            height={140}
            className="cursor-pointer hover:animate-slowspin"
          />

          {/* <span className="font-light ml-[10px] hidden md:block text-gray-300">
            About Me
          </span>
          <span className="font-light ml-[10px] hidden md:block text-gray-300">
            Skills
          </span>
          <span className="font-light ml-[10px] hidden md:block text-gray-300">
            Web3
          </span>
          <span className="font-light ml-[10px] hidden md:block text-gray-300">
            
          </span> */}
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-2xl font-light text-purple-300">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#skills" className="cursor-pointer">
              Web3
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          <a href="https://github.com/mari0-0" target="_blank" rel="noopener noreferrer">
            <FaGithub color="white" />
          </a>
          <a href="https://www.linkedin.com/in/abhai-matta-a37308202?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn color="white" />
          </a>
          <a href="https://discordapp.com/users/553810381991051274/" target="_blank" rel="noopener noreferrer">
            <FaDiscord color="white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
