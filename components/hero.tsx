"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, SearchCheckIcon, SearchIcon } from "lucide-react";
import va from "@vercel/analytics";

const Hero = () => {
  const [following, setFollowing] = useState(true);

  return (
    <section className="">
      <div className="">
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
            <Button
              className="mirror-button mt-4 p-6 flex rounded-xl items-center justify-center shadow-2xl transition-all hover:bg-gray-700"
              onClick={() => {
                va.track("documentationClicked");

                window.open("https://swiftcn.mintlify.app/");
              }}
            >
              <span className="relative whitespace-pre text-center text-sm lg:text-2xl font-semibold leading-none tracking-tight text-white z-10">
                All Components
              </span>
            </Button>

            <Button
              className="mt-4 flex rounded-xl p-6 items-center justify-center shadow-2xl transition-all  hover:bg-gray-700"
              onClick={() => {
                va.track("contributeClicked");
                window.open("https://github.com/Swiftcn-UI/swiftcn-playground");
              }}
            >
              <span className="whitespace-pre bg-gradient-to-b from-black from-30% to-gray-300/80 bg-clip-text text-center text-sm lg:text-2xl font-semibold leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 dark:text-transparent z-10">
                Contribute
              </span>
            </Button>
          </div>
        </div>

        <div className="hidden md:flex flex-col items-center gap-6 text-center bg-transparent px-4">
          <div className="mt-10  flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
            <div className="h-20 w-20 rounded-lg flex items-center justify-center mb-4 md:mb-0">
              <Button className="">Button</Button>
            </div>

            <div className="rounded-lg flex items-center justify-center mb-4 md:mb-0">
              <Image
                src="https://avatars.githubusercontent.com/u/53033648?v=4"
                alt="hero"
                width={60}
                height={60}
                className="rounded-full"
              />
            </div>

            <div className="w-full md:w-60 rounded-lg flex items-center justify-center mb-4 md:mb-0">
              <div
                className={`py-2 px-4 w-full cursor-pointer font-semibold md:text-sm ${
                  following
                    ? "border-b-2 border-blue-400 text-blue-400"
                    : "text-white"
                }`}
                onClick={() => setFollowing(true)}
              >
                For You
              </div>
              <div
                className={`py-2 w-full px-4 cursor-pointer font-semibold md:text-sm ${
                  !following
                    ? "border-b-2 border-blue-400 text-blue-400"
                    : "text-white"
                }`}
                onClick={() => setFollowing(false)}
              >
                Following
              </div>
            </div>

            <div className="rounded-lg flex items-center justify-center mb-4 md:mb-0">
              <Image
                src="/robinhood.svg"
                className="border-2 border-white rounded-xl"
                alt="hero"
                width={200}
                height={200}
              />
            </div>

            <div className="bg-white rounded-lg flex items-center justify-center shadow-md">
              <SearchIcon className="w-8 h-8 text-black" />
              <input
                className="w-40 h-10 bg-transparent outline-none text-black placeholder-gray-400 pl-2"
                disabled
                placeholder="Search"
              />
            </div>

            <Button
              className=" p-5 w-40 flex rounded-xl items-center justify-center shadow-2xl transition-all  hover:bg-gray-700"
              onClick={() => {
                va.track("documentationClicked");
                window.open("https://swiftcn.mintlify.app/button");
              }}
            >
              See all
              <ArrowUpRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
