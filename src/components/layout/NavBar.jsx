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
    <Link href="/contact" className="text-gray-600 hover:text-primary flex gap-2">
      Contact
    </Link>
    <Link href="/menu" className="text-gray-600 hover:text-primary flex gap-2">
      Menu
    </Link>
    <Link href="/login" className="bg-primary text-white rounded-full py-1 px-4 hover:bg-white hover:border-primary hover:text-primary">
      Login
    </Link>
  </nav>
</div>

  )
}

export default NavBar
