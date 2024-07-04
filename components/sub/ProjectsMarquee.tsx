import Marquee from "@/components/magicui/marquee";
import ProjectCard from "./ProjectCard";


const ProjectsMarquee = () => {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden bg-background py-20 md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">

        <ProjectCard
          src="/pr1.png"
          title="Modern Next.js Portfolio"
          description="Explore my web3 projects and skills through a sleek, space-themed design. This modern portfolio showcases my expertise and innovation in a captivating cosmic setting."
        />
        <ProjectCard
          src="/pr2.png"
          title="CV Extractor"
          description="Effortlessly extract and organize details from CVs. Upload PDF files and receive all the extracted information neatly compiled in an Excel sheet. Simplify your hiring process with our efficient and user-friendly tool."
        />
        <ProjectCard
          src="/pr3.png"
          title="NFT Raffle Website"
          description="Participate in fair and transparent NFT raffles powered by Solidity smart contracts. Enjoy a secure and innovative experience in the world of digital collectibles."
        />
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
    </div>
  );
};

export default ProjectsMarquee;