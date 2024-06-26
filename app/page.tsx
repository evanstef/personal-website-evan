"use client";

import Image from "next/image";
import black from "../public/gambar.jpg";
import MenuBooth from "./components/MenuBooth";
import Typewriter from "typewriter-effect"
import {motion} from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";

export default function Home() {
  const container = useRef(null)
  
  useGSAP(() => {
  
    const tl = gsap.timeline();
    tl.from(".text1 p", { opacity: 0, stagger : 0.1, delay: 1.5 })
      .from(".text2 p", { opacity: 0, stagger : 0.1 })
      .from(".text3 p", { opacity: 0, stagger : 0.1 })
  }, {scope: container});



  // const text = "Front End Web Developer"

  return (
    <>
      <motion.div className="h-full -z-10" initial={{y: "-200vh"}}
      animate={{y:"0%"}} transition={{duration:0.7, delay : 0.2}}>
      <div ref={container} className="home-container h-full mx-5 mt-40 md:gap-14 lg:mx-44">
       <motion.div initial={{scale:0}} animate={{scale:1}} transition={{delay:1.2}} className="mt-10 flex flex-col justify-center items-center">
          <h1 className="text-[30px] font-bold lg:text-5xl mb-2 text-slate-500">Crafting, Design, As a</h1>
          <div className="text-[37px] font-bold lg:text-5xl mb-4 text-slate-800 flex gap-2 md:gap-8">
            <div className="flex md:gap-3 text1">
              <p>F</p>
              <p>r</p>
              <p>o</p>
              <p>n</p>
              <p>t</p>
            </div>
            
            <div className="flex md:gap-3 text2">
              <p>E</p>
              <p>n</p>
              <p>d</p>
            </div>
            
            <div className="flex md:gap-3 text3">
              <p>D</p>
              <p>e</p>
              <p>v</p>
              <p>e</p>
              <p>l</p>
              <p>o</p>
              <p>p</p>
              <p>e</p>
              <p>r</p>
            </div>
            
          </div>
          
          <h1 className="mx-5 mb-1 hidden md:block md:mx-0 font-semibold lg:text-3xl"> 
            I do  
            <span className="inline-block ml-1">
              <Typewriter 
              options={{
                strings : ["JavaScript.", "TypeScript."],
                autoStart : true,
                loop : true,  
                delay : 200,
                // deleteSpeed : 100,
              }}
            /> 
            </span>
          </h1>
          <p className="mx-5 mb-8 hidden md:block md:mx-0 font-semibold lg:text-xl">Feel free to know me more by clicking the “about me” button below. Happy coding fellas!</p>
          <div className="mx-5 md:mx-0 flex justify-center md:flex-none">
            <MenuBooth />
          </div>
      </motion.div>
      {/* <span className="flex justify-center">
          <Image id="image" className="w-80 h-80 rounded-full border-8 md:w-[450px] md:h-[450px] border-slate-400 shadow-2xl bg-cover bg-center" width={440} height={440} src={black} alt="" />
       </span> */}
      </div>
      </motion.div>
    </>
  )
}
