import React from 'react';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { values, activities } from '../data/aboutData';
import IconRenderer from '../components/IconRenderer';

// Animation Variants (reuse from Events/Home or define here)
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

const About = () => {
  const sectionRef = useRef(null);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Section */}
      <motion.section 
        className="relative pt-32 pb-20"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute top-0 left-0 w-full h-full grid-bg opacity-10 -z-10"></div>
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary-500/10 to-transparent -z-10"></div>
        
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading mb-6 relative">
              About IEEE <span className="text-primary-500">TEMS</span>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500"></div>
            </h1>
            <p className="text-xl leading-relaxed opacity-80 mb-10">
              Advancing the theory and practice of technology and engineering management
              to enhance the leadership capabilities of technical professionals.
            </p>
          </div>
        </div>
      </motion.section>
      
      {/* Mission Section */}
      <section className="py-20 relative" ref={sectionRef}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" }} }}
            >
              <h2 className="text-3xl font-heading mb-6">Our Mission</h2>
              <p className="text-lg leading-relaxed opacity-80 mb-6">
            The IEEE Technology and Engineering Management Society (TEMS) is dedicated to advancing the theory and practice 
            of technology and engineering management. We provide resources, networking opportunities, and educational 
            programs to help professionals excel in leadership roles within technology-driven organizations.
          </p>
              <p className="text-lg leading-relaxed opacity-80 mb-8">
                Through our global network, we foster the exchange of knowledge, share best practices, and promote 
                continuous learning in the rapidly evolving fields of technology and engineering management.
              </p>
              
              <Button variant="primary" elevate>Join Our Mission</Button>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" }} }}
            >
              <div className="aspect-video rounded-lg overflow-hidden relative bg-primary-600/20 dark:bg-primary-700/30">
                <div className="grid-bg absolute inset-0 opacity-30"></div>
                <div className="w-full h-full flex items-center justify-center">
                  <svg className="w-24 h-24 text-primary-500 dark:text-primary-400" fill="currentColor" viewBox="0 0 24 24"><path d="M13.325 3.05L8.667 20.432l1.932.518 4.658-17.382-1.932-.518zM7.612 18.36l1.36-1.448-.001-.019-5.094-4.78 4.79-5.105-1.361-1.369-6.16 6.563 6.466 6.157zM16.388 18.36l-1.36-1.448.001-.019 5.094-4.78-4.79-5.105 1.361-1.369 6.16 6.563-6.466 6.157z"/></svg>
                </div>
              </div>
              
              <div className="absolute -bottom-5 -right-5 w-36 h-36 bg-gradient-to-br from-accent-500/20 to-primary-500/20 rounded-lg z-0"></div>
              <div className="absolute -top-5 -left-5 w-24 h-24 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-lg z-0"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* What We Do Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-primary-500/5 dark:to-primary-800/10 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <h2 className="text-3xl font-heading mb-6">What We Do</h2>
            <p className="text-lg leading-relaxed opacity-80">
              Our society engages in a range of activities to support our members and advance the field of technology and engineering management.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {activities.map((item, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card className="h-full dark:bg-dark-600 border border-transparent dark:border-dark-500" elevation={2}>
                  <div className="text-primary-500 dark:text-primary-400 mb-4">
                    <IconRenderer pathData={item.icon} className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-medium mb-3 text-dark-800 dark:text-light-200">{item.title}</h3>
                  <p className="opacity-80 dark:opacity-85 text-secondary-700 dark:text-light-400">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container-custom">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <h2 className="text-3xl font-heading mb-6">Our Values</h2>
            <p className="text-lg leading-relaxed opacity-80">
              Our core values guide our actions and decisions as we work to fulfill our mission.
            </p>
          </motion.div>
            
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {values.map((value) => (
              <motion.div 
                key={value.id}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.03, transition: { type: 'spring', stiffness: 300 } }}
                className={`bg-gradient-to-br p-8 rounded-lg border backdrop-blur-sm transition-colors duration-300 
                  ${ value.color === 'primary' 
                      ? 'from-primary-500/10 to-primary-600/10 border-primary-500/20 text-primary-700 dark:from-primary-600/10 dark:to-primary-700/10 dark:border-primary-500/30 dark:text-primary-300' 
                      : value.color === 'secondary' 
                        ? 'from-secondary-500/10 to-secondary-600/10 border-secondary-500/20 text-secondary-700 dark:from-secondary-600/10 dark:to-secondary-700/10 dark:border-secondary-500/30 dark:text-secondary-300' 
                        : 'from-accent-500/10 to-accent-600/10 border-accent-500/20 text-accent-700 dark:from-accent-600/10 dark:to-accent-700/10 dark:border-accent-500/30 dark:text-accent-300'
                  }`}
              >
                <div className={`mb-4 text-${value.color}-500 dark:text-${value.color}-400`}>
                   <IconRenderer pathData={value.icon} className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-medium mb-3 text-dark-800 dark:text-light-200">{value.title}</h3>
                <p className="opacity-80 dark:opacity-85 text-inherit">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <motion.section 
        className="py-16 bg-primary-500 text-light-500 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="absolute inset-0 grid-bg opacity-10"></div>
        
        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-heading mb-4">Ready to Join IEEE TEMS?</h2>
              <p className="text-light-400 max-w-2xl">
                Become a part of our global community of technology and engineering management professionals.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="secondary" size="lg" elevate>
                Become a Member
              </Button>
              <Button variant="outline" className="border-light-500 text-light-500 hover:bg-light-500/10">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About; 