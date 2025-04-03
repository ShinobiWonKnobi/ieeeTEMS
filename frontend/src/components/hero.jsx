import React, { useEffect, useRef, useState } from "react";
import { useApp } from "../context/AppContext";
import Button from "./Button";
import "./hero.css";
import "./components.css";

const Hero = () => {
  const { theme } = useApp();
  // const parallaxRef = useRef(null); // Removed parallax ref
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    // Removed mouse move listener setup
    
    // Set loaded state for animations
    const loadingTimer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    
    return () => {
      // Removed mouse move listener cleanup
      clearTimeout(loadingTimer);
    };
  }, []);
  
  return (
    <div 
      // ref={parallaxRef} // Removed parallax ref
      // Apply a gradient background or prepare for an image
      className={`hero-container relative overflow-hidden ${theme === 'dark' ? 'bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500' : 'bg-gradient-to-br from-blue-100 via-blue-50 to-white'}`}
      role="banner"
      style={{ minHeight: '70vh' }} // Adjusted height example
    >
      {/* Removed TechLinesBackground component */}
      
      {/* Simplified Overlay - Optional */}
      {/* <div className="hero-overlay absolute inset-0 z-0">
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-black/10' : 'bg-white/10'}`}></div>
      </div> */}
      
      <div className="hero-content container-custom text-center relative z-20 pt-20 pb-20 md:pt-32 md:pb-32">
        <div className={`transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="hero-title font-sans text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white">
            <span className={`inline-block ${loaded ? 'animate-reveal-text' : ''}`} style={{animationDelay: '0.2s'}}>
              Lead the Future of Tech Management
            </span>
          </h1>
          
          <p className={`hero-subtitle max-w-3xl mx-auto text-lg md:text-xl ${theme === 'dark' ? 'text-light-400' : 'text-dark-300'} mb-10 ${loaded ? 'animate-slide-up opacity-100' : 'opacity-0'}`}
            style={{animationDelay: '0.8s', transitionDelay: '0.8s'}}>
            Join the IEEE Technology & Engineering Management Society student chapter at SRM. 
            Gain skills, build connections, and shape your future.
          </p>
          
          <div className={`flex flex-wrap justify-center gap-4 ${loaded ? 'animate-slide-up opacity-100' : 'opacity-0'}`}
            style={{animationDelay: '1.1s', transitionDelay: '1.1s'}}>
            <Button to="/events" variant="primary" size="lg" withGlow elevate>Explore Events</Button>
            <Button to="/team" variant="secondary" size="lg" elevate>Meet the Team</Button>
          </div>
        </div>
        
        {/* Removed glass panel */}
      </div>
    </div>
  );
};

// Removed TechLinesBackground Component definition

export default Hero;
