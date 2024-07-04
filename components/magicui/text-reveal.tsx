"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { FC, ReactNode, useRef } from "react";

interface TextRevealByWordProps {
  text: string;
  className?: string;
}

export const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const words = text.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[150vh] w-5/6", className)}>
      <div
        className={
          "sticky top-0 mx-auto h-[50%] max-w-4xl text-center flex items-end justify-center bg-transparent"
        }
      >
        <p
          ref={targetRef}
          className={
            "flex flex-wrap text-white/20  text-[30px] md:p-8 md:text-3xl lg:p-10 lg:text-3xl xl:text-6xl  text-bold font-medium text-center justify-center items-center"
          }
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <span className="mt-5 mr-1 text-white/20 flex items-center justify-center">
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: any;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="xl:lg-3 relative mx-1 xl:mx-1">
      <span className={"absolute opacity-30"}>{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={"text-purple-400"}
      >
        {children}
      </motion.span>
    </span>
  );
};

export default TextRevealByWord;
