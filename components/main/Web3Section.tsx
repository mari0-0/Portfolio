"use client"

import {
	slideInFromLeft,
	slideInFromRight,
	slideInFromTop,
} from "@/utils/motion";
import { motion } from "framer-motion";
import EthereumLogoScene from "./EthereumLogoScene";
import TextRevealByWord from "../magicui/text-reveal";
import { SparklesIcon } from "@heroicons/react/24/solid";

const Web3Section = () => {
	return (
		<div className="flex flex-col items-center justify-center">
			<TextRevealByWord text="Web3 Development" />
			<motion.div
				variants={slideInFromTop}
				className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
			>

				<SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
				<h1 className="Welcome-text text-[13px]">
					<span className="mr-1"> Smart Contracts</span>
				</h1>
			</motion.div>
			<div className="grid grid-rows-2 gap-20 w-full justify-center items-center md:grid-cols-2 md:grid-rows-1">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					variants={slideInFromLeft(0.5)}
					className="justify-self-center"
				>
					<EthereumLogoScene />
				</motion.div>
				<div className="flex flex-col space-y-10">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						variants={slideInFromRight(0.3)}
						className="justify-self-center"
					>
						<h4 className="mb-3 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-purple-300 from-20% via-purple-400 to-purple-500">
							Custom Smart Contracts
						</h4>
						<div className="flex flex-row">
							<span className="text-slate-400 text-lg font-light">- </span>
							<ul className="list-inside text-slate-400 text-md font-light pl-3">
								<li>Designing and developing tailored smart contracts for various use cases
								</li>
							</ul>
						</div>
					</motion.div>

					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						variants={slideInFromRight(0.3)}
						className="justify-self-center"
					>
						<h4 className="mb-3 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-purple-300 from-20% via-purple-400 to-purple-500">
							NFT Contracts
						</h4>
						<div className="flex flex-row">
							<span className="text-slate-400 text-lg font-light">- </span>
							<ul className="list-inside text-slate-400 text-md font-light pl-3">
								<li>Creating and deploying NFT contracts (ERC-721, ERC-1155)
								</li>
							</ul>
						</div>
					</motion.div>

					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						variants={slideInFromRight(0.3)}
						className="justify-self-center"
					>
						<h4 className="mb-3 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-purple-300 from-20% via-purple-400 to-purple-500">
							Token Contracts</h4>
						<div className="flex flex-row">
							<span className="text-slate-400 text-lg font-light">- </span>
							<ul className="list-inside text-slate-400 text-md font-light pl-3">
								<li>Developing and managing token contracts (ERC-20, ERC-721, ERC-1155)
								</li>
							</ul>
						</div>
					</motion.div>

					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						variants={slideInFromRight(0.3)}
						className="justify-self-center"
					>
						<h4 className="mb-3 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-purple-300 from-20% via-purple-400 to-purple-500">
							DApp Development
						</h4>
						<div className="flex flex-row">
							<span className="text-slate-400 text-lg font-light">- </span>
							<ul className="list-inside text-slate-400 text-md font-light pl-3">
								<li>Building decentralized applications with user-friendly interfaces

								</li>
							</ul>
						</div>
					</motion.div>
				</div>

			</div>
		</div>

	)
}

export default Web3Section