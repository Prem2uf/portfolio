import React, { memo } from 'react';
import styles from './Experience.module.css';
import { experience } from '../../utils/data';

const Experience = memo(function Experience() {
  return (
    <div className={styles.experience}>
      <div className={styles.header}>
        <span className={styles.sectionTag}>Work Experience</span>
        <h2 className={styles.title}>Professional Journey</h2>
      </div>

      <div className={styles.list}>
        {experience.map((exp, idx) => (
          <div key={idx} className={styles.card}>
            {/* Card Header */}
            <div className={styles.cardTop}>
              <div className={styles.companyInfo}>
                <div className={styles.companyIcon}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                </div>
                <div>
                  <h3 className={styles.companyName}>{exp.company}</h3>
                  <p className={styles.role}>{exp.role}</p>
                </div>
              </div>
              <div className={styles.badges}>
                <span className={styles.durationBadge}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  {exp.duration}
                </span>
                <span className={styles.typeBadge}>{exp.type}</span>
              </div>
            </div>

            <p className={styles.description}>{exp.description}</p>

            {/* Highlights */}
            <div className={styles.highlights}>
              {exp.highlights.map((item, i) => (
                <div key={i} className={styles.highlightItem}>
                  <span className={styles.checkIcon}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  <span className={styles.highlightText}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Experience;
