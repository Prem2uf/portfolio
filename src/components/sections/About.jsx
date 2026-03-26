import React, { memo } from 'react';
import styles from './About.module.css';

const About = memo(function About() {
  const highlights = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
        </svg>
      ),
      title: 'Full-Stack Expertise',
      description: 'Building robust SaaS systems, multi-tenant applications, and scalable eCommerce platforms with Laravel and React.',
      accent: 'var(--accent-primary)'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
      ),
      title: 'Performance Focused',
      description: 'Improved system performance by 60% through optimized operations. Strong expertise in REST APIs, AWS, and advanced security.',
      accent: 'var(--accent-success)'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
        </svg>
      ),
      title: 'Scalable Architecture',
      description: 'Expert in creating seamless user experiences backed by powerful backend architectures and cloud infrastructure.',
      accent: 'var(--accent-warm)'
    }
  ];

  return (
    <div className={styles.about}>
      <div className={styles.header}>
        <span className={styles.sectionTag}>About Me</span>
        <h2 className={styles.title}>Crafting Digital Experiences</h2>
        <p className={styles.headerSub}>
          With experience in payment integrations, cloud infrastructure, and enterprise security, 
          I deliver end-to-end solutions that scale with your business.
        </p>
      </div>

      <div className={styles.grid}>
        {highlights.map((item, idx) => (
          <div key={idx} className={styles.card}>
            <div className={styles.cardIcon} style={{ '--card-accent': item.accent }}>
              {item.icon}
            </div>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardText}>{item.description}</p>
            <div className={styles.cardLine} style={{ background: item.accent }}></div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default About;