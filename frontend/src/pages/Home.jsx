import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from '../components/hero';
import Card from '../components/Card';
import Button from '../components/Button';

// Animation Variants for sections (optional but cleaner)
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Animation Variants for staggered items (like cards)
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const Home = () => {
  const [loaded, setLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const translateY = useTransform(scrollYProgress, [0, 0.2, 0.4], [0, -50, -100]);
  
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  }, []);
  
  const features = [
    {
      id: 1,
      title: "Technical Workshops",
      subtitle: "Practical Knowledge",
      description: "Dive deep into cutting-edge technologies with expert-led workshops designed to enhance your skills.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.25 7C9.25 8.24264 8.24264 9.25 7 9.25C5.75736 9.25 4.75 8.24264 4.75 7C4.75 5.75736 5.75736 4.75 7 4.75C8.24264 4.75 9.25 5.75736 9.25 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6.75 9.5V14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10.75 12.25H15.25C16.3546 12.25 17.25 11.3546 17.25 10.25V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M19.25 7C19.25 8.24264 18.2426 9.25 17 9.25C15.7574 9.25 14.75 8.24264 14.75 7C14.75 5.75736 15.7574 4.75 17 4.75C18.2426 4.75 19.25 5.75736 19.25 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M17.25 19.25V14.75C17.25 13.6454 16.3546 12.75 15.25 12.75H8.75C7.64543 12.75 6.75 13.6454 6.75 14.75V19.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Leadership Training",
      subtitle: "Management Skills",
      description: "Develop essential management skills to lead technical teams effectively through our specialized training programs.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 15.2V16.8875C16 17.4651 16 17.7538 15.8365 17.9169C15.673 18.08 15.3842 18.08 14.8067 18.08H9.19333C8.61583 18.08 8.32708 18.08 8.16354 17.9169C8 17.7538 8 17.4651 8 16.8875V15.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18.5 8.5C18.5 12.2279 15.8137 15.2 12.5 15.2C9.18629 15.2 6.5 12.2279 6.5 8.5C6.5 4.77208 9.18629 1.8 12.5 1.8C15.8137 1.8 18.5 4.77208 18.5 8.5Z" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M12.5 15.2V18.08" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M12.5 22.2V18.08" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M10.39 18.08H14.61" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M10.39 22.2H14.61" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      id: 3,
      title: "Networking Events",
      subtitle: "Connect & Grow",
      description: "Build valuable professional connections through our carefully curated networking events and community meetups.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 20C18 16.6863 15.3137 14 12 14C8.68629 14 6 16.6863 6 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];
  
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Feature Section */}
      <motion.section 
        className="container-custom py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading mb-4">
            <span className="text-primary-500">Empowering</span> Engineering Leaders
          </h2>
          <p className="text-lg opacity-80 leading-relaxed">
            IEEE TEMS helps technology professionals develop the management skills needed to advance their careers and lead innovation.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {features.map((feature) => (
            <motion.div 
              key={feature.id}
              variants={itemVariants}
            >
              <Card 
                title={feature.title}
                subtitle={feature.subtitle}
                className="h-full"
                elevation={3}
                onClick={() => {}}
                fullHeight
              >
                <div className="flex flex-col h-full">
                  <div className="text-primary-500 mb-4">
                    {feature.icon}
                  </div>
                  <p className="text-base opacity-80 mb-6">{feature.description}</p>
                  <div className="mt-auto">
                    <Button variant="text" className="text-primary-500">
                      Learn more →
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
      
      {/* About Overview Section */}
      <motion.section 
        className="py-20 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="absolute inset-0 grid-bg opacity-10"></div>
        <div 
          className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-transparent"
        ></div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="aspect-video bg-primary-600/20 rounded-lg overflow-hidden">
                <div className="grid-bg absolute inset-0 opacity-20"></div>
                <div className="w-full h-full p-8 flex items-center justify-center">
                  <h3 className="text-4xl font-heading text-center">
                    <span className="text-secondary-500">IEEE</span>
                    <span className="text-accent-500 ml-2">TEMS</span>
                  </h3>
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-accent-500/20 rounded-lg z-0"></div>
              <div className="absolute -top-5 -left-5 w-16 h-16 bg-secondary-500/20 rounded-lg z-0"></div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-3xl md:text-4xl font-heading mb-6">
                About IEEE <span className="text-primary-500">TEMS</span>
              </h2>
              <p className="text-lg opacity-80 leading-relaxed mb-6">
                The IEEE Technology and Engineering Management Society (TEMS) provides professional resources, networking opportunities, 
                and educational programs to help technology professionals advance in their careers.
              </p>
              <p className="text-lg opacity-80 leading-relaxed mb-8">
                Our community bridges the gap between technical expertise and management skills, helping members 
                become more effective leaders in technology-driven organizations.
              </p>
              <Button variant="secondary" elevate>
                Learn More About Us
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Call to Action */}
      <motion.section 
        className="py-20 bg-primary-500 text-light-500 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="absolute inset-0 grid-bg opacity-10"></div>
        
        <div className="container-custom relative z-10">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-heading mb-6">
                Join Our <span className="text-secondary-500">Community</span>
              </h2>
              <p className="text-lg text-light-400 leading-relaxed mb-8">
                Connect with like-minded professionals, gain access to exclusive resources, and participate in events 
                that will help you grow both technically and professionally.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="secondary" size="lg" elevate>
                  Become a Member
                </Button>
                <Button variant="outline" className="border-light-500 text-light-500 hover:bg-light-500/10">
                  View Benefits
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <Card 
                className="bg-primary-600/50 backdrop-blur-sm border border-primary-400/20 text-light-500"
                contentPadding="lg"
              >
                <h3 className="text-xl font-heading mb-6">Upcoming Event</h3>
                <div className="mb-4 font-mono text-accent-500">AUGUST 15, 2023</div>
                <h4 className="text-2xl font-heading mb-4">Technical Leadership Workshop</h4>
                <p className="opacity-80 mb-6">
                  Join us for a hands-on workshop focused on developing key leadership skills for technical professionals.
                </p>
                <Button variant="accent" fullWidth>
                  Register Now
                </Button>
              </Card>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-accent-500/10 rounded-lg -z-10"></div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home; 