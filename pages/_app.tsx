import { motion } from 'framer-motion';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
// import { Inter } from '@next/font/google';
import localFont from '@next/font/local';

/* DECLARE CUSTOM FONTS */
// const inter = Inter({ subsets: ['latin'] })
const customFont = localFont({ src: '../public/fonts/PPMonumentExtended-Black.woff2' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    /* USE CUSTOM FONTS */
    /* PAGE TRANSITIONS */
    <motion.div
      className={customFont.className}
      initial="pageInitial" 
      animate="pageAnimate" 
      variants={{
        pageInitial: {
          opacity: 0
        },
        pageAnimate: {
          opacity: 1
        },
    }}>
      <Component {...pageProps} />
    </motion.div>
  );
}
