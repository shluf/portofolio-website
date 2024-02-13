import React from 'react';
import { motion } from 'framer-motion';

const ScrollDeltaIndicator = ({ scrollDelta }) => {
  const maxScrollDelta = 2100; // You can adjust this value based on your needs

  const indicatorWidth = (scrollDelta / maxScrollDelta) * 100;

  const containerStyle = {
    position: 'fixed',
    bottom: '20px',
    'border-radius': '3px',
    height: '150px',
    width: '10px', // Adjust the height as needed
    background: 'rgb(8,3,93)',
    background: 'linear-gradient(180deg, rgba(245,245,245,0.7) 0%, rgba(255,255,255,0.1) 70%, rgba(255,255,255,0) 100%)',
    overflow: 'hidden',
  };

  const barStyle = {
    height: `${indicatorWidth}%`,
    width: '100%',
    background: 'linear-gradient(180deg, rgba(245,245,245,1) 0%, rgba(255,255,255,0.5) 80%, rgba(255,255,255,0) 100%)', // Adjust the bar color
  };

  return (
    <motion.div style={containerStyle}>
      <motion.div style={barStyle}></motion.div>
    </motion.div>
  );
};

export default ScrollDeltaIndicator;