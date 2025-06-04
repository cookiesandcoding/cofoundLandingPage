"use client";
import React from "react";
import { AuroraBackground } from "./ui/AuroraBackground";
import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <AuroraBackground className="min-h-screen flex items-center justify-center px-6" showRadialGradient={true}>
    <section className="min-h-screen text-white flex flex-col items-center justify-center px-6 md:px-12 text-center">
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold leading-tight mb-4">
       Stop Dreaming Alone , Start Building <span className="bg-gradient-to-r from-purple-400 to-purple-700 bg-clip-text text-transparent">Together </span>
      </h1>

      <p className="text-lg md:text-2xl lg:text-3xl text-gray-400 max-w-2xl mb-8">
        From idea to launch — skip awkward DMs and meet your match.
      </p>
      <Link
              href="/signup"
              className="inline-flex items-center space-x-2 rounded-full bg-gradient-to-r from-purple-400 to-purple-700 px-6 py-4  text-white transition-all duration-200 hover:shadow-lg"
            >
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl">Get Started </span>
            </Link>

      

    
    </section>
    </AuroraBackground>
  );
};

export default HeroSection;
