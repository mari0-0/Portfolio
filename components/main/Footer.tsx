import React from "react";
import { IoMdMailOpen } from "react-icons/io";
import { FaDiscord, FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">


                    <div className="min-w-[200px] h-auto flex flex-col items-start justify-start">
                        <div className="font-bold text-[16px]">Social Media</div>
                        <a href="https://www.linkedin.com/in/abhai-matta-a37308202?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer">
                            <FaLinkedinIn />
                            <span className="text-[15px] ml-[6px]">Abhai Matta</span>
                        </a>
                        <a href="https://github.com/mari0-0" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer">
                            <FaGithub />
                            <span className="text-[15px] ml-[6px]">mari0-0</span>
                        </a>
                        <a href="https://discordapp.com/users/553810381991051274/" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer">
                            <FaDiscord />
                            <span className="text-[15px] ml-[6px]">mario</span>
                        </a>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <IoMdMailOpen />
                            <span className="text-[15px] ml-[6px]">abhaimatta69@gmail.com</span>
                        </p>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-start justify-start">
                        <div className="font-bold text-[16px]">Links</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <a href="#projects" className="cursor-pointer text-[15px] ml-[6px]">
                                About Me
                            </a>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <a href="#projects" className="cursor-pointer text-[15px] ml-[6px]">
                                Skills
                            </a>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <a href="#projects" className="cursor-pointer text-[15px] ml-[6px]">
                                Web 3
                            </a>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <a href="#projects" className="cursor-pointer text-[15px] ml-[6px]">
                                Projects
                            </a>
                        </p>
                    </div>

                </div>

                <div className="mb-[20px] text-[15px] text-center">
                    &copy; Abhai Matta 2024. All rights reserved
                </div>
            </div>
        </div>
    )
}

export default Footer