import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
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
    window.scrollTo(0, 0);
  };

  return (
    <header 
      ref={navRef}
      className={`navbar ${scrolled ? 'navbar-scrolled' : ''} ${
        theme === 'dark' 
          ? 'bg-dark-800/95' 
          : 'bg-white/95'
      }`}
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
            <div className={`${theme === 'light' ? 'bg-primary-50 p-1 rounded-md border border-primary-200' : ''}`}>
              <img 
                src={logo} 
                alt="" 
                aria-hidden="true"
                className="navbar-logo"
              />
            </div>
            <div className="ml-3">
              <span className={`block font-heading ${scrolled ? 'text-xl' : 'text-2xl'} ${
                theme === 'dark' ? 'text-light-100' : 'text-primary-600'
              }`}>
                IEEE TEMS
              </span>
              <span className={`block ${scrolled ? 'text-[10px]' : 'text-xs'} ${
                theme === 'dark' ? 'text-light-400' : 'text-dark-600'
              }`}>
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
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>

        {/* Navigation Links */}
        <nav
          id="main-navigation"
          ref={menuRef}
          className={`navbar-menu ${isOpen ? 'open' : ''}`}
          aria-label="Main navigation"
        >
          {isOpen && (
            <button 
              className="sr-only focus:not-sr-only absolute top-4 left-4 bg-primary-600 text-light-100 px-3 py-2 rounded"
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
              className={({ isActive }) => 
                `navbar-link ${isActive ? 'navbar-link-active' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          
          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme} 
            className={`navbar-link ml-4 p-2 rounded-full transition-colors duration-300 focus-ring ${
              theme === 'dark' 
                ? 'bg-dark-700 text-light-300 hover:text-accent-400' 
                : 'bg-light-200 text-primary-600 hover:text-primary-700'
            }`}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <FaMoon /> : <FaSun />}
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