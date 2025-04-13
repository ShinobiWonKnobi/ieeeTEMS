import Navbar from '../components/Navbar';
import Notifications from '../components/Notifications';
import { Outlet, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { useEffect, useState } from 'react';

const MainLayout = () => {
  const { theme } = useApp();
  const [pageLoaded, setPageLoaded] = useState(false);
  
  // Apply theme class to the html and body elements
  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
  }, [theme]);
  
  // Add page transition effect
  useEffect(() => {
    setPageLoaded(true);
    
    return () => setPageLoaded(false);
  }, []);
  
  return (
    <div 
      className={`min-h-screen transition-colors duration-300 ${pageLoaded ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Skip to content link for accessibility */}
      <a 
        href="#main-content" 
        className="skip-to-content"
      >
        Skip to content
      </a>
      
      <Navbar />
      <Notifications />
      
      <main id="main-content" className="container-custom pt-24 pb-16 min-h-[calc(100vh-350px)]">
        <Outlet />
      </main>
      
      <footer className={`footer py-12 ${theme === 'dark' ? 'bg-dark-800 text-light-300' : 'bg-light-200 text-dark-800 border-t border-light-300'}`}>
        {/* Footer decorative top border */}
        <div className={`footer-decor ${theme === 'light' ? 'bg-gradient-to-r from-primary-400 to-primary-600' : ''}`}></div>
        
        {/* Footer grid pattern background */}
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none"></div>
        
        <div className="container-custom relative z-10">
          <div className="footer-grid">
            <div className="lg:col-span-1">
              <h3 className={`footer-title ${theme === 'light' ? 'text-dark-800' : 'text-light-100'}`}>IEEE TEMS</h3>
              <p className={`footer-text mb-4 ${theme === 'light' ? 'text-dark-700' : 'text-light-400'}`}>
                Technology & Engineering Management Society
              </p>
              <p className={`footer-text max-w-md ${theme === 'light' ? 'text-dark-600' : 'text-light-400'}`}>
                Advancing the theory and practice of technology and engineering management.
              </p>
            </div>
            
            <div className="lg:col-span-1">
              <h3 className={`footer-title ${theme === 'light' ? 'text-dark-800' : 'text-light-100'}`}>Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { to: "/", label: "Home" },
                  { to: "/events", label: "Events" },
                  { to: "/team", label: "Our Team" },
                  { to: "/about", label: "About Us" },
                  { to: "/contact", label: "Contact" }
                ].map((link) => (
                  <li key={link.to}>
                    <Link 
                      to={link.to} 
                      className={`footer-link group flex items-center ${theme === 'light' ? 'text-dark-700 hover:text-primary-600' : 'text-light-400 hover:text-primary-400'}`}
                    >
                      <span className={`inline-block w-0 group-hover:w-3 h-px mr-2 transition-all duration-300 ${theme === 'light' ? 'bg-primary-500' : 'bg-accent-500'}`}></span>
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:col-span-1">
              <h3 className={`footer-title ${theme === 'light' ? 'text-dark-800' : 'text-light-100'}`}>Contact Us</h3>
              <address className="not-italic">
                <p className={`footer-text mb-3 flex items-start ${theme === 'light' ? 'text-dark-700' : 'text-light-400'}`}>
                  <svg className={`w-5 h-5 mr-3 mt-0.5 ${theme === 'light' ? 'text-primary-500' : 'text-accent-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span>SRM Institute of Science and Technology<br />Kattankulathur, Chennai</span>
                </p>
                <p className={`footer-text mb-3 flex items-center ${theme === 'light' ? 'text-dark-700' : 'text-light-400'}`}>
                  <svg className={`w-5 h-5 mr-3 ${theme === 'light' ? 'text-primary-500' : 'text-accent-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span>info@ieeetems.org</span>
                </p>
              </address>
            </div>
            
            <div className="lg:col-span-1">
              <h3 className={`footer-title ${theme === 'light' ? 'text-dark-800' : 'text-light-100'}`}>Follow Us</h3>
              <div className="footer-social">
                <a href="https://facebook.com/ieeetems" target="_blank" rel="noopener noreferrer" className={`footer-social-link ${theme === 'light' ? 'bg-light-300 text-dark-700 hover:bg-primary-500 hover:text-light-100' : ''}`}>
                  <span className="sr-only">Facebook</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://twitter.com/ieeetems" target="_blank" rel="noopener noreferrer" className={`footer-social-link ${theme === 'light' ? 'bg-light-300 text-dark-700 hover:bg-primary-500 hover:text-light-100' : ''}`}>
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="https://youtube.com/ieeetems" target="_blank" rel="noopener noreferrer" className={`footer-social-link ${theme === 'light' ? 'bg-light-300 text-dark-700 hover:bg-primary-500 hover:text-light-100' : ''}`}>
                  <span className="sr-only">YouTube</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/ieee-tems/" target="_blank" rel="noopener noreferrer" className={`footer-social-link ${theme === 'light' ? 'bg-light-300 text-dark-700 hover:bg-primary-500 hover:text-light-100' : ''}`}>
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
              
              <div className="mt-8">
                <h4 className={`font-medium mb-3 ${theme === 'light' ? 'text-dark-800' : 'text-light-100'}`}>Join our newsletter</h4>
                <div className="flex max-w-md">
                  <label htmlFor="newsletter-email" className="sr-only">Your email</label>
                  <input 
                    id="newsletter-email"
                    type="email" 
                    placeholder="Your email" 
                    className={`py-2 px-4 rounded-l-md border-0 focus:ring-2 focus:outline-none w-full ${
                      theme === 'light' 
                        ? 'bg-light-100 text-dark-800 border border-light-300 focus:ring-primary-500' 
                        : 'bg-dark-700/50 text-light-500 focus:ring-accent-500'
                    }`}
                    aria-required="true"
                  />
                  <button 
                    className={`font-medium py-2 px-4 rounded-r-md transition-colors duration-300 ${
                      theme === 'light'
                        ? 'bg-primary-500 hover:bg-primary-600 text-light-100'
                        : 'bg-accent-500 hover:bg-accent-600 text-light-500'
                    }`}
                    aria-label="Subscribe to newsletter"  
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p className={theme === 'light' ? 'text-dark-700' : ''}>&copy; {new Date().getFullYear()} IEEE TEMS. All rights reserved.</p>
            <div className="mt-4 sm:mt-0 text-sm">
              <a href="/privacy" className={`mr-4 transition-colors duration-300 ${
                theme === 'light' ? 'text-dark-600 hover:text-primary-600' : 'text-light-600 hover:text-accent-500'
              }`}>Privacy Policy</a>
              <a href="/terms" className={`transition-colors duration-300 ${
                theme === 'light' ? 'text-dark-600 hover:text-primary-600' : 'text-light-600 hover:text-accent-500'
              }`}>Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout; 