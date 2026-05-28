import React, { useState, useEffect, memo } from 'react';
import styles from './Navbar.module.css';
import { useTheme } from '../../utils/ThemeContext';
import logoAvatar from '../../assets/images/logo-avatar.png';

const Navbar = memo(function Navbar({ activeSection, onNavClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const sections = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section) => {
    onNavClick(section);
    setMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.navContent}>
          {/* Logo */}
          <div className={styles.logo} onClick={handleLogoClick}>
            <div className={styles.logoBadge}>
              <img
                src={logoAvatar}
                alt="Premchandra Yadav Logo"
                className={styles.logoImg}
              />
            </div>
            <div className={styles.logoText}>
              <span className={styles.logoName}>Premchandra</span>
              <span className={styles.logoRole}>Full-Stack Developer</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className={styles.desktopMenu}>
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleNavClick(section.id)}
                className={`${styles.navBtn} ${activeSection === section.id ? styles.active : ''}`}
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* Right Controls */}
          <div className={styles.rightControls}>
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={styles.themeToggle}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              <div className={styles.toggleTrack}>
                <span className={`${styles.toggleIcon} ${theme === 'dark' ? styles.iconActive : ''}`}>
                  {/* Moon icon */}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"/>
                  </svg>
                </span>
                <span className={`${styles.toggleIcon} ${theme === 'light' ? styles.iconActive : ''}`}>
                  {/* Sun icon */}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/>
                  </svg>
                </span>
                <div className={`${styles.toggleThumb} ${theme === 'light' ? styles.thumbLight : ''}`}></div>
              </div>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`${styles.mobileMenuBtn} ${mobileMenuOpen ? styles.menuOpen : ''}`}
              aria-label="Toggle menu"
            >
              <span className={styles.hamburger}>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => handleNavClick(section.id)}
              className={`${styles.mobileNavBtn} ${activeSection === section.id ? styles.activeMobile : ''}`}
              style={{ transitionDelay: mobileMenuOpen ? `${index * 50}ms` : '0ms' }}
            >
              <span className={styles.mobileNavText}>{section.label}</span>
              {activeSection === section.id && (
                <span className={styles.mobileActiveDot}></span>
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
});

export default Navbar;