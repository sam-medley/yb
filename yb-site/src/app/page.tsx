import React from 'react';
import Header from './components/Header';
import VideoGrid from './components/VideoGrid';
import Footer from './components/Footer';
import styles from './styles/Home.module.css';

const Page: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.main}>
        <section className={styles.welcome}>
          <h1>Welcome to Reverb Films</h1>
          <p>Explore our collection of captivating video clips.</p>
        </section>
        <VideoGrid />
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
};

export default Page; // This is still needed for Next.js to properly render the page