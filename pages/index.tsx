import { useScroll, useTransform, motion } from 'framer-motion';
import Head from 'next/head';
import Cover from '../components/Cover';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

export default function Home() {

  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 0.33], [1, 2]);
  
  return (
    <>
      <Head>
        <title>Boilerplate</title>
        <meta name="description" content="Boilerplate for Laureat projects." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1C1C1C" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Cover blur color="#1C1C1C"/>
        <motion.div className={styles.main} style={{ scale }}>
          <h1 className='text-3xl font-bold underline'>
            SECTION ONE
          </h1>
        </motion.div>
        <div className={styles.main} style={{backgroundColor: 'none'}}>
          <h1 className={styles.title}>
            SECTION TWO
          </h1>
        </div>
        <div className={styles.main} style={{backgroundColor: 'none'}}>
          <h1 className={styles.title}>
            SECTION THREE
          </h1>
        </div>
        <Footer />
      </main>
    </>
  )
}
