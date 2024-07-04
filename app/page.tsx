import React from 'react';
import Hero from '@/components/main/Hero';
import Skills from '@/components/main/Skills';
import Projects from '@/components/main/Projects';
import Web3Section from '@/components/main/Web3Section';

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-10">
        <Hero />
        <Skills />
        <Web3Section />
        <Projects />
      </div>
    </main>
  );
}
