import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { classNames } from "../utils/styles";
import logo from '../assets/logos/tems.png';
import { useApp } from "../context/AppContext";
import './components.css';

const Navbar = () => {
  const { theme, toggleTheme } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const firstNavItemRef = useRef(null);
  
  // Close menu when location changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

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
  
  // Handle clicking outside to close menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target) && isOpen) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);
  
  // Handle escape key to close menu
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [isOpen]);

  // Focus management for accessibility
  useEffect(() => {
    if (isOpen && firstNavItemRef.current) {
      // When menu opens, focus the first nav item
      firstNavItemRef.current.focus();
    }
  }, [isOpen]);

  // Close mobile menu when clicking a link
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle link click - close menu and scroll to top
  const handleLinkClick = () => {
    closeMenu();
    // Check if window is defined (for SSR compatibility)
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header 
      ref={navRef}
      className={`navbar ${scrolled ? 'navbar-scrolled' : ''} ${theme === 'dark' ? 'bg-dark-800/95' : 'bg-light-100/95'}`}
    >
      <div className="navbar-container">
        {/* Brand/Logo */}
        <div className="navbar-brand">
          <Link 
            to="/" 
            onClick={handleLinkClick} 
            className="flex items-center" 
            aria-label="IEEE TEMS Home"
          >
            <img 
              src={logo} 
              alt="" 
              aria-hidden="true"
              className={`navbar-logo ${scrolled ? 'h-8' : 'h-10'}`}
            />
            <div className="ml-3">
              <span className={`block font-heading ${scrolled ? 'text-xl' : 'text-2xl'} ${theme === 'dark' ? 'text-light-500' : 'text-dark-500'}`}>
                IEEE TEMS
              </span>
              <span className={`block ${scrolled ? 'text-[10px]' : 'text-xs'} ${theme === 'dark' ? 'text-light-400' : 'text-dark-400'}`}>
                Technology & Engineering Management Society
              </span>
            </div>
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <button
          type="button"
          className="navbar-toggle"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="main-navigation"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <div className="w-6 h-5 relative">
            <span className={`absolute h-[2px] w-full rounded-md transition-all duration-300 ${theme === 'dark' ? 'bg-light-500' : 'bg-dark-500'} ${isOpen ? "top-2 rotate-45" : "top-0"}`}></span>
            <span className={`absolute h-[2px] w-full rounded-md top-2 transition-all duration-300 ${theme === 'dark' ? 'bg-light-500' : 'bg-dark-500'} ${isOpen ? "opacity-0 left-[-60px]" : "opacity-100 left-0"}`}></span>
            <span className={`absolute h-[2px] w-full rounded-md transition-all duration-300 ${theme === 'dark' ? 'bg-light-500' : 'bg-dark-500'} ${isOpen ? "top-2 -rotate-45" : "top-4"}`}></span>
          </div>
        </button>

        {/* Navigation Links */}
        <nav
          id="main-navigation"
          ref={menuRef}
          className={`navbar-menu ${isOpen ? 'navbar-mobile open' : ''}`}
          aria-label="Main navigation"
        >
          {isOpen && (
            <button 
              className="sr-only focus:not-sr-only absolute top-4 left-4 bg-primary-600 text-light-500 px-3 py-2 rounded"
              onClick={closeMenu}
            >
              Close menu
            </button>
          )}
          
          {navLinks.map((link, index) => (
            <NavLink 
              key={link.to}
              to={link.to} 
              onClick={handleLinkClick}
              ref={index === 0 ? firstNavItemRef : null}
              className={({ isActive }) => `navbar-link ${isActive ? 'navbar-link-active' : ''}`}
            >
              {link.label}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 transition-transform duration-300 origin-left bg-accent-500 group-hover:scale-x-100`}></span>
            </NavLink>
          ))}
          
          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme} 
            className={`ml-2 p-2 rounded-full transition-all duration-300 focus-ring ${
              theme === 'dark' 
                ? 'bg-dark-700 text-light-500 hover:bg-dark-600' 
                : 'bg-light-200 text-primary-500 hover:bg-light-300'
            }`}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

// Navigation links data
const navLinks = [
  { to: "/", label: "Home" },
  { to: "/events", label: "Events" },
  { to: "/team", label: "Our Team" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" }
];

export default Navbar;