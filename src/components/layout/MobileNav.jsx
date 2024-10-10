import Link from "next/link";
import { useState } from "react";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <div className="md:hidden">
      <div className="flex flex-col gap-[4.5px] cursor-pointer" onClick={handleToggle}>
        <div className={`w-6 h-1 bg-primary rounded-sm ${isOpen ? 'rotate-45' : ''} origin-left ease-in-out duration-300`} />
        <div className={`w-6 h-1 bg-primary rounded-sm ${isOpen ? 'opacity-0' : ''}  ease-in-out duration-300`} />
        <div className={`w-6 h-1 bg-primary rounded-sm ${isOpen ? '-rotate-45' : ''} origin-left ease-in-out duration-300`} />
      </div>
      {isOpen && (
        <div className="absolute top-16 right-0 flex flex-col gap-4 bg-white p-8 shadow-md w-[250px] rounded-lg">
          <h2 className="text-2xl font-bold text-gray-600 mb-4">Menu</h2>
          <Link href="/" className="text-lg text-gray-600 hover:text-primary py-2">
            Home
          </Link>
          <Link href="/about" className="text-lg text-gray-600 hover:text-primary py-2">
            About
          </Link>
          <Link href="/contact" className="text-lg text-gray-600 hover:text-primary py-2">
            Contact
          </Link>
          <Link href="/menu" className="text-lg text-gray-600 hover:text-primary py-2">
            Menu
          </Link>
          <Link href="/login" className="bg-primary text-white rounded-full py-2 px-4 hover:bg-primary-dark mt-4">
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default MobileNav;