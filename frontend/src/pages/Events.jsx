import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import { upcomingEvents, pastEvents } from '../data/eventsData.js';

// Animation Variants (can be shared across pages or defined here)
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const Events = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Section */}
      <motion.section 
        className="relative pt-32 pb-16"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute top-0 left-0 w-full h-full grid-bg opacity-10 -z-10"></div>
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary-500/10 to-transparent -z-10"></div>
        
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading mb-6 relative">
              Our <span className="text-primary-500">Events</span>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500"></div>
            </h1>
            <p className="text-xl leading-relaxed opacity-80 mb-10">
              Join us for engaging events designed to enhance your knowledge, skills, and network in the field of 
              technology and engineering management.
            </p>
          </div>
        </div>
      </motion.section>
      
      {/* Upcoming Events Section */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div 
            className="mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <h2 className="text-3xl font-heading mb-2">Upcoming Events</h2>
            <div className="w-20 h-1 bg-primary-500 mb-6"></div>
            <p className="text-lg opacity-80 max-w-3xl">
              Register for our upcoming events and be part of an enriching experience focused on technology and engineering management.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {upcomingEvents.map((event) => (
              <motion.div 
                key={event.id}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card 
                  className="h-full relative overflow-hidden dark:bg-dark-600 border border-transparent dark:border-dark-500"
                  elevation={3}
                >
                  <div className={`absolute top-0 left-0 w-full h-2 bg-${event.color}-500 dark:bg-${event.color}-400`}></div>
                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full bg-${event.color}-500/10 text-${event.color}-600 dark:bg-${event.color}-400/10 dark:text-${event.color}-300`}>
                      {event.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-medium mb-3 text-dark-800 dark:text-light-200">{event.title}</h3>
                  <p className="opacity-70 dark:opacity-80 mb-6 text-secondary-700 dark:text-light-400">{event.description}</p>
                  <div className="flex flex-col space-y-3 mb-6 text-sm text-secondary-700 dark:text-light-400">
                    <div className="flex items-center text-sm">
                      <svg className="w-4 h-4 mr-2 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      <span>{event.date}</span>
                    </div>
                    
                    <div className="flex items-center text-sm">
                      <svg className="w-4 h-4 mr-2 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span>{event.time}</span>
                    </div>
                    
                    <div className="flex items-center text-sm">
                      <svg className="w-4 h-4 mr-2 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <Button
                      variant={event.color}
                      fullWidth
                      elevate
                    >
                      Register Now
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Calendar CTA Section */}
      <motion.section 
        className="py-16 bg-primary-500 text-light-500 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-heading mb-4">Stay Updated with Our Events</h2>
              <p className="text-light-400 max-w-2xl">
                Subscribe to our calendar to receive notifications about upcoming events and never miss an opportunity to learn and grow.
              </p>
            </div>
            
            <div>
              <Button variant="secondary" size="lg" elevate className="whitespace-nowrap">
                Add to Calendar
              </Button>
            </div>
          </div>
        </div>
      </motion.section>
      
      {/* Past Events Section */}
      <section className="py-16 bg-gradient-to-b from-transparent to-primary-500/5 dark:to-primary-800/10">
        <div className="container-custom">
          <motion.div 
             className="mb-10"
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.2 }}
             variants={sectionVariants}
           >
            <h2 className="text-3xl font-heading mb-2">Past Events</h2>
            <div className="w-20 h-1 bg-secondary-500 mb-6"></div>
            <p className="text-lg opacity-80 max-w-3xl">
              Browse through our past events to see what you've missed and get a glimpse of what to expect at future events.
            </p>
           </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {pastEvents.map((event) => (
              <motion.div 
                key={event.id}
                variants={itemVariants}
                className={`relative border border-${event.color}-500/20 dark:border-${event.color}-400/30 rounded-md p-6 bg-${event.color}-500/5 dark:bg-${event.color}-500/10`}
              >
                <div className="mb-3">
                  <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full bg-${event.color}-500/10 text-${event.color}-600 dark:bg-${event.color}-400/10 dark:text-${event.color}-300`}>
                    {event.category}
                  </span>
                </div>
                <h3 className="text-xl font-medium mb-2 text-dark-700 dark:text-light-300">{event.title}</h3>
                <p className="opacity-70 dark:opacity-80 mb-4 text-sm text-secondary-700 dark:text-light-400">{event.description}</p>
                <div className="flex items-center text-sm opacity-60 dark:opacity-70 text-secondary-600 dark:text-light-500">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <span>{event.date}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.5 }}
          >
            <Button variant="outline" className="border-primary-500 text-primary-500 hover:bg-primary-500/10 dark:border-primary-400 dark:text-primary-300 dark:hover:bg-primary-400/10">
              View All Past Events →
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Events; 