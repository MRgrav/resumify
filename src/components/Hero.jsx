import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import GetStarted from './elements/GetStarted';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Resume<span className="text-violet-500">Craft</span>
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-8 text-gray-300"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Create your professional resume in minutes
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <GetStarted />
        </motion.div>
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-gray-400 mb-4">Trusted by professionals from</p>
          <div className="flex justify-center space-x-8">
            {['Google', 'Amazon', 'Microsoft', 'Apple'].map((company, index) => (
              <motion.div 
                key={company}
                className="text-white opacity-50 hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 0.5 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

