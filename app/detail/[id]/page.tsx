"use client";

import React from 'react'
import { data } from '@/app/components/DataWorks'
import Image from 'next/image'
import Link from 'next/link'
import {motion} from 'framer-motion'
type ParamsProps = {
    params : {
        id : any
    }
}
type PropsData = {
    id : number | undefined;
    judul : string | undefined;
    desc : string | undefined;
    image : any;
    link : string ;
    source : string | undefined;
    tech : Array<string>;
}

const Detail = ({params } : ParamsProps ) => {
  
  const dataById : PropsData | any  = data.find((item) => item.id === parseInt(params.id))
  

    
     return (
        <motion.div initial={{y: "-200vh"}}
        animate={{y:"0%"}} transition={{duration:0.7, delay : 0.2}}  className='mx-8 h-full lg:mx-60 space-y-4'>
            <h1 className='md:text-2xl lg:text-4xl font-bold'><Link className='hover:text-slate-950 duration-300' href={"/"}>Home</Link> / {dataById?.judul}</h1>
            <Image className='w-[500px] md:w-[800px] lg:w-[1000px] rounded-lg mx-auto' src={dataById?.image} alt='' /> 
            <div className='flex gap-6 md:text-lg lg:text-xl text-white'>
                <Link className='bg-slate-500 px-3 py-1 md:px-10 md:py-2 rounded-xl hover:bg-slate-600 duration-300' href={dataById?.link} target='_blank'>Preview</Link>
                <Link className='bg-slate-500 px-3 py-1 md:px-10 md:py-2 rounded-xl hover:bg-slate-600 duration-300' href={dataById?.source} target='_blank'>Source Code</Link>
            </div>
            <div className='text-slate-900'>
                <p className='lg:text-lg'>{dataById?.desc}</p>
            </div>
            <div className='text-slate-900 lg:text-lg'>
                <h1>Tech Yang Digunakan : </h1>
                {dataById.tech.map((item : any, i : any) => (
                    <p key={i}>- {item}</p>
                ))}
            </div>
        </motion.div>
    )
}

export default Detail