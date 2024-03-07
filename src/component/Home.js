import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; 
import backgroundImage from '../assets/bg.jpeg'; 

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      transition={{ duration: 0.5 }} 
      className="flex flex-col justify-center min-h-screen bg-center bg-no-repeat bg-cover"
      style={{ 
        backgroundImage: `url(${backgroundImage})`, 
      }}
    >
      <div className="text-white">
        <div className="container mx-auto">
          <motion.h1 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 text-4xl font-bold text-center"
          >
            COFFEESITE
            
          </motion.h1>
          <div className="flex justify-center mb-8">
            <motion.div 
              initial={{ scale: 0 }} 
              animate={{ scale: 1 }} 
              transition={{ duration: 0.5, delay: 0.4 }} 
            >
              <Link 
                to="/HotCoffee" 
                className="px-4 py-2 mr-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-600"
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }} 
              >
                Home
              </Link>
            </motion.div>
            <motion.div 
              initial={{ scale: 0 }} 
              animate={{ scale: 1 }} 
              transition={{ duration: 0.5, delay: 0.4 }} 
            >
              <Link 
                to="/ContactUs" 
                className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-600"
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }} 
              >
                Contact
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
