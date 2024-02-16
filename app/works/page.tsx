"use client";

import Link from 'next/link'
import React, { useRef } from 'react'
import satu from '../../public/project-satu.png'
import dua from '../../public/project-dua.png'
import Image from 'next/image'
import ContactLink from '../components/ContactLink'
import {motion, useInView} from 'framer-motion';


const Works = () => {

    const viewOne : any = useRef()
    const scrollViewOne = useInView(viewOne,{margin:"-50px"})

    const viewTwo : any = useRef()
    const scrollViewTwo = useInView(viewTwo,{margin:"-300px"})

  return (
    <motion.div className="h-full" initial={{y: "-200vh"}}
    animate={{y:"0%"}} transition={{duration:0.7}}>
    <div className='worksContainer mx-8 lg:mx-60 h-full'>

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
            <div className="p-11 md:w-1/2">
                    <motion.div initial={{scale:0}} animate={{scale:1,transition:{delay:1}}}>
                        <div className="rounded-lg shadow-lg overflow-hidden bg-slate-300 hover:scale-95 hover:cursor-pointer transition duration-300 ease-in-out">
                        <Image src={satu} alt="Blog 1" />
                        <div className="px-4 py-6">
                        <h4 className="font-bold text-primary uppercase text-xl mb-2 line-clamp-1">Movie Search TMDB API</h4>
                        <p className='mb-4 text-sm line-clamp-3'>membuat web pencarian film menggunakan framework ReactJS dengan menggunakan API dari TMDB API terima kasih TMDB API</p>
                        <a href="https://evan-movie-search.vercel.app/" target='_blank' className="text-sm bg-primary px-6 py-2 mr-4 rounded-full hover:shadow-lg hover:bg-teal-500 text-white dark:bg-slate-500 dark:hover:bg-slate-600">Preview</a>
                        <a href="https://github.com/evanstef/evan-movie-search" target='_blank' className="text-sm bg-primary px-6 py-2 rounded-full hover:shadow-lg hover:bg-teal-500 text-white dark:bg-slate-500 dark:hover:bg-slate-600">Source Code</a>
                       </div>
                    </div>
                    </motion.div>  
                </div>

                {/* <div className="mb-12 p-11 md:w-1/2">
                    <motion.div initial={{scale:0}} animate={{scale:1,transition:{delay:1.5}}}>
                    <div className="rounded-lg shadow-lg overflow-hidden bg-slate-300 hover:scale-95 hover:cursor-pointer transition duration-300 ease-in-out">
                        <Image src={img} alt="Blog 1" />
                        <div className="px-4 py-6">
                        <h4 className="font-bold text-primary uppercase text-xl mb-2">Tulisan Indah</h4>
                        <p className='mb-4 text-sm line-clamp-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ea culpa maiores est magnam sint sapiente earum quos tempore non nisi nihil, maxime vero. Maxime id eos consectetur aliquid expedita.</p>
                        <a href="" className="text-sm bg-primary px-6 py-2 mr-4 rounded-full hover:shadow-lg hover:bg-teal-500 text-white dark:bg-slate-500 dark:hover:bg-slate-600">Preview</a>
                        <a href="" className="text-sm bg-primary px-6 py-2 rounded-full hover:shadow-lg hover:bg-teal-500 text-white dark:bg-slate-500 dark:hover:bg-slate-600">Source Code</a>
                       </div>
                    </div>
                    </motion.div>        
                </div> */}

                <div className="p-11 md:w-1/2">
                    <div ref={viewOne}>
                        <motion.div initial={{scale:0}} animate={scrollViewOne ? {scale:1,transition:{delay:1.05}} : {}}>
                        <div className="rounded-lg shadow-lg overflow-hidden bg-slate-300 hover:scale-95 hover:cursor-pointer transition duration-300 ease-in-out">
                        <Image src={dua} alt="Blog 1" />
                        <div className="px-4 py-6">
                        <h4 className="font-bold text-primary uppercase text-xl mb-2 line-clamp-1">Tailwind CSS Website</h4>
                        <p className='mb-4 text-sm line-clamp-3'>website yang sudah ada sebelumnya dari pak sandhika galih web programming unpas yang saya modifikasi lagi dengan UI yang lebih menarik terima kasih pak dhika</p>
                        <a href="https://tailwind-css-website-kappa.vercel.app/" target='_blank' className="text-sm bg-primary px-6 py-2 mr-4 rounded-full hover:shadow-lg hover:bg-teal-500 text-white dark:bg-slate-500 dark:hover:bg-slate-600">Preview</a>
                        <a href="https://github.com/evanstef/tailwind-css-website" target='_blank' className="text-sm bg-primary px-6 py-2 rounded-full hover:shadow-lg hover:bg-teal-500 text-white dark:bg-slate-500 dark:hover:bg-slate-600">Source Code</a>
                        </div>
                        </div>
                        </motion.div>  
                    </div>     
                </div>
          </div>
          <div className='mb-6'></div>
    </div>
    </motion.div>
  )
}

export default Works