import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

const About = () => {
  const [loaded, setLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const translateY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 500);
  }, []);
  
  const values = [
    {
      id: 1,
      title: "Innovation",
      description: "Embracing new ideas and approaches to solve complex challenges.",
      color: "primary",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Collaboration",
      description: "Working together across disciplines to achieve common goals.",
      color: "secondary",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Excellence",
      description: "Striving for the highest standards in all our endeavors.",
      color: "accent",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Integrity",
      description: "Maintaining ethical standards and transparency in all activities.",
      color: "primary",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];
  
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute top-0 left-0 w-full h-full grid-bg opacity-10 -z-10"></div>
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary-500/10 to-transparent -z-10"></div>
        
        <div className="container-custom">
    <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-heading mb-6 relative">
              About IEEE <span className="text-primary-500">TEMS</span>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500"></div>
            </h1>
            <p className="text-xl leading-relaxed opacity-80 mb-10">
              Advancing the theory and practice of technology and engineering management
              to enhance the leadership capabilities of technical professionals.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="py-20 relative" ref={sectionRef}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={loaded ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
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
              initial={{ opacity: 0, x: 50 }}
              animate={loaded ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="aspect-video rounded-lg overflow-hidden relative bg-primary-600/20">
                <div className="grid-bg absolute inset-0 opacity-30"></div>
                <div className="w-full h-full flex items-center justify-center">
                  <svg className="w-24 h-24 text-primary-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.325 3.05L8.667 20.432l1.932.518 4.658-17.382-1.932-.518zM7.612 18.36l1.36-1.448-.001-.019-5.094-4.78 4.79-5.105-1.361-1.369-6.16 6.563 6.466 6.157zM16.388 18.36l-1.36-1.448.001-.019 5.094-4.78-4.79-5.105 1.361-1.369 6.16 6.563-6.466 6.157z"/>
                  </svg>
                </div>
              </div>
              
              <div className="absolute -bottom-5 -right-5 w-36 h-36 bg-gradient-to-br from-accent-500/20 to-primary-500/20 rounded-lg z-0"></div>
              <div className="absolute -top-5 -left-5 w-24 h-24 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-lg z-0"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* What We Do Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-primary-500/5 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-heading mb-6">What We Do</h2>
            <p className="text-lg leading-relaxed opacity-80">
              Our society engages in a range of activities to support our members and advance the field of technology and engineering management.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
                title: "Events & Networking",
                description: "Organize workshops, conferences, and networking events that bring together professionals from diverse backgrounds."
              },
              {
                icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
                title: "Knowledge Sharing",
                description: "Provide access to cutting-edge research, industry best practices, and educational resources through publications and online platforms."
              },
              {
                icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
                title: "Professional Development",
                description: "Support career growth through mentorship programs, skill-building workshops, and certification opportunities."
              },
              {
                icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
                title: "Industry Partnerships",
                description: "Foster collaboration between academia and industry to address real-world challenges and promote innovation."
              },
              {
                icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
                title: "Next Generation Support",
                description: "Support student chapters and young professionals through mentorship, scholarships, and early career opportunities."
              },
              {
                icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
                title: "Leadership Development",
                description: "Promote leadership skills through specialized training programs, workshops, and experiential learning opportunities."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={loaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + (i * 0.1) }}
              >
                <Card className="h-full" elevation={2}>
                  <div className="text-primary-500 mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                  <p className="opacity-80">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-20 relative overflow-hidden">
        <motion.div 
          style={{ y: translateY }}
          className="container-custom"
        >
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-heading mb-6">Our Values</h2>
            <p className="text-lg leading-relaxed opacity-80">
              Our core values guide our actions and decisions as we work to fulfill our mission.
            </p>
            </div>
            
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={value.id}
                initial={{ opacity: 0, y: 30 }}
                animate={loaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className={`bg-gradient-to-br ${
                  value.color === 'primary' ? 'from-primary-500/10 to-primary-600/10 border-primary-500/20' :
                  value.color === 'secondary' ? 'from-secondary-500/10 to-secondary-600/10 border-secondary-500/20' :
                  'from-accent-500/10 to-accent-600/10 border-accent-500/20'
                } p-8 rounded-lg border backdrop-blur-sm`}
              >
                <div className={`text-${value.color === 'primary' ? 'primary' : value.color === 'secondary' ? 'secondary' : 'accent'}-500 mb-4`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-medium mb-3">{value.title}</h3>
                <p className="opacity-80">{value.description}</p>
              </motion.div>
            ))}
            </div>
        </motion.div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-500 text-light-500 relative overflow-hidden">
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
      </section>
      </div>
  );
};

export default About; 