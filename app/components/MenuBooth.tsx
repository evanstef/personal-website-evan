"use client";

import Link from "next/link"

const MenuBooth = () => {
  return (
    <>
        <Link className="mr-4 px-4 py-[6px] border-2 font-semibold border-slate-800 rounded-lg lg:text-lg hidden md:block" href="/about">About Me</Link>
        <Link className="px-4 py-2 font-semibold bg-slate-800 text-white rounded-lg lg:text-lg" href="/works">View My Work ➞</Link>
       
    </>
  )
}

export default MenuBooth