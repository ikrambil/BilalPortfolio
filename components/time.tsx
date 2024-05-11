"use client"
import React, { useState, useEffect } from 'react';

const TorontoTime = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date().toLocaleTimeString('en-US', {
        timeZone: 'America/Toronto'
      });
      setTime(now);
    };

    const timerId = setInterval(updateClock, 1000);
    updateClock();  

    return () => clearInterval(timerId);  
  }, []);

  return <span>{time}</span>;
};

export default TorontoTime;
