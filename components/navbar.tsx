"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

import { useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="sticky w-screen top-0 z-50 py-3 md:py-7 font-poppins bg-transparent">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <Link href="/" className="flex flex-row space-x-3">
          <Image src="/logo.svg" width={40} height={40} alt="SwiftCn" />
          <h1 className=" self-center text-4xl text-white font-extrabold whitespace-nowrap tracking-tighter cursor-pointer">
            Swiftcn UI
          </h1>
        </Link>
        <div className="flex items-center space-x-6">
          <div>
            <Link
              className="px-4  text-white  hover:text-gray-500"
              href="https://swiftcn.mintlify.app/"
            >
              Documentation
            </Link>
          </div>
          <div>
            <Button
              className="px-4 bg-white text-black hover:shadow-lg hover:backdrop-blur-md  hover:bg-gray-300"
              onClick={() => {
                window.open("https://github.com/Swiftcn-UI/swiftcn-playground");
              }}
            >
              <Image
                src="/github.svg"
                width={20}
                height={20}
                alt="Github"
                className="mr-3"
              />
              Github
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
