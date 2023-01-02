import React from 'react';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import Backdrop from './Backdrop';

const Cover = ({...props}) => {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.33], [0, 1]);
  return (
    <div
      style={{
        display: 'flex',
        position: 'fixed',
        zIndex: -1,
        height: '100%',
        width: '100%'
      }}
    >
      <Backdrop 
        blur={props?.blur}
        color={props?.color} 
      />
      <Image
        //className={styles.logo}
        src="https://images.unsplash.com/photo-1583446696174-f91928d0d503?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80"
        alt="Next.js Logo"
        fill="cover"
        priority
      />
    </div>
  );
};

export default Cover;