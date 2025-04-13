import { motion } from 'framer-motion';
import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useSubmitContactForm } from '../hooks/useApi';

// Animation Variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const formItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: custom => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: custom * 0.1, ease: "easeOut" }
  })
};

const iconVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay: 0.2
    }
  },
  hover: { 
    scale: 1.1, 
    transition: { duration: 0.3 } 
  }
};

const Contact = () => {
  const { theme } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  
  const { mutate: submitContactForm, isLoading, isError, error } = useSubmitContactForm();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    submitContactForm(formData, {
      onSuccess: () => {
        setSubmitted(true);
        setMessage('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSubmitting(false);
      },
      onError: (err) => {
        setMessage(`Error submitting form: ${err.message || 'Please try again later'}`);
        setSubmitting(false);
      }
    });
  };
  
  return (
    <motion.div 
      className="min-h-screen pt-32 px-8 max-w-7xl mx-auto pb-16"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <h1 className="text-4xl font-heading mb-12 text-center">Contact Us</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`p-8 rounded-xl ${theme === 'light' ? 'bg-gradient-to-br from-light-100 to-light-200 shadow-lg' : 'bg-gradient-to-br from-dark-800 to-dark-700'}`}
        >
          <p className={`text-lg mb-8 ${theme === 'light' ? 'text-dark-700' : 'text-light-400'}`}>
            Have questions about IEEE TEMS or interested in joining our chapter? 
            We'd love to hear from you! Fill out the form and we'll get back to you as soon as possible.
          </p>
          
          <div className="space-y-6">
            <motion.div 
              className={`flex items-start space-x-4 ${theme === 'light' ? 'hover:bg-light-300/50' : 'hover:bg-dark-600/50'} p-3 rounded-lg transition-colors duration-300`}
              whileHover={{ x: 5 }}
            >
              <motion.div 
                className={`p-3 rounded-full text-white flex-shrink-0 ${theme === 'light' ? 'bg-primary-500 shadow-md shadow-primary-500/30' : 'bg-primary-600'}`}
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </motion.div>
              <div>
                <h3 className={`text-xl font-semibold ${theme === 'light' ? 'text-dark-800' : 'text-light-200'}`}>Email</h3>
                <a 
                  href="mailto:info@ieeetems.org" 
                  className={`${theme === 'light' ? 'text-primary-600 hover:text-primary-700' : 'text-light-400 hover:text-primary-300'} transition-colors`}
                >
                  info@ieeetems.org
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              className={`flex items-start space-x-4 ${theme === 'light' ? 'hover:bg-light-300/50' : 'hover:bg-dark-600/50'} p-3 rounded-lg transition-colors duration-300`}
              whileHover={{ x: 5 }}
            >
              <motion.div 
                className={`p-3 rounded-full text-white flex-shrink-0 ${theme === 'light' ? 'bg-primary-500 shadow-md shadow-primary-500/30' : 'bg-primary-600'}`}
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </motion.div>
              <div>
                <h3 className={`text-xl font-semibold ${theme === 'light' ? 'text-dark-800' : 'text-light-200'}`}>Location</h3>
                <p className={`${theme === 'light' ? 'text-dark-600' : 'text-light-400'}`}>
                  SRM Institute of Science and Technology<br />Kattankulathur, Chennai
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className={`flex items-start space-x-4 ${theme === 'light' ? 'hover:bg-light-300/50' : 'hover:bg-dark-600/50'} p-3 rounded-lg transition-colors duration-300`}
              whileHover={{ x: 5 }}
            >
              <motion.div 
                className={`p-3 rounded-full text-white flex-shrink-0 ${theme === 'light' ? 'bg-primary-500 shadow-md shadow-primary-500/30' : 'bg-primary-600'}`}
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.div>
              <div>
                <h3 className={`text-xl font-semibold ${theme === 'light' ? 'text-dark-800' : 'text-light-200'}`}>Meeting Hours</h3>
                <p className={`${theme === 'light' ? 'text-dark-600' : 'text-light-400'}`}>
                  Monday - Friday: 10:00 AM - 5:00 PM
                </p>
              </div>
            </motion.div>
          </div>
          
          <div className={`mt-10 pt-8 ${theme === 'light' ? 'border-t border-light-300' : 'border-t border-dark-700'}`}>
            <h3 className={`text-xl font-semibold mb-4 ${theme === 'light' ? 'text-dark-800' : 'text-light-200'}`}>Follow Us</h3>
            <div className="flex flex-wrap gap-4">
              <motion.a 
                href="#" 
                aria-label="Facebook" 
                className={`text-white p-3 rounded-full transition ${theme === 'light' ? 'bg-primary-500 hover:bg-primary-600 shadow-md shadow-primary-500/30' : 'bg-primary-600 hover:bg-primary-700'}`}
                whileHover={{ y: -3 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </motion.a>
              <motion.a 
                href="#" 
                aria-label="Twitter" 
                className={`text-white p-3 rounded-full transition ${theme === 'light' ? 'bg-primary-500 hover:bg-primary-600 shadow-md shadow-primary-500/30' : 'bg-primary-600 hover:bg-primary-700'}`}
                whileHover={{ y: -3 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </motion.a>
              <motion.a 
                href="#" 
                aria-label="LinkedIn" 
                className={`text-white p-3 rounded-full transition ${theme === 'light' ? 'bg-primary-500 hover:bg-primary-600 shadow-md shadow-primary-500/30' : 'bg-primary-600 hover:bg-primary-700'}`}
                whileHover={{ y: -3 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </motion.a>
              <motion.a 
                href="#" 
                aria-label="YouTube" 
                className={`text-white p-3 rounded-full transition ${theme === 'light' ? 'bg-primary-500 hover:bg-primary-600 shadow-md shadow-primary-500/30' : 'bg-primary-600 hover:bg-primary-700'}`}
                whileHover={{ y: -3 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm-1.41 15.06V10.06l5.88 3.5-5.88 3.5z" clipRule="evenodd" />
                </svg>
              </motion.a>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className={`p-8 rounded-xl ${
            theme === 'light' 
              ? 'bg-white shadow-xl border border-light-300/50' 
              : 'bg-dark-800 shadow-lg border border-dark-700'
          }`}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {submitted ? (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div 
                className={`
                  p-6 rounded-lg mb-8 flex flex-col items-center
                  ${theme === 'light' 
                    ? 'bg-green-50 text-green-800 border border-green-200' 
                    : 'bg-green-900/30 text-green-200 border border-green-700/50'
                  }
                `}
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  className={`w-16 h-16 mb-4 rounded-full flex items-center justify-center ${
                    theme === 'light' ? 'bg-green-100 text-green-600' : 'bg-green-800/50 text-green-300'
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                <p className="text-lg font-medium">{message}</p>
              </motion.div>
              <motion.button 
                onClick={() => setSubmitted(false)}
                className={`
                  px-6 py-3 rounded-lg transition-all font-medium
                  ${theme === 'light' 
                    ? 'bg-primary-500 text-white shadow-md shadow-primary-500/30 hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/40' 
                    : 'bg-primary-600 text-white hover:bg-primary-700'
                  }
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Another Message
              </motion.button>
            </motion.div>
          ) : (
            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-6"
              initial="hidden"
              animate="visible"
            >
              <motion.div
                variants={formItemVariants}
                custom={0} // Delay index
              >
                <label htmlFor="name" className={`block font-medium mb-2 ${theme === 'light' ? 'text-dark-700' : 'text-light-300'}`}>Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`
                    w-full px-4 py-3 rounded-lg transition-all duration-200
                    ${theme === 'light' 
                      ? 'border border-light-300 bg-light-50 text-dark-800 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 shadow-sm' 
                      : 'border border-dark-700 bg-dark-700 text-light-200 focus:ring-2 focus:ring-primary-400 focus:border-primary-400'
                    }
                  `}
                  placeholder="John Doe"
                />
              </motion.div>
              
              <motion.div
                variants={formItemVariants}
                custom={1} // Delay index
              >
                <label htmlFor="email" className={`block font-medium mb-2 ${theme === 'light' ? 'text-dark-700' : 'text-light-300'}`}>Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`
                    w-full px-4 py-3 rounded-lg transition-all duration-200
                    ${theme === 'light' 
                      ? 'border border-light-300 bg-light-50 text-dark-800 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 shadow-sm' 
                      : 'border border-dark-700 bg-dark-700 text-light-200 focus:ring-2 focus:ring-primary-400 focus:border-primary-400'
                    }
                  `}
                  placeholder="john@example.com"
                />
              </motion.div>
              
              <motion.div
                variants={formItemVariants}
                custom={2} // Delay index
              >
                <label htmlFor="subject" className={`block font-medium mb-2 ${theme === 'light' ? 'text-dark-700' : 'text-light-300'}`}>Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`
                    w-full px-4 py-3 rounded-lg transition-all duration-200
                    ${theme === 'light' 
                      ? 'border border-light-300 bg-light-50 text-dark-800 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 shadow-sm' 
                      : 'border border-dark-700 bg-dark-700 text-light-200 focus:ring-2 focus:ring-primary-400 focus:border-primary-400'
                    }
                  `}
                  placeholder="How can we help you?"
                />
              </motion.div>
              
              <motion.div
                variants={formItemVariants}
                custom={3} // Delay index
              >
                <label htmlFor="message" className={`block font-medium mb-2 ${theme === 'light' ? 'text-dark-700' : 'text-light-300'}`}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className={`
                    w-full px-4 py-3 rounded-lg transition-all duration-200
                    ${theme === 'light' 
                      ? 'border border-light-300 bg-light-50 text-dark-800 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 shadow-sm' 
                      : 'border border-dark-700 bg-dark-700 text-light-200 focus:ring-2 focus:ring-primary-400 focus:border-primary-400'
                    }
                  `}
                  placeholder="Your message here..."
                ></textarea>
              </motion.div>
              
              <motion.button
                type="submit"
                disabled={submitting}
                className={`
                  w-full py-3 px-6 rounded-lg font-medium transition-all duration-300
                  ${submitting 
                    ? 'bg-gray-400 dark:bg-dark-500 cursor-not-allowed text-white' 
                    : theme === 'light'
                      ? 'bg-primary-500 text-white hover:bg-primary-600 shadow-md shadow-primary-500/30 hover:shadow-lg hover:shadow-primary-500/40 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2' 
                      : 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-2 focus:ring-primary-500 focus:ring-offset-dark-800'
                  }
                `}
                variants={formItemVariants}
                custom={4} // Delay index
                whileHover={!submitting ? { scale: 1.02 } : {}}
                whileTap={!submitting ? { scale: 0.98 } : {}}
              >
                {submitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </motion.form>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact; 