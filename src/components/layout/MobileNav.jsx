"use client";
import Link from "next/link";
import { useState } from "react";

function MobileNav() {
    const [isOpen , setIsOpen] = useState(false)
   // console.log(isOpen);
  return (
    <div className="md:hidden">
        <div className='flex flex-col gap-[4.5px] cursor-pointer' onClick={() => setIsOpen(prev => !prev)}>
          
            <div className={`w-6 h-1 bg-primary rounded-sm ${isOpen ? 'rotate-45' : ''} origin-left ease-in-out duration-300`} />
            <div className={`w-6 h-1 bg-primary rounded-sm ${isOpen ? 'opacity-0' : ''}  ease-in-out duration-300`} />
            <div className={`w-6 h-1 bg-primary rounded-sm ${isOpen ? '-rotate-45' : ''} origin-left ease-in-out duration-300`} />
        {isOpen && (
            <div className=' absolute top-16 right-0 flex flex-col gap-4 bg-white p-4 shadow-md w-[150px]' >
                 <Link href="/" className="text-gray-600 hover:text-primary">
                Home
                </Link>
                <Link href="/about" className="text-gray-600 hover:text-primary">
                About
                </Link>
                <Link href="/contact" className="text-gray-600 hover:text-primary">
                Contact
                </Link>
                <Link href="/menu" className="text-gray-600 hover:text-primary">
                Menu
                </Link>
                <Link href="/login" className="bg-primary text-white rounded-full py-1 px-4 hover:bg-primary-dark">
                Login
                </Link>
            </div>
        )}
        </div>
    </div>
  )
}

export default MobileNav
