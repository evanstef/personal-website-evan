"use client";

import Link from 'next/link'
import React, { useRef } from 'react'
import Image from 'next/image'
import ContactLink from '../components/ContactLink'
import {motion, useInView} from 'framer-motion';
import { data } from '../components/DataWorks';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';



const Works = () => {

  const container = useRef(null)
  
  useGSAP(() => {
    // animation image
    gsap.fromTo(".gambar-project", {duration: 1, opacity : 0 }, { duration: 1, opacity : 1,delay: 1, stagger: 0.5 });
    // animation end image
  }, {scope: container});

  return (
    <motion.div ref={container} className="h-full" initial={{y: "-200vh"}}
    animate={{y:"0%"}} transition={{duration:0.7, delay : 0.2}}>
    <div className='worksContainer gap-5 mx-6 lg:mx-60 h-full'>

        <div className='flex flex-col items-center md:mt-6 text-center'>
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
 
        <div className='w-full h-auto bg-slate-700 rounded-lg grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'> 
                {data.map((item : any, i) => (
                   <div key={i} className="p-8">
                    <div className='gambar-project'>
                        <div className="rounded-lg shadow-lg overflow-hidden bg-slate-300 hover:scale-95 hover:cursor-pointer transition duration-300 ease-in-out">

                        <Link href={`/detail/${item.judul}`}>
                        <div className='relative grayscale-0 duration-300 hover:grayscale'>
                          <Image src={item.image} alt="Blog 1" />  
                          <div className='absolute flex top-0 left-0 w-full h-full items-center duration-300 opacity-0 hover:opacity-100 y-100 justify-center bg-slate-900 bg-opacity-30'>
                            <h1 className='font-bold text-white text-2xl'>View Project</h1>
                          </div>
                        </div>
                        </Link>
                        
                        <div className="px-4 py-6">
                            <h4 className="font-bold text-primary uppercase text-xl mb-2 line-clamp-1 text-slate-900">{item.judul}</h4>
                            <p className='mb-4 text-sm line-clamp-3'>{item.desc}</p>
                            <a href={item.link} target='_blank' className="text-[12px] md:text-sm bg-primary px-3 py-2 mr-2 rounded-full hover:shadow-lg hover:bg-teal-500 text-white dark:bg-slate-500 dark:hover:bg-slate-600">Preview</a>
                            <a href={item.source} target='_blank' className="text-[12px] md:text-sm bg-primary px-3 py-2 rounded-full hover:shadow-lg hover:bg-teal-500 text-white dark:bg-slate-500 dark:hover:bg-slate-600">Source Code</a>
                  
                            <div className='flex gap-2 mt-4'>
                              {item.icontech.map((item : any, i : any) => (
                                <div key={i}>{item}</div>
                              ))}
                            </div>
                        </div>
                    </div>
                    </div>  
                </div> 
                ))}
        </div>
        <div className='mb-6'></div>
    </div>
    </motion.div>
  )
}

export default Works