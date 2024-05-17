"use client";
import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';

const offset = -150;
const BackgroundAnimation: React.FC = () => {
  const [circlePath1, setCirclePath1] = useState<{ x: number; y: number }[]>([]);
  const [circlePath2, setCirclePath2] = useState<{ x: number; y: number }[]>([]);

  useEffect(()=> {
    const path1 = [
      { x: offset, y: offset },                                       
      { x: 3*window.innerWidth/4 + offset, y: window.innerHeight + offset }, 
      { x: window.innerWidth + offset, y: window.innerHeight* 3/4 + offset },                
      { x: window.innerWidth/2 + offset, y: offset },                
      { x: window.innerWidth* 1/4 + offset, y: window.innerHeight + offset },                
      { x: offset, y: offset }                                       
    ];
  
    const path2 = [
      { x: 0, y: window.innerHeight + offset },               // Bottom left
      { x: window.innerWidth + offset, y: offset },                // Top right
      { x: window.innerWidth*1/2 + offset, y: offset },
      { x: window.innerWidth*1/4 + offset, y: window.innerHeight + offset },
      { x: offset, y: offset }, 
      { x: window.innerWidth + offset, y: window.innerHeight * 1/2 + offset }, // Bottom right
      { x: 0, y: window.innerHeight + offset },                   // Back to bottom left
    ];
    setCirclePath1(path1);
    setCirclePath2(path2);
  }, [])
  

  const transitionSettings = {
    duration: 7.5,
    repeat: Infinity,
    ease: "linear"
  };
  const transitionSettings2 = {
    duration: 10,
    repeat: Infinity,
    ease: "linear"
  };

  return (
    <div className="h-[95vh] w-full overflow-hidden relative -z-10 m-[2.5vh] !rounded-3xl">
      <motion.div
        animate={{
          x: circlePath1.map(point => point.x),
          y: circlePath1.map(point => point.y)
        }}
        transition={transitionSettings}
        className="circle bg-[#bb843d] absolute h-[35.25rem] w-[30.25rem] sm:h-[70.25rem] sm:w-[70.25rem] blur-[10rem] rounded-full -z-[100] -top-40 -left-40"
      />
      <motion.div
        animate={{
          x: circlePath2.map(point => point.x),
          y: circlePath2.map(point => point.y)
        }}
        transition={transitionSettings2}
        className="circle bg-[#9c86a7] absolute h-[70.25rem] w-[70.25rem] blur-[10rem] rounded-full -z-[100] -top-40 -left-40"
      />
    </div>
  );
};

export default BackgroundAnimation;
