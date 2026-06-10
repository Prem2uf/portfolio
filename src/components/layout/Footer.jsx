import React, { memo } from 'react';
import styles from './Footer.module.css';
import profileImage from '../../assets/images/profile.png';

const Footer = memo(function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logoBadge}>
              <img 
                src={profileImage} 
                alt="Premchandra Yadav - Web Developer" 
                className={styles.logoImg}
              />
            </div>
            <div>
              <p className={styles.brandName}>Premchandra Yadav</p>
              <p className={styles.brandRole}>Full-Stack Developer</p>
            </div>
          </div>
          <div className={styles.location}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            <span>Noida, Uttar Pradesh, India</span>
          </div>
        </div>
        
        <div className={styles.divider}></div>
        
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Premchandra Yadav. All rights reserved.
          </p>
          <p className={styles.built}>
            Built with <span className={styles.accent}>React</span> • Designed with precision
          </p>
        </div>
      </div>
    </footer>
  );
});

export default Footer;