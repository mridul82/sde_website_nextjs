import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/menu", label: "Menu" },
  { href: "/contact", label: "Contact" },
  { href: "/login", label: "Login", className: "bg-primary text-white ml-5 py-2 px-5 rounded-full outline transition-all hover:bg-white hover:shadow-lg hover:border-black hover:text-primary" },
];

const NavBar = () => {
  return (
    <div className="hidden md:flex w-[50%]">
      <nav className="md:flex md:flex-row md:items-center md:justify-end gap-6 font-bold text-lg text-gray-600">
        {navLinks.map((link, index) => (
          <Link key={index} href={link.href} className={`text-gray-600 hover:text-primary flex gap-2 ${link.className || ""}`}>
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default NavBar;