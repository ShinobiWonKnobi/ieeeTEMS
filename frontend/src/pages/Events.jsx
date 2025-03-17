import { motion } from 'framer-motion';

const Events = () => {
  return (
    <motion.div 
      className="min-h-screen pt-32 px-8 max-w-7xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-heading mb-8">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder for events */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="h-48 bg-primary"></div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Tech Workshop</h3>
            <p className="text-gray-600 mb-4">Join us for an exciting workshop on emerging technologies.</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">June 15, 2023</span>
              <button className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700 transition">Register</button>
            </div>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="h-48 bg-accent"></div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Leadership Summit</h3>
            <p className="text-gray-600 mb-4">Learn from industry leaders about management strategies.</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">July 10, 2023</span>
              <button className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700 transition">Register</button>
            </div>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="h-48 bg-secondary"></div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Networking Event</h3>
            <p className="text-gray-600 mb-4">Connect with professionals and expand your network.</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">August 5, 2023</span>
              <button className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700 transition">Register</button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Events; 