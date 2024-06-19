import React from 'react';
import styles from '../styles/Home.module.css';
import { customerIcons } from '../utils/constants';

const TrustedBy: React.FC = () => {

    // Double the array for seamless effect
    const fullIconsArray = [...customerIcons, ...customerIcons];

    return (
        <div className={styles.trustedBy}>
            <div className={styles.textContainer}>
                <h2>Trusted by:</h2>
            </div>
            <div className={styles.carouselContainer}>
                <div className={styles.customerIcons}>
                    {fullIconsArray.map((icon, index) => (
                        <img key={index} src={icon} alt="Customer icon" className={styles.customerIcon} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TrustedBy;
