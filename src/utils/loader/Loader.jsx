import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  const [text, setText] = useState('Dream Home');
  
  useEffect(() => {
    const interval = setInterval(() => {
      setText(prevText => {
        const shuffled = prevText.split('').sort(() => Math.random() - 0.5).join('');
        return shuffled;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-indigo-600 amt fs-1"
      >
        {text}
      </motion.div>
    </div>
  );
};

export default Loader;
