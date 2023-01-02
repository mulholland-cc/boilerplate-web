import React,  { useState, useEffect } from 'react';
import { Cross, Cross as Hamburger } from 'hamburger-react';
import { motion } from 'framer-motion';

const Header = () => {

  const [isOpen, setOpen] = useState(false);

  return (
    <motion.nav 
      animate={{
        height: isOpen ? 200 : 64,
      }}
      className="backdrop-blur-lg bg-white/30"
      style={{
        position: 'fixed',
        zIndex: 3,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <p>Header</p>
      <Cross 
        size={20} 
        onToggle={()=>setOpen(!isOpen)}
      />
    </motion.nav>
  );
};

export default Header;