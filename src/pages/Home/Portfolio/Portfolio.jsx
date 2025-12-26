import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from './Portfolio.module.css';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';
import Hero from '../../../components/sections/Hero';
import About from '../../../components/sections/About';
import Skills from '../../../components/sections/Skills';
import Projects from '../../../components/sections/Projects';
import Achievements from '../../../components/sections/Achievements';
import Education from '../../../components/sections/Education';

// Throttle function for performance optimization
function throttle(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// RequestAnimationFrame based throttle for scroll
function rafThrottle(func) {
  let rafId = null;
  return function(...args) {
    if (rafId === null) {
      rafId = requestAnimationFrame(() => {
        func(...args);
        rafId = null;
      });
    }
  };
}

function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRefs = {
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    achievements: useRef(null),
    education: useRef(null)
  };

  // Optimized mouse move handler with throttling
  useEffect(() => {
    const handleMouseMove = throttle((e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }, 50); // Throttle to 50ms for smoother performance

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Optimized scroll spy with requestAnimationFrame throttling
  useEffect(() => {
    const handleScroll = rafThrottle(() => {
      const sections = ['about', 'skills', 'projects', 'achievements', 'education'];
      const scrollPosition = window.scrollY + 200; // Offset for navbar

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = sectionRefs[section]?.current;
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          if (scrollPosition >= elementTop - 100) {
            setActiveSection(prev => prev !== section ? section : prev);
            break;
          }
        }
      }
    });

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = useCallback((section) => {
    setActiveSection(section);
    const element = sectionRefs[section]?.current;
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }, []);

  return (
    <div className={styles.container}>
      {/* Animated Background */}
      <div className={styles.background}>
        <div className={styles.gradientBase}></div>
        <div 
          className={styles.mouseOrb}
          style={{ 
            left: `${mousePosition.x / 20}px`, 
            top: `${mousePosition.y / 20}px`
          }}
        ></div>
        <div className={styles.orb1}></div>
        <div className={styles.orb2}></div>
      </div>

      {/* Navbar - Outside content div to ensure fixed positioning works */}
      <Navbar activeSection={activeSection} onNavClick={handleNavClick} />
      
      {/* Content */}
      <div className={styles.content}>
        <Hero />
        
        <section className={styles.mainContent}>
          <div id="about" ref={sectionRefs.about} className={styles.section}>
            <About />
          </div>
          
          <div id="skills" ref={sectionRefs.skills} className={styles.section}>
            <Skills />
          </div>
          
          <div id="projects" ref={sectionRefs.projects} className={styles.section}>
            <Projects />
          </div>
          
          <div id="achievements" ref={sectionRefs.achievements} className={styles.section}>
            <Achievements />
          </div>
          
          <div id="education" ref={sectionRefs.education} className={styles.section}>
            <Education />
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default Portfolio;