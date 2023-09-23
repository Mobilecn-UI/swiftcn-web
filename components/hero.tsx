"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative">
      {/* Relative container */}
      <div className="relative">
        {/* Your existing content */}
        <div className="mt-5 flex flex-col items-center py-20 gap-6 text-center">
          <h1 className="flex flex-col md:flex-row text-5xl sm:text-4xl md:text-7xl font-bold justify-center text-center md:h-max">
            <span className="text-primary-500 leading-none tracking-tight bg-white bg-clip-text text-transparent ">
              Beautiful and Customizable <br />
              SwiftUI Components
            </span>
          </h1>
          <p className="text-gray-100 leading-relaxed text-xl">
            Save time, reduce complexity, and create stunning iOS apps
            effortlessly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
