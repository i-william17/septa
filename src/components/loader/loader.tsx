'use client';

import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import animationData from '../../../public/Animation - 1749808124529.json';
import { motion } from 'framer-motion';

const Loader = ({ isLoading }) => {
  const [shouldRender, setShouldRender] = useState(isLoading);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setShouldRender(true);
      setAnimationComplete(false);
    } else {
      // Wait for fade-out animation to complete before unmounting
      const timer = setTimeout(() => setShouldRender(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!shouldRender) return null;

  return (
    <div className={`
      fixed inset-0 z-50 flex items-center justify-center 
      bg-white bg-opacity-90 backdrop-blur-sm
      transition-all duration-500 ease-in-out
      ${isLoading ? 'opacity-100' : 'opacity-0'}
    `}>
      <div className="w-64 h-64 flex flex-col items-center">
        <Lottie 
          animationData={animationData}
          loop={true}
          autoplay={true}
          onComplete={() => setAnimationComplete(true)}
          rendererSettings={{
            preserveAspectRatio: 'xMidYMid slice'
          }}
          className={`transition-transform duration-300 ${animationComplete ? 'scale-105' : 'scale-100'}`}
        />
        <motion.p 
          className="text-center mt-4 text-gray-600 font-medium"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Loading SeptaGreen...
        </motion.p>
        
        {/* Loading progress indicator */}
        <div className="w-full bg-gray-200 rounded-full h-1.5 mt-6 max-w-xs">
          <div 
            className="bg-gradient-to-r from-[#00B51D] to-[#3B82F6] h-1.5 rounded-full" 
            style={{
              width: `${animationComplete ? '100%' : '60%'}`,
              transition: 'width 1s ease-in-out'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;