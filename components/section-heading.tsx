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
      className="text-3xl sm:text-6xl mb-8 text-center font-[Borel] italic text-[#292929]"
      initial={{ opacity: 0, x: -100 }} 
      animate={controls}
      viewport={{once: true}}
    >
      {children}
    </motion.h2>
  );
};

export default SectionHeading;
