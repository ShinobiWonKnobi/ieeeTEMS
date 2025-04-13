import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * This component will scroll the window to the top whenever the pathname changes
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Ensure window exists (for SSR compatibility)
    if (typeof window !== 'undefined') {
      // Scroll to top of the page on route change
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth' // Add smooth scrolling
      });
    }
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default ScrollToTop; 