"use client";

import { m } from "framer-motion";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative">
      <div className="py-20 min-h-screen">
        <div className="max-w-screen flex flex-col items-center py-20 gap-6">
          <m.h1
            className="flex flex-col md:flex-row text-5xl md:text-7xl font-bold justify-center text-center md:h-max"
            variants={{
              hidden: { opacity: 0, y: -10 },
              show: { opacity: 1, y: 0, transition: { type: "spring" } },
            }}
          >
            <span className="text-primary-500 leading-none tracking-tight">
              <span className="bg-white bg-clip-text text-transparent">
                Beautiful and Customizable <br />
                SwiftUI Components
              </span>{" "}
            </span>
          </m.h1>
          <m.p
            className="text-gray-100 leading-relaxed text-xl"
            variants={{
              hidden: { opacity: 0, y: -10 },
              show: { opacity: 1, y: 0, transition: { type: "spring" } },
            }}
          >
            Save time, reduce complexity, and create stunning iOS apps
            effortlessly.
          </m.p>
          <m.div
            className="flex md:flex-col items-center justify-center w-[500px]"
            variants={{
              hidden: { opacity: 0, y: -10 },
              show: { opacity: 1, y: 0, transition: { type: "spring" } },
            }}
          ></m.div>
          <m.div
            className="flex md:flex-col items-center justify-center space-x-4 mt-4 w-[500px]"
            variants={{
              hidden: { opacity: 0, y: -10 },
              show: { opacity: 1, y: 0, transition: { type: "spring" } },
            }}
          ></m.div>
        </div>

        <m.div
          className="mx-auto max-w-[1200px]"
          variants={{
            hidden: { opacity: 0, y: -10 },
            show: { opacity: 1, y: 0, transition: { type: "spring" } },
          }}
        ></m.div>
      </div>
    </section>
  );
};

export default Hero;
