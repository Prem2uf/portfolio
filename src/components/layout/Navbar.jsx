import React, { useState } from 'react';
import styles from './Navbar.module.css';

function Navbar({ activeSection, onNavClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections = ['about', 'skills', 'projects', 'achievements', 'education'];

  const handleNavClick = (section) => {
    onNavClick(section);
    setMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.navContent}>
          <div className={styles.logo} onClick={handleLogoClick}>
            <div className={styles.logoIcon}>
              <span className={styles.logoInitials}>PY</span>
              <div className={styles.logoGlow}></div>
            </div>
          </div>
          
          <div className={styles.desktopMenu}>
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className={`${styles.navBtn} ${activeSection === section ? styles.active : ''}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={styles.mobileMenuBtn}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className={styles.mobileMenu}>
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className={`${styles.mobileNavBtn} ${activeSection === section ? styles.activeMobile : ''}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;