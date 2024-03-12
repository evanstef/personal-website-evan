"use client";

import Image from "next/image";
import black from '../public/gambar.jpg';
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
          <Image className="w-80 h-80 rounded-full border-8 border-slate-400 shadow-2xl md:w-[440px] md:h-[440px] lg:w-full lg:h-[700px] bg-cover bg-center" src={black} alt="" />
       </motion.span>
       <motion.div initial={{scale:0}} animate={{scale:1}} transition={{delay:1.2}} className=" mt-10 md:w-1/2">
          <h1 className="text-[45px] text-center font-bold lg:text-5xl">Crafting,Design,As a {text.split("").map((kata,i) => 
          <motion.span 
          key={i}
          initial={{opacity:1}} 
          animate={{opacity:0}} 
          transition={{duration:4,repeat:Infinity, delay:i * 0.05}}
          className="mx-1">
            {kata}
          </motion.span>)}
          </h1>
          <p className="mx-5 my-5 md:mx-0 font-semibold lg:text-xl"> Hello, my name is Evan, I am a junior front end web developer. JavaScript/TypeScript is my speciality and i mainly using nextJS framework for my projects. If you want to see my works just click on the menu button below.
          </p>
          <p className="mx-5 my-5 md:mx-0 font-semibold lg:text-xl">Feel free to know me more by clicking the “about me” button below. Happy coding fellas!</p>
          <div className="mx-5 md:mx-0">
            <MenuBooth />
          </div>
          <div className="mb-5"></div>
      </motion.div>
      </div>
      </motion.div>
    </>
  )
}
