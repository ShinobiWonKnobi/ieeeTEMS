import React, { useEffect, useRef, useState, memo } from "react";
import { useApp } from "../context/AppContext";
import Button from "./Button";
import "./hero.css";
import "./components.css";

const Hero = () => {
  const { theme } = useApp();
  const parallaxRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!parallaxRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate mouse position as percentage
      const xPos = (clientX / innerWidth - 0.5) * 2; // -1 to 1
      const yPos = (clientY / innerHeight - 0.5) * 2; // -1 to 1
      
      // Apply parallax effect to different elements
      const glassPanel = parallaxRef.current.querySelector('.glass-panel');
      const heading = parallaxRef.current.querySelector('.hero-heading');
      
      if (glassPanel) {
        glassPanel.style.transform = `translate(${xPos * -15}px, ${yPos * -15}px)`;
      }
      
      if (heading) {
        heading.style.textShadow = `${xPos * 10}px ${yPos * 10}px 10px rgba(0,0,0,0.15)`;
      }
    };
    
    // Set loaded state for animations
    const loadingTimer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(loadingTimer);
    };
  }, []);
  
  return (
    <div 
      ref={parallaxRef}
      className={`hero-container ${theme === 'dark' ? 'bg-primary-500' : 'bg-light-100'}`}
      role="banner"
    >
      <TechLinesBackground theme={theme} />
      
      <div className="hero-overlay absolute inset-0 z-0">
        <div className={`absolute inset-0 bg-gradient-to-b ${theme === 'dark' ? 'from-primary-500/0 via-primary-500/20 to-primary-500' : 'from-light-100/0 via-light-100/20 to-light-100'}`}></div>
      </div>
      
      <div className="hero-content">
        <div className={`transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="hero-title">
            <span className={`inline-block text-accent-500 glow-accent animate-glow mb-2 ${loaded ? 'animate-reveal-text' : ''}`} style={{animationDelay: '0.2s'}}>We</span> 
            <span className={`inline-block text-secondary-500 ${loaded ? 'animate-reveal-text' : ''}`} style={{animationDelay: '0.5s'}}>Innovate</span>
          </h1>
          
          <p className={`hero-subtitle ${loaded ? 'animate-slide-up opacity-100' : 'opacity-0'}`}
            style={{animationDelay: '0.8s', transitionDelay: '0.8s'}}>
            IEEE Technology and Engineering Management Society (TEMS) - where technology meets innovation and leadership.
          </p>
          
          <div className={`mt-10 flex flex-wrap gap-4 ${loaded ? 'animate-slide-up opacity-100' : 'opacity-0'}`}
            style={{animationDelay: '1.1s', transitionDelay: '1.1s'}}>
            <Button variant="primary" size="md" withGlow elevate>Our Projects</Button>
            <Button variant="secondary" elevate>Join Our Team</Button>
          </div>
        </div>
        
        <div className={`glass-panel glass p-5 rounded-xl backdrop-blur w-72 absolute bottom-10 right-10 transition-all duration-700 transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
             aria-hidden="true">
          <div className="flex flex-col space-y-3">
            <div className="flex items-center space-x-4">
              <div className="h-2 w-2 bg-accent-500 rounded-full animate-pulse"></div>
              <span className="text-light-400 font-mono text-xs letter-spacing-wider">Innovation. Technology. Leadership.</span>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-light-500/20 to-transparent my-1"></div>
            <p className="text-light-500/90 text-xs font-sans leading-relaxed">
              Building the future through technological excellence and innovative management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Memoize the TechLinesBackground component to prevent unnecessary re-renders
const TechLinesBackground = memo(({ theme }) => {
  const bgRef = useRef(null);
  const [svgGenerated, setSvgGenerated] = useState(false);
  
  useEffect(() => {
    // Use a web worker or requestIdleCallback if available to avoid blocking the main thread
    const generateSVG = () => {
      if (typeof window === 'undefined' || !bgRef.current) return null;
      
      var maxwidth = window.innerWidth;
      var maxheight = 707;
      
      // Reduce the number of lines based on device performance
      const lineCount = window.matchMedia('(max-width: 768px)').matches ? 20 : 60;
      const fgLineCount = window.matchMedia('(max-width: 768px)').matches ? 15 : 40;
      
      let svg = `<svg width="100%" height="100%" viewBox="0 0 ${maxwidth} ${maxheight}" xmlns="http://www.w3.org/2000/svg">`;

      const getEdgePoint = () => {
        let edge = Math.floor(Math.random() * 4); // 0 = top, 1 = bottom, 2 = left, 3 = right
        switch (edge) {
          case 0:
            return { x: Math.random() * maxwidth, y: 0 }; // Top edge
          case 1:
            return { x: Math.random() * maxwidth, y: maxheight }; // Bottom edge
          case 2:
            return { x: 0, y: Math.random() * maxheight }; // Left edge
          case 3:
            return { x: maxwidth, y: Math.random() * maxheight }; // Right edge
          default:
            return { x: 0, y: 0 };
        }
      };

      // Create groups for foreground and background lines for parallax effect
      svg += `<g class="background-lines" style="opacity: 0.6">`;
      for (let i = 0; i < lineCount; i++) {
        let p1 = getEdgePoint();
        let p2 = getEdgePoint();
        
        // Use primary color for lines in light mode, light color for dark mode
        const strokeColor = theme === 'dark' ? 'rgba(224, 224, 224, 0.07)' : 'rgba(10, 25, 41, 0.07)';
        const highlightColor = theme === 'dark' ? 'rgba(0, 172, 193, 0.15)' : 'rgba(25, 118, 210, 0.15)';
        
        // Make some lines use accent color for visual interest
        const useHighlight = Math.random() > 0.85;
        const color = useHighlight ? highlightColor : strokeColor;

        svg += `<line x1="${p1.x}%" y1="${p1.y}%" x2="${p2.x}%" y2="${p2.y}%" 
              stroke="${color}" stroke-width="${useHighlight ? 1 : 0.7}" stroke-opacity="1"/>`;
      }
      svg += `</g>`;
      
      svg += `<g class="foreground-lines">`;
      for (let i = 0; i < fgLineCount; i++) {
        let p1 = getEdgePoint();
        let p2 = getEdgePoint();
        
        // Use primary color for lines in light mode, light color for dark mode
        const strokeColor = theme === 'dark' ? 'rgba(224, 224, 224, 0.15)' : 'rgba(10, 25, 41, 0.15)';
        const highlightColor = theme === 'dark' ? 'rgba(0, 172, 193, 0.4)' : 'rgba(25, 118, 210, 0.4)';
        
        // Make some lines use accent color for visual interest
        const useHighlight = Math.random() > 0.8;
        const color = useHighlight ? highlightColor : strokeColor;

        svg += `<line x1="${p1.x}%" y1="${p1.y}%" x2="${p2.x}%" y2="${p2.y}%" 
              stroke="${color}" stroke-width="${useHighlight ? 2 : 1.2}" stroke-opacity="1"/>`;
      }
      svg += `</g>`;

      svg += `</svg>`;
      
      // Apply the SVG to the background
      if (bgRef.current) {
        bgRef.current.style.backgroundImage = `url('data:image/svg+xml,${encodeURIComponent(svg)}')`;
        setSvgGenerated(true);
        
        // Apply subtle parallax effect to the background on scroll
        const handleScroll = () => {
          if (bgRef.current) {
            bgRef.current.style.backgroundPositionY = `${window.scrollY * 0.2}px`;
          }
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }
    };

    // Generate SVG only once after component is mounted
    if (!svgGenerated) {
      // Use requestIdleCallback for non-critical UI to avoid blocking rendering
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(generateSVG);
      } else {
        // Fallback to setTimeout for browsers that don't support requestIdleCallback
        setTimeout(generateSVG, 100);
      }
    }
  }, [theme, svgGenerated]);

  return <div ref={bgRef} className="absolute inset-0 z-0" aria-hidden="true" />;
});

TechLinesBackground.displayName = 'TechLinesBackground';

export default Hero;
