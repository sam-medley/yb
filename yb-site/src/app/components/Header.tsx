import React from 'react';
import VIDEOS from '../utils/constants';
import styles from '../styles/Home.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1>yb-crew</h1>
    </header>
  );
};

export default Header;