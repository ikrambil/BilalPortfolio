"use client";
import React from "react";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";

type SectionHeadingProps = {
  children: React.ReactNode;
};

const SectionHeading: React.FC<SectionHeadingProps> = ({ children }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.5, 
    triggerOnce: true
    
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: "easeOut" }  
      });
    } else {
      controls.start({
        opacity: 0,
        x: -100,  
        transition: { duration: 0.5, ease: "easeOut" }
      });
    }
  }, [controls, inView]);

  return (
    <motion.h2
      ref={ref}
      className="text-6xl mb-8 text-center font-[Borel] italic text-[#292929] three-d"
      initial={{ opacity: 0, x: -100 }} 
      animate={controls}
      viewport={{once: true}}
    >
      <div>{children} </div>
    </motion.h2>
  );
};

export default SectionHeading;
