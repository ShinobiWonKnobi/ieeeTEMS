import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import Button from '../components/Button';
import Card from '../components/Card';

const Events = () => {
  const [loaded, setLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const translateY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);
  
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 500);
  }, []);
  
  const upcomingEvents = [
    {
      id: 1,
      title: "Technical Leadership Workshop",
      description: "Join us for an interactive workshop focused on developing leadership skills for technical professionals.",
      date: "August 15, 2023",
      time: "10:00 AM - 2:00 PM",
      location: "Virtual Event",
      category: "Workshop",
      color: "primary"
    },
    {
      id: 2,
      title: "Innovation Summit 2023",
      description: "A premier event bringing together thought leaders to discuss the future of technology and engineering management.",
      date: "September 22, 2023",
      time: "9:00 AM - 5:00 PM",
      location: "Grand Convention Center, Chennai",
      category: "Conference",
      color: "secondary"
    },
    {
      id: 3,
      title: "Industry-Academia Networking",
      description: "Connect with professionals from both industry and academia to foster collaboration and knowledge exchange.",
      date: "October 10, 2023",
      time: "6:00 PM - 9:00 PM",
      location: "SRM Tech Park, Kattankulathur",
      category: "Networking",
      color: "accent"
    }
  ];
  
  const pastEvents = [
    {
      id: 4,
      title: "AI in Engineering Management",
      description: "An exploration of how artificial intelligence is transforming engineering management practices.",
      date: "July 5, 2023",
      category: "Webinar",
      color: "primary"
    },
    {
      id: 5,
      title: "Student Leadership Program",
      description: "A specialized program designed to develop leadership skills in engineering students.",
      date: "June 18, 2023",
      category: "Workshop",
      color: "secondary"
    },
    {
      id: 6,
      title: "Research Symposium",
      description: "Showcasing the latest research in technology and engineering management.",
      date: "May 27, 2023",
      category: "Symposium",
      color: "accent"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16">
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
              Our <span className="text-primary-500">Events</span>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500"></div>
            </h1>
            <p className="text-xl leading-relaxed opacity-80 mb-10">
              Join us for engaging events designed to enhance your knowledge, skills, and network in the field of 
              technology and engineering management.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Upcoming Events Section */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10"
          >
            <h2 className="text-3xl font-heading mb-2">Upcoming Events</h2>
            <div className="w-20 h-1 bg-primary-500 mb-6"></div>
            <p className="text-lg opacity-80 max-w-3xl">
              Register for our upcoming events and be part of an enriching experience focused on technology and engineering management.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div 
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                animate={loaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
              >
                <Card 
                  className="h-full relative overflow-hidden"
                  elevation={3}
                >
                  <div className={`absolute top-0 left-0 w-full h-2 bg-${event.color}-500`}></div>
                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full bg-${event.color}-500/10 text-${event.color}-500`}>
                      {event.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-medium mb-3">{event.title}</h3>
                  <p className="opacity-70 mb-6">{event.description}</p>
                  
                  <div className="flex flex-col space-y-3 mb-6">
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
          </div>
        </div>
      </section>
      
      {/* Calendar CTA Section */}
      <section className="py-16 bg-primary-500 text-light-500 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-10"></div>
        
        <motion.div 
          style={{ y: translateY }}
          className="container-custom relative z-10"
        >
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
        </motion.div>
      </section>
      
      {/* Past Events Section */}
      <section className="py-16 bg-gradient-to-b from-transparent to-primary-500/5">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-10"
          >
            <h2 className="text-3xl font-heading mb-2">Past Events</h2>
            <div className="w-20 h-1 bg-secondary-500 mb-6"></div>
            <p className="text-lg opacity-80 max-w-3xl">
              Browse through our past events to see what you've missed and get a glimpse of what to expect at future events.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <motion.div 
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                animate={loaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                className={`relative border border-${event.color}-500/20 rounded-md p-6 bg-${event.color}-500/5`}
              >
                <div className="mb-3">
                  <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full bg-${event.color}-500/10 text-${event.color}-500`}>
                    {event.category}
                  </span>
                </div>
                <h3 className="text-xl font-medium mb-2">{event.title}</h3>
                <p className="opacity-70 mb-4 text-sm">{event.description}</p>
                <div className="flex items-center text-sm opacity-60">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <span>{event.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="border-primary-500 text-primary-500 hover:bg-primary-500/10">
              View All Past Events →
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events; 