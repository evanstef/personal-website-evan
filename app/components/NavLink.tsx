"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'




const NavLink = ({link} : any) => {
    const getLink = usePathname()
    
  return (
    <>
      <Link href={link.url} className={`text-white hover:text-slate-300 hover:md:text-slate-950 md:text-slate-600 ${getLink === link.url && "text-3xl text-slate-300 md:text-base md:text-slate-950 font-bold"}`}>{link.title}</Link>
    </>
  )
}

export default NavLink