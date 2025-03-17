import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { classNames } from "../utils/styles";
import logo from '../assets/logos/tems.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={classNames(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      scrolled 
        ? "bg-black bg-opacity-95 h-[70px] shadow-lg" 
        : "bg-black h-[80px]"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Brand/Logo */}
        <div className="flex items-center">
          <Link to="/" onClick={closeMenu} className="flex items-center">
            <img 
              src={logo} 
              alt="IEEE TEMS Logo" 
              className={classNames(
                "transition-all duration-300",
                scrolled ? "w-[70px]" : "w-[80px]"
              )} 
            />
            <div className="ml-2">
              <span className={classNames(
                "block font-bold text-white transition-all duration-300",
                scrolled ? "text-xl" : "text-2xl"
              )}>
                IEEE TEMS
              </span>
              <span className={classNames(
                "block text-white transition-all duration-300",
                scrolled ? "text-[11px]" : "text-xs"
              )}>
                Technology & Engineering Management Society
              </span>
            </div>
          </Link>
        </div>

        {/* Hamburger Menu */}
        <div 
          className="lg:hidden cursor-pointer z-[1001]" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-7 h-5 relative">
            <span className={classNames(
              "absolute h-[3px] w-full bg-white rounded-md transition-all duration-300",
              isOpen ? "top-2 rotate-45" : "top-0"
            )}></span>
            <span className={classNames(
              "absolute h-[3px] w-full bg-white rounded-md top-2 transition-all duration-300",
              isOpen ? "opacity-0 left-[-60px]" : "opacity-100 left-0"
            )}></span>
            <span className={classNames(
              "absolute h-[3px] w-full bg-white rounded-md transition-all duration-300",
              isOpen ? "top-2 -rotate-45" : "top-4"
            )}></span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className={classNames(
          "lg:flex items-center gap-8",
          "transition-all duration-500",
          isOpen 
            ? "fixed top-0 right-0 w-[250px] h-screen bg-black bg-opacity-95 flex flex-col justify-center items-center gap-8 p-8" 
            : "hidden lg:flex lg:items-center lg:static lg:h-auto lg:w-auto lg:bg-transparent lg:p-0",
          isOpen ? "right-0" : "right-[-100%]"
        )}>
          <NavLink 
            to="/" 
            onClick={closeMenu} 
            className={({ isActive }) => classNames(
              "text-white hover:text-primary-300 transition-colors duration-300 py-2 px-3",
              isActive ? "font-medium text-primary-300 relative after:content-[''] after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-primary-300" : ""
            )}
          >
            Home
          </NavLink>
          <NavLink 
            to="/events" 
            onClick={closeMenu} 
            className={({ isActive }) => classNames(
              "text-white hover:text-primary-300 transition-colors duration-300 py-2 px-3",
              isActive ? "font-medium text-primary-300 relative after:content-[''] after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-primary-300" : ""
            )}
          >
            Events
          </NavLink>
          <NavLink 
            to="/team" 
            onClick={closeMenu} 
            className={({ isActive }) => classNames(
              "text-white hover:text-primary-300 transition-colors duration-300 py-2 px-3",
              isActive ? "font-medium text-primary-300 relative after:content-[''] after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-primary-300" : ""
            )}
          >
            Our Team
          </NavLink>
          <NavLink 
            to="/about" 
            onClick={closeMenu} 
            className={({ isActive }) => classNames(
              "text-white hover:text-primary-300 transition-colors duration-300 py-2 px-3",
              isActive ? "font-medium text-primary-300 relative after:content-[''] after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-primary-300" : ""
            )}
          >
            About Us
          </NavLink>
          <NavLink 
            to="/contact" 
            onClick={closeMenu} 
            className={({ isActive }) => classNames(
              "text-white hover:text-primary-300 transition-colors duration-300 py-2 px-3",
              isActive ? "font-medium text-primary-300 relative after:content-[''] after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-primary-300" : ""
            )}
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;