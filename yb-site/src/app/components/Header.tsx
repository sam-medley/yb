import React from 'react';
import VIDEOS from '../utils/constants';
import styles from '../styles/Home.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.videoContainer}>
        {VIDEOS.map((video: string, index: number) => (
          <div key={index} className={styles.videoColumn}>
            <video src={`/videos/${video}`} loop muted autoPlay />
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;