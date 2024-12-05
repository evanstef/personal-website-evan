"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'




const NavLink = ({link} : any) => {
    const getLink = usePathname()
    
  return (
    <>
      <Link key={link.title} href={link.url} className={`text-slate-900 hover:text-teal-500 duration-300 ${getLink === link.url && "text-3xl md:text-base text-teal-500 font-bold"}`}>{link.title}</Link>
    </>
  )
}

export default NavLink