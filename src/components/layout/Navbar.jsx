import React, { useState, memo } from 'react';
import styles from './Navbar.module.css';

const Navbar = memo(function Navbar({ activeSection, onNavClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections = [
    { id: 'about', label: 'About', icon: '👤' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'projects', label: 'Projects', icon: '💼' },
    { id: 'achievements', label: 'Achievements', icon: '🏆' },
    { id: 'education', label: 'Education', icon: '🎓' }
  ];

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
            <div className={styles.logoContainer}>
              <div className={styles.logoIconWrapper}>
                <div className={styles.logoIcon}>
                  <div className={styles.logoBadge}>
                    <span className={styles.logoInitials}>PY</span>
                  </div>
                  <div className={styles.logoAccent}></div>
                </div>
              </div>
              <div className={styles.logoTextWrapper}>
                <span className={styles.logoName}>Premchandra</span>
                <span className={styles.logoSubtext}>FULL-STACK DEV</span>
              </div>
            </div>
          </div>
          
          <div className={styles.desktopMenu}>
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleNavClick(section.id)}
                className={`${styles.navBtn} ${activeSection === section.id ? styles.active : ''}`}
              >
                <span className={styles.navIcon}>{section.icon}</span>
                <span className={styles.navText}>{section.label}</span>
                {activeSection === section.id && (
                  <span className={styles.activeIndicator}></span>
                )}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`${styles.mobileMenuBtn} ${mobileMenuOpen ? styles.active : ''}`}
            aria-label="Toggle menu"
          >
            <span className={styles.hamburger}>
              <span className={styles.hamburgerLine}></span>
              <span className={styles.hamburgerLine}></span>
              <span className={styles.hamburgerLine}></span>
            </span>
          </button>
        </div>

        <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleNavClick(section.id)}
              className={`${styles.mobileNavBtn} ${activeSection === section.id ? styles.activeMobile : ''}`}
            >
              <span className={styles.mobileNavIcon}>{section.icon}</span>
              <span className={styles.mobileNavText}>{section.label}</span>
              {activeSection === section.id && (
                <span className={styles.mobileActiveIndicator}></span>
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
});

export default Navbar;