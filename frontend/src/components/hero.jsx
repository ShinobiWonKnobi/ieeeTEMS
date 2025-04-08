import React, { useEffect, useRef, useState } from "react";
import { useApp } from "../context/AppContext";
import Button from "./Button";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import "./hero.css";
import "./components.css";

// Variants for staggered word animation
const headlineVariants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 + i * 0.05 },
  }),
};

const wordVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: { type: "spring", damping: 12, stiffness: 200 },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 12, stiffness: 200 },
  },
};

const Hero = () => {
  const { theme } = useApp();
  const [loaded, setLoaded] = useState(false);
  const heroRef = useRef(null);

  // --- Parallax and Interaction Setup ---
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });

  // Base background parallax (mainbg.jpeg)
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]); // Moves up slower

  // Mid-layer parallax (techyforeground.jpeg)
  const techY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]); // Moves up faster than base

  // Foreground elements parallax
  const rhombusY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const rhombusX = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const sparkY = useTransform(scrollYProgress, [0, 1], ["0%", "120%"]);
  const sparkRotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY, currentTarget } = event;
      if (!currentTarget) return;
      const { left, top, width, height } = currentTarget.getBoundingClientRect();
      // Normalize mouse position relative to the hero container (-1 to 1)
      const x = (clientX - left - width / 2) / (width / 2);
      const y = (clientY - top - height / 2) / (height / 2);
      mouseX.set(x);
      mouseY.set(y);
    };
    const currentRef = heroRef.current;
    currentRef?.addEventListener("mousemove", handleMouseMove);
    return () => currentRef?.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Apply spring physics for subtle mouse parallax on foreground elements
  const springConfig = { damping: 30, stiffness: 100 };
  const elementMouseX = useSpring(useTransform(mouseX, [-1, 1], [-25, 25]), springConfig); // Max 25px shift
  const elementMouseY = useSpring(useTransform(mouseY, [-1, 1], [-25, 25]), springConfig);

  // --- Loading state ---
  useEffect(() => {
    const loadingTimer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(loadingTimer);
  }, []);

  const headlineText = "Lead the Future of Tech Management";

  return (
    <div
      ref={heroRef}
      className={`hero-container relative overflow-hidden ${theme === 'dark' ? 'dark' : ''}`}
      role="banner"
      style={{ minHeight: '85vh' }} // Adjusted height slightly
    >
      {/* Base Layer (mainbg.jpeg with Parallax) */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/hero/mainbg.jpeg')`,
          y: backgroundY,
        }}
      />

      {/* Mid Layer (techyforeground.jpeg with Parallax) */}
      <motion.div
        className="absolute inset-0 z-10 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay dark:mix-blend-lighten dark:opacity-30" // Blend mode for effect
        style={{
          backgroundImage: `url('/images/hero/techyforeground.jpeg')`,
          y: techY,
        }}
        aria-hidden="true"
      />

      {/* Foreground Decorative Elements Layer (Reacting to Scroll & Mouse) */}
      <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none" aria-hidden="true">
         {/* Rhombus Element */}
         <motion.img
           src="/images/hero/rhombus.png"
           alt=""
           className="absolute top-[10%] left-[5%] w-[10vw] max-w-[120px] opacity-60 dark:opacity-40" // Example position & size
           style={{
             y: rhombusY, // Scroll parallax Y
             x: rhombusX, // Scroll parallax X
             translateX: elementMouseX, // Mouse parallax X (subtle opposite)
             translateY: elementMouseY, // Mouse parallax Y (subtle opposite)
           }}
         />
         {/* Spark Element */}
         <motion.img
           src="/images/hero/spark.png"
           alt=""
           className="absolute bottom-[15%] right-[8%] w-[8vw] max-w-[90px] opacity-70 dark:opacity-50" // Example position & size
           style={{
             y: sparkY, // Scroll parallax Y
             rotate: sparkRotate, // Scroll parallax Rotation
             translateX: useTransform(elementMouseX, v => v * -0.8), // Mouse parallax X (slightly different rate)
             translateY: useTransform(elementMouseY, v => v * -0.8), // Mouse parallax Y (slightly different rate)
           }}
         />
         {/* Add more decorative elements here if needed */}
      </div>

      {/* Optional Overlay for Contrast */}
      <div className="absolute inset-0 z-30 bg-gradient-to-b from-black/5 via-black/20 to-black/40 dark:from-black/10 dark:via-black/30 dark:to-black/60"></div>

      {/* Content Layer */}
      <div className="hero-content container-custom text-center relative z-40 flex flex-col justify-center items-center" style={{ minHeight: 'inherit' }}>
         <motion.div
           initial="hidden"
           animate={loaded ? "visible" : "hidden"}
           className="w-full"
         >
           <motion.h1
             className="hero-title font-sans text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white drop-shadow-md" // Added drop shadow for contrast
             variants={headlineVariants}
             initial="hidden"
             animate={loaded ? "visible" : "hidden"}
           >
             {headlineText.split(" ").map((word, i) => (
               <motion.span key={i} className="inline-block mr-[0.25em]" variants={wordVariants}>{word}</motion.span>
             ))}
           </motion.h1>
           <motion.p
             className={`hero-subtitle max-w-3xl mx-auto text-lg md:text-xl text-gray-100 dark:text-gray-200 drop-shadow mb-10`}
             initial={{ opacity: 0, y: 10 }}
             animate={loaded ? { opacity: 1, y: 0 } : {}}
             transition={{ duration: 0.5, delay: 0.8 }} // Delay after headline
           >
             Join the IEEE Technology & Engineering Management Society student chapter at SRM.
             Gain skills, build connections, and shape your future.
           </motion.p>
           <motion.div
             className={`flex flex-wrap justify-center gap-4`}
             initial={{ opacity: 0, y: 10 }}
             animate={loaded ? { opacity: 1, y: 0 } : {}}
             transition={{ duration: 0.5, delay: 1.0 }} // Delay after subtitle
           >
             <Button to="/events" variant="primary" size="lg" withGlow elevate>Explore Events</Button>
             <Button to="/team" variant="secondary" size="lg" elevate>Meet the Team</Button>
           </motion.div>
         </motion.div>
      </div>
    </div>
  );
};

export default Hero;
