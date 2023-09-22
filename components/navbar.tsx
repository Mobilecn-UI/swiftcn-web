"use client";

import React, { useState } from "react";
import Link from "next/link";
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
        <Link href="/">
          <h1 className="self-center text-4xl text-white font-extrabold whitespace-nowrap tracking-tighter cursor-pointer">
            SwiftCn UI
          </h1>
        </Link>
        <div className="flex items-center space-x-6">
          <div>
            <Link className="px-4  text-white  hover:text-gray-500" href={""}>
              Documentation
            </Link>
          </div>
          <div>
            <Button className="px-4 bg-white text-black hover:shadow-lg hover:backdrop-blur-md  hover:bg-gray-300">
              Github
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
