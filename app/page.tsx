import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <DotPattern className={cn("-z-10 bg-black h-full")} />
    </>
  );
}
