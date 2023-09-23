"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="">
      {/* Relative container */}
      <div className="">
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
          <div className="flex flex-col md:flex-row gap-4">
            <Link href="https://swiftcn.mintlify.app/">
              <Button className="mirror-button mt-4 flex rounded-xl items-center justify-center shadow-2xl transition-all hover:bg-gray-700">
                <span className="relative whitespace-pre text-center text-sm lg:text-2xl font-semibold leading-none tracking-tight text-white z-10">
                  All Components
                </span>
              </Button>
            </Link>

            <Button className="mt-4 flex rounded-xl items-center justify-center shadow-2xl transition-all  hover:bg-gray-700">
              <span className="whitespace-pre bg-gradient-to-b from-black from-30% to-gray-300/80 bg-clip-text text-center text-sm lg:text-2xl font-semibold leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 dark:text-transparent z-10">
                Contribute
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
