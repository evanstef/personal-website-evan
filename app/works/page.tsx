"use client";

import Link from 'next/link'
import React, { useRef } from 'react'
import Image from 'next/image'
import ContactLink from '../components/ContactLink'
import {motion, useInView} from 'framer-motion';
import { data } from '../components/DataWorks';



const Works = () => {

  return (
    <motion.div className="h-full" initial={{y: "-200vh"}}
    animate={{y:"0%"}} transition={{duration:0.7}}>
    <div className='worksContainer mx-6 lg:mx-60 h-full'>

        <div className='flex flex-col items-center text-center'>
           <motion.h1 initial={{x:-150,opacity:0}} animate={{x:0,opacity:1,transition:{delay:0.8}}} className='font-extralight text-6xl md:text-8xl'>My Works</motion.h1>
           <motion.div initial={{scale:0}} animate={{scale:1,transition:{delay:1}}} className='relative z-10'>
            <svg viewBox='0 0 300 300' className='w-72 h-72 animate-spin-slow'>
                <defs>
                    <path id='circlePath' d='M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 ' />
                </defs>
                <text fill='#000'>
                    <textPath xlinkHref='#circlePath' className='text-xl'>
                        Front-end Developer and UI Designer
                    </textPath>
                </text>
            </svg>
            <ContactLink />
           </motion.div>
        </div>
 
        <div className='w-full h-auto bg-slate-700 rounded-lg md:flex md:flex-wrap'> 
                {data.map((item : any) => (
                   <div id={item.id} className="p-8 md:w-1/2">
                    <motion.div initial={{scale:0}} animate={{scale:1,transition:{delay:0.7 * item.id}}}>
                        <div className="rounded-lg shadow-lg overflow-hidden bg-slate-300 hover:scale-95 hover:cursor-pointer transition duration-300 ease-in-out">
                        <Image src={item.image} alt="Blog 1" />
                        <div className="px-4 py-6">
                        <h4 className="font-bold text-primary uppercase text-xl mb-2 line-clamp-1">{item.judul}</h4>
                        <p className='mb-4 text-sm line-clamp-3'>{item.desc}</p>
                        <a href={item.link} target='_blank' className="text-[12px] md:text-sm bg-primary px-3 py-2 mr-2 rounded-full hover:shadow-lg hover:bg-teal-500 text-white dark:bg-slate-500 dark:hover:bg-slate-600">Preview</a>
                        <a href={item.source} target='_blank' className="text-[12px] md:text-sm bg-primary px-3 py-2 rounded-full hover:shadow-lg hover:bg-teal-500 text-white dark:bg-slate-500 dark:hover:bg-slate-600">Source Code</a>
                       </div>
                    </div>
                    </motion.div>  
                </div> 
                ))}
          </div>
          <div className='mb-6'></div>
    </div>
    </motion.div>
  )
}

export default Works