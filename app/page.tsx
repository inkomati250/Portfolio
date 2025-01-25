"use client";


import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import { FloatingNav } from "@/components/ui/FloatingNavBar";
import { FaLocationArrow } from "react-icons/fa6";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">

      <FloatingNav navItems={[
        {name: "Home",link: "/" , icon:"x"}
      ]} />
        <Hero />
        <Grid/>


      </div>
    </main>
  );
}

export default Home;
