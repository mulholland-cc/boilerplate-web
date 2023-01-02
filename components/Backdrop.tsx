import React from 'react';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';



const Backdrop = ({...props}) => {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.33], [0, 0.8]);
  return (
    <div
      //className="backdrop-blur-sm bg-white/30"
      style={{
        display: 'flex',
        position: 'fixed',
        zIndex: 1,
        height: '100%',
        width: '100%',
      }}
    >
      <motion.div 
        style={{ 
          display: 'flex',
          height: '100%',
          width: '100%',
          position: 'absolute',
          zIndex: 2,
          backgroundColor: props?.color,
          opacity,
        }}
      />
    </div>
  );
};

export default Backdrop;