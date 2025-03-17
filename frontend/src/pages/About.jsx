import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div 
      className="min-h-screen pt-32 px-8 max-w-7xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-heading mb-8">About IEEE TEMS</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            The IEEE Technology and Engineering Management Society (TEMS) is dedicated to advancing the theory and practice 
            of technology and engineering management. We provide resources, networking opportunities, and educational 
            programs to help professionals excel in leadership roles within technology-driven organizations.
          </p>
          
          <h2 className="text-2xl font-bold mb-4">What We Do</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Organize workshops, conferences, and networking events</li>
            <li>Provide access to cutting-edge research and industry best practices</li>
            <li>Foster collaboration between academia and industry</li>
            <li>Support student chapters and young professionals</li>
            <li>Promote leadership development in technical fields</li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Values</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-2">Innovation</h3>
              <p className="text-gray-700">Embracing new ideas and approaches to solve complex challenges.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-2">Collaboration</h3>
              <p className="text-gray-700">Working together across disciplines to achieve common goals.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-2">Excellence</h3>
              <p className="text-gray-700">Striving for the highest standards in all our endeavors.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-2">Integrity</h3>
              <p className="text-gray-700">Maintaining ethical standards and transparency in all activities.</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About; 