"use client";

import Link from 'next/link';
import React from 'react'

const ContactLink = () => {
  return (
    <div>
          <Link href="/contact" className='w-20 h-20 absolute top-0 bottom-0 left-0 right-0 m-auto bg-slate-400 text-white rounded-full flex items-center justify-center font-semibold'>Contact Me</Link>
    </div>
  )
}

export default ContactLink

