import React, { memo } from 'react';
import styles from './Skills.module.css';
import { skills } from '../../utils/data';

const skillIcons = {
  backend: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
    </svg>
  ),
  frontend: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
    </svg>
  ),
  database: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
    </svg>
  ),
  cloud: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
    </svg>
  ),
  payments: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
    </svg>
  ),
  security: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  integrations: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
    </svg>
  ),
};

const skillColors = {
  backend: '#6c63ff',
  frontend: '#a78bfa',
  database: '#fbbf24',
  cloud: '#22d3ee',
  integrations: '#f97316',
  payments: '#34d399',
  security: '#f472b6',
};

const Skills = memo(function Skills() {
  return (
    <div className={styles.skills}>
      <div className={styles.header}>
        <span className={styles.sectionTag}>Technical Skills</span>
        <h2 className={styles.title}>My Tech Stack</h2>
      </div>

      <div className={styles.grid}>
        {Object.entries(skills).map(([category, data]) => (
          <div key={category} className={styles.card}>
            <div className={styles.cardHeader}>
              <div 
                className={styles.iconBox}
                style={{ '--skill-color': skillColors[category] }}
              >
                {skillIcons[category]}
              </div>
              <h3 className={styles.categoryTitle}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h3>
            </div>
            <div className={styles.skillsList}>
              {data.items.map((skill, idx) => (
                <span 
                  key={idx} 
                  className={styles.skillTag}
                  style={{ '--tag-color': skillColors[category] }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Skills;