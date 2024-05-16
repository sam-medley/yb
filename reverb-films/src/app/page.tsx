import React from 'react';
import Header from './components/Header';
import VideoGrid from './components/VideoGrid';
import Footer from './components/Footer';
import styles from './styles/Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <section className={styles.welcome}>
          <h1>Welcome to Reverb Films</h1>
          <p>Explore our collection of captivating video clips.</p>
        </section>
        <VideoGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Home;