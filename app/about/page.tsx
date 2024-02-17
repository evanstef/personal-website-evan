"use client";

import React, { useRef } from 'react'
import Image from 'next/image'
import black from '../../public/black.png'
import {motion, useInView, useScroll} from 'framer-motion';
import ProgressBar from '@ramonak/react-progress-bar';

const About = () => {
  const text = "Evan Stefanus Candra"
  const quotes = "it is not things trouble us but our judgements about things - Epictetus"
  const view : any = useRef()
  const scrollView = useInView(view)
  
 

  return (
    <motion.div className="h-full" initial={{y: "-200vh"}}
    animate={{y:"0%"}} transition={{duration:0.7}}>
    <div className="aboutContainer mx-8 lg:mx-60 md:flex md:gap-8 lg:top-0">
        <div className='hidden md:block top-0 mt-11 md:w-1/2'>
          <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{delay:0.85}}} className='md:mx-10 lg:mx-0 w-60 h-60 lg:w-[45%] lg:h-[30%] mb-24 lg:mb-28 bg-slate-500 rounded-2xl animate-spin-slow'></motion.div>
          <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{delay:1}}} className='md:mx-32 lg:ml-60 w-60 h-60 lg:w-[45%] lg:h-[30%] bg-slate-500 rounded-2xl animate-spin-slow'></motion.div>
        </div>
        <div className='md:w-1/3 lg:w-1/2'>
          <motion.h1 initial={{x:50, opacity:0}} animate={{x:0, opacity:1}} transition={{delay:1.2}} className='text-2xl font-extrabold'>Holla i am {text.split("").map((kata,i) => <motion.span key={i} initial={{opacity:1}} animate={{opacity:0}} transition={{duration:3,repeat:Infinity,delay:i * 0.03}}>{kata}</motion.span>)}</motion.h1>
          <motion.p initial={{x:50, opacity:0}} animate={{x:0, opacity:1}} transition={{delay:1.5}} className='my-6 font-semibold'>This is my current skills graphically. I create a bunch of responsive design to express my creativity, especially in designing websites. I&apos;m still working on back end with python language and django framework. Beside coding, in my boredom i also play first person shooting games</motion.p>
          <motion.i initial={{x:50,opacity:0}} animate={{x:0,opacity:1}}>{quotes.split("").map((text,i) => <motion.span key={i} initial={{opacity:0}} animate={{opacity:1,transition:{delay:i * 0.07}}} transition={{repeat:0}} >{text}</motion.span>)}</motion.i>

          <motion.h1 initial={{x:50,opacity:0}} animate={{x:0, opacity:1, transition:{delay:2}}}className='mt-28 text-2xl font-extrabold mb-6'>My Skills</motion.h1>

          {/* Bar Skils */}
          <div className='judul flex justify-between font-semibold'>
            <h3>JavaScript</h3>
          </div>
          <ProgressBar transitionTimingFunction='ease-in-out' transitionDuration='1.5s' completed={85} bgColor='#222' baseBgColor="#" animateOnRender={true} />
    
          <div className='judul flex justify-between font-semibold mt-5'>
            <h3>TypeScript</h3>
          </div>
          <ProgressBar transitionTimingFunction='ease-in-out' transitionDuration='1.7s' completed={85} bgColor='#222' baseBgColor="#" animateOnRender={true} />

          <div className='judul flex justify-between font-semibold mt-5'>
            <h3>HTML</h3>
          </div>
          <ProgressBar transitionTimingFunction='ease-in-out' transitionDuration='1.9s' completed={97} bgColor='#222' baseBgColor="#" animateOnRender={true} />

          <div className='judul flex justify-between font-semibold mt-5'>
            <h3>CSS</h3>
            
          </div>
          <ProgressBar transitionTimingFunction='ease-in-out' transitionDuration='2.1s' completed={93} bgColor='#222' baseBgColor="#" animateOnRender={true} />

          <div className='judul flex justify-between font-semibold mt-5'>
            <h3>Java</h3>
          </div>
          <ProgressBar transitionTimingFunction='ease-in-out' transitionDuration='2.2s' completed={65} bgColor='#222' baseBgColor="#" animateOnRender={true} />

          <div className='judul flex justify-between font-semibold mt-5'>
            <h3>Python</h3>
          </div>
          <ProgressBar transitionTimingFunction='ease-in-out' transitionDuration='2.4s' completed={60} bgColor='#222' baseBgColor="#" animateOnRender={true} />

          <div className='judul flex justify-between font-semibold mt-5'>
            <h3>PHP</h3>
          </div>
          <ProgressBar transitionTimingFunction='ease-in-out' transitionDuration='2.6s' completed={62} bgColor='#222' baseBgColor="#" animateOnRender={true} />

          <div className='mt-28' ref={view} />
          <motion.h1 initial={{x:60, opacity:0}} animate={scrollView ? {x:0,opacity:1} : {}} className='mb-6 font-extrabold text-2xl'>FrameWork Or Library</motion.h1>
          
          {/* Bar Framework */}
          <motion.div initial={{x:60, opacity:0}} animate={scrollView ? {x:0,opacity:1,transition:{delay:0.6}} : {}} className='bg-slate-700 judul flex justify-between font-semibold rounded-lg px-4 text-white mt-5 w-[75%]'>
            <h3>ReactJS</h3>
            <p>Intermediate</p>
          </motion.div>

          <motion.div initial={{x:60, opacity:0}} animate={scrollView ? {x:0,opacity:1,transition:{delay:1}} : {}} className='bg-slate-700 judul flex justify-between font-semibold rounded-lg px-4 text-white mt-5 w-[75%]'>
            <h3>NextJS</h3>
            <p>Intermediate</p>
          </motion.div>

          <motion.div initial={{x:60, opacity:0}} animate={scrollView ? {x:0,opacity:1,transition:{delay:1.4}} : {}} className='bg-slate-700 judul flex justify-between font-semibold rounded-lg px-4 text-white mt-5 w-[75%]'>
            <h3>Django</h3>
            <p>Beginner</p>
          </motion.div>

          <motion.div initial={{x:60, opacity:0}} animate={scrollView ? {x:0,opacity:1,transition:{delay:1.8}} : {}} className='bg-slate-700 judul flex justify-between font-semibold rounded-lg px-4 text-white mt-5 w-[75%]'>
            <h3>Tailwind CSS</h3>
            <p>Advance</p>
          </motion.div>

          <motion.div initial={{x:60, opacity:0}} animate={scrollView ? {x:0,opacity:1,transition:{delay:2.2}} : {}} className='bg-slate-700 judul flex justify-between font-semibold rounded-lg px-4 text-white mt-5 w-[75%]'>
            <h3>Bootstrap</h3>
            <p>Intermediate</p>
          </motion.div>

          <div className='mb-5'></div>
          </div>
        </div>
    </motion.div>
  )
}

export default About;