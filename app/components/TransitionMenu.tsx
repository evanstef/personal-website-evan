"use client";

import { AnimatePresence } from 'framer-motion';
import React from 'react'
import Navbar from './Navbar';
import {motion} from 'framer-motion';
import { usePathname } from 'next/navigation';

const TransitionMenu = ({children} : any) => {

    const pathName = usePathname()

  return (
    <AnimatePresence mode='wait'>
        <div key={pathName} className="text-slate-600 w-screen h-screen bg-gradient-to-b from-slate-200 via-slate-300 to-blue-200 overflow-x-hidden">
          <motion.div className='h-screen w-screen fixed rounded-b-[100px] bg-slate-700 z-40' animate={{height:"0vh"}} exit={{height:"140vh"}} transition={{duration:0.5, ease:"easeOut"}}/>
          <motion.div className='fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-6xl cursor-default w-fit h-fit z-50 md:text-8xl'
          initial={{opacity:1}}
          animate={{opacity:0}}
          exit={{opacity:0,display : "none"}}
          transition={{duration:0.7, ease:"easeOut"}}>
            {pathName.substring(1)}
          </motion.div>
          <motion.div className='h-screen w-screen fixed rounded-t-[100px] bottom-0 bg-slate-700 z-30' initial={{height:"140vh"}} animate={{height:"0vh", transition:{delay:0.5}}}>
          </motion.div>
          <div className="h-24">
            <Navbar />
          </div>
          <div className="h-[calc(100vh - 6rem)]">
            {children}
        </div>
        </div>
    </AnimatePresence>
  )
}

export default TransitionMenu