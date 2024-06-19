import React from 'react';
import Header from './components/Header';
import VideoGrid from './components/VideoGrid';
import Footer from './components/Footer';
import styles from './styles/Home.module.css';
import TrustedBy from './components/TrustedBy';

const Page: React.FC = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <VideoGrid />
        <TrustedBy />
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
};

export default Page; // This is still needed for Next.js to properly render the page