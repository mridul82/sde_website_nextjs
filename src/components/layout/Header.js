"use client";
import { useEffect, useState } from 'react';
import Logo from './Logo';
import MobileNav from './MobileNav';
import NavBar from './NavBar';

const Header = () => {
  const [sticky, setSticky] = useState(false)
  const handleScroll = () => {
    const scrollPosition = window.screenY;
    const windowHeight = window.innerHeight * 0.5;

    if (scrollPosition < windowHeight) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },[]);

  return (
    <header className={sticky ? "sticky top-0 z-50" : ""}>
      <div className='flex items-center justify-between bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 h-13 px-5 md:px-32'>
      <Logo />
  
  {/* Push NavBar to the right in desktop mode */}
  <div className="ml-auto hidden md:block">
    <NavBar />
  </div>

  {/* Hamburger Icon for Mobile */}
  <div className="md:hidden">
    <MobileNav />
  </div>
      </div>
    
    </header>
  );
};

export default Header;
