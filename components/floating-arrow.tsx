import React from 'react';
import { motion, Variants } from 'framer-motion';
import { BsArrowDown } from 'react-icons/bs';

const FloatingArrow = () => {
  const floatAnimation: Variants = {
    float: {
      y: ["0%", "60%", "0%"], 
      transition: {
        duration: 2,   
        ease: "easeInOut", 
        repeat: Infinity,  
        repeatType: "loop" as "loop" 
      }
    }
  };

  return (
      <motion.div
        className="text-xl" 
        variants={floatAnimation}
        animate="float"
      >
         <BsArrowDown />
      </motion.div>
  );
};

export default FloatingArrow;
