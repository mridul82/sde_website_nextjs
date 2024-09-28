import Link from "next/link"

const NavBar = () => {
  return (
    <div className='hidden md:flex w-[50%]'>
  {/* Navigation Links */}
  <nav className="md:flex md:flex-row md:items-center md:justify-end gap-6 font-bold text-lg text-gray-600 ">
    <Link href="/" className="text-gray-600 hover:text-primary flex gap-2">
      Home
    </Link>
    <Link href="/about" className="text-gray-600 hover:text-primary flex gap-2">
      About
    </Link>
    <Link href="/portfolio" className="text-gray-600 hover:text-primary flex gap-2">
      Portfolio
    </Link>
    <Link href="/menu" className="text-gray-600 hover:text-primary flex gap-2">
      Menu
    </Link>
    <Link href="/contact" className="text-gray-600 hover:text-primary flex gap-2">
      Contact
    </Link>
   
    
    <Link href="/login" className="bg-primary text-white ml-5 py-2 px-5 rounded-full outline transition-all hover:bg-white hover:shadow-lg hover:border-black hover:text-primary">
      Login
    </Link>
  </nav>
</div>

  )
}

export default NavBar
