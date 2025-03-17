/**
 * Centralized style constants and utility functions for consistent styling
 * This file helps maintain a consistent design system across the application
 */

// Common component styles
export const STYLES = {
  // Layout
  container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  section: "py-12 md:py-16 lg:py-20",
  
  // Typography
  heading: {
    h1: "text-4xl md:text-5xl font-heading font-bold",
    h2: "text-3xl md:text-4xl font-heading font-bold",
    h3: "text-2xl md:text-3xl font-heading font-semibold",
    h4: "text-xl md:text-2xl font-heading font-semibold",
    h5: "text-lg md:text-xl font-heading font-medium",
    h6: "text-base md:text-lg font-heading font-medium",
  },
  
  // Text
  text: {
    body: "text-base text-gray-700",
    small: "text-sm text-gray-600",
    muted: "text-gray-500 text-sm",
  },
  
  // Buttons
  button: {
    primary: "bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded transition duration-200",
    secondary: "bg-secondary-500 hover:bg-secondary-600 text-white font-medium py-2 px-4 rounded transition duration-200",
    outline: "border border-primary-500 text-primary-500 hover:bg-primary-50 font-medium py-2 px-4 rounded transition duration-200",
    text: "text-primary-500 hover:text-primary-700 font-medium transition duration-200",
  },
  
  // Cards
  card: {
    base: "bg-white rounded-lg shadow-md overflow-hidden",
    hover: "transform hover:-translate-y-1 transition duration-200",
    interactive: "bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition duration-200 cursor-pointer",
  },
  
  // Forms
  form: {
    input: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent",
    label: "block text-sm font-medium text-gray-700 mb-1",
    error: "text-danger text-sm mt-1",
    select: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent",
    checkbox: "h-4 w-4 text-primary-500 focus:ring-primary-500 border-gray-300 rounded",
  },
  
  // Navigation
  nav: {
    link: "text-gray-700 hover:text-primary-500 transition duration-200",
    activeLink: "text-primary-500 font-medium",
    mobileMenu: "fixed inset-0 bg-gray-800 bg-opacity-75 z-50",
  },
  
  // Animations
  animation: {
    fadeIn: "animate-fade-in",
    slideIn: "animate-slide-in",
  },
  
  // Utilities
  divider: "border-t border-gray-200 my-6",
  badge: {
    primary: "bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full",
    secondary: "bg-secondary-100 text-secondary-800 text-xs px-2 py-1 rounded-full",
    success: "bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full",
    danger: "bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full",
    warning: "bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full",
    info: "bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full",
  },
};

/**
 * Combines multiple Tailwind classes and removes duplicates
 * @param {...string} classes - Tailwind classes to combine
 * @returns {string} - Combined class string
 */
export function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default STYLES; 