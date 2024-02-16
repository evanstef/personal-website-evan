"use client";

import Image from "next/image";
import black from '../public/profil.jpg';
import MenuBooth from "./components/MenuBooth";
import {motion} from "framer-motion";

export default function Home() {

  const text = "Front End Web Developer"

  return (
    <>
      <motion.div className="h-full -z-10" initial={{y: "-200vh"}}
      animate={{y:"0%"}} transition={{duration:0.7}}>
      <div className="home-container h-full flex flex-col items-center mx-10 mt-10 md:flex-row md:gap-14 lg:mx-60">
       <motion.span initial={{x:-200, opacity:0}} animate={{x:0, opacity:1}} transition={{delay:1}} className="md:w-1/2">
          <Image className="w-80 h-80 rounded-full border-8 border-slate-400 shadow-2xl md:w-[440px] md:h-[440px] lg:w-full lg:h-[700px]" src={black} alt="" />
       </motion.span>
       <motion.div initial={{scale:0}} animate={{scale:1}} transition={{delay:1.2}} className="mt-10 md:w-1/2">
          <h1 className="text-[45px] text-center font-bold lg:text-5xl">Crafting,Design,As a {text.split("").map((kata,i) => 
          <motion.span 
          key={i}
          initial={{opacity:1}} 
          animate={{opacity:0}} 
          transition={{duration:4,repeat:Infinity, delay:i * 0.05}}>
            {kata}
          </motion.span>)}
          </h1>
          <p className="my-5 font-semibold lg:text-xl"> As a junior front end web developer i&apos;m familiar with JavaScript/TypeScript and also i&apos;m use a nextJS framework for daily coding as a junior web developer if you wanna see my works just click menu works in down below and also you wanna know more about me just click about me menu in down below happy coding </p>
          <MenuBooth />
      </motion.div>
      </div>
      </motion.div>
    </>
  )
}
