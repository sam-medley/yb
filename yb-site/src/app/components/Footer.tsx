import React from 'react';
import styles from '../styles/Home.module.css';

const Footer: React.FC = () => {

  return (
    <footer className={styles.footer}>
      <div className={styles.TextContainer}>
        <div className={styles.verticalText}>
          <p>INSERT YOUR TEXT HERE</p>
        </div>
        <div className={styles.verticalText2}>
          <p>INSERT YOUR TEXT HERE</p>
        </div>
        <div className={styles.imageContainer}>
          <img src="/path/to/your/image.jpg" alt="Insert Image" />
        </div>
      </div>
      <div className={styles.diagonalText}>
        <p>Unlock digital rarity.<br />Own NFT<br />masterpieces.</p>
        <p className={styles.bodyText}>This is a smaller body paragraph.</p>
      </div>
    </footer>
  );
};

export default Footer;
