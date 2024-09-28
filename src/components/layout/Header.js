"use client";
import Logo from './Logo';
import MobileNav from './MobileNav';
import NavBar from './NavBar';

const Header = () => {
  

  return (
    <header className="flex items-center justify-between bg-white shadow-md p-4 h-13 px-5 md:px-32">
      
      <Logo />
  
  {/* Push NavBar to the right in desktop mode */}
  <div className="ml-auto hidden md:block">
    <NavBar />
  </div>

  {/* Hamburger Icon for Mobile */}
  <div className="md:hidden">
    <MobileNav />
  </div>
    </header>
  );
};

export default Header;
