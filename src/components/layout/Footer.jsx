import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          © 2025 Premchandra Yadav • Full-Stack Developer
        </p>
        <p className={styles.built}>
          Built with React • Designed with passion and precision
        </p>
        <div className={styles.location}>
          <span>📍 East Champaran, Bihar, India</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;