import React from 'react';
import { motion } from 'framer-motion';
import { BsArrowDown } from 'react-icons/bs';

const FloatingArrow = () => {
  const floatAnimation = {
    float: {
      y: ["0%", "60%", "0%"], // Define the floating motion range
      transition: {
        duration: 2,   // Duration of one cycle of motion
        ease: "easeInOut", // Smooth the motion transitions
        repeat: Infinity,  // Repeat the animation indefinitely
        repeatType: "loop" // Ensure the motion loops smoothly
      }
    }
  };

  return (
      <motion.div
        className="text-xl" // Increase the size of the arrow icon if needed
        variants={floatAnimation} // Pass the animation variants
        animate="float" // Activate the float animation
      >
         <BsArrowDown />
      </motion.div>
  );
};

export default FloatingArrow;
