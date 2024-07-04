import IconCloud from "@/components/magicui/icon-cloud";
import RadialGradient from "./radial-gradient";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "vercel",
  "git",
  "github",
  "python",
  "django",
  "flask",
  "solidity",
  "ethereum",
  "ethers",
  "web3dotjs",
  "mysql",
  "mongodb",
  "thirdweb",
  "nft",
  "git",
  "hardhat",
  "selemium"
];

export function SkillCloud() {
  return (
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden bg-background justify-self-center">
      <IconCloud iconSlugs={slugs} />
      <RadialGradient size={250} from="rgba(192, 132, 252, 0.12)" />
    </div>
  );
}
