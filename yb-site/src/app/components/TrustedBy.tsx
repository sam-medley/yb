import React from 'react';
import styles from '../styles/Home.module.css';
import customerIcons from '../utils/constants';

const TrustedBy: React.FC = () => {
    return (
        <div className={styles.trustedBy}>
            <h2>Trusted by</h2>
            <div className={styles.customerIcons}>
                {customerIcons.map((icon, index) => (
                    <img key={index} src={icon} alt="Customer icon" />
                ))}
            </div>
        </div>
    );
}

export default TrustedBy;