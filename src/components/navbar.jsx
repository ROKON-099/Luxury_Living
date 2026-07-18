import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiBars3, HiXMark } from "react-icons/hi2";
import logo from "../assets/svg/logo.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Admin", path: "/admin" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#f6f6f6] ">
      <div className="max-w-7xl mx-auto px-5">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">

            <img
              src={logo}
              alt="Luxury Living Logo"
              className="w-10 h-10 object-contain"
            />

            <div>
              <h2 className="text-lg font-bold text-[#251d58]">
                LUXURY
              </h2>

              <h1 className="text-sm uppercase tracking-[6px] text-gray">
                Living
              </h1>
            </div>

          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden lg:flex items-center gap-8">

            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#251d58] font-semibold border-b-2 border-blue-600 pb-1"
                    : "text-gray-700 hover:text-amber-600 transition duration-300"
                }
              >
                {link.name}
              </NavLink>
            ))}

          </nav>

          {/* Login Button */}
          <div className="hidden lg:block">
            <Link
              to="/login"
              className="bg-[#251d58] hover:bg-amber-700 text-white px-8 py-3 rounded-xs transition duration-300"
            >
              Login
            </Link>
          </div>

          {/* Hamburger Button */}
          <button
            className="lg:hidden text-3xl text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiXMark /> : <HiBars3 />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="bg-white border-t border-gray-200 shadow-md">

          <div className="flex flex-col px-5 py-4 space-y-4">

            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-amber-600 font-semibold"
                    : "text-gray-700 hover:text-amber-600"
                }
              >
                {link.name}
              </NavLink>
            ))}

            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="mt-2 bg-amber-600 hover:bg-amber-700 text-white text-center py-3 rounded-md transition duration-300"
            >
              Login
            </Link>

          </div>

        </nav>
      </div>
    </header>
  );
};

export default Navbar;
