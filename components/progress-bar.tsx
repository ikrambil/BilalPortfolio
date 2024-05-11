"use client"
import React, { useEffect, useState } from 'react';

const ProgressBar: React.FC = () => {
  const [progressHeight, setProgressHeight] = useState(0);

  const handleScroll = () => {
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    setProgressHeight(progress);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="z-[999]" id="progressBarContainer" style={{height: '100vh', opacity: 1}}>
      <div id="progressBar" style={{ height: `${progressHeight}%` }} />
    </div>
  );
};

export default ProgressBar;
