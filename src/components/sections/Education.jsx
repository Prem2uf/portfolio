import React, { memo } from 'react';
import styles from './Education.module.css';
import { education } from '../../utils/data';

const Education = memo(function Education() {
  return (
    <div className={styles.education}>
      <div className={styles.header}>
        <span className={styles.sectionTag}>Education</span>
        <h2 className={styles.title}>Academic Journey</h2>
      </div>

      <div className={styles.timeline}>
        {education.map((edu, idx) => (
          <div key={idx} className={styles.timelineItem}>
            <div className={styles.timelineLine}>
              <div className={styles.dot}></div>
              {idx < education.length - 1 && <div className={styles.connector}></div>}
            </div>
            <div className={styles.card}>
              <div className={styles.cardContent}>
                <h3 className={styles.degree}>{edu.degree}</h3>
                <p className={styles.school}>{edu.school}</p>
                <div className={styles.meta}>
                  <span className={styles.years}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    {edu.years}
                  </span>
                  <span className={styles.grade}>{edu.grade}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Education;