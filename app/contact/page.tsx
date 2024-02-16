"use client";
import React, { useRef, useState } from 'react';
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser';


const ContactPage = () => {
   const [success, setSuccess] = useState(false);
   const [error, setError] = useState(false);
   const text = "Say Hello"

   const form : any = useRef()

   const sendEmail = (e : any) => {
      e.preventDefault();
      setError(false);
      setSuccess(false);
  
      emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
        )
        .then(
          () => {
            setSuccess(true);
            form.current.reset();
          },
          () => {
            setError(true);
          }
        );
    };

  return (
   <motion.div className="h-full" initial={{y: "-200vh"}}
   animate={{y:"0%"}} transition={{duration:0.7}}>
    <div className='contactContainer mx-8 flex items-center flex-col lg:flex-row lg:items-center lg:justify-center lg:mx-60'>
       <div className='mb-12 lg:w-1/2'>
          <h1 className='text-6xl lg:text-8xl'>😊 {text.split("").map((a,b) => <motion.span initial={{opacity:1}} animate={{opacity:0, transition : {duration:3, repeat:Infinity, delay:b * 0.1}}}>{a}</motion.span>)}</h1>
       </div>
       <motion.form ref={form} onSubmit={sendEmail} initial={{scale:0}} animate={{scale:1, transition:{delay:0.7}}} className='w-full h-auto flex flex-col justify-center bg-gradient-to-b from-slate-400 to-blue-300 rounded-lg text-white py-6 px-4 lg:w-1/2 lg:py-16'>
          <span className='text-xl lg:text-4xl'>Hello, Evan</span>
          <textarea rows={8} name='user_message' className='bg-transparent border-b-2 outline-none mb-6 text-2xl'/>
          <span className='text-xl mb-3 lg:text-4xl lg:mb-10'>Your Email Address :</span>
          <input type="email" name='user_email' className="bg-transparent border-b-2 outline-none lg:text-2xl lg:mb-5 invalid:text-pink-700 peer"/>
          <p className="text-sm md:text-base top-0 text-pink-500 invisible peer-invalid:visible">Email Not Valid</p>
          <button className='bg-slate-500 text-xl mt-4 rounded-full mx-24 duration-[0.4s] ease-in-out hover:bg-slate-400 py-2 lg:text-4xl mb-4'>Send</button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong!
            </span>
          )}
       </motion.form>
    </div>
    </motion.div>
  )
}

export default ContactPage;