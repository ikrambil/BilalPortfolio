"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const SVG_WIDTH = 300; // Circle width in pixels
const SVG_HEIGHT = 300; // Circle height in pixels
const ORIGSPEED = 20; // Original speed in both X and Y directions

const BackgroundAnimation: React.FC = () => {
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  const [speedX, setSpeedX] = useState<number>(ORIGSPEED);
  const [speedY, setSpeedY] = useState<number>(ORIGSPEED);

  const [x2, setX2] = useState<number>(500);
  const [y2, setY2] = useState<number>(500);
  const [speedX2, setSpeedX2] = useState<number>(-ORIGSPEED);
  const [speedY2, setSpeedY2] = useState<number>(-ORIGSPEED);

  const [isSafari, setIsSafari] = useState(false);

  // Reference to the container to get its dimensions for boundary checks
  const containerRef = useRef<HTMLDivElement>(null);

  // Detect Safari browser
  useEffect(() => {
    // This code now runs only on the client-side
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
}, []);

  // Update positions based on speed and current position
  const updatePosition = (
    currentX: number, currentY: number, 
    currentSpeedX: number, currentSpeedY: number, 
    setX: React.Dispatch<React.SetStateAction<number>>, 
    setY: React.Dispatch<React.SetStateAction<number>>, 
    setSpeedX: React.Dispatch<React.SetStateAction<number>>, 
    setSpeedY: React.Dispatch<React.SetStateAction<number>>
  ) => {
    const containerWidth = containerRef.current ? containerRef.current.offsetWidth : window.innerWidth;
    const containerHeight = containerRef.current ? containerRef.current.offsetHeight : window.innerHeight;

    let nextX = currentX + currentSpeedX;
    let nextY = currentY + currentSpeedY;

    if (nextX > containerWidth - 150 || nextX < -SVG_WIDTH) {
      setSpeedX(-currentSpeedX);
    }
    if (nextY > containerHeight - 150 || nextY < -SVG_HEIGHT) {
      setSpeedY(-currentSpeedY);
    }

    setX(nextX);
    setY(nextY);
  };

  useEffect(() => {
    // Run animations only if not Safari
    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      const intervalId = setInterval(() => {
        updatePosition(x, y, speedX, speedY, setX, setY, setSpeedX, setSpeedY);
        updatePosition(x2, y2, speedX2, speedY2, setX2, setY2, setSpeedX2, setSpeedY2);
      }, 25);
      return () => clearInterval(intervalId);
    }
  }, [x, y, speedX, speedY, x2, y2, speedX2, speedY2]);

  return (
    <div ref={containerRef} className="h-[95vh] w-full overflow-hidden relative -z-10 m-[2.5vh] !rounded-3xl"> 
      <motion.div
        animate={{ x, y }} // Apply animations conditionally
        className="circle bg-[#bb843d] absolute h-[70.25rem] w-[70.25rem] blur-[10rem] rounded-full -z-[100]"
      />
      <motion.div
        animate={{ x: x2, y: y2 }} // Apply animations conditionally
        className="circle bg-[#9c86a7] absolute h-[70.25rem] w-[70.25rem] blur-[10rem] rounded-full -z-[100]"
      />
    </div>
  );
};

export default BackgroundAnimation;
