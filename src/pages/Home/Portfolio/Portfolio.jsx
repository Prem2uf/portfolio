import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from './Portfolio.module.css';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';
import Hero from '../../../components/sections/Hero';
import About from '../../../components/sections/About';
import Experience from '../../../components/sections/Experience';
import Skills from '../../../components/sections/Skills';
import Projects from '../../../components/sections/Projects';
import Achievements from '../../../components/sections/Achievements';
import Education from '../../../components/sections/Education';
import Contact from '../../../components/sections/Contact';

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
    experience: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    achievements: useRef(null),
    education: useRef(null),
    contact: useRef(null)
  };

  useEffect(() => {
    const handleMouseMove = throttle((e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }, 50);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = rafThrottle(() => {
      const sections = ['about', 'experience', 'skills', 'projects', 'achievements', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

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
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = useCallback((section) => {
    setActiveSection(section);
    const element = sectionRefs[section]?.current;
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }, []);

  return (
    <div className={styles.container} itemScope itemType="https://schema.org/ProfilePage">
      {/* Animated Background */}
      <div className={styles.background} aria-hidden="true">
        <div className={styles.gradientBase}></div>
        <div className={styles.meshGrid}></div>
        <div 
          className={styles.mouseOrb}
          style={{ 
            left: `${mousePosition.x / 15}px`, 
            top: `${mousePosition.y / 15}px`
          }}
        ></div>
        <div className={styles.orb1}></div>
        <div className={styles.orb2}></div>
        <div className={styles.noiseOverlay}></div>
      </div>

      <Navbar activeSection={activeSection} onNavClick={handleNavClick} />
      
      <main className={styles.content} role="main">
        <header>
          <Hero />
        </header>
        
        <div className={styles.mainContent}>
          <section id="about" ref={sectionRefs.about} className={styles.section} aria-label="About Premchandra Yadav">
            <About />
          </section>

          <section id="experience" ref={sectionRefs.experience} className={styles.section} aria-label="Work Experience">
            <Experience />
          </section>
          
          <section id="skills" ref={sectionRefs.skills} className={styles.section} aria-label="Technical Skills">
            <Skills />
          </section>
          
          <section id="projects" ref={sectionRefs.projects} className={styles.section} aria-label="Projects Portfolio">
            <Projects />
          </section>
          
          <section id="achievements" ref={sectionRefs.achievements} className={styles.section} aria-label="Professional Achievements">
            <Achievements />
          </section>
          
          <section id="education" ref={sectionRefs.education} className={styles.section} aria-label="Education Background">
            <Education />
          </section>

          <section id="contact" ref={sectionRefs.contact} className={styles.section} aria-label="Contact Information">
            <Contact />
          </section>
        </div>

        <Footer />
      </main>
    </div>
  );
}

export default Portfolio;